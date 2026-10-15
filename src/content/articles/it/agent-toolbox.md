---
title: Una piccola cassetta degli attrezzi per Claude Code
date: 2026-10-13
tags: ai-agents, claude-code, developer-tools, opensource
label: Traduzione AI, rivista dall’autore
---

Quando lavoro con un agente di coding, scrivere codice è solo una parte del lavoro.

Prima di modificare un repository, voglio capire su cosa potrebbe incidere la modifica. Quando uso una libreria, voglio leggerne la documentazione, soprattutto se non la conosco bene. E prima di considerare il lavoro finito, voglio un modo concreto per verificarlo.

Queste esigenze mi hanno portato a costruire tre progetti: **Themis, Serval e Telemaco**.

Li ho sviluppati separatamente, ma credo che abbiano senso insieme. Ognuno affronta una parte del lavoro che chiedo a un agente di fare.

L’idea è semplice: installare gli strumenti, renderli disponibili a Claude Code e dirgli quando usare ciascuno.

## Themis: definire cosa significa “finito”

Una richiesta in linguaggio naturale lascia spazio all’interpretazione. Anche un codice che funziona può risolvere un problema diverso da quello che avevo in mente.

Themis parte da una specifica con decisioni e criteri di accettazione. Organizza il lavoro degli agenti intorno a un ciclo di verifica. Approvo il piano e i test di accettazione; a quel punto i test vengono bloccati e un verificatore controlla il risultato.

Claude Code è attualmente l’adapter supportato per gli agenti. Themis ne gestisce le invocazioni ed esegue direttamente la verifica. Il progetto è ancora nelle prime fasi di sviluppo e, per ora, si installa dai sorgenti.

Codice: [github.com/AlbertoBarrago/themis](https://github.com/AlbertoBarrago/themis).

## Serval: capire l’impatto di una modifica

Prima di toccare un file, la domanda è: cosa dipende da questo codice?

Serval analizza un repository in locale, combinando dipendenze, cronologia Git, configurazione CI e regole per le aree critiche. Produce una stima del rischio insieme ai segnali su cui si basa.

Posso chiedere a Claude di usare quell’analisi per individuare i moduli da leggere e le verifiche da eseguire. Il punteggio è un indicatore: non garantisce che una modifica sia sicura e non predice un guasto con certezza. Aiuta a decidere dove prestare attenzione.

Codice: [github.com/AlbertoBarrago/serval](https://github.com/AlbertoBarrago/serval).

## Telemaco: consultare il web mentre si lavora

Quando una modifica dipende dal comportamento di una libreria o da un’API esterna, voglio che l’agente consulti le fonti.

Telemaco è un motore browser headless in Rust, pensato per lo scraping e gli agenti AI. Offre una CLI e un server MCP per accedere alle pagine ed estrarne i contenuti.

In questo workflow può aiutare Claude a recuperare documentazione e informazioni dal web. L’agente deve comunque valutare quelle informazioni, citare le fonti e distinguere ciò che ha verificato da ciò che ha dedotto.

Codice: [github.com/AlbertoBarrago/telemaco](https://github.com/AlbertoBarrago/telemaco).

## Una richiesta, tre strumenti

Sono strumenti separati, installati e configurati individualmente. Una volta disponibili, il punto di partenza può essere una normale richiesta a Claude Code.

Per esempio, questo è il tipo di istruzione che gli darei:

> Devo aggiungere il rinnovo dei token di autenticazione.
>
> Per prima cosa, usa Serval per analizzare i file coinvolti e quelli che dipendono da loro. Se ti servono informazioni sulle librerie interessate, usa Telemaco per consultare la documentazione ufficiale e riportare le fonti.
>
> Usa Themis per preparare la specifica, il piano e i test di accettazione. Fermati ai passaggi che richiedono approvazione. Dopo la mia approvazione, esegui il lavoro attraverso il suo ciclo di verifica.
>
> Alla fine, mostrami il diff, i risultati delle verifiche e gli eventuali limiti rimasti.

È un esempio di come voglio comporre gli strumenti. Per rendere ripetibile il workflow, gli agenti che fanno il lavoro devono avere sia le istruzioni sia l’accesso agli strumenti. Installare un eseguibile, da solo, non basta a definire quel workflow.

Themis gestisce il ciclo di esecuzione e verifica. Serval e Telemaco forniscono informazioni che possono orientare la specifica, il piano e l’implementazione. Il loro uso deve essere previsto nelle istruzioni degli agenti coinvolti.

## Perché metterli insieme?

Come progetti singoli, descrivono tre problemi diversi. Insieme descrivono un modo di lavorare: capire l’impatto, consultare le fonti, definire il risultato atteso e verificarlo.

Mi piace questa composizione perché ogni strumento mantiene una responsabilità chiara. Posso usarli insieme oppure scegliere solo quello che mi serve.

È questa la cassetta degli attrezzi che voglio costruire intorno a Claude Code: strumenti concreti, istruzioni precise per usarli e decisioni e verifiche visibili dietro al lavoro.
