---
title: GitLab Alert: le attività GitLab che ti riguardano, nella barra dei menu
date: 2026-09-16
tags: swift, macos, gitlab, menubar, opensource
label: traduzione AI da un testo scritto dall’autore
---

**GitLab Alert** è un’app per la barra dei menu di macOS che porta nell’angolo dello schermo le attività GitLab che richiedono la tua attenzione, senza dover aprire una scheda del browser: merge request in attesa della tua revisione, merge request che hai aperto, issue assegnate a te e stato delle pipeline dei progetti che segui. Nessuna icona nel Dock, nessuna finestra da gestire, nessuna scheda da dimenticare.

Funziona con GitLab.com e con le istanze self-managed, è gratuita e ha licenza MIT.

## Una scheda del browser non è un buon posto per le notifiche

Ogni giorno facevo così: aprivo GitLab, controllavo le richieste di revisione e la pipeline della notte, chiudevo la scheda e me ne dimenticavo. Due ore dopo, ricominciavo.

Una scheda ti mostra tutto o niente e non ricorda quello che hai già visto. Le notifiche email di GitLab hanno il problema opposto: arrivano continuamente, arrivano per cose che non ti interessano e dopo una settimana le filtri in una cartella che non apri mai.

Quindi il perimetro era volutamente ristretto:

- **Solo le attività che mi riguardano.** Merge request di cui sono assegnatario, revisore o autore. Issue assegnate a me. L’ultima pipeline dei progetti inclusi.
- **Notificare i cambiamenti, non lo stato.** Una pipeline fallita genera una notifica una volta, quando fallisce, non a ogni controllo per i tre giorni successivi.
- **Sola lettura, per costruzione.** Il token viene richiesto con `read_api` e nient’altro. L’app non può approvare una merge request o chiudere un’issue, perché non ha il permesso di farlo.
- **Offline è uno stato, non un errore.** Se manca la rete, l’ultima dashboard valida resta sullo schermo invece di sparire.

## Tre interfacce, tre compiti

L’app usa la modalità accessoria di macOS: nessuna icona nel Dock. La sua unica presenza fissa sullo schermo è l’icona nella barra dei menu. Tutto il resto viene creato solo quando serve ed eliminato alla chiusura.

**Il popover** serve per dare un’occhiata. Un clic sinistro sull’icona mostra richieste di revisione, merge request che hai aperto, issue assegnate e attività dei repository, con un massimo di cinque righe per sezione espansa. Risponde a “c’è qualcosa?” in meno di un secondo e, se c’è, “vedi tutto” ti porta al passo successivo.

**La finestra di dettaglio** è lo spazio di lavoro vero e proprio. Dalla barra laterale scegli quali dati visualizzare; nella tabella li filtri e li ordini; nel pannello dei dettagli leggi per intero l’elemento selezionato e “apri su GitLab” ti manda al browser quando devi finalmente fare il lavoro. Un clic su una notifica apre questa finestra sull’elemento giusto: l’app conserva l’identificatore dell’elemento da selezionare e lo usa non appena la vista ha caricato i dati, così anche una notifica cliccata ad app chiusa arriva dove deve.

**Le impostazioni** contengono l’origine (protocollo, host e porta) dell’istanza, il token, le notifiche e la selezione dei repository. Di default vengono inclusi i progetti di cui sei membro, attivi negli ultimi 90 giorni, escludendo i fork: di solito va bene, qualche volta no. Il pannello Repository permette di cercare nell’intero catalogo e includere o escludere singoli progetti a mano.

## Essere silenziosa è una funzionalità, e ha richiesto lavoro

Basta una scelta sbagliata perché un’app che fa polling e manda notifiche diventi rumore da silenziare. Per evitarlo, ho fatto tre scelte.

**Il primo aggiornamento è silenzioso.** Una nuova installazione usa il primo ciclo riuscito come punto di partenza per le notifiche, senza notificare nulla. Altrimenti il primo avvio scaricherebbe dodici notifiche su merge request che ignori da una settimana, e chiuderesti l’app prima che abbia dimostrato di essere utile.

**Lo stato viene scritto prima di inviare le notifiche.** Lo snapshot, i riferimenti usati per distinguere gli eventi nuovi da quelli già elaborati e il relativo registro delle attività vengono salvati in un’unica scrittura dello stato, e solo dopo partono le notifiche. Un crash nel momento sbagliato non può riproporre al prossimo avvio la pipeline fallita ieri.

