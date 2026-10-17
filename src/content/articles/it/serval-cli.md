---
title: Ho costruito una CLI per rispondere a una domanda: cosa romperà questa modifica?
date: 2026-08-27
tags: programming, devops, go, opensource
label: traduzione AI da un testo scritto dall’autore
---

Ci siamo passati tutti.

Apri un repository, modifichi un file che sembra del tutto innocuo, esegui i test e apri una pull request.

Poi qualcuno commenta:

> “Attenzione. Quel modulo è usato anche dalla pipeline di fatturazione.”

O peggio, nessuno se ne accorge.

La modifica viene integrata.

E qualcosa si rompe.

Il problema non è necessariamente il codice scritto male. In codebase grandi o poco familiari, capire la portata di una modifica è sorprendentemente difficile.

Così ho iniziato a costruire Serval.

Serval è una CLI che lavora in locale e prova a rispondere a una domanda semplice:

*Se modifico questo file, su cosa è probabile che abbia effetto?*

## Il problema

Quando voglio capire l’impatto di una modifica, di solito finisco per usare una combinazione di:

```
rg "someModule"
git log
git blame
```

Poi controllo gli import, cerco nella configurazione CI, verifico quali file cambiano di solito insieme e mi affido a quello che so del repository.

Funziona.

Ma è soprattutto lavoro manuale.

E quando il repository non lo conosci bene, finisci spesso per andare a intuito.

Volevo qualcosa di più vicino a:

```
serval inspect src/auth/token.ts
```

e ottenere:

```
Target
  src/auth/token.ts

Direct impact
  src/auth/middleware.ts

Indirect impact
  src/api/client.ts

CI
  integration-auth.yml

Git history
  7 significant changes
  3 frequently co-changed modules

Risk
  HIGH: 82/100

  +28  14 downstream modules
  +20  critical path
  +14  high historical churn
  +12  frequently co-changed modules
  +8   CI workflow affected
```

Non una previsione.

Non:

> “L’AI pensa che questa modifica potrebbe essere pericolosa.”

Elementi concreti.

## Quattro segnali invece di uno

Guardare solo gli import non basta.

Un grafo delle dipendenze può dirmi:

```
A -> B -> C
```

Se modifico C, so che B e potenzialmente A ne risentono.

Utile.

Ma i repository contengono più informazioni del loro grafo delle dipendenze.

### 1. Grafo delle dipendenze

Serval scansiona il repository e costruisce un grafo a partire dalle dipendenze native dei linguaggi.

Al momento analizza repository scritti in:

- JavaScript / TypeScript
- Go
- Python
- Java
- C

Dato un file, Serval percorre il grafo a ritroso e individua quali altri file ne dipendono.

Questo ci dice fin dove può propagarsi la modifica attraverso le dipendenze.

Ma la struttura è solo il primo segnale.

### 2. Cronologia Git

Git contiene qualcosa di sorprendentemente vicino alla memoria di una codebase.

Se due file cambiano ripetutamente insieme, è un’informazione.

Se un modulo è stato modificato di continuo negli ultimi mesi, anche quella è un’informazione.

Serval guarda quindi aspetti come:

- frequenza storica delle modifiche
- frequenza delle modifiche congiunte

Immagina due file con grafi delle dipendenze identici.

Uno non cambia da due anni.

L’altro è cambiato nove volte negli ultimi 90 giorni e cambia spesso insieme ad altri 15 moduli.

Probabilmente quei file non dovrebbero ricevere lo stesso punteggio di rischio.

### 3. Configurazione CI

C’è poi un altro grafo nascosto nella maggior parte dei repository: la CI/CD.

Una modifica può attivare test di integrazione, build, deploy o pipeline di validazione a seconda dei filtri sui percorsi.

Serval comprende attualmente la configurazione di:

- GitHub Actions
- GitLab CI
- Azure Pipelines
- Jenkins

Questo offre un altro elemento utile: quali automazioni tocca davvero questa modifica?

### 4. Percorsi critici

Alcune parti di un sistema meritano semplicemente più attenzione.

L’autenticazione non è la stessa cosa di una modifica a un README.

La logica dei pagamenti non è la stessa cosa di una modifica a una utility CSS.

Serval permette quindi di definire regole sui percorsi critici specifiche per il repository attraverso `.serval.yml`.

Di nuovo, non sta cercando di dimostrare che qualcosa si romperà.

Sta raccogliendo elementi che dicono: probabilmente dovresti guardare questa modifica con più attenzione.

## Perché il punteggio è deterministico

Questa è diventata una delle decisioni progettuali più importanti del progetto.

Sarebbe stato facilissimo inviare il contesto del repository a un LLM e chiedere:

