---
title: GitLab Alert: il lavoro GitLab che ti riguarda, nella barra dei menu
date: 2026-09-16
tags: swift, macos, gitlab, menubar, opensource
label: traduzione AI da un testo scritto dall’autore
---

**GitLab Alert** è un’app per la barra dei menu di macOS che porta il lavoro GitLab che richiede la tua attenzione fuori da una scheda del browser e nell’angolo dello schermo: merge request in attesa della tua revisione, merge request che hai aperto, issue assegnate a te e stato delle pipeline dei progetti che segui. Nessuna icona nel Dock, nessuna finestra da gestire, nessuna scheda da dimenticare.

Funziona con GitLab.com e con le istanze self-managed, è gratuita e ha licenza MIT.

## Una scheda del browser funziona male per le notifiche

Il workflow che sostituisce era il mio, ogni giorno. Apri GitLab, controlla cosa aspetta una tua revisione, controlla se la pipeline della notte è diventata rossa, chiudi la scheda, dimentica, ripeti due ore dopo.

Una scheda ti mostra tutto o niente e non ricorda quello che hai già visto. Le notifiche email di GitLab hanno il problema opposto: arrivano continuamente, arrivano per cose che non ti interessano e dopo una settimana le filtri in una cartella che non apri mai.

Quindi il perimetro era volutamente ristretto:

- **Solo il lavoro che mi riguarda.** Merge request di cui sono assegnatario, revisore o autore. Issue assegnate a me. L’ultima pipeline dei progetti inclusi.
- **Notificare i cambiamenti, non lo stato.** Una pipeline fallita genera una notifica una volta, quando fallisce, non a ogni controllo per i tre giorni successivi.
- **Sola lettura, per costruzione.** Il token viene richiesto con `read_api` e nient’altro. L’app non può approvare una merge request o chiudere un’issue, perché non ha il permesso di farlo.
- **Offline è uno stato, non un errore.** Se manca la rete, l’ultima dashboard valida resta sullo schermo invece di sparire.

## Tre interfacce, tre compiti

L’app è un’app accessoria: nessuna icona nel Dock, e l’elemento nella barra dei menu è l’unica presenza permanente sullo schermo. Tutto il resto viene creato solo quando serve ed eliminato alla chiusura.

**Il popover** serve per dare un’occhiata. Un clic sinistro sull’icona mostra richieste di revisione, merge request che hai aperto, issue assegnate e attività dei repository, con un massimo di cinque righe per sezione espansa. Risponde a “c’è qualcosa?” in meno di un secondo e, se c’è, “vedi tutto” ti porta al passo successivo.

**La finestra di dettaglio** è lo spazio di lavoro vero e proprio. La barra laterale seleziona i dati, la tabella li filtra e li ordina, l’inspector mostra l’elemento selezionato per intero e “apri su GitLab” ti manda al browser quando devi finalmente fare il lavoro. Un clic su una notifica apre questa finestra sull’elemento giusto: l’identificatore passa attraverso una selezione in attesa che la vista risolve quando i suoi dati sono disponibili, così anche una notifica cliccata ad app chiusa arriva dove deve.

**Le impostazioni** contengono l’origine dell’istanza, il token, le notifiche e la selezione dei repository. Di default vengono inclusi i progetti di cui sei membro, attivi negli ultimi 90 giorni, escludendo i fork: di solito va bene, qualche volta no. Il pannello Repository permette di cercare nell’intero catalogo e includere o escludere singoli progetti a mano.

## Essere silenziosa è una funzionalità, e ha richiesto lavoro

Qualunque cosa faccia polling e mandi notifiche è a una decisione sbagliata dal diventare rumore da silenziare. Tre decisioni fanno gran parte del lavoro.

**Il primo aggiornamento è silenzioso.** Una nuova installazione inizializza i riferimenti delle notifiche dal primo ciclo riuscito, senza notificare nulla. Altrimenti il primo avvio scaricherebbe dodici notifiche su merge request che ignori da una settimana, e chiuderesti l’app prima che abbia dimostrato di essere utile.

**Lo stato viene scritto prima di inviare le notifiche.** Lo snapshot, i suoi riferimenti e il registro delle attività risultante vengono salvati in un’unica scrittura dello stato, e solo dopo partono le notifiche. Un crash nel momento sbagliato non può riproporre al prossimo avvio la pipeline fallita ieri.

