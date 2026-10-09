---
title: Tenore: smetti di mantenere tre volte la stessa configurazione degli agenti
date: 2026-10-01
tags: programming, ai-agents, developer-tools, typescript, opensource
label: traduzione AI da un testo scritto dall’autore
---

Ho costruito **Tenore**, una CLI che prende una configurazione condivisa per gli agenti AI di coding e la compila nei loro file nativi.

Il problema è la manutenzione ordinaria. Claude Code, Codex CLI e Antigravity hanno i propri posti per istruzioni, permessi e server MCP. Appena ne usi più di uno, le stesse regole del progetto iniziano a comparire in più file.

Cambi il comando dei test, aggiungi un server, restringi un permesso: ogni copia richiede attenzione. Prima o poi ne salti una. Cambiare agente significa allora controllare se la configurazione dice ancora quello che volevi.

Tenore dà a quella configurazione una fonte di verità: una directory chiamata `.agents/`.

## La configurazione come codice sorgente

L’idea è mantenere le istruzioni in Markdown, le policy strutturate nel frontmatter YAML e generare i file che ogni agente si aspetta.

Un repository può iniziare con:

```text
.agents/
  AGENTS.md
  policy.md
  memory/
    architecture.md
```

`AGENTS.md` contiene il testo: come lavorare nel repository, quali convenzioni contano, cosa richiede più attenzione. `policy.md` descrive permessi, server MCP e override specifici per ciascun target. I file di memoria contengono note persistenti per argomento.

Tenore analizza quei sorgenti, unisce i loro ambiti e passa il risultato all’adapter di ogni target. Gli adapter producono configurazioni native, come `CLAUDE.md` o `.codex/config.toml`.

I file generati diventano così output di build che si può revisionare. Le regole condivise hanno un posto esplicito e ogni traduzione ha un punto preciso nell’implementazione.

## Un piccolo esempio

Il pacchetto npm si chiama `tenore-cli`; l’eseguibile è `tenore`. Richiede Node.js 20.12 o successivo.

```sh
pnpm add -g tenore-cli
tenore init
```

In un terminale, `tenore init` ora apre una procedura guidata. Rileva la configurazione esistente degli agenti e permette di scegliere cosa importare e per quali agenti generare i file. Propone anche di aggiornare `.gitignore` e registrare server MCP per memoria condivisa e accesso al web.

La procedura mostra un’anteprima della sincronizzazione prima di chiedere conferma. Non scrive nulla finché non confermi. Alla fine stampa i comandi equivalenti, così la configurazione può essere ripetuta in uno script.

Per una configurazione automatica, `tenore init --yes` accetta i valori predefiniti della procedura, anche senza un terminale. Altri flag, oppure una shell non interattiva senza `--yes`, usano il normale flusso a comandi. Per esempio, `tenore init --targets claude,codex` imposta gli agenti per cui generare i file.

I sorgenti generati restano modificabili. Dopo aver aggiornato `.agents/AGENTS.md`, un `.agents/policy.md` minimo potrebbe essere così:

```yaml
---
targets: [claude, codex]
permissions:
  default: ask
  allow:
    - shell: "pnpm test*"
  ask:
    - shell: "git push*"
---
```

Sono pattern di comandi: `pnpm test*` corrisponde anche ai comandi con quel prefisso, quindi il pattern dovrebbe riflettere quello che vuoi davvero consentire.

Quando cambi i sorgenti dopo la configurazione iniziale, controlla le modifiche generate prima di applicarle:

```sh
tenore diff
tenore sync
```

Quel passaggio di revisione conta. Un compilatore di configurazioni è utile solo se riesci a comprenderne l’output, soprattutto quando quell’output controlla i permessi.

Anche la configurazione esistente può essere il punto di partenza. Per un repository già configurato per Claude Code:

```sh
tenore init --import claude
tenore diff
tenore sync
```

L’importazione offre un percorso di migrazione senza trascrivere tutto a mano nella nuova struttura.

## Regole condivise, contesto locale

La configurazione ha tre ambiti: globale, repository e locale. Vengono uniti in quest’ordine.

I sorgenti globali vivono in `~/.agents/`, quelli del repository in `.agents/` e quelli specifici della macchina in `.agents/local/`. L’inizializzazione aggiunge l’ambito locale alle regole di esclusione di Git. La configurazione globale viene inclusa esplicitamente con `--global`.