> “Quanto è rischiosa questa modifica da 0 a 100?”

Ho scelto deliberatamente di non farlo.

Il punteggio di base prodotto da Serval è deterministico.

Lo stesso stato del repository e la stessa configurazione producono lo stesso risultato.

Soprattutto, ogni punto si può spiegare.

Qualcosa del genere:

```
Risk
  MEDIUM: 38/100

  +4   2 downstream modules
  +14  high historical churn
  +12  91 frequently co-changed modules
  +8   2 CI workflows affected
```

Non c’è un ragionamento nascosto dietro quel 38.

Puoi verificarlo.

Puoi non essere d’accordo.

Puoi cambiare la configurazione.

Ma puoi capire da dove arriva.

Per gli strumenti di ingegneria, credo che questa proprietà conti.

## Quindi… niente AI?

Non esattamente.

Serval supporta le spiegazioni AI.

Per esempio:

```
serval inspect src/auth/token.ts --explain
```

La parte interessante è il confine.

L’AI non può cambiare il punteggio.

Riceve solo l’analisi deterministica e la spiega in linguaggio naturale.

E dato che Serval lavora in locale, il provider predefinito può essere un’istanza locale di Ollama.

Si possono usare altri provider tramite CLI installate in locale, come Claude, Codex o Gemini.

Questa architettura mi piace molto più di un LLM al centro del sistema:

```
repository
    ↓
deterministic analysis
    ↓
risk model
    ↓
result
    ↓
optional AI explanation
```

Il modello spiega gli elementi disponibili. Non li inventa.

## La scelta di lavorare in locale

Serval non richiede:

- un account
- un backend SaaS
- di caricare il repository altrove
- una chiave API per le funzionalità di base

L’analisi avviene in locale.

Questo conta per gli strumenti di sviluppo, perché il repository contiene già tutto ciò che serve per la maggior parte dell’analisi:

- codice sorgente
- cronologia Git
- configurazione CI
- configurazione del repository

Perché inviare tutto altrove se possiamo calcolare la risposta in locale?

## Può diventare anche un controllo in CI

La stessa analisi può essere eseguita sul diff attuale:

```
serval diff
```

oppure produrre output leggibile dalle macchine:

```
serval diff --json
```

E questo rende possibile un altro caso d’uso:

```
serval diff --fail-on high
```

Se uno dei file modificati raggiunge il livello di rischio HIGH, Serval termina con un codice di uscita diverso da zero.

Significa che lo strumento può passare da “informazione interessante per lo sviluppatore” a “segnale deterministico nella pipeline di delivery”.

Mi interessa particolarmente esplorare questa direzione. Non come un altro quality gate che blocca gli sviluppatori a caso, ma come un modo per rendere visibile l’impatto atteso di una modifica prima del merge.

## Installazione

Serval è scritto in Go e distribuito tramite Homebrew.

```
brew install AlbertoBarrago/tap/serval
```

Poi, dentro un repository Git:

```
serval inspect path/to/file
```

oppure semplicemente:

```
serval path/to/file
```

Ci sono anche comandi per ispezionare direttamente il grafo e la cronologia:

```
serval graph path/to/file
serval history path/to/file
serval doctor
```

E dato che ho un debole per gli strumenti CLI della vecchia scuola:

```
man serval
```

esiste anche quello.

## Cosa sto cercando di esplorare

Serval è ancora giovane.

Mi interessa meno fingere che un punteggio da 0 a 100 possa prevedere magicamente se il software si romperà, e più una domanda diversa:

*Quante informazioni utili sul rischio di una modifica sono già dentro i nostri repository?*

I grafi delle dipendenze ci dicono cosa è collegato.

Git ci dice quali file sono stati modificati insieme nel corso del progetto.

La CI ci dice quali automazioni sono coinvolte.

Le regole del repository ci dicono quali aree meritano più attenzione.

Nessuno di questi segnali, da solo, è particolarmente rivoluzionario.

L’esperimento è combinarli in uno strumento piccolo, locale e spiegabile.

E forse è anche qui che l’AI si inserisce meglio in questo tipo di strumenti di sviluppo: senza sostituire l’analisi deterministica, ma aggiungendosi quando serve un ragionamento in linguaggio naturale.

Serval è open source e ha licenza MIT.

Progetto: [albz.it/serval](https://albz.it/serval/)

Codice: [github.com/AlbertoBarrago/serval](https://github.com/AlbertoBarrago/serval)

Se lavori su grandi repository, monorepo, sistemi legacy o progetti con pipeline CI articolate, mi interesserebbe soprattutto sapere quali segnali usi prima di toccare una parte della codebase che non conosci.
