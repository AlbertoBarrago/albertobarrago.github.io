---
title: wir: What Is Running, uno strumento per ispezionare porte e processi scritto in C
date: 2025-12-30
tags: c, systems-programming, cli, opensource
label: traduzione AI da un testo scritto dall’autore
---

Ho recentemente pubblicato **wir** (What Is Running), uno strumento da riga di comando scritto in C per controllare cosa gira su determinate porte e ottenere informazioni dettagliate sui processi. Un progetto nato da un’esigenza pratica, che si è trasformato in un’occasione per esplorare la programmazione di sistema in C.

## Il problema

Quante volte hai trovato una porta occupata senza sapere quale processo la stesse usando? O hai dovuto risalire la gerarchia di un processo per capire chi avesse avviato cosa? Di solito ricorriamo a combinazioni di `lsof`, `netstat` e `ps`, ma perché non avere tutto in un solo comando?

## La soluzione

`wir` è uno strumento multipiattaforma (macOS e Linux) che permette di:

- Scoprire quale processo usa una determinata porta
- Ottenere informazioni dettagliate su un PID
- Visualizzare l’intera catena dei processi padre
- Elencare tutti i processi in esecuzione
- Vedere le variabili d’ambiente di un processo
- Produrre output normale, breve, JSON o ad albero
- Ricevere avvisi di sicurezza per configurazioni potenzialmente rischiose

## Esempi pratici

```bash
# Who's using port 8080?
wir --port 8080

# Info about a specific process
wir --pid 1234

# Show the process ancestry tree
wir --pid 1234 --tree

# JSON output for scripting
wir --port 3000 --json

# List all processes (short format)
wir --all --short

# Security warnings only
wir --port 8080 --warnings
```

## L’architettura

Il progetto è strutturato in modo modulare:

- **Livello di astrazione della piattaforma**: gestisce le differenze tra Linux (parsing di `/proc`) e macOS (`libproc` e `sysctl`)
- **Formattazione dell’output**: supporta diverse modalità di visualizzazione senza duplicare la logica
- **Gestione coerente degli errori**: ogni allocazione viene controllata, ogni risorsa viene liberata
- **Gestione rigorosa della memoria**: niente leak, niente comportamento indefinito

## Cosa ho imparato

Scrivere `wir` è stata un’ottima occasione per mettere in pratica concetti fondamentali:

1. **Programmazione di sistema**: interazione con `/proc`, chiamate di sistema, gestione dei processi
2. **Sviluppo multipiattaforma**: compilazione condizionale e API diverse per ogni sistema operativo
3. **Sicurezza della memoria in C**: gestione manuale della memoria senza garbage collector
4. **Sistemi di build**: Makefile con rilevamento automatico della piattaforma
5. **Progettazione delle API**: un’interfaccia pulita e componibile

## Non memorizzo i comandi

Il mio approccio è questo: non mi interessa memorizzare i comandi esatti di `lsof` o `netstat`. Preferisco capire l’architettura sottostante e costruire strumenti che risolvano il problema in modo più elegante. `wir` non è solo un wrapper: è un’astrazione che nasconde la complessità delle differenze tra sistemi operativi.

## Il futuro

Il progetto si presta a diverse estensioni:

- Supporto alle porte UDP
- Filtri avanzati sui processi
- Supporto ad altri sistemi operativi (BSD, ecc.)
- Ottimizzazioni delle prestazioni
- Altri formati di output

## Provalo

[wir](https://github.com/AlbertoBarrago/wir)

È un progetto nato per imparare, quindi sentiti libero di sperimentare ed estenderlo. Costruire strumenti di sistema in C è un ottimo modo per capire cosa succede davvero sotto il cofano.

```bash
# Build and install
brew tap AlbertoBarrago/tap
brew install wir

# Start using it
wir --port 3000
```
