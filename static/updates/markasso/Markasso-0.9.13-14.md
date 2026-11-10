# Markasso 0.9.13

- Cloud boards sync more reliably: a change sent while you kept editing no longer leaves syncing stuck, a board that is not changing no longer rewrites its file every half minute, edits wait for the server after it asks to slow down, and a save whose answer was lost no longer reports a conflict with your own change. Closing a window while a change is being sent still sends the edits made meanwhile.
- A duplicate of a cloud board stays a separate board after a restart, and opening the same cloud link twice in a row opens one window.
- Clicking an existing text with the text tool keeps it open for editing instead of shrinking it. Text you were typing stays its own undo step when you then drag something, and Undo during a drag cancels the drag cleanly.
- The assistant applies changes to selected elements that have connections leaving the selection, accepts node names as you write them, removes connections to hidden elements together with a removed node, and keeps answering after a reply with nothing to say. In Settings, the model and endpoint you type are kept without pressing Return.
- The Boards window remembers its size and position, a renamed or moved board keeps one entry in the history, a template can be renamed by changing only its capitals, and icon packs appear again after a failed first load. An icon pack ZIP can no longer hide an oversized file.

- Le lavagne cloud si sincronizzano in modo più affidabile: una modifica inviata mentre continuavi a modificare non blocca più la sincronizzazione, una lavagna che non cambia non riscrive più il suo file ogni mezzo minuto, le modifiche aspettano il server quando chiede di rallentare, e un salvataggio la cui risposta è andata persa non segnala più un conflitto con la tua stessa modifica. Chiudere una finestra mentre una modifica viene inviata invia comunque le modifiche fatte nel frattempo.
- Il duplicato di una lavagna cloud resta una lavagna separata dopo un riavvio, e aprire due volte di fila lo stesso link cloud apre una sola finestra.
- Fare clic su un testo esistente con lo strumento testo lo lascia aperto per la modifica invece di rimpicciolirlo. Il testo che stavi scrivendo resta un passo di annullamento a sé quando poi trascini qualcosa, e Annulla durante un trascinamento lo interrompe in modo pulito.
- L'assistente applica le modifiche agli elementi selezionati che hanno connessioni verso l'esterno della selezione, accetta i nomi dei nodi come li scrivi, rimuove insieme a un nodo le connessioni verso elementi nascosti e continua a rispondere dopo una risposta vuota. Nelle Impostazioni, il modello e l'endpoint che scrivi vengono mantenuti senza premere Invio.
- La finestra Lavagne ricorda dimensione e posizione, una lavagna rinominata o spostata ha una sola voce nella cronologia, un modello si può rinominare cambiando solo le maiuscole, e i pacchetti di icone ricompaiono dopo un primo caricamento non riuscito. Uno ZIP di icone non può più nascondere un file troppo grande.

All versions and their notes: https://albz.it/updates/markasso/
Tutte le versioni con le note: https://albz.it/updates/markasso/
