---
title: Da Ollama ad Azure OpenAI in un giorno, tutto scriptabile
date: 2026-11-20
tags: ai, rag, azure, infrastructure-as-code, ai-agents
label: Testo assistito da AI, rivisto dall’autore
---

*Note da una migrazione: un assistente RAG costruito e misurato in locale, portato sui modelli cloud di un grosso cliente senza creare niente a mano nel portale.*

Per mesi l'assistente ha girato sul mio Mac: Ollama, bge-m3 per gli embedding, gemma3:12b per la chat, un indice Elasticsearch e un set di valutazione da 50 domande. Poi è arrivato il momento di portarlo sui modelli Azure del cliente, con una consegna di tre righe: entra, creati quello che serve, se non hai i permessi avvisa. E rendi tutto scriptabile e replicabile.

L'ultima frase si è rivelata la più importante. Ecco cosa ho imparato in una giornata.

## Prima la ricognizione, in sola lettura

Prima di creare qualsiasi risorsa ho passato un'ora con la Azure CLI a guardare e basta: ruoli, sottoscrizione, provider registrati, catalogo dei modelli e quote nelle regioni UE.

Prima sorpresa: si entra come ospite nel tenant del cliente, e il portale mostra la tua directory di casa. "Non si vede nulla" finché non cambi directory.

Seconda sorpresa, quella che conta: i modelli scelti qualche settimana prima erano ancora in catalogo, ma senza una quota attivabile. Solo batch. Il piano è cambiato prima di scrivere una riga, e due modelli più recenti hanno preso il loro posto: gpt-5.4-mini come principale, gpt-5.5 per il confronto.

Fatta dopo, la stessa scoperta avrebbe voluto dire rifare il lavoro. E l'esplorazione a mano è diventata subito uno script, `discover.sh`, che chiunque può rilanciare.

## Le scelte, scritte nel codice

L'infrastruttura è in Bicep: nativo di Azure, nessun file di stato da custodire, e `what-if` per vedere cosa cambierà prima di applicarlo. Alcune decisioni volevo renderle difficili da annullare per sbaglio:

- **Dati in UE**: deployment DataZone Standard EU, così prompt e risposte restano nella zona dati europea. Il tipo Bicep accetta solo quella SKU: passare a Global richiede una modifica rivista, non una parola cambiata in un file di parametri.
- **Versioni dei modelli bloccate**, senza aggiornamenti automatici: i benchmark restano confrontabili.
- **La chiave nel Key Vault**, mai negli output del deployment, mai stampata, neanche dallo smoke test.
- **Chi ha accesso ai modelli è un elenco nel file dei parametri**, non un clic nel portale: si legge in git, con data e motivo.

Tutto passa da `deploy.sh`: what-if, conferma, applica. Rilanciarlo non cambia niente se niente è cambiato.

## Gli errori veri arrivano solo dal deploy vero

Il what-if era pulito. Il primo deploy è fallito lo stesso.

Azure dichiara l'account AI "creato" prima che sia davvero pronto, e la lettura della chiave falliva con `RequestConflict`. I modelli e il vault c'erano, il segreto no. In un primo momento ho letto quel `Failed` come un tentativo ripetuto andato a buon fine: sbagliato, e l'ho detto. La correzione è stata una dipendenza: il segreto viene scritto dopo i deployment dei modelli, quando l'account è certamente pronto. Senza, ogni ambiente nuovo, produzione compresa, si sarebbe rotto nello stesso punto.

Due intoppi minori, utili lo stesso. Una conferma `[y/N]` lanciata senza terminale riceveva fine input e usciva in silenzio: ora lo dice e suggerisce `--yes`. E due deploy partiti in parallelo: il secondo è stato rifiutato da Azure, senza danni.

## Le astrazioni scritte mesi prima ripagano

Nel backend, chat ed embedding erano già due interfacce, e il mapping dell'indice prendeva le dimensioni dal provider attivo. La migrazione è stata aggiungere due implementazioni, scelte da una proprietà di configurazione. Nessun refactor.

I dettagli che hanno contato:

- gpt-5.5 rifiuta `temperature: 0.1` e accetta solo il default: la temperatura va configurata per modello, e inviata solo se presente.
- Gli embedding di Azure hanno 3072 dimensioni contro le 1024 di bge-m3: serve un indice nuovo, e il vecchio resta per i confronti.
- I vettori restituiti vanno ordinati per `index`, non per posizione. Sui 429 si aspetta quanto dice `Retry-After`, ma solo durante il reindex: una domanda dell'utente deve fallire subito.
- Se mancano endpoint o chiave, il backend non parte. Meglio un avvio fallito che un 503 a ogni domanda.

## Misurare di nuovo, non presumere

Cambiato il modello di embedding, cambia la distribuzione dei punteggi. La soglia di pertinenza, che scarta le domande fuori tema prima che arrivino al modello, era tarata sul vecchio. L'ho rimisurata con 8 domande fuori tema ("ricetta della carbonara") e 10 in tema: tra il punteggio fuori tema più alto e quello in tema più basso c'è un varco di 0,05, e la vecchia soglia cade nel mezzo. Confermata, ma ora è un dato, non una speranza.