**Lo stato di lettura è locale ed esplicito.** Aprire il popover non segna nulla come visto. Espandere una sezione non segna nulla come visto. Sei tu a segnare le righe, e questo cambia solo la presentazione locale: l’app non chiude, conferma o aggiorna mai nulla su GitLab. L’elenco degli identificatori degli elementi già visti ha una dimensione limitata e viene salvato su disco, così un elemento che hai archiviato resta tale tra un avvio e l’altro, mentre un evento successivo sullo stesso elemento riceve un identificatore distinto e compare come nuovo evento non letto.

## Un polling che si comporta bene sul server di qualcun altro

Le istanze GitLab self-managed sono spesso macchine piccole, che qualcuno del team infrastruttura mantiene oltre alle proprie mansioni ordinarie. Un’app che le martella ogni 30 secondi è un’app che viene bloccata.

Un singolo actor, `PollScheduler`, gestisce l’intero ciclo. Serializza i cambiamenti del ciclo di vita e unisce un aggiornamento manuale a uno automatico, così non c’è mai più di un ciclo di rete in corso, per quanto tu prema con entusiasmo il pulsante di aggiornamento. Sospensione, spegnimento dello schermo e cambiamenti di sessione arrivano da AppKit e gli vengono inoltrati. Raggiungibilità della rete, stato energetico e apertura del popover determinano insieme l’intervallo prima del prossimo controllo: un portatile sospeso e a batteria non ha bisogno di fare polling.

Durante un ciclo, le richieste indipendenti vengono eseguite in parallelo, gli endpoint degli elenchi seguono correttamente la paginazione di GitLab invece di leggere la prima pagina e sperare, e i controlli delle pipeline per progetto girano in un task group con concorrenza limitata. Il client rispetta `Retry-After`. Se raggiunge il rate limit, attende prima di inviare altre richieste. Dimensione delle pagine e concorrenza delle pipeline sono configurabili nelle impostazioni, entro limiti sicuri, perché i numeri giusti per gitlab.com non sono quelli giusti per un’istanza self-managed con 40 utenti.

## Come è organizzato il codice

Due moduli, e la separazione è anche la strategia di test.

`GitLabKit` è un pacchetto SwiftPM locale senza alcuna dipendenza dall’interfaccia: client REST v4, modelli, archivi su Portachiavi e file, rate limiting e un motore senza effetti collaterali che rileva le differenze nelle attività che confronta gli snapshot precedente e attuale. `GitLabAlert` è il contenitore: ciclo di vita AppKit, elemento nella barra dei menu, viste SwiftUI, impostazioni, notifiche. Le viste parlano con un `AppModel` sul main actor e con nient’altro, così nessuna vista crea mai un client di rete o scrive stato persistente, e `AppDelegate` costruisce l’intero grafo delle dipendenze.

Poiché la logica interessante è in un pacchetto senza viste, i test coprono mapping delle API, gestione degli errori del Portachiavi tramite implementazioni di test degli archivi, aggiornamenti concorrenti, cancellazione, sostituzione dell’account, navigazione dalle notifiche e stato di lettura persistente. L’interfaccia nella barra dei menu mantiene comunque una checklist di QA manuale, che è la risposta onesta.

Cambiare l’origine GitLab viene trattato come un confine tra account, non come una preferenza. L’app annulla il lavoro in corso, ferma lo scheduler e ne azzera lo stato, elimina il vecchio token e crea un nuovo client. Solo allora accetta il token del nuovo account. Le risposte arrivate in ritardo sono associate a un identificatore di revisione e non possono far riapparire nel nuovo account i dati del precedente.

Il token vive nel Portachiavi, non raggiunge mai una vista e viene inviato nell’header `PRIVATE-TOKEN` solo all’origine configurata. I file di stato contengono i dati della dashboard e nessuna credenziale, scritti atomicamente con permessi riservati al proprietario. Nessun tracciamento d’uso, nessun servizio di terze parti a runtime.

## Stato del progetto

In sviluppo attivo. Le release sono firmate con l’identità stabile del progetto, ma non notarizzate da Apple, quindi il primo avvio richiede un passaggio in **Privacy e sicurezza → Apri comunque**. Il README lo spiega, insieme alla compilazione dai sorgenti via SwiftPM (non c’è un `.xcodeproj` e Xcode non è necessario). Le istanze GitLab ospitate sotto un sottopercorso dell’URL non sono ancora supportate.

Il repository è su [github.com/AlbertoBarrago/gitlab-alert](https://github.com/AlbertoBarrago/gitlab-alert), con la pagina del prodotto su [albz.it/gitlab-alert](https://albz.it/gitlab-alert/). Se trova posto nella tua barra dei menu, una stella su GitHub fa piacere.
