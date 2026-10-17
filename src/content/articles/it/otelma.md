---
title: Otelma: costruire da zero un runtime locale per LLM
date: 2026-08-31
tags: go, llm, llama-cpp, apple-silicon, ai
label: traduzione AI da un testo scritto dall’autore
---

**Otelma** è un runtime locale per l’inferenza LLM che sto costruendo in Go.

L’obiettivo è costruire qualcosa di volutamente più piccolo di Ollama: capire cosa c’è davvero tra un file GGUF e un’applicazione locale che usa un LLM, trattando la memoria unificata come una risorsa reale e finita, invece di qualcosa di cui prima o poi si occuperà il sistema operativo.

Al momento gira su Apple Silicon, usa `llama.cpp` come primo backend di inferenza ed espone sia la propria API locale sia un’interfaccia minima compatibile con OpenAI.

## L’architettura

Otelma è diviso in quattro livelli principali:

* **CLI**: `pull`, `list`, `ps`, `run`, `chat`, `serve`, `config`, `version`
* **API del runtime locale**: ciclo di vita dei modelli, scheduling, contabilizzazione della memoria ed endpoint HTTP
* **Backend di inferenza**: un’astrazione sul motore di inferenza effettivo; oggi `llama.cpp`, MLX in programma
* **Archivio dei modelli**: metadati GGUF locali, checksum, dimensioni e download da Hugging Face

Anche i comandi locali della CLI passano dall’API HTTP.

Eseguire:

`otelma run qwen2.5-0.5b "What is the capital of Italy?"`

non aggira il runtime per invocare direttamente `llama.cpp`. La CLI parla con la stessa API che userebbe un’applicazione esterna.

Se il server non è ancora in esecuzione, Otelma lo avvia automaticamente in background.

## Il ciclo di vita dei modelli come macchina a stati

Una cosa che non volevo era una gestione dei modelli nascosta dietro un insieme di booleani e controlli sui processi.

Ogni modello passa invece attraverso una macchina a stati esplicita:

`NOT_PRESENT → DOWNLOADED → LOADING → READY → BUSY → UNLOADING`

Il gestore dei modelli è responsabile di quelle transizioni.

Il runtime ha così un unico punto in cui gestire domande come:

* questo modello è davvero disponibile in locale?
* è già caricato?
* può essere usato da un’altra richiesta?
* sta generando in questo momento?
* può essere scaricato dalla memoria in sicurezza?

Il registro viene salvato su disco, così il runtime ritrova i modelli scaricati anche dopo un riavvio, senza doverli cercare di nuovo.

## La memoria unificata fa parte dell’architettura

Apple Silicon rende comoda l’inferenza locale perché CPU e GPU condividono la memoria unificata.

Significa anche che fingere che la memoria sia illimitata è una cattiva astrazione.

Su una macchina con 24 GB di memoria unificata, caricare più modelli grandi insieme può diventare molto rapidamente un problema del sistema operativo.

Otelma ha quindi un `Budget` di memoria esplicito.

Prima di caricare un modello, il gestore riserva la quantità di memoria prevista. Se questa riserva supera il limite configurato, il caricamento viene rifiutato prima che il processo di inferenza parta.

La distinzione importante è che è il runtime a decidere se c’è abbastanza memoria per caricare il modello:

`canLoad(model) → yes/no`

invece di un eventuale OOM.

Questo vincolo ha influenzato l’architettura molto più di quanto mi aspettassi all’inizio.

## llama.cpp è un backend, non il runtime

Otelma non implementa direttamente le operazioni sui tensori o l’inferenza dei transformer.

Per eseguire l’inferenza, il backend attuale avvia `llama-server` di `llama.cpp`.

Ma il resto di Otelma non lo sa.

Il runtime comunica attraverso un’interfaccia del backend che gestisce il caricamento dei modelli, il loro scaricamento dalla memoria e la generazione. `llama.cpp` è semplicemente la prima implementazione.

Questa separazione dovrebbe permettere di aggiungere in seguito un backend MLX senza cambiare la gestione dei modelli, lo scheduling, l’archivio o l’API pubblica.

Quella distinzione è stata una delle ragioni principali per costruire il progetto: un motore di inferenza e un runtime di inferenza risolvono problemi diversi.

## Compatibile con OpenAI fin dall’inizio

Otelma espone anche un sottoinsieme minimo dell’API OpenAI:

`POST /v1/chat/completions`

e:

`GET /v1/models`

L’obiettivo non è riprodurre l’intera API OpenAI.

È rendere il runtime subito utilizzabile dal software che supporta già un endpoint OpenAI personalizzato.

L’applicazione non dovrebbe aver bisogno di sapere se il modello dietro quell’endpoint gira nel cloud, tramite `llama.cpp` o, in futuro, tramite MLX.

## Pull, run, chat

Il workflow attuale è volutamente ridotto:

`otelma list`

`otelma pull qwen2.5-0.5b`

`otelma run qwen2.5-0.5b "What is the capital of Italy?"`

oppure, per una sessione interattiva:

`otelma chat qwen2.5-0.5b`

I modelli possono anche essere scaricati direttamente da Hugging Face, mentre il catalogo integrato offre un percorso più semplice, basato sul nome, per quelli conosciuti.

A questo punto l’intera pipeline funziona dall’inizio alla fine:

`pull → load → inference → unload`

con metadati persistenti dei modelli, contesto su più turni, avvio del server in background e inferenza reale.

## Perché costruirlo?

Esistono già ottimi strumenti per eseguire LLM in locale.

È proprio per questo che voglio mantenere Otelma piccolo.

Non volevo un’altra interfaccia sopra un runtime esistente. Volevo capire il runtime stesso: ciclo di vita dei modelli, gestione dei processi, riserve di memoria, scheduling, archivio, compatibilità delle API e dove dovrebbe iniziare e finire il motore di inferenza vero e proprio.

Costruire una versione essenziale rende visibili quei confini.

## I prossimi passi

Lo scheduler attuale serializza volutamente le richieste ed è ancora basato su un singolo mutex.

È sufficiente a rendere deterministico il ciclo di vita, ma è anche il prossimo limite architetturale da superare.

Poi: scheduling migliore, rimozione dei modelli, risposte in streaming e un backend MLX.

Il progetto è ancora abbastanza piccolo perché ogni astrazione abbia una ragione di esistere, e per ora voglio mantenerlo così.
