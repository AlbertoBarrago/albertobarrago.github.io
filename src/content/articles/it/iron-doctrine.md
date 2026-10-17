---
title: Iron Doctrine: multiplayer online deterministico con un motore ECS condiviso
date: 2026-08-31
tags: typescript, game-dev, multiplayer, ecs, pnpm
label: traduzione AI da un testo scritto dall’autore
---

**Iron Doctrine** è un gioco di strategia in tempo reale che sto costruendo in un monorepo pnpm, con un motore ECS deterministico al centro e, da questa settimana, una modalità online 1v1 funzionante.

## L’architettura

Il repository è diviso in `packages/` e `apps/`:

- **packages/shared**: il protocollo di rete (`ClientMessage`/`ServerMessage`), tipi e costanti condivisi (`SIM_HZ`, `DEFAULT_INPUT_DELAY`) e il `LockstepCoordinator`
- **packages/engine**: un motore di simulazione ECS deterministico (entità/comandi/sistemi), che espone `Simulation.step()`/`enqueue()`, senza alcuna dipendenza dal rendering o dalla rete
- **apps/client**: React + Pixi.js, interamente nel browser
- **apps/server**: un host WebSocket Node/`ws` che inoltra i comandi senza simulare nulla

## Il gioco locale: il game loop

`GameRenderer` (una grande classe che gestisce rendering, input e audio) gestisce un `SimBridge`, che a sua volta gestisce il Web Worker in cui gira la `Simulation`. Il worker avanza con un clock autonomo (`setTimeout`), applica i comandi appena arrivano e produce uno snapshot per tick, che il thread principale interpola e disegna.

## Il passaggio online

L’aggiunta di questa settimana: partite 1v1 in rete basate sul modello deterministico lockstep.

1. **apps/server** esegue un singolo `MatchRelay` in memoria per processo. Non simula nulla: assegna ciascun comando in arrivo a un tick futuro e ritrasmette lo stesso insieme di comandi confermati a entrambi i client ogni `SIM_DT_MS`. La simulazione è deterministica perché entrambi i client eseguono lo stesso motore sullo stesso flusso di comandi.
2. **NetworkClient** comunica con il server via WebSocket, traduce i tick confermati e li passa a un secondo tipo di bridge, `NetworkedSimBridge`, che implementa la stessa interfaccia `SimBridgeLike` di quello locale, con due differenze: i comandi locali vanno al server (`sendCommand`) invece che direttamente al worker, e il worker avanza di un solo tick quando arriva una conferma dalla rete (`networkTick`), invece di procedere autonomamente.
3. **Il problema “sei sempre il giocatore 0”**: buona parte dell’interfaccia e dell’HUD assumeva che l’utente locale fosse il giocatore 0. L’ho risolto con `playerPerspective.ts`, un modulo puro che scambia le etichette `owner`/`player`/`winner` (0↔1) solo al confine con la rete, così ogni client continua a considerarsi internamente il giocatore 0.
4. `GameRenderer` ora riceve il bridge nel costruttore (locale o di rete) invece di istanziarlo sempre da sé. Quel singolo punto di iniezione ha reso possibile il resto della modalità online senza riscrivere le circa 1700 righe della classe.

## Perché questa scelta

Mantenere la simulazione deterministica e indipendente dalla rete in `packages/engine` significa usare lo stesso codice per schermaglie, campagna e gioco online. Il server non deve mai conoscere lo stato del gioco: fornisce soltanto il riferimento temporale comune con cui ordinare i comandi. Il compromesso è che entrambi i client devono produrre risultati identici bit per bit a partire dagli stessi input. Per questo l’intero modello di rete si basa sulla riproduzione dei comandi, non sulla sincronizzazione dello stato.

## I prossimi passi

L’1v1 funziona; ora tocca gestire le riconnessioni e verificare che il modello lockstep regga con il jitter di una rete reale, non solo su localhost.