Poi il benchmark: le stesse 50 domande, tre giri, voto dato a mano.

| | gemma3:12b in locale | gpt-5.4-mini | gpt-5.5 |
|---|---|---|---|
| Voto | 93/100 | 95, 95, 95 | 99, 99, 99 |
| Errori gravi | almeno uno | 0 | 0 |
| Tempo mediano | circa 17 s | 1,4 s | 5,5 s |

Il dato più utile non è il punteggio, è la stabilità. Tre giri identici dicono che le risposte parziali sono difetti strutturali (recupero, prompt), non sfortuna del campionamento. Una di queste, infatti, nessun modello può risolverla: il documento giusto non arriva tra le fonti.

La scelta finale non l'ho fatta io, ed è giusto così. gpt-5.5 corregge quattro risposte parziali su cinque, ma costa circa dieci volte tanto a domanda (un paio di centesimi contro due decimi di centesimo) ed è quattro volte più lento. Qualità contro costo e velocità è una decisione del cliente: nel frattempo gpt-5.5 è il default, e cambiarlo è una riga di configurazione.

## Un secondo parere, verificato

Il diff degli script, e poi quello del backend, sono passati da un secondo modello, in sola lettura e con il divieto esplicito di eseguire comandi. Circa metà dei rilievi erano veri: un README che insegnava un comando che stampava la chiave, uno smoke test che poteva risultare verde senza aver fatto chiamate, la chiave API dentro un `toString()` generato da Lombok. Gli altri li ho scartati dopo averli verificati sul codice. Un secondo parere vale solo così.

Prima del merge, tutto il lavoro (settanta commit) è passato da una review più profonda, con Codex. Quindici rilievi, sette da bloccare il merge, nessuno di rumore. I più seri erano difetti di logica del dominio che nessun test aveva visto: contenuti marcati come non più validi finivano nell'indice come se fossero in vigore. Accanto, i classici che si scrivono in fretta: l'endpoint dell'assistente aperto a tutti i ruoli invece che agli operatori, il testo delle domande negli audit log, immagini e link nel Markdown del modello resi come HTML, una risposta salvata nel browser che sopravviveva al cambio di utente nella stessa scheda. Sette fix, sette commit separati, poi il merge. I rilievi più ampi, che toccano la correttezza delle risposte su casi complessi, sono pianificati per la fase di produzione invece che infilati in fretta.

## Il monitoraggio ripaga al primo uso

L'ultimo script legge Azure Monitor: richieste e token per modello, esiti HTTP. Al primo lancio ha mostrato quattro errori 500 sugli embedding durante il reindex: erano la causa dei due documenti mancanti nell'indice nuovo. Il provider ritentava solo sui 429, ora anche sui 5xx. Un reindex riprendibile ha recuperato i due documenti, e il nuovo indice ora corrisponde al vecchio documento per documento. Su qualche migliaio di richieste, l'errore "raro" capita.

Le stesse metriche, con il listino ufficiale, danno il costo vero della giornata: circa 5 euro in tutto, due reindex completi e tutti i benchmark compresi. Un reindex completo costa circa un euro. (Trucco della CLI: senza un `--end-time` esplicito, Azure Monitor restituisce serie vuote.)

E il "se non hai i permessi, avvisa"? Il budget mensile con gli avvisi è scritto nel Bicep, ma con i nostri ruoli Azure risponde che non possiamo leggere i prezzi. Così è diventato opzionale, e lo attiverà chi gestisce la fatturazione. Nel frattempo il tetto vero è la capacità di ogni deployment: oltre, Azure risponde 429 e non fattura.

## Il passaggio di consegne

Il backend non sa niente di Azure finché il cluster non glielo dice: tre valori di configurazione e un segreto, caricati da un meccanismo che c'era già, nessuna riga di codice da cambiare. I valori sono pronti e passano a chi gestisce la piattaforma, con due note: la chiave va nel Secret, non nella ConfigMap, e non viaggia in chat. Insieme, una guida operativa per i colleghi.

Alla domanda "quindi adesso è tutto esposto su internet?" la risposta è stata breve: solo l'endpoint del modello, protetto da chiave. Backend e dati restano dove erano, e una allowlist di IP è un rinforzo opzionale.

Resta un limite noto, scritto e non nascosto: una domanda su un singolo paragrafo di un testo molto lungo non recupera quel paragrafo. È un problema di recupero, e nessun modello lo risolve da solo.

## Cosa mi porto a casa

- Tutto quello che fai a mano nel portale è debito: se non è in uno script, il prossimo ambiente lo rifarai da capo.
- La ricognizione in sola lettura viene prima, perché può cambiare il piano.
- Il what-if non vede le corse: le trova solo il deploy vero.
- Le interfacce giuste, scritte quando non servivano, sono quelle che rendono possibile una migrazione in un giorno.
- Una review profonda prima del merge trova quello che i test non sanno cercare: la logica del dominio.
- Quando leggi male un risultato, dillo ad alta voce e correggi. Costa meno che difenderlo.
