---
title: Telemaco: un motore browser headless in Rust, senza Chromium
date: 2026-09-04
tags: rust, browser, scraping, ai-agents, cdp, sideprojects
label: traduzione AI da un testo scritto dall’autore
---

**Telemaco** è un motore browser headless che sto costruendo in Rust. Esegue JavaScript reale tramite V8, mantiene un vero albero DOM, ha una propria pipeline di layout e rendering e comunica tramite il Chrome DevTools Protocol, così Puppeteer e Playwright si collegano senza configurazioni aggiuntive. Niente Chromium, niente WebView, niente download da 300 MB. Un eseguibile da 70 MB che parte subito e carica una pagina in circa 85 ms.

Questa è la storia di come è nato, perché esiste e quali scelte gli hanno dato forma.

## Il problema: Chromium come tassa

Per anni, “browser headless” ha significato una sola cosa: Chrome headless. Funziona, ma porta con sé un costo di cui ti accorgi solo quando aumentano i carichi.

- **Il download.** Ogni runner CI, ogni container nuovo, ogni portatile di un collega scarica circa 300 MB di Chromium. Playwright e Puppeteer rendono l’operazione indolore, ed è proprio per questo che nessuno la mette in discussione.
- **La memoria.** Una singola istanza di Chrome headless, senza fare nulla, occupa oltre 200 MB. Avviane qualcuna per fare scraping in parallelo e ti ritrovi a pianificare la RAM come nel 2010.
- **L’avvio.** Due secondi per partire prima ancora di aver caricato una pagina.
- **Il fingerprint.** Chrome headless è facilissimo da riconoscere. Se il sito da cui estrai dati usa sistemi di rilevamento, sei già in una corsa agli armamenti contro i sistemi anti-bot.

Niente di tutto questo è intrinseco al compito. Un motore browser è un parser, un DOM, un motore di layout, una pipeline di rendering e un runtime JavaScript. Chromium è un modo molto pesante di assemblare quei pezzi. Ne volevo uno più leggero.

## L’esigenza da cui è partito

Due esigenze concrete hanno guidato il progetto.

La prima: **ricerca ed estrazione efficienti dal web**. Lavoro con colleghi che passano le giornate a estrarre dati strutturati dal web, come record Salesforce, documentazione MDN e pagine di prodotti. Gli strumenti sono o un client HTTP grezzo (che non può eseguire JavaScript) o un browser completo (che è eccessivo). Mancava una via di mezzo: qualcosa che eseguisse davvero JavaScript e gestisse un DOM completo, ma abbastanza piccolo da essere trattato come un’utilità, non come un progetto infrastrutturale.

La seconda: **test end-to-end senza Chromium**. Se hai mai eseguito una suite Playwright in CI, conosci il rituale: scarica il browser, spera che i flag della sandbox siano giusti, guarda salire la memoria. Volevo la stessa interfaccia di automazione CDP, gli stessi `page.goto` e `page.evaluate`, ma con qualcosa che non richiedesse affatto l’installazione di un browser. Un singolo eseguibile che *è* il browser.

## Sulle spalle di molti progetti

Non volevo reinventare un browser da zero, e non ho dovuto farlo. L’ecosistema Rust ha messo insieme quasi tutti i pezzi senza fare troppo rumore, e ho scelto di costruire Telemaco su quei componenti.

- **I componenti di Servo**: `html5ever` per il parsing HTML, `selectors` per individuare gli elementi che corrispondono ai selettori CSS, `cssparser`, `servo_arc`. I meccanismi DOM e CSS che il browser di ricerca di Mozilla ha consolidato per anni.
- **`taffy`** per il motore di layout, una libreria flexbox/grid interamente in Rust.
- **`tiny-skia`** per la rasterizzazione e **`ab_glyph`** per il rendering dei glifi: la pipeline di rendering, anch’essa interamente in Rust.
- **V8 tramite `deno_core`** per JavaScript. V8 vero, lo stesso motore usato da Chrome, così la semantica JavaScript è esattamente quella che ti aspetti.
- **`chromiumoxide`** e il Chrome DevTools Protocol per l’interfaccia di automazione.

Il progetto è nato come fork di **Obscura** (Apache-2.0), un motore browser headless di h4ckf0r0day. Questa è l’origine, senza giri di parole: non sono partito da una pagina bianca, ma da una base solida che ho portato in una direzione diversa. Sono cambiati i nomi dei crate, l’interfaccia della CLI e l’identità del progetto, e la codebase è stata adattata ed estesa con un obiettivo pratico, orientato allo scraping e agli agenti. L’attribuzione è nel file `NOTICE` del repository: è un’opera derivata, e lo dichiara.

## L’architettura

