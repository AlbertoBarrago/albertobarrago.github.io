---
title: Il problema non è quanto codice scrive l'AI. È quanto ne comprendiamo.
date: 2026-11-13
tags: opinion, ai, agents, engineering
label: testo originale dell’autore, refusi corretti con AI
---

*Una riflessione sull'AI nello sviluppo software, sul rischio di perdere competenze e su cosa significhi davvero essere sviluppatori oggi.*

Ho letto [Is There a Right Amount of AI?](https://coyotetracks.org/blog/right-amount-of-ai/) su Coyote Tracks. È un articolo che solleva questioni legittime sull'utilizzo dell'intelligenza artificiale nello sviluppo software: qualità del codice, perdita di competenze, debito tecnico e responsabilità.

Condivido molte delle preoccupazioni espresse dall'autore. Ma credo che ci sia un punto sul quale valga la pena ragionare diversamente.

**Non penso che il problema sia quanto codice generiamo con l'AI. Penso che il problema sia quanto di quel codice siamo ancora capaci di comprendere, valutare e mantenere.**

## Scrivere codice non è mai stato il vero obiettivo

Per anni abbiamo misurato, almeno implicitamente, la produttività degli sviluppatori attraverso la loro capacità di produrre codice.

Più velocemente implementavi una funzionalità, più eri considerato produttivo.

Ma scrivere codice è soltanto una parte del nostro lavoro.

Prima ancora di aprire un editor dobbiamo comprendere un problema, individuare i vincoli, valutare compromessi, progettare soluzioni e prevedere cosa potrebbe andare storto.

Il codice è la rappresentazione concreta di queste decisioni.

Se un agente AI riesce a produrre quella rappresentazione più velocemente di me, perché dovrei necessariamente considerarlo un problema?

La domanda diventa un'altra: **sono ancora io a prendere le decisioni?**

## Il rischio del de-skilling è reale

Su questo punto concordo con l'autore.

Delegare continuamente attività che non comprendiamo può portarci a perdere competenze, o a non svilupparle affatto.

Se chiediamo a un agente di implementare un sistema di autenticazione senza comprendere sessioni, token, revoca e gestione degli errori, abbiamo un problema.

Se accettiamo una modifica soltanto perché i test passano, senza capire quali comportamenti quei test coprano, abbiamo un altro problema.

Ma non credo che la soluzione sia necessariamente scrivere più codice manualmente.

Credo sia **mantenere attivo il processo di ragionamento**.

Uno sviluppatore può scrivere personalmente migliaia di righe senza comprendere davvero l'architettura complessiva. Un altro può farne generare la maggior parte e conoscere perfettamente ogni decisione importante.

La quantità di codice digitato non è una misura affidabile della competenza.

Naturalmente, questo non significa che leggere un diff equivalga sempre a saper implementare ciò che contiene. Le competenze pratiche richiedono esercizio, e delegare sistematicamente attività che non abbiamo mai imparato a svolgere può renderci dipendenti dagli strumenti.

È un rischio da riconoscere, non da ignorare.

## Da autore del codice a responsabile del sistema

Negli ultimi tempi il mio modo di sviluppare è cambiato parecchio.

Uso quotidianamente agenti AI. Scrivo meno codice direttamente e passo molto più tempo a leggere diff, verificare implementazioni, ragionare sulle architetture e individuare comportamenti inattesi.

All'inizio questa transizione mi sembrava rischiosa.

Oggi la considero un'evoluzione del mio modo di lavorare, non una rinuncia al ruolo di sviluppatore.

Ma c'è una condizione fondamentale: non posso permettermi di diventare un semplice approvatore automatico delle modifiche proposte dagli agenti.

Devo continuare a chiedermi:

- Perché è stata scelta questa soluzione?
- Quali alternative sono state scartate?
- Cosa succede quando un servizio non risponde?
- Questa modifica introduce dipendenze inutili?
- Quali regressioni potrebbero sfuggire ai test?
- Sarò in grado di intervenire quando qualcosa si romperà in produzione?

Se non so rispondere, il fatto che il codice funzioni oggi non è sufficiente.

E se non riesco a spiegare una decisione architetturale senza chiedere nuovamente all'agente, probabilmente non ho ancora compreso abbastanza quella parte del sistema.

## Il codice generato non è codice verificato

Un altro punto sul quale concordo con l'articolo riguarda il debito tecnico.

Gli agenti possono produrre codice ridondante, introdurre astrazioni inutili, duplicare funzionalità esistenti e risolvere problemi locali creando inconsistenze globali.

A volte lo fanno con una sicurezza sorprendente.

Ma qui emerge una distinzione importante: **generazione e validazione sono due responsabilità diverse**.

Possiamo delegare la prima molto più facilmente della seconda.

Un test verde non dimostra che un'architettura sia corretta. Un diff apparentemente pulito non garantisce che non siano state introdotte regressioni. E una spiegazione convincente dell'agente non costituisce una verifica indipendente.

Servono contratti chiari, test significativi, osservabilità, review e, soprattutto, qualcuno capace di mettere in discussione il risultato.

Questo non elimina gli errori, ma rende il processo controllabile.

## Non tutto deve essere delegato

Non sostengo che utilizzare più AI sia necessariamente meglio.

Ci sono attività che preferisco svolgere personalmente, altre nelle quali voglio sperimentare, altre ancora che delego senza particolare esitazione.

A volte scrivo codice semplicemente perché voglio comprendere meglio una tecnologia.

Altre volte lascio che un agente produca un'implementazione e mi concentro sui vincoli e sulla sua correttezza.

Non vedo una contraddizione.

Il problema nasce quando la delega diventa automatica, indipendentemente dalla complessità, dal rischio o dalla nostra capacità di valutare il risultato.

E vale anche il contrario: rifiutare uno strumento soltanto per preservare una modalità di lavoro non garantisce maggiore qualità.

## La responsabilità non si delega

Le questioni etiche sollevate dall'articolo meritano una discussione autonoma.

Il consumo di risorse, il copyright, l'impatto economico sugli sviluppatori indipendenti e la concentrazione di potere nelle aziende che producono modelli non scompaiono perché utilizziamo l'AI in modo competente.

Sono problemi reali, che non possiamo liquidare con un semplice aumento della produttività.

Ma sul piano strettamente ingegneristico credo che il principio fondamentale rimanga invariato.

Se distribuisco un'applicazione, ne sono responsabile.

Non importa se una funzione è stata scritta da me, suggerita da un collega, copiata da una documentazione o generata da un modello.

Se introduce una vulnerabilità, perde dati o smette di funzionare, non posso attribuire la responsabilità allo strumento che l'ha prodotta.

L'AI può aiutarmi a costruire il software.

Non può assumersi la responsabilità delle mie decisioni.

## La vera domanda

Forse tra qualche anno scriveremo manualmente soltanto una piccola parte del codice che distribuiamo.

Forse continueremo a scriverne molto più di quanto immaginiamo.

Non credo sia questo il punto decisivo.

La nostra professione è già cambiata molte volte. Abbiamo introdotto linguaggi di alto livello, framework, librerie, generatori, strumenti di automazione e infrastrutture che nascondono complessità enormi.

Ogni astrazione ci ha permesso di smettere di occuparci direttamente di alcuni dettagli, ma ci ha anche richiesto nuove competenze.

L'AI potrebbe rappresentare un cambiamento più profondo, perché non automatizza soltanto operazioni ripetitive: partecipa alla costruzione delle soluzioni e propone decisioni tecniche.

Proprio per questo dobbiamo essere ancora più rigorosi nel valutarle.

Non voglio misurare la mia competenza contando le righe di codice che ho scritto personalmente.

Voglio misurarla attraverso la mia capacità di comprendere un sistema, modificarlo, individuare i suoi limiti e assumermi la responsabilità del suo funzionamento.

**Il rischio non è smettere di digitare codice.**

**Il rischio è smettere di saperlo giudicare.**

---

*Una risposta a [Is There a Right Amount of AI?](https://coyotetracks.org/blog/right-amount-of-ai/), pubblicato su Coyote Tracks.*