`tenore init --global` porta la stessa procedura guidata nella configurazione personale. Può importare le impostazioni globali esistenti degli agenti in `~/.agents/` e mostra il diff completo prima di scrivere le modifiche.

Le regole di unione distinguono i diversi tipi di dati. Istruzioni e memoria vengono combinate nell’ordine degli ambiti. Le liste vengono deduplicate. Le impostazioni scalari prendono generalmente il valore dell’ambito più ristretto.

I permessi richiedono una gestione più rigorosa: deny prevale su ask, che prevale su allow. Un allow a livello di repository non può annullare un deny globale. Le regole scartate durante l’unione producono avvisi.

Questo permette a un progetto di aggiungere contesto mantenendo le restrizioni definite in un ambito più ampio.

## Memoria condivisa e accesso al web

I file di memoria ora possono essere letti e aggiornati attraverso il server MCP di Tenore. Basta registrarlo una volta in `.agents/policy.md`:

```yaml
mcp:
  tenore-memory:
    command: npx
    args: ["-y", "tenore-cli", "mcp"]
```

Dopo `tenore sync`, ogni agente selezionato riceve la configurazione del server. Espone strumenti per elencare, leggere, cercare e scrivere gli argomenti di memoria, mantenendo le note persistenti nella stessa directory condivisa. Le scritture sono limitate alle directory di memoria. Quando un agente crea un nuovo argomento, esegui di nuovo `tenore sync` per includerlo nei file generati.

L’accesso al web può seguire un approccio simile. Tenore permette di dichiarare una volta un server MCP web e tradurne la configurazione per ogni agente. L’esempio documentato usa [Telemaco](https://github.com/AlbertoBarrago/telemaco), ma si può usare un altro server MCP web o browser.

Qui conta una distinzione: `network: none` disabilita l’accesso web nativo degli agenti, mentre i server MCP restano separati. L’accesso attraverso quei server è governato da regole esplicite sui permessi MCP. Questo permette di usare un server web condiviso chiedendo conferma per i suoi strumenti.

## Anche i file generati vanno protetti

Le persone modificano i file direttamente. Anche gli strumenti. Un generatore deve tenerne conto prima di sovrascrivere una configurazione esistente.

Tenore registra gli hash degli artefatti generati in `.agents/.lock`. Se un file generato cambia dopo una sincronizzazione, quella successiva rileva la divergenza e lo salta. I file esistenti che Tenore non gestisce vengono trattati come conflitti finché non vengono importati.

Per la CI c’è:

```sh
tenore check
```

Termina con esito negativo in presenza di sorgenti non validi, divergenze, conflitti o modifiche generate ancora da applicare. La coerenza della configurazione ha così un controllo accanto al resto delle verifiche del repository.

Se smetti di usare un agente come target, Tenore segnala i suoi vecchi file generati come orfani e li mantiene per default. `tenore sync --prune` li rimuove solo se non sono stati modificati.

## Dove la portabilità si complica

Gli adapter attuali coprono Claude Code, Codex CLI e Antigravity, ma i loro modelli di permessi sono diversi. Un formato sorgente comune non può far sparire quelle differenze.

La policy documentata di Tenore è produrre un mapping più restrittivo con un avviso quando non è disponibile una traduzione esatta. Alcune funzionalità richiedono una gestione esplicita: i mapping del filesystem di Codex richiedono l’attivazione dei profili di permessi, mentre i permessi di Antigravity vengono configurati nell’ambito utente.

Questi limiti fanno parte della revisione della configurazione generata. Le istruzioni condivise non possono nemmeno garantire comportamenti identici degli agenti; rendono coerenti e più facili da mantenere le regole desiderate.

Il progetto è ancora in corso. La misura utile è capire se cambiare una regola diventa più facile da controllare e trasferire tra gli strumenti che usi.

Tenore è scritto in TypeScript e pubblicato con licenza MIT. Il [repository](https://github.com/AlbertoBarrago/tenore) contiene sorgenti e istruzioni di configurazione; il [riferimento sui mapping](https://github.com/AlbertoBarrago/tenore/blob/main/docs/mapping.md) documenta le decisioni di traduzione. Puoi installarlo da [npm](https://www.npmjs.com/package/tenore-cli).