Telemaco è un workspace di nove crate, con un crate per livello. Le chiamate tra crate passano dal livello superiore, anziché avvenire tra componenti dello stesso livello. Ecco come sono suddivisi:

| Crate | Ruolo |
|-------|-------|
| `telemaco-cli` | CLI: `fetch`, `serve` (server CDP), `scrape`, `mcp` |
| `telemaco-cdp` | Server Chrome DevTools Protocol (WebSocket) |
| `telemaco-js` | Runtime V8/`deno_core`; shim DOM e bridge JS/Rust |
| `telemaco-dom` | Albero DOM |
| `telemaco-net` | Client HTTP, client stealth, archivio cookie, cache robots, elenco dei tracker bloccati |
| `telemaco-browser` | Tipo `Page`, navigazione, valutazione JavaScript |
| `telemaco-render` | Cascata dei selettori, layout mantenuto in memoria, rendering, screenshot, PDF |
| `telemaco-mcp` | Strumenti di automazione MCP con stato |
| `telemaco` | API della libreria Rust incorporabile |

Alcune invarianti hanno dato forma all’intero progetto:

- **Un isolate V8 per processo.** V8 è `!Send`, quindi tutto il codice asincrono gira su un `LocalSet` di `tokio` e ogni operazione JavaScript passa attraverso un singolo lock globale. L’esecuzione JavaScript viene serializzata, il che va bene per un motore browser: il DOM è comunque a thread singolo.
- **Una pagina problematica non deve mai bloccare un worker.** C’è un watchdog per la terminazione di V8 su ogni pagina e una scadenza rigida a livello di processo. Una pagina che entra in un ciclo infinito viene terminata, non il worker.
- **Protezione SSRF predefinita.** Le richieste verso loopback, indirizzi RFC1918 e link-local sono bloccate, a meno di passare esplicitamente `--allow-private-network`. Uno strumento di scraping che può raggiungere la tua rete interna è un rischio; questo lo impedisce per default.

## Come si usa

Recuperare una pagina ed eseguire JavaScript reale:

```bash
$ telemaco fetch https://news.ycombinator.com --eval "document.title"
Hacker News
```

Pilotarlo come Chrome headless, da Puppeteer:

```js
import puppeteer from 'puppeteer-core';

const browser = await puppeteer.connect({
  browserWSEndpoint: 'ws://127.0.0.1:9222/devtools/browser',
});
const page = await browser.newPage();
await page.goto('https://news.ycombinator.com');

const stories = await page.evaluate(() =>
  Array.from(document.querySelectorAll('.titleline > a'))
    .map(a => ({ title: a.textContent, url: a.href }))
);
```

Fare scraping di molti URL in parallelo:

```bash
$ telemaco scrape url1 url2 url3 --concurrency 25 --format json
```

Per gli agenti AI c’è anche un server MCP che espone lo stesso browser a Claude Desktop, Cursor o qualunque client MCP:

```json
{
  "mcpServers": {
    "telemaco": { "command": "telemaco", "args": ["mcp"] }
  }
}
```

## I numeri

| Metrica | Telemaco | Chrome headless |
|---------|----------|-----------------|
| Memoria | 30 MB | 200+ MB |
| Dimensione eseguibile | 70 MB | 300+ MB |
| Caricamento pagina | 85 ms | ~500 ms |
| Avvio | Immediato | ~2 s |
| Anti-rilevamento | Integrato | Assente |
| Puppeteer / Playwright | Sì | Sì |

Caricamenti delle pagine circa 12 volte più veloci e un sesto della memoria sulle pagine con framework, con la stessa interfaccia di automazione CDP.

## Perché “Telemaco”

Il nome è quello del figlio di Ulisse, che parte alla ricerca di notizie del padre. Un cercatore, per definizione. Mi sembrava giusto per uno strumento che serve a cercare e recuperare ciò che si trova sul web.

## Una direzione, più che un prodotto

Telemaco non sta cercando di vendere niente. È una visione diversa di cosa possa essere un motore browser: abbastanza piccolo da essere un’utilità, abbastanza veloce da essere uno strumento e onesto sulle proprie origini. È costruito sul lavoro di molti progetti e persone stimati, come Servo, taffy, tiny-skia, deno_core e Obscura, ed è open source sotto Apache-2.0, così chiunque può prenderlo e usarlo per il proprio problema.

Se hai mai voluto fare scraping o eseguire test e2e senza installare un browser, Telemaco nasce proprio da questa esigenza. Clonalo, compilalo, usalo.

- Pagina del progetto: [albz.it/telemaco](https://albz.it/telemaco/)
- Codice: [github.com/AlbertoBarrago/telemaco](https://github.com/AlbertoBarrago/telemaco)