**Lo stato di lettura è locale ed esplicito.** Aprire il popover non segna nulla come visto. Espandere una sezione non segna nulla come visto. Sei tu a segnare le righe, e questo cambia solo la presentazione locale: l’app non chiude, conferma o aggiorna mai nulla su GitLab. Gli identificatori degli elementi visti sono limitati e persistenti, così un elemento che hai archiviato resta tale tra un avvio e l’altro, mentre un evento successivo sullo stesso elemento riceve un identificatore distinto e torna non letto per la propria rilevanza.

## Un polling che si comporta bene sul server di qualcun altro

Le istanze GitLab self-managed sono spesso macchine piccole, mantenute da qualcuno dell’infrastruttura oltre al suo vero lavoro. Un’app che le martella ogni 30 secondi è un’app che viene bloccata.

Un singolo actor, `PollScheduler`, gestisce l’intero ciclo. Serializza i cambiamenti del ciclo di vita e unisce un aggiornamento manuale a uno automatico, così non c’è mai più di un ciclo di rete in corso, per quanto tu prema con entusiasmo il pulsante di aggiornamento. Sospensione, spegnimento dello schermo e cambiamenti di sessione arrivano da AppKit e gli vengono inoltrati. Raggiungibilità della rete, stato energetico e apertura del popover contribuiscono tutti al prossimo intervallo: un portatile sospeso e a batteria non ha bisogno di fare polling.

Durante un ciclo, le richieste indipendenti vengono eseguite in parallelo, gli endpoint degli elenchi seguono correttamente la paginazione di GitLab invece di leggere la prima pagina e sperare, e i controlli delle pipeline per progetto girano in un task group con concorrenza limitata. Il client rispetta `Retry-After` e aspetta il ripristino dei limiti di richieste esauriti prima di iniziare altro. Dimensione delle pagine e concorrenza delle pipeline sono configurabili nelle impostazioni, entro limiti sicuri, perché i numeri giusti per gitlab.com non sono quelli giusti per un’istanza self-managed con 40 utenti.

## Dove stanno le cose

Due moduli, e la separazione è anche la strategia di test.

`GitLabKit` è un pacchetto SwiftPM locale senza alcuna dipendenza dall’interfaccia: client REST v4, modelli, archivi su Portachiavi e file, rate limiting e un motore puro di differenze delle attività che confronta gli snapshot precedente e attuale. `GitLabAlert` è il contenitore: ciclo di vita AppKit, elemento nella barra dei menu, viste SwiftUI, impostazioni, notifiche. Le viste parlano con un `AppModel` sul main actor e con nient’altro, così nessuna vista crea mai un client di rete o scrive stato persistente, e `AppDelegate` costruisce l’intero grafo delle dipendenze.

Poiché la logica interessante è in un pacchetto senza viste, i test coprono mapping delle API, gestione degli errori del Portachiavi tramite archivi di test, aggiornamenti concorrenti, cancellazione, sostituzione dell’account, navigazione dalle notifiche e stato di lettura persistente. L’interfaccia nella barra dei menu mantiene comunque una checklist di QA manuale, che è la risposta onesta.

Cambiare l’origine GitLab viene trattato come un confine tra account, non come una preferenza. Il lavoro in corso viene annullato, lo scheduler fermato e svuotato, il token precedente eliminato e un nuovo client costruito prima di accettare il token sostitutivo. Le risposte tardive portano una revisione e non possono far riapparire nel nuovo account i dati del precedente.

Il token vive nel Portachiavi, non raggiunge mai una vista e viene inviato nell’header `PRIVATE-TOKEN` solo all’origine configurata. I file di stato contengono i dati della dashboard e nessuna credenziale, scritti atomicamente con permessi riservati al proprietario. Nessuna analytics, nessun servizio di terze parti a runtime.

## Stato del progetto

In sviluppo attivo. Le release sono firmate con l’identità stabile del progetto, ma non notarizzate da Apple, quindi il primo avvio richiede un passaggio in **Privacy e sicurezza → Apri comunque**. Il README lo spiega, insieme alla compilazione dai sorgenti via SwiftPM (non c’è un `.xcodeproj` e Xcode non è necessario). Le istanze GitLab ospitate sotto un sottopercorso dell’URL non sono ancora supportate.

Il repository è su [github.com/AlbertoBarrago/gitlab-alert](https://github.com/AlbertoBarrago/gitlab-alert), con la pagina del prodotto su [albz.it/gitlab-alert](https://albz.it/gitlab-alert/). Se si guadagna un posto nella tua barra dei menu, una stella è apprezzata.
