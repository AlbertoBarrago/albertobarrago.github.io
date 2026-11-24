(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();function ni(e){return/^\/it(?:\/|$)/.test(e)?"it":"en"}var At;const A=ni(((At=globalThis.location)==null?void 0:At.pathname)??"/"),Ue=A==="it"?"it-IT":"en-GB",Ve=A==="it"?"/it/":"/";function ue(e,o=A){return`${o==="it"?"/it":""}/articles/${e}/`}function Ae(e=A){return`${e==="it"?"/it":""}/articles/`}function Te(e=A){return`${e==="it"?"/it":""}/agent-playbook/`}function zt(e=A){return`${e==="it"?"/it":""}/privacy/`}const ai={"Cagliari, Italy":"Cagliari, Italia","Senior Software Engineer with a product-builder mindset, turning ideas into scalable, production-ready tools that solve real-world problems.":"Senior Software Engineer con la mentalità di chi costruisce prodotti: trasformo idee in strumenti scalabili, pronti per la produzione, che risolvono problemi reali.","Leading React, iOS, and Java architecture across active projects; mentoring developers and driving staff engineering practices. Researching and benchmarking custom LLM solutions and AI workflows with Claude and MCP":"Guido l’architettura React, iOS e Java sui progetti attivi, affianco gli sviluppatori e promuovo pratiche di staff engineering. Ricerca e benchmarking di soluzioni LLM personalizzate e workflow AI con Claude e MCP","Angular component library for 6+ teams, DevOps ownership, CI/CD optimization -30% deploy time":"Libreria di componenti Angular per oltre 6 team, responsabilità DevOps e ottimizzazione CI/CD: tempi di deploy ridotti del 30%","Led full-stack teams, 20% load time improvement":"Guida di team full-stack e riduzione del 20% dei tempi di caricamento","Kafka microservices architecture, Angular 12 apps":"Architettura a microservizi con Kafka e applicazioni Angular 12","Mobile apps for Deutsche Bank, TIM (Fortune 500)":"Applicazioni mobile per Deutsche Bank e TIM (Fortune 500)","2026 - Present":"2026 - Presente","A fast, minimal, keyboard-first whiteboard engine for the browser. Marker + Picasso. No framework. No runtime. Just canvas.":"Una lavagna per il browser veloce, essenziale e pensata per la tastiera. Marker + Picasso. Nessun framework. Nessun runtime. Solo canvas.","Markasso MCP on mcprush":"Markasso MCP su mcprush","A native macOS mail and calendar app with a Rust core: Gmail, Microsoft and any IMAP account in one inbox, with your mail kept on your Mac.":"Un’app nativa per macOS per mail e calendario con un core in Rust: Gmail, Microsoft e qualsiasi account IMAP in un’unica inbox, con la posta che resta sul tuo Mac.","A headless browser engine in Rust: real JavaScript, real DOM, native layout and paint, speaking the Chrome DevTools Protocol. No Chromium required.":"Un motore browser headless in Rust: JavaScript e DOM reali, layout e rendering nativi, compatibile con il Chrome DevTools Protocol. Senza Chromium.","A native macOS menu bar companion for GitLab: merge requests, issues, failed pipelines and background notifications. Built with SwiftPM, no Xcode project.":"Un’app nativa nella barra dei menu di macOS per GitLab: merge request, issue, pipeline fallite e notifiche in background. Realizzata con SwiftPM, senza progetto Xcode.","A lightweight, native macOS RSS Reader app built with Swift. Lives in your menu bar: clean, minimal, no bloat.":"Un lettore RSS nativo e leggero per macOS, realizzato in Swift. Nella barra dei menu: semplice, essenziale, senza fronzoli.","A lightweight time-tracking app for iOS and macOS built with SwiftUI and SwiftData.":"Un’app leggera per tenere traccia del tempo su iOS e macOS, realizzata con SwiftUI e SwiftData.","A native macOS utility that shows live window previews when you hover over Dock icons.":"Un’utilità nativa per macOS che mostra anteprime delle finestre passando il mouse sulle icone del Dock.","Break reminder for macOS: a monster breaks your screen until you take a real break.":"Un promemoria per le pause su macOS: un mostro rompe lo schermo finché non ti prendi una vera pausa.","What Is Running - Port and Process Inspector.":"What Is Running: ispezione di porte e processi.","Switch between JDKs registered with macOS. Primary shell command: jm.":"Passa tra i JDK registrati su macOS. Comando principale: jm.","Local-first CLI that estimates the blast radius of a code change. Primary shell command: serval.":"Una CLI locale che stima l’impatto di una modifica al codice. Comando principale: serval.","A local LLM inference runtime, built from scratch in Go for Apple Silicon on top of llama.cpp. Smaller and more didactic than Ollama, with a configurable unified memory budget as an explicit constraint. v0.2.":"Un runtime locale per l’inferenza LLM, scritto da zero in Go per Apple Silicon su llama.cpp. Più piccolo e didattico di Ollama, con un limite configurabile di memoria unificata. v0.2.","Free programming books":"Libri gratuiti di programmazione","Free courses & practice":"Corsi gratuiti ed esercizi","Docs & references":"Documentazione e riferimenti","Free tools & perks":"Strumenti e vantaggi gratuiti","Curated list of free programming books in Italian.":"Una selezione di libri gratuiti di programmazione in italiano.","The full English-language list of free programming books.":"L’elenco completo dei libri gratuiti di programmazione in inglese.","Free, open-source full-stack curriculum (HTML/CSS, JS, Node, Rails).":"Un percorso full-stack gratuito e open source (HTML/CSS, JS, Node, Rails).","Free certifications and interactive courses for web development.":"Certificazioni gratuite e corsi interattivi per lo sviluppo web.","Free coding exercises and mentoring across 70+ languages.":"Esercizi gratuiti e mentoring in oltre 70 linguaggi.","Step-by-step roadmaps and guides for developer roles.":"Percorsi e guide passo passo per i diversi ruoli di sviluppo.","Free courses in math, science, and computer programming.":"Corsi gratuiti di matematica, scienze e programmazione.","Free lecture notes, exams, and videos from MIT courses.":"Appunti, esami e video gratuiti dei corsi del MIT.","The definitive reference for web platform technologies.":"Il riferimento per le tecnologie della piattaforma web.","Fast, offline-capable API documentation browser.":"Un browser veloce per la documentazione delle API, disponibile anche offline.","Paste a shell command to see what each part does.":"Incolla un comando shell per capire cosa fa ogni parte.","Online regex tester and debugger with live explanation.":"Test e debug delle espressioni regolari online, con spiegazioni in tempo reale.","My own fast, minimal, keyboard-first whiteboard engine. Marker + Picasso. No framework. No runtime. Just canvas.":"La mia lavagna veloce, essenziale e pensata per la tastiera. Marker + Picasso. Nessun framework. Nessun runtime. Solo canvas.","Free developer tools and credits for students.":"Strumenti e crediti gratuiti per gli studenti.","Free color palette generator and contrast checker.":"Un generatore gratuito di palette e uno strumento per verificare il contrasto.","Compress PNG/WebP images for the web, free tier.":"Compressione di immagini PNG/WebP per il web, con piano gratuito.","Alberto Barrago portfolio terminal":"Terminale del portfolio di Alberto Barrago","Terminal command":"Comando del terminale","Quick terminal commands":"Comandi rapidi del terminale","Type help to list available commands. Use up and down arrows for command history.":"Scrivi help per elencare i comandi. Usa le frecce su e giù per la cronologia.","15+ years: from INPS distribution systems to products for global brands.":"Oltre 15 anni: dai sistemi di distribuzione INPS ai prodotti per marchi globali.","Technical leadership · Architecture · Web · Mobile · Cloud · AI":"Leadership tecnica · Architettura · Web · Mobile · Cloud · AI","I turn ambiguity into reliable systems and useful products.":"Trasformo l’ambiguità in sistemi affidabili e prodotti utili.","Based in":"A","Latest write-up:":"Ultimo articolo:","Short profile and current role":"Profilo e ruolo attuale","Technical toolbox by area":"Competenze tecniche per area","Professional timeline":"Percorso professionale","Selected open-source work and Homebrew formulae":"Progetti open source e formule Homebrew","Technical articles and notes":"Articoli tecnici e appunti","Subscribe to the articles feed":"Iscriviti al feed degli articoli","Listen to a track I've picked":"Ascolta un brano scelto da me","A track I've picked":"Un brano scelto da me","Spotify music player":"Player musicale Spotify","Open in Spotify":"Apri su Spotify","In my headphones now:":"In cuffia ora:","Today's recommendations":"I consigli di oggi","Three picks from my listening rotation, changing daily. Links open Spotify search.":"Tre brani dai miei ascolti, diversi ogni giorno. I link aprono la ricerca su Spotify.","Useful free resources and links":"Risorse e link gratuiti","Ways to get in touch":"Come contattarmi","Download my resume":"Scarica il mio CV","Read the privacy policy":"Leggi l’informativa privacy","Opening the privacy policy…":"Apro l’informativa privacy…","List embedded retro games":"Elenca i giochi retro","Launch space, tetris, pong, or flappy":"Avvia space, tetris, pong o flappy","Browse the portfolio filesystem":"Esplora i file del portfolio","Compact system profile":"Profilo sintetico del sistema","Terminal utilities":"Utilità del terminale","Available commands":"Comandi disponibili",role:"ruolo",location:"luogo",focus:"ambito",status:"stato","Product engineering · architecture · technical leadership":"Sviluppo di prodotti · architettura · leadership tecnica","Building useful things":"Costruisco cose utili","view projects":"vedi i progetti","contact me":"contattami","download cv":"scarica il CV","Technical toolbox":"Competenze tecniche","Started with a single tool, today I find myself conducting an entire orchestra.":"Ho iniziato con un solo strumento, oggi mi ritrovo a dirigere un’intera orchestra.","I'm an AI whisperer.":"Sono un AI whisperer.",Experience:"Esperienza","Selected projects":"Progetti selezionati","Homebrew formulae":"Formule Homebrew","Command-line tools I've packaged and maintain via Homebrew taps.":"Strumenti da riga di comando che distribuisco e mantengo tramite tap Homebrew.",Articles:"Articoli","No articles yet.":"Ancora nessun articolo.",back:"indietro",chapters:"capitoli",share:"condividi","copy link":"copia link","ESC · CLOSE":"ESC · CHIUDI",words:"parole",chars:"caratteri","min read":"min di lettura","copied ✓":"copiato ✓","Copy this link:":"Copia questo link:","Useful free resources: books, courses, docs, and tools I keep coming back to.":"Risorse gratuite che uso spesso: libri, corsi, documentazione e strumenti.","Let's build something useful":"Costruiamo qualcosa di utile","A real-time strategy game with a deterministic ECS engine and lockstep online 1v1 multiplayer.":"Un gioco di strategia in tempo reale con motore ECS deterministico e multiplayer online 1v1 in lockstep.","Subscribe to my articles feed in any RSS reader:":"Iscriviti al feed degli articoli con un lettore RSS:","No RSS reader on your Mac yet? I built one too:":"Non hai ancora un lettore RSS sul Mac? Ne ho fatto uno anch’io:","download RSS Reader":"scarica RSS Reader","Downloading albertobarrago_cv.pdf…":"Download di albertobarrago_cv.pdf…","No such file":"File inesistente","Unknown game":"Gioco sconosciuto","command not found:":"comando non trovato:",Launching:"Avvio di","Permission granted. Opening contact details…":"Permesso accordato. Apro i contatti…","Technical articles and notes by Alberto Barrago.":"Articoli tecnici e appunti di Alberto Barrago.","Notes on the tools I build, the code I ship and the craft behind both.":"Appunti sugli strumenti che costruisco, sul codice che rilascio e sul mestiere dietro entrambi.","filter by title or tag":"filtra per titolo o tag","Filter articles":"Filtra gli articoli","Filter by tag":"Filtra per tag","newest first":"più recenti","oldest first":"meno recenti",all:"tutti",latest:"ultimo",read:"leggi","no matches for":"nessun risultato per","reset filters":"azzera filtri","A practical guide to working with coding agents":"Una guida pratica per lavorare con gli agenti di codice","Agent Playbook":"Agent Playbook","A practical guide to how I work with coding agents. Each practice says why it matters, how to do it, and gives you a block to copy.":"Una guida pratica a come lavoro con gli agenti di codice. Ogni pratica spiega perché conta, come si fa, e ti dà un blocco da copiare.","Inspired by":"Ispirata a",updated:"aggiornata il","Guide contents":"Indice della guida",Practices:"Pratiche",Pitfalls:"Insidie","Pitfalls we hit":"Insidie che abbiamo incontrato","Next up":"Prossimi passi",why:"perché",how:"come",copy:"copia",from:"da","selected: copy it":"selezionato: copialo","Markasso source":"sorgente Markasso","Open diagram":"Apri il diagramma","Diagram viewer":"Visualizzatore dei diagrammi",close:"chiudi","previous diagram":"diagramma precedente","next diagram":"diagramma successivo","Verification loops, by the Claude Code team at Anthropic":"Verification loops, del team di Claude Code di Anthropic","Verification rules in CLAUDE.md":"Regole di verifica nel CLAUDE.md","An agent does what its instructions make cheap. Without written rules it declares victory on a green build, retries a flaky test until it passes, or edits the test instead of the code. A few explicit lines in the global CLAUDE.md change the default for every session.":"Un agente fa ciò che le istruzioni gli rendono facile. Senza regole scritte dichiara vittoria con una build verde, ripete un test instabile finché passa, o modifica il test invece del codice. Poche righe esplicite nel CLAUDE.md globale cambiano il comportamento predefinito di ogni sessione.","Put the rules in the global `~/.claude/CLAUDE.md`, so they apply to every repo, and keep project specifics in the repo's own CLAUDE.md.":"Metti le regole nel `~/.claude/CLAUDE.md` globale, così valgono per ogni repository, e lascia le specifiche di progetto nel CLAUDE.md del repository.","Verify by running: the repo's `verify` skill when there is one, otherwise drive the real app.":"Verificare eseguendo: la skill `verify` del repository quando c’è, altrimenti pilotare la vera app.","Three rounds, then stop: after three failed fix attempts the agent hands over the failing output and what it tried.":"Tre tentativi, poi stop: dopo tre correzioni fallite l’agente consegna l’output dell’errore e cosa ha provato.","Excerpt for your CLAUDE.md":"Estratto per il tuo CLAUDE.md","Flowchart: the agent makes a change and verifies it by running the app. If it passes, the change is ready for testing with a Verified commit stamp. If not, the agent fixes the code and verifies again, up to three rounds, then stops and brings in the human.":"Diagramma di flusso: l’agente fa una modifica e la verifica eseguendo l’app. Se passa, la modifica è pronta per il test con il timbro Verified sul commit. Altrimenti l’agente corregge il codice e verifica di nuovo, fino a tre tentativi, poi si ferma e coinvolge la persona.","The loop these rules describe.":"Il ciclo descritto da queste regole.","A verify skill in every repo":"Una skill verify in ogni repository",'"Run the app" means something different in every repo. A `verify` skill writes it down once: the cheap checks, how to boot the real thing, which flows to drive and what to expect, so the agent collects evidence instead of guessing.':'"Esegui l’app" significa una cosa diversa in ogni repository. Una skill `verify` lo scrive una volta sola: i controlli rapidi, come avviare il programma vero, quali flussi pilotare e cosa aspettarsi, così l’agente raccoglie prove invece di tirare a indovinare.',"Copy the template to `<repo>/.claude/skills/verify/SKILL.md` and replace every placeholder; delete the sections that do not apply.":"Copia il modello in `<repo>/.claude/skills/verify/SKILL.md` e sostituisci ogni segnaposto; elimina le sezioni che non servono.","Track it in git: ignore `.claude/*` but not `.claude/skills/`.":"Tienila in git: ignora `.claude/*` ma non `.claude/skills/`.","Run it twice in a row on a clean main before trusting it: it is your smoke test harness, it must be fast and deterministic.":"Eseguila due volte di fila su un main pulito prima di fidarti: è il tuo smoke test, deve essere veloce e deterministica.","Say what is out of scope (paid API calls, deploys, what the tools cannot see) and when to ask a human instead.":"Scrivi cosa è fuori ambito (chiamate API a pagamento, deploy, ciò che gli strumenti non vedono) e quando invece chiedere a una persona.",Template:"Modello","Real example: Markasso, a web app driven through Playwright MCP":"Esempio reale: Markasso, un’app web pilotata con Playwright MCP","Real example: Themis, a CLI driven in a temp project":"Esempio reale: Themis, una CLI pilotata in un progetto temporaneo","A Verified trailer on every commit":"Un trailer Verified su ogni commit","After the fact, nobody remembers whether a commit was run, tested or just built. A one-line trailer records it, and because `none` is allowed, unverified commits stay honest and easy to find.":"A posteriori nessuno ricorda se un commit è stato eseguito, testato o solo compilato. Un trailer di una riga lo registra, e siccome `none` è ammesso, i commit non verificati restano onesti e facili da trovare.","End every commit message with `Verified: verify`, `tests`, `manual` or `none (<reason>)`.":"Chiudi ogni messaggio di commit con `Verified: verify`, `tests`, `manual` o `none (<reason>)`.","Let the `verify` skill's report tell the agent which value to use.":"Lascia che sia il report della skill `verify` a dire all’agente quale valore usare.","Query it with `git log` trailers: no tooling needed.":"Interrogalo con i trailer di `git log`: non serve altro.","Format and queries":"Formato e query","An agent reviewing its own diff shares its own blind spots. A second model with a fresh prompt finds a different set of bugs, as long as you give it the code, not your conclusion, and treat its output as input, not truth.":"Un agente che rivede il proprio diff ne condivide i punti ciechi. Un secondo modello con un prompt nuovo trova bug diversi, a patto di dargli il codice e non la tua conclusione, e di trattare il suo output come un input, non come la verità.","Ask before running it, and say what you send and why.":"Chiedi prima di eseguirlo, e di’ cosa invii e perché.","Read-only by default: opencode's `plan` agent or Codex's `read-only` sandbox. Write access only inside a separate git worktree.":"Sola lettura per default: l’agente `plan` di opencode o la sandbox `read-only` di Codex. Scrittura solo dentro un worktree git separato.","Use only models whose provider keeps no data and does not train on it, and never send secrets or client code you may not share.":"Usa solo modelli il cui fornitore non conserva i dati e non ci addestra, e non inviare mai segreti o codice di clienti che non puoi condividere.","Verify every finding against the code, fix what is real, and write down what you rejected and why.":"Verifica ogni segnalazione sul codice, correggi ciò che è reale, e annota cosa hai scartato e perché.",Commands:"Comandi","Themis: gates and a locked contract":"Themis: cancelli e un contratto bloccato","For larger work, rules are not enough: the agent must not be able to move the goalposts. Themis turns a spec into acceptance tests, locks them by digest, and only then lets agents write code that a separate verifier judges.":"Per lavori più grandi le regole non bastano: l’agente non deve poter spostare la porta. Themis trasforma una specifica in test di accettazione, li blocca tramite digest, e solo allora lascia scrivere agli agenti il codice che un verifier separato giudica.","Write the spec: goal, verify steps, limits, acceptance criteria.":"Scrivi la specifica: obiettivo, passi di verifica, limiti, criteri di accettazione.","Approve the plan (gate 1) and the tests (gate 2): approving the tests records the digests of tests, spec, verifier and config in `.themis/lock.json`, and a guard rejects any change to them.":"Approva il piano (cancello 1) e i test (cancello 2): approvare i test registra i digest di test, specifica, verifier e configurazione in `.themis/lock.json`, e una guardia rifiuta qualsiasi modifica.","Run: each task works in its own worktree; the verifier's exit code says retry or blocked, and `max_iterations` caps the attempts.":"Esegui: ogni task lavora nel proprio worktree; l’exit code del verifier dice se riprovare o se è bloccato, e `max_iterations` limita i tentativi.","Close with a retro (gate 3): misses become changes to the agents' instructions.":"Chiudi con una retro (cancello 3): gli errori sfuggiti diventano modifiche alle istruzioni degli agenti.","The gated flow":"Il flusso a cancelli","Flowchart of the Themis pipeline: spec, plan, locked contract, worker, verifier with retries and a guard on the locked checks, failed or blocked after max iterations, reviewer on the committed diff, merge, retro.":"Diagramma di flusso della pipeline di Themis: specifica, piano, contratto bloccato, worker, verifier con tentativi e una guardia sui controlli bloccati, fallito o bloccato dopo il numero massimo di iterazioni, reviewer sul diff del commit, merge, retro.","The Themis gated pipeline: the checks are locked before the worker starts.":"La pipeline a cancelli di Themis: i controlli sono bloccati prima che il worker inizi.","The dev server port belongs to someone else":"La porta del dev server è di qualcun altro","Several sessions and agents run at once. An agent that finds port 5173 busy may happily test the server another agent started, on different code, and report a pass that means nothing.":"Più sessioni e agenti girano insieme. Un agente che trova occupata la porta 5173 può testare tranquillamente il server avviato da un altro agente, su codice diverso, e riportare un successo che non vale nulla.","Pick a free port at runtime and start with `--strictPort`, so a race fails instead of silently moving.":"Scegli una porta libera al momento e avvia con `--strictPort`, così una collisione fallisce invece di spostarsi in silenzio.","Fail the wait loop if your own process dies.":"Fai fallire il ciclo di attesa se il tuo processo muore.","Check a marker that proves the server is yours (the page title, a health payload) before testing, and never stop a server you did not start.":"Prima di testare controlla un segno che il server è tuo (il titolo della pagina, una risposta di health), e non fermare mai un server che non hai avviato tu.","Free port, strict, checked":"Porta libera, rigida, controllata","Telemaco has a DOM, not a layout":"Telemaco ha un DOM, non un layout","Assert on structure and state: titles, element counts, text, console errors.":"Controlla struttura e stato: titoli, numero di elementi, testo, errori in console.","Drive forms through the DOM, for example `form.requestSubmit()`.":"Pilota i form tramite il DOM, per esempio `form.requestSubmit()`.","Cover canvas logic with unit tests, and ask a human for visual and phone-width checks (`Verified: manual`).":"Copri la logica del canvas con test unitari, e chiedi a una persona i controlli visivi e su schermo da telefono (`Verified: manual`).","A DOM-only check":"Un controllo solo sul DOM","Stop hook in observe mode":"Hook di stop in modalità osservazione","A global hook that logs when a session ends without verification, without blocking anything yet, so false positives surface before it ever enforces.":"Un hook globale che registra quando una sessione finisce senza verifica, senza ancora bloccare nulla, così i falsi positivi emergono prima che diventi vincolante.","A REVIEW.md per repo":"Un REVIEW.md per repository","What the reviewer should look at for this code, always read from the base branch so a change cannot rewrite its own review rules.":"Cosa deve guardare il reviewer per questo codice, letto sempre dal branch di base così una modifica non può riscrivere le proprie regole di review.","One reviewer, several rounds":"Un reviewer, più passaggi","Tune a single reviewer and feed each round the findings and failures of the previous ones, instead of stacking parallel reviewers.":"Affinare un solo reviewer e dare a ogni passaggio i risultati e gli errori dei precedenti, invece di accumulare reviewer in parallelo.","A diff-triggered reliability checklist":"Una checklist di affidabilità attivata dal diff","Checklist items with a trigger readable from a diff, matched through Serval's blast radius, so only the few relevant checks run on each change.":"Voci di checklist con un trigger leggibile dal diff, abbinate tramite il raggio d’azione di Serval, così su ogni modifica girano solo i pochi controlli pertinenti.","Every new project starts with `.claude/skills/verify` from the template, on day one.":"Ogni nuovo progetto parte con `.claude/skills/verify` dal modello, fin dal primo giorno.","In work or client repos you don't own, keep the skill local with `.git/info/exclude` and never commit it.":"Nei repository di lavoro o di clienti che non sono tuoi, tieni la skill in locale con `.git/info/exclude` e non committarla mai.","Kickoff, and local-only skills for repos you don't own":"Avvio del progetto, e skill solo locali per i repository non tuoi","Section for an end-to-end Playwright suite":"Sezione per una suite end-to-end con Playwright","Choosing the browser tool":"Scegliere lo strumento browser","A verify skill is only as good as the browser that drives it. We ran one real test on Markasso's canvas: draw a rectangle, then check that it landed in localStorage. The results decided which tool does what.":"Una skill verify vale quanto il browser che la pilota. Abbiamo fatto un test vero sul canvas di Markasso: disegnare un rettangolo e controllare che finisca nel localStorage. I risultati hanno deciso quale strumento fa cosa.","Telemaco: FAIL. No layout engine, and `browser_evaluate` does not await Promises.":"Telemaco: FAIL. Nessun motore di layout, e `browser_evaluate` non aspetta le Promise.","chrome-devtools-mcp: PASS only with synthetic events dispatched from a script, since it has no drag at coordinates; about 36 s.":"chrome-devtools-mcp: PASS solo con eventi sintetici inviati da uno script, perché non ha il trascinamento a coordinate; circa 36 s.","Playwright MCP: PASS with real mouse input (`browser_mouse_drag_xy`), about 24 s. On the first try it even hit a panel lying over the canvas, exactly as a real user would.":"Playwright MCP: PASS con input reale del mouse (`browser_mouse_drag_xy`), circa 24 s. Al primo tentativo ha perfino colpito un pannello sopra il canvas, proprio come farebbe un utente vero.","Playwright MCP for local apps":"Playwright MCP per le app locali","A second opinion with Codex or opencode":"Un secondo parere con Codex o opencode","Playwright with a fixed port and `reuseExistingServer` has the same trap: check that the port is free before the suite runs.":"Playwright con una porta fissa e `reuseExistingServer` ha la stessa trappola: controlla che la porta sia libera prima di lanciare la suite.","Telemaco runs real JavaScript and a real DOM but no layout engine: sizes are placeholders and computed styles come back as defaults. Canvas hit-testing and visual checks cannot be driven from it, `browser_evaluate` returns before a Promise settles, and pretending otherwise produces false passes.":"Telemaco esegue JavaScript e DOM reali ma non ha un motore di layout: le dimensioni sono segnaposto e gli stili calcolati tornano ai valori predefiniti. Hit-testing sul canvas e controlli visivi non si possono pilotare da lì, `browser_evaluate` ritorna prima che una Promise si risolva, e fingere il contrario produce falsi successi.","A real browser speaks the system language":"Un browser vero parla la lingua del sistema",'A real Chrome opens the app in the system language. On an Italian Mac a selector like `title^="Rectangle"` finds nothing, because the button now reads "Rettangolo", and the check fails for a reason that has nothing to do with the change.':'Un Chrome vero apre l’app nella lingua del sistema. Su un Mac in italiano un selettore come `title^="Rectangle"` non trova nulla, perché il pulsante ora si chiama "Rettangolo", e il controllo fallisce per un motivo che non c’entra con la modifica.',"Prefer selectors that do not depend on the language: structure, roles, `data-*` hooks you own.":"Preferisci selettori che non dipendono dalla lingua: struttura, ruoli, attributi `data-*` che controlli tu.","When the app has no stable hooks yet, force the `en-US` locale in the browser tool and say so in the verify skill.":"Quando l’app non ha ancora appigli stabili, forza il locale `en-US` nello strumento browser e scrivilo nella skill verify.","Fragile and robust selectors":"Selettori fragili e robusti","Untracked editor folders break the linter":"Le cartelle locali dell’editor fanno fallire il linter",'`biome check .` walks every folder in the working tree, including local editor settings and scratch directories that are not part of the project, and fails on them. The agent then "fixes" files nobody asked it to touch, or reports a red lint that is not real.':'`biome check .` attraversa ogni cartella del working tree, comprese le impostazioni locali dell’editor e le cartelle temporanee che non fanno parte del progetto, e fallisce su di esse. L’agente allora "corregge" file che nessuno gli ha chiesto di toccare, o segnala un lint rosso che non è reale.',"Lint exactly what git knows about: tracked files plus new, non-ignored ones.":"Fai il lint esattamente di ciò che git conosce: file tracciati più quelli nuovi non ignorati.","Use that command in the verify skill, so humans and agents run the same check.":"Usa quel comando nella skill verify, così persone e agenti eseguono lo stesso controllo.","Lint only what git tracks":"Lint solo di ciò che git traccia","Adopt Playwright MCP":"Adottare Playwright MCP","Done: the verify skills that drive local apps moved from Telemaco to Playwright MCP, starting with Markasso.":"Fatto: le skill verify che pilotano app locali sono passate da Telemaco a Playwright MCP, a partire da Markasso.","Audit Telemaco":"Audit di Telemaco","Done in Telemaco 0.3.0: it keeps what it does best, reading the web, search and stealth fetches through the CLI and the MCP server, and the CDP server, scrape and remote are gone.":"Fatto con Telemaco 0.3.0: tiene ciò che fa meglio, leggere il web, cercare e fare fetch stealth da CLI e server MCP, mentre server CDP, scrape e remote non ci sono più.","First edition: six practices, four pitfalls and a roadmap, on a page of its own with a link for every section.":"Prima edizione: sei pratiche, quattro insidie e una roadmap, su una pagina tutta sua con un link per ogni sezione.","Keep the checks out of reach: a change must never weaken the tests, lint config, `verify` skill or `REVIEW.md` that judge it in the same commit.":"Tieni i controlli fuori portata: una modifica non deve mai indebolire, nello stesso commit, i test, la configurazione di lint, la skill `verify` o il `REVIEW.md` che la giudicano.","Decision, written in the global CLAUDE.md: Telemaco stays for reading the web, search and stealth fetches; driving and verifying local apps moved to Playwright MCP, pinned, headless and isolated. Markasso's verify skill now draws on the canvas with real mouse input, and Telemaco 0.3.0 dropped everything else: no CDP server, no scrape, no remote.":"Decisione, scritta nel CLAUDE.md globale: Telemaco resta per leggere il web, cercare e fare fetch stealth; pilotare e verificare le app locali è passato a Playwright MCP, con versione fissata, headless e isolato. La skill verify di Markasso ora disegna sul canvas con input reale del mouse, e Telemaco 0.3.0 ha tolto tutto il resto: niente server CDP, niente scrape, niente remote.","Codex is the long-term reviewer for deep and critical reviews, one call per review because its quota is limited; opencode's free models take smaller diffs, control runs and scoped tasks.":"Codex è il reviewer a lungo termine per le review profonde e critiche, con una sola chiamata per review perché la sua quota è limitata; i modelli gratuiti di opencode si occupano dei diff più piccoli, delle esecuzioni di controllo e dei task circoscritti.","Size the model to the task: light for a quick question, standard for a small or medium diff, deep for a branch, a plan or a debug session, where two free models run in parallel and you cross-check them.":"Scegli il modello in base al compito: leggero per una domanda veloce, standard per un diff piccolo o medio, profondo per un branch, un piano o una sessione di debug, dove due modelli gratuiti girano in parallelo e ne confronti i risultati.","When the repo has a `REVIEW.md`, send it read from the base branch and ask the reviewer to apply the rules whose trigger matches the diff.":"Quando il repository ha un `REVIEW.md`, prendilo dal branch di base, invialo e chiedi al reviewer di applicare le regole il cui trigger corrisponde al diff.","A subagent that works on another repo creates its own worktree there with `git worktree add`: the agent tool's worktree isolation only covers the session's repo.":"Un subagent che lavora su un altro repository crea lì il proprio worktree con `git worktree add`: l’isolamento a worktree dello strumento agent copre solo il repository della sessione.","A Stop hook that watches before it blocks":"Un hook Stop che osserva prima di bloccare",'Rules say "verify before you are done", but nothing tells you how often a session ends without it. A Stop hook can measure that. Blocking straight away would punish every false positive, so the first version only watches and writes down what it saw.':'Le regole dicono "verifica prima di dire che hai finito", ma niente ti dice quanto spesso una sessione finisce senza farlo. Un hook Stop può misurarlo. Bloccare subito punirebbe ogni falso positivo, quindi la prima versione si limita a osservare e ad annotare ciò che ha visto.',"Run it at the end of every turn: it reads the session transcript and logs one verdict per edited repo, `verify`, `commands`, `docs-only` or `none`.":"Eseguilo alla fine di ogni turno: legge il transcript della sessione e registra un verdetto per ogni repository modificato, `verify`, `commands`, `docs-only` o `none`.","Count only the edits of the current session, so other sessions on the same repo cannot raise false alarms.":"Conta solo le modifiche della sessione corrente, così altre sessioni sullo stesso repository non possono generare falsi allarmi.","Never block, never print, always exit 0: a broken hook must not break the session.":"Non bloccare mai, non stampare mai, esci sempre con 0: un hook rotto non deve rompere la sessione.","Read the report after a week or two, fix the false positives, and only then decide whether to block turns that end on `none`.":"Leggi il report dopo una o due settimane, correggi i falsi positivi, e solo allora decidi se bloccare i turni che finiscono con `none`.","Registration and report":"Registrazione e report","A REVIEW.md the change cannot rewrite":"Un REVIEW.md che la modifica non può riscrivere","A generic review prompt finds generic issues. A `REVIEW.md` tells the reviewer what breaks in this code, and because it is always read from the base branch, a change cannot soften the rules that judge it.":"Un prompt di review generico trova problemi generici. Un `REVIEW.md` dice al reviewer cosa si rompe in questo codice, e siccome viene sempre letto dal branch di base, una modifica non può ammorbidire le regole che la giudicano.","Give the reviewer the diff plus `git show <base>:REVIEW.md`, never the copy in the branch under review.":"Dai al reviewer il diff insieme a `git show <base>:REVIEW.md`, mai la copia nel branch sotto review.","Every rule comes from a real bug, citing the fix commits, or from a stated project constraint. No generic advice.":"Ogni regola nasce da un bug reale, citando i commit che lo correggono, o da un vincolo di progetto dichiarato. Niente consigli generici.","Make each rule checkable from a diff: a trigger on paths, a concrete check, and why it exists.":"Rendi ogni regola verificabile da un diff: un trigger sui percorsi, un controllo concreto, e il motivo per cui esiste.","Keep it under about 15 rules: add or sharpen one when a bug slips through review, delete the ones that never trigger or only produce noise.":"Tienilo sotto le 15 regole circa: aggiungine o affinane una quando un bug sfugge alla review, elimina quelle che non scattano mai o producono solo rumore.","Change `REVIEW.md` in its own commit, never together with the code it judges.":"Modifica `REVIEW.md` in un commit a parte, mai insieme al codice che giudica.","A secret printed once is already gone":"Un segreto stampato una volta è già perso","Whatever an agent prints enters the transcript, and the transcript goes to the model provider. A quick `cat .env` or a loose `grep` to check that a key exists is enough to ship its value out of your machine, and deleting the message afterwards does not take it back.":"Tutto ciò che un agente stampa entra nel transcript, e il transcript va al fornitore del modello. Basta un `cat .env` veloce o un `grep` troppo largo per controllare che una chiave esista, e il suo valore lascia la tua macchina; cancellare il messaggio dopo non lo riporta indietro.","Write the rule in the global CLAUDE.md: never print anything that can hold a secret, so no `cat`, `head`, `env`, `printenv`, `echo` or plain `grep` on it.":"Scrivi la regola nel CLAUDE.md globale: mai stampare qualcosa che può contenere un segreto, quindi niente `cat`, `head`, `env`, `printenv`, `echo` o `grep` semplice su di esso.","Check a key by name or count only: `grep -q`, `grep -c`, or the list of key names.":"Controlla una chiave solo per nome o per conteggio: `grep -q`, `grep -c`, o l’elenco dei nomi delle chiavi.","Anchor the pattern to the exact key: a loose one matches other keys and prints their values.":"Ancora il pattern alla chiave esatta: uno troppo largo trova altre chiavi e ne stampa i valori.","If a value does get printed, the agent says so at once and the secret is rotated, not just deleted from the chat.":"Se un valore viene stampato comunque, l’agente lo dice subito e il segreto va ruotato, non solo cancellato dalla chat.","Checks that print no values":"Controlli che non stampano valori","Two new practices, a Stop hook in observe mode and a REVIEW.md read from the base branch, and a pitfall on secrets in the transcript. The second opinion now sizes the model to the task, the browser tool decision is in the global rules, and the Playwright setup matches the real one.":"Due nuove pratiche, un hook Stop in modalità osservazione e un REVIEW.md letto dal branch di base, e un’insidia sui segreti nel transcript. Il secondo parere ora sceglie il modello in base al compito, la decisione sullo strumento browser è nelle regole globali, e la configurazione di Playwright corrisponde a quella reale.","Read-only is not harmless: the `plan` agent blocks file edits, not shell commands. The prompt forbids build, clean, install and any other writing command, compiling uses a separate build directory, and no review runs while a build or test run is using the same tree.":"Sola lettura non vuol dire innocuo: l’agente `plan` blocca le modifiche ai file, non i comandi shell. Il prompt vieta build, clean, install e ogni altro comando che scrive, la compilazione usa una directory di build separata, e nessuna review parte mentre un build o i test stanno usando lo stesso albero.","No `REVIEW.md` yet? When the agent proposes a review, it also proposes a first version built from the `fix:` commits in `git log`, citing their hashes. It only proposes: the file is written after a human says yes.":"Non c’è ancora un `REVIEW.md`? Quando l’agente propone una review, propone anche una prima versione ricavata dai commit `fix:` in `git log`, citandone gli hash. Si limita a proporla: il file viene scritto solo dopo il sì di una persona.","When a fix corrects a bug that an earlier review missed, the agent proposes the rule to add or sharpen: trigger, check, and the fix commit.":"Quando un fix corregge un bug sfuggito a una review precedente, l’agente propone la regola da aggiungere o affinare: trigger, controllo e commit del fix.","An improvement log for the setup itself":"Un registro dei miglioramenti per il setup stesso","Rules get skipped, hooks miss a case, a release step stays manual until it breaks. Fixed on the spot, each lesson is lost; fixed in the middle of another task, it widens the diff. A short log keeps them in one place until each gets its own fix.":"Le regole vengono saltate, gli hook mancano un caso, un passo del rilascio resta manuale finché non si rompe. Se lo sistemi sul momento, la lezione si perde; se lo sistemi in mezzo a un altro task, allarga il diff. Un registro breve le tiene in un posto solo finché ognuna non ha il suo fix.","Keep one file next to the agent's rules, one entry per issue: what happened, the proposed fix, a status (`open`, `done <sha or PR>`, `dropped (<reason>)`).":"Tieni un file accanto alle regole dell’agente, una voce per problema: cosa è successo, il fix proposto, uno stato (`open`, `done <sha or PR>`, `dropped (<reason>)`).","The agent adds an entry when something breaks, a rule gets skipped, or a step turns out manual and fragile, and says so in one line.":"L’agente aggiunge una voce quando qualcosa si rompe, una regola viene saltata o un passo si rivela manuale e fragile, e lo dice in una riga.","Each fix is its own task and branch; close the entry with its commit or PR.":"Ogni fix è un task e un branch a sé; chiudi la voce con il suo commit o la sua PR.","When there is time to improve the setup, start from the `open` entries instead of from memory.":"Quando c’è tempo per migliorare il setup, parti dalle voci `open` invece che dalla memoria.","Prefer fixes that make a rule enforced rather than remembered: a hook or a script check beats another line of instructions.":"Preferisci i fix che rendono una regola imposta invece che ricordata: un hook o un controllo in uno script valgono più di un’altra riga di istruzioni.","Project settings leak into the global file":"Le impostazioni di progetto finiscono nel file globale","Keeping the agent's global settings in a git repo, symlinked on every machine, gives you the same setup everywhere. It also means that a permission or an environment block written for one project silently lands in every session on every machine, and nobody notices until it gets in the way.":"Tenere le impostazioni globali dell’agente in un repository git, collegato con un symlink su ogni macchina, ti dà lo stesso setup ovunque. Vuol dire anche che un permesso o un blocco di ambiente scritto per un progetto finisce in silenzio in ogni sessione su ogni macchina, e nessuno se ne accorge finché non dà fastidio.","Write the rule in the global CLAUDE.md: project-specific settings go in the project's `.claude/settings.local.json`, never in the global file.":"Scrivi la regola nel CLAUDE.md globale: le impostazioni specifiche di un progetto vanno nel `.claude/settings.local.json` del progetto, mai nel file globale.","Add a `SessionStart` hook that warns when the shared settings file has uncommitted changes, so drift shows up at the start of the next session.":"Aggiungi un hook `SessionStart` che avvisa quando il file di impostazioni condiviso ha modifiche non committate, così la deriva emerge all’inizio della sessione successiva.","The hook only warns and always exits 0: the human decides whether to commit the change or move it into the project.":"L’hook si limita ad avvisare ed esce sempre con 0: è la persona a decidere se committare la modifica o spostarla nel progetto.","Rule and hook":"Regola e hook","The roadmap caught up with reality: Playwright MCP now drives the verify skills and Telemaco has been slimmed down, so both items point to the browser tool section, whose Markasso example is now the real Playwright skill.":"La roadmap si è rimessa in pari con la realtà: Playwright MCP ora pilota le skill verify e Telemaco è stato snellito, quindi entrambe le voci rimandano alla sezione sullo strumento browser, il cui esempio di Markasso è ora la vera skill con Playwright.","New name: How we build is now the Agent Playbook, at /agent-playbook/ with the `playbook` command. Old links and deep links still work: they redirect to the same section.":"Nuovo nome: How we build ora è l’Agent Playbook, su /agent-playbook/ con il comando `playbook`. I vecchi link, anche quelli a una sezione, continuano a funzionare: portano alla stessa sezione.","A hook that asks before every commit":"Un hook che chiede prima di ogni commit","The rule says never commit without the human's ok, and the agent still slipped once. A hook on `git commit` that always asks would make it enforced instead of remembered.":"La regola dice di non fare mai commit senza l’ok della persona, eppure l’agente è scivolato una volta. Un hook su `git commit` che chiede sempre conferma la renderebbe imposta invece che ricordata.",'"No checks reported" is not a pass':'"No checks reported" non è un via libera',"Right after a pull request is opened, its checks may not be registered yet. An agent that asks for their status at that moment gets an empty list and merges with no CI having run. A review job that errors out, or finishes in a few seconds without reviewing anything, is just as easy to read as green: one such job can keep failing silently for months.":"Subito dopo l’apertura di una pull request i suoi check potrebbero non essere ancora registrati. Un agente che ne chiede lo stato in quel momento riceve una lista vuota e fa il merge senza che la CI sia mai partita. Un job di review che va in errore, o che finisce in pochi secondi senza recensire nulla, si scambia altrettanto facilmente per verde: un job così può fallire in silenzio per mesi.","Before merging, watch the checks until they have appeared and finished (`gh pr checks <n> --watch`).":"Prima del merge, segui i check finché non sono comparsi e terminati (`gh pr checks <n> --watch`).",'An empty list right after `gh pr create` means "not registered yet": retry for about a minute. Treat it as "no CI" only when the repo has no workflow that runs on pull requests.':'Una lista vuota subito dopo `gh pr create` vuol dire "non ancora registrati": riprova per circa un minuto. Trattala come "nessuna CI" solo quando il repository non ha workflow che girano sulle pull request.',"A failing review, or one that ran without reviewing (seconds long, no output), is reported to the human and never merged past.":"Una review fallita, o una partita senza recensire (pochi secondi, nessun output), va segnalata alla persona, e il merge non la scavalca mai.","Wait for checks, then merge":"Aspetta i check, poi il merge","Guardrails for system-level changes":"Guardrail per le modifiche di sistema","An agent that changes operating system defaults, such as which app opens a file type, triggers one confirmation dialog per change and can move unrelated defaults with it, like the web browser. The plan: probe a single change first, check the real effect instead of the command's exit status, and keep a backup to roll back to.":"Un agente che cambia i default del sistema operativo, come l’app che apre un tipo di file, fa comparire una finestra di conferma per ogni modifica e può trascinarsi dietro default non collegati, come il browser. Il piano: provare prima una sola modifica, controllare l’effetto reale invece del codice di uscita del comando, e tenere un backup a cui tornare.",'A new pitfall: "no checks reported" right after opening a pull request is not a pass, and a review that ran without reviewing is not green. The roadmap gains guardrails for system-level changes made by an agent.':'Una nuova insidia: "no checks reported" subito dopo l’apertura di una pull request non è un via libera, e una review partita senza recensire non è verde. In roadmap entrano i guardrail per le modifiche di sistema fatte da un agente.',"A new practice, an improvement log for the setup itself, and a pitfall on project settings leaking into the shared global file. Read-only reviews now forbid writing commands too, and a repo without a REVIEW.md gets a first version proposed from its fix commits.":"Una nuova pratica, un registro dei miglioramenti per il setup stesso, e un’insidia sulle impostazioni di progetto che finiscono nel file globale condiviso. Le review in sola lettura ora vietano anche i comandi che scrivono, e a un repository senza REVIEW.md viene proposta una prima versione ricavata dai suoi commit di fix.",adopted:"adottata","in trial":"in prova",new:"nuova","recently updated":"aggiornata di recente",added:"aggiunta il",practices:"pratiche",pitfalls:"insidie",Changelog:"Registro delle modifiche","Latest change":"Ultima modifica","see every change":"tutte le modifiche","Copy the link to this section":"Copia il link a questa sezione","open the guide":"apri la guida","Copy the guide link":"Copia il link alla guida",More:"Altro"};function st(e){if(!e)return e;const o=new Date(`${e}T00:00:00`);return Number.isNaN(o.getTime())?e:new Intl.DateTimeFormat(Ue,{day:"2-digit",month:"2-digit",year:"numeric"}).format(o)}function i(e){return A==="it"?ai[e]??e:e}const ri="4.6.0",si={version:ri},li="## Verification\n- After any non-trivial change: run build/typecheck and relevant tests before declaring it done\n- If you can't verify, say so explicitly instead of assuming it works\n- Don't edit tests just to make them pass: if a test fails, understand why before touching it\n- Add/update tests when changing public behavior\n- **Verify by running**: if the repo has a `.claude/skills/verify` skill, run it before saying \"ready for testing\". Otherwise drive the real app (a browser automation tool for anything web) when the change is user-visible. Always state how the change was verified\n- **Three rounds, then stop**: if a check still fails after three fix attempts, stop and bring me in with the failing output and what you tried\n- **Flaky tests**: never add retries, sleeps or skips to make them pass. Find the root cause; if you can't, propose deleting the test with the reason written down, and wait for my confirmation\n- **Checks are out of reach**: a change must not weaken or rewrite, in the same commit, the existing tests, lint/typecheck config, `verify` skill or `REVIEW.md` that judge it (adding new tests for new behavior is fine). If an existing check genuinely needs changing, do it in a separate commit and flag it to me\n\n## Commit Messages\n- Every commit ends with a `Verified:` trailer stating how the change was checked: `verify` (verify skill or end-to-end run), `tests` (automated tests only), `manual` (I tested it), or `none (<reason>)`. It is a verification stamp, not an attribution line\n",ci=`---
name: verify
description: Verify a change to <PROJECT> end to end before saying "ready for testing" or committing. Runs the cheap checks first, then drives the real <app|CLI|service> and reports the evidence plus the Verified trailer value.
---

<!--
Copy it to <repo>/.claude/skills/verify/SKILL.md, replace every <PLACEHOLDER>,
delete the sections that do not apply and this comment. Make sure .claude/skills/
is tracked by git (ignore .claude/* but not .claude/skills/).
Keep it fast and deterministic: run it twice in a row on a clean main before trusting it.
-->

# Verify <PROJECT>

Run the steps in order and stop at the first failure. Fix the code, not the check.

## Rules

- Never add retries, sleeps or skips, and never edit the existing tests, lint/typecheck config or this skill to make a step pass.
- If a step still fails after three fix attempts, stop and report the failing output and what was tried.
- Clean up what you started (servers, temp dirs) even when a step fails.

## 1. Cheap checks

    <typecheck command>
    <lint command, check-only, no auto-fix>
    <test command>

## 2. Run it

<How to start the real thing: dev server, built CLI, local service. Where it listens, how to tell it is ready, how to stop it.>

Servers: pick a free port at runtime with \`--strictPort\` (or equivalent), fail the wait loop if your process dies, and check an identifying marker (page title, health payload) before testing. Other sessions and agents run their own servers: never reuse or stop one you did not start.

Smoke flows (always):

1. <Flow>: <steps>. Expected: <observable result>.
2. <Flow that must fail>: <steps>. Expected: <error, exit code>.

Flows for the changed area: <where the feature map lives, e.g. docs/MANUAL.md>. Pick the flows that cover the diff and check their expected results.

Out of scope: <commands this skill must not run, e.g. paid API calls, deploys>.

## 3. Report

Reply with:

- each command run with its exit code;
- the evidence for every flow (output excerpt, screenshot path);
- the \`Verified:\` trailer value: \`verify\` when steps 1 and 2 passed, \`tests\` when only step 1 ran, \`none (<reason>)\` otherwise.
`,di=`---
name: verify
description: Verify a change to Markasso before saying "ready for testing" or committing. Runs typecheck, Biome (check only) and vitest, the MCP build when mcp/ changed, then boots the web app on a private dev server and drives it in a real browser with Playwright MCP (boot smoke plus drawing on the canvas). Reports the evidence plus the Verified trailer value.
---

# Verify Markasso

Run the steps in order from the repo root and stop at the first failure. Fix the code, not the check.

## Rules

- Never add retries, sleeps or skips, and never edit the existing tests, \`biome.json\`, \`tsconfig*.json\`, \`vitest.config.ts\` or this skill to make a step pass.
- If a step still fails after three fix attempts, stop and report the failing output and what was tried.
- Use \`pnpm lint:ci\`, never \`pnpm lint\`: the latter rewrites files.
- Never reuse or stop a dev server you did not start: other sessions and agents run their own (5173 is usually the user's). Start your own on a free port picked at runtime and always stop it, even when a step fails.

## 1. Cheap checks

    pnpm typecheck
    pnpm lint:ci
    pnpm test

\`pnpm test\` also runs \`mcp/tests/\`. If the diff touches \`mcp/\`, also build the server:

    pnpm mcp:build

## 2. Run it in a real browser (Playwright MCP)

Start a private dev server on a free port and wait until it answers. The loop fails if the server dies, so a port taken in the meantime can never make you test someone else's server:

    PORT=$(node -e "const s=require('net').createServer();s.listen(0,()=>{console.log(s.address().port);s.close()})")
    pnpm dev --port $PORT --strictPort > <scratchpad>/markasso-dev.log 2>&1 &
    PID=$!
    until curl -fs -o /dev/null http://localhost:$PORT/; do
      kill -0 $PID 2>/dev/null || { tail -20 <scratchpad>/markasso-dev.log; exit 1; }
      sleep 0.5
    done
    echo $PORT

With the Playwright MCP tools (\`mcp__playwright__*\`: headless Chrome, isolated profile, 1280x800 viewport, real mouse input). The browser UI language follows the system, so never select by translated text: use ids, shortcuts and the shortcut hint in titles (\`(R /\`).

Boot smoke:

1. \`browser_navigate\` to \`http://localhost:$PORT/\`. Expected: title starts with \`Markasso\` (any other title means you reached a server that is not yours: stop).
2. \`browser_console_messages\`. Expected: no errors.
3. \`browser_evaluate\`:

       () => ({ canvas: !!document.getElementById('main'), toolbarButtons: document.querySelectorAll('#toolbar button').length, rectangle: !!document.querySelector('#toolbar button[title*="(R /"]') })

   Expected: \`canvas: true\`, \`toolbarButtons\` greater than 0, \`rectangle: true\`.

Canvas flow (draw a rectangle):

4. The isolated profile always opens the welcome dialog, and it swallows keyboard shortcuts. Dismiss it with \`browser_evaluate\` \`() => { document.querySelector('.wl-cta')?.click(); }\`, \`browser_wait_for\` 0.5 seconds, then \`browser_press_key\` \`r\` to pick the Rectangle tool.
5. \`browser_mouse_drag_xy\` from (400, 200) to (540, 300). Stay right of x = 260: the style panel covers the left edge of the canvas, and a drag that starts on it selects text instead of drawing.
6. \`browser_wait_for\` 1.5 seconds (the session save is debounced), then \`browser_evaluate\`:

       () => (JSON.parse(localStorage.getItem('markasso-session') ?? '{"elements":[]}').elements).map((e) => ({ type: e.type, x: Math.round(e.x), y: Math.round(e.y), w: Math.round(e.width), h: Math.round(e.height) }))

   Expected: exactly one element of type \`rectangle\`, about 140 x 100.
7. \`browser_take_screenshot\` as evidence. Playwright MCP only writes under its output directory (set with \`--output-dir\` in your MCP server config): leave the file name to it and report the path it returns.

Flows for the changed area: \`docs/MANUAL.md\` is the feature map (tools, shortcuts, menus). Pick the flows that cover the diff and drive them the same way: keyboard shortcuts and coordinates on the canvas, state checks through \`localStorage\` or the DOM.

8. \`browser_close\`, then stop the server:

       kill $(lsof -tiTCP:$PORT -sTCP:LISTEN)

## 3. Report

Reply with:

- each command with its exit code, and the vitest totals;
- the results of steps 2.1 to 2.6 and the screenshot path;
- the \`Verified:\` trailer value: \`verify\` when steps 1 and 2 passed, \`tests\` when only step 1 ran, \`manual\` when the user checked a visible change, \`none (<reason>)\` otherwise.
`,pi='---\nname: verify\ndescription: Verify a change to Themis end to end before saying "ready for testing" or committing. Runs npm run check, rebuilds dist/, then drives the real CLI (check, init, status) in a temp project and reports the evidence plus the Verified trailer value.\n---\n\n# Verify Themis\n\nRun the steps in order from the repo root and stop at the first failure. Fix the code, not the check.\n\n## Rules\n\n- Never add retries, sleeps or skips, and never edit the existing tests, `biome.json`, `tsconfig*.json`, `vitest.config.ts` or this skill to make a step pass.\n- If a step still fails after three fix attempts, stop and report the failing output and what was tried.\n- Never delete `dist/`: `~/.local/bin/themis` links to `dist/cli/main.js`. Rebuilding in place is fine.\n- Do not run commands that call agents (`plan`, `tests`, `run`, `retro`): they cost money and minutes. Their logic is covered by the vitest suite with `FakeAgentRunner`/`FakeExecutor`.\n- Always remove the temp directory, even when a step fails.\n\n## 1. Cheap checks\n\n    npm run check\n\n(typecheck, Biome, vitest including `tests/e2e/`).\n\n## 2. Build\n\n    npm run build\n\n## 3. Drive the real CLI\n\nRun in bash (the commands rely on bash arrays and `PIPESTATUS`):\n\n    bash -c \'\n    set -u\n    C=(node "$PWD/dist/cli/main.js")\n    T=$(mktemp -d)\n    trap "rm -rf \\"$T\\"" EXIT\n\n    "${C[@]}" check examples/webhook-service/spec.md; echo "check-valid exit=$?"\n\n    printf -- "---\\nthemis: 0.2\\nstack: node-ts\\n---\\n# X\\n" > "$T/bad.md"\n    "${C[@]}" check "$T/bad.md"; echo "check-invalid exit=$?"\n\n    cp examples/getting-started/spec.md "$T/"\n    cd "$T" && git init -q\n    "${C[@]}" init; echo "init exit=$?"\n    "${C[@]}" status --json; echo "status exit=$?"\n    ls .themis\n    \'\n\nExpected:\n\n| Flow | Expected |\n|---|---|\n| check-valid | exit 0, `valid (6 acceptance criteria, ...)` |\n| check-invalid | exit 1, errors `invalid-field`, `unsupported-version`, `no-acceptance-criteria` |\n| init | exit 0, writes `.themis/agents/*.md`, `.gitignore`, installs dependencies (needs network for `npm install`), ends with `next: themis plan` |\n| status | exit 0, JSON with `spec.ok: true`, `plan: "absent"`, `contract.state: "absent"` |\n| .themis | contains `agents`, `guard.mjs`, `local.json`, `verify.sh` |\n\nIf the change touches a command not listed above (for example `new`, `approve`, a new flag or a new diagnostic), add a run of that command against the temp project, with its expected exit code and output, to the report.\n\n## 4. Report\n\nReply with:\n\n- each command with its exit code;\n- the relevant output lines for every flow, and any deviation from the table;\n- the `Verified:` trailer value: `verify` when steps 1 to 3 passed, `tests` when only step 1 ran, `none (<reason>)` otherwise.\n',ui=`# The last line of every commit message says how the change was checked:
#   Verified: verify          verify skill or end-to-end run passed
#   Verified: tests           automated tests only
#   Verified: manual          a human tried it
#   Verified: none (<reason>) not verified, and why
git commit -m "feat: add the agent playbook" -m "Verified: tests"

# How was each recent commit verified?
git log -20 --format='%h %<(10,trunc)%(trailers:key=Verified,valueonly,separator=%x20) %s'

# Commits that shipped unverified, with their reason
git log --grep='^Verified: none' --format='%h %s  [%(trailers:key=Verified,valueonly,separator=%x20)]'
`,hi=`# Two reviewers with different roles:
#   Codex     the long-term reviewer for deep and critical reviews (a branch, a plan, security);
#             one call per review, its subscription quota is limited.
#   opencode  free models for smaller diffs, control runs and scoped tasks.

# Size the model to the task, and use only providers that keep no data and do not train on it:
#   light     explain a snippet, a small question, a trivial edit      one small free model
#   standard  review of a small or medium diff, a scoped task           one stronger free model
#   deep      branch review, debug after failed hypotheses, a plan      Codex, or two free models
#                                                                       in parallel, cross-checked

# Review a diff, read-only: opencode's built-in \`plan\` agent cannot edit files,
# but it can still run shell commands. The prompt forbids every writing command,
# and no review runs while a build or test run is using the same tree.
# If the repo has a REVIEW.md, send it from the base branch, never from the working tree.
# \`git diff main\` covers commits and uncommitted work; an empty diff is no review.
git diff main > /tmp/change.diff
test -s /tmp/change.diff || echo "empty diff: nothing to review"
git show main:REVIEW.md > /tmp/review-rules.md 2>/dev/null
opencode run --agent plan -m <model> \\
  "Review the diff in /tmp/change.diff for correctness bugs, unescaped input and missing tests. \\
If /tmp/review-rules.md is not empty, apply the rules whose trigger matches a path in the diff. \\
Give each finding a file:line, a severity (must-fix / should-fix / nit) and a concrete failure scenario. \\
Do not edit files. Do not run build, clean, install or any other command that writes; \\
if you must compile, use a separate build directory." > review.md

# Delegate a scoped task with write access, only inside a separate git worktree.
opencode run -w <worktree-name> -m <model> "<task, files, what is already ruled out>"

# Codex for deep or critical reviews: read-only sandbox, findings written to a file.
codex exec -s read-only -C . -o codex.md "<same review prompt>"
# \`codex review --base main\` is quicker but takes no rules file: prefer \`codex exec\`
# with the same prompt when the repo has a REVIEW.md.
`,mi=`themis new                # spec skeleton: goal, verify steps, limits, acceptance criteria
themis check              # every problem with line, column and field
themis init               # generates the judge: verifier + guard, no AI involved

themis plan               # planner agent proposes the task graph
themis approve plan       # gate 1: does the plan make sense?

themis tests              # test-author agent writes tests/acceptance/
git add -A && git commit -m "themis contract"
themis approve tests      # gate 2: digests of tests, spec, verifier and config go into .themis/lock.json
git add -A && git commit -m "lock contract"

themis run                # each task in its own worktree, verifier exit 1 = retry, 2 = blocked
themis status             # gates, tasks, iterations against max_iterations, cost

themis retro              # retro agent turns misses into instruction changes
themis approve retro      # gate 3: apply them, then commit .themis/agents/
`,gi=`# Never test a dev server you did not start: another session or agent may own the port.
PORT=$(node -e "const s=require('net').createServer();s.listen(0,()=>{console.log(s.address().port);s.close()})")
npm run dev -- --port $PORT --strictPort > dev.log 2>&1 &
PID=$!
until curl -fs -o /dev/null http://localhost:$PORT/; do
  kill -0 $PID 2>/dev/null || { tail -20 dev.log; exit 1; }   # server died: fail, don't wait forever
  sleep 0.5
done

# Before testing, check a marker that proves the server is yours (here, the page title).
curl -fs http://localhost:$PORT/ | grep -q '<title>My App' || { echo "not my server"; exit 1; }

# ... run the checks, then always stop what you started.
kill $PID
`,fi=`// Telemaco runs real JavaScript and a real DOM, but has no layout engine:
// getBoundingClientRect returns placeholders and getComputedStyle returns defaults.
// So assert on structure and state, never on pixels, sizes or computed colors.
// browser_evaluate does not await Promises: return plain values, and read async
// results in a second call (store them on window in the first one).

// 1. browser_navigate to http://localhost:$PORT/ and check the title first.
document.title.startsWith('My App') || 'not my server: stop';

// 2. browser_evaluate: drive the app through the DOM and return evidence.
(() => {
  const input = document.querySelector('#search');
  input.value = 'invoices';
  input.form.requestSubmit();          // fires the app's own submit handler
  return {
    results: document.querySelectorAll('.result').length,
    empty: !!document.querySelector('.empty-state'),
  };
})();

// Out of scope: canvas drawing and hit-testing, visual layout, phone widths.
// Cover canvas logic with unit tests; ask a human for the visual check (Verified: manual).
`,bi=`# New project: start with a verify skill from day one.
mkdir -p .claude/skills/verify
cp <path-to-your-template>/SKILL.md .claude/skills/verify/SKILL.md
# Track the skill, ignore the rest of .claude/ (in .gitignore):
#   .claude/*
#   !.claude/skills/

# Work or client repo you don't own: keep the skill local, never commit it.
# .git/info/exclude works like .gitignore but is never shared.
echo ".claude/skills/verify/" >> .git/info/exclude
git status --short .claude   # must print nothing
`,vi="## 2. End-to-end (Playwright)\n\nBefore running the suite, make sure the port in `playwright.config` is free. With `reuseExistingServer: true`, Playwright happily tests whatever already answers on that port: another project, or this project on another branch.\n\n    PORT=<port from playwright.config webServer.url>\n    if lsof -tiTCP:$PORT -sTCP:LISTEN >/dev/null; then\n      echo \"port $PORT is busy: stop, do not test someone else's server\"; exit 1\n    fi\n    BROWSER=none npx playwright test\n\n- `BROWSER=none` keeps `vite --open` from opening browser windows during the run.\n- `Executable doesn't exist at ...` means the browser build for this Playwright version is missing. It is setup, not a test failure: run `npx playwright install chromium`, then run the suite again. Do not count it as one of the three rounds.\n- Use selectors that do not depend on the UI language (roles with stable names, `data-*` hooks), or set `use: { locale: 'en-US' }` in the config.\n",yi=`# Playwright MCP to drive local apps with real mouse and keyboard input.
# Pin the version: the server is fetched by npx on every start.
# Pick the current one with \`npm view @playwright/mcp version\`.
# --scope user:   one setup for every project, not just the current one.
# --headless:     no window stealing focus while you work.
# --isolated:     in-memory profile, so parallel sessions don't fight over one profile.
#                 It also means first-run dialogs show up on every launch.
# --caps vision:  coordinate tools such as browser_mouse_drag_xy, needed for canvas work.
# --output-dir:   screenshots and traces go to a cache folder, not into the repo.
PLAYWRIGHT_MCP_VERSION=0.0.85
claude mcp add --scope user playwright -- npx -y "@playwright/mcp@$PLAYWRIGHT_MCP_VERSION" \\
  --browser chrome --headless --isolated --caps vision \\
  --viewport-size 1280x800 --output-dir "$HOME/.cache/playwright-mcp"

# The browser follows the system locale, so the app's UI may be translated:
# select by ids, classes, roles or shortcuts, never by visible text.
# If the app has no stable hooks yet, force a locale with a config file:
#   { "browser": { "contextOptions": { "locale": "en-US" } } }
# and add --config "$PWD/playwright-mcp.json" to the command above.
`,wi=`// A real browser opens the app in the system language: on an Italian Mac the
// "Rectangle" tool is titled "Rettangolo", and a selector on the label breaks.

// Fragile: depends on the UI language.
document.querySelector('#toolbar button[title^="Rectangle"]');

// Robust: depends on structure or on attributes you own.
document.querySelector('#toolbar [data-tool="rectangle"]');
document.querySelector('#toolbar button:nth-of-type(3)');

// If the app has no stable hooks yet, force the locale instead
// (Playwright: contextOptions.locale = "en-US") and say so in the verify skill.
`,ki=`# \`biome check .\` also walks untracked local folders (editor settings, scratch dirs)
# and fails on files that are not part of the project.
# Lint exactly what git knows about: tracked files plus new, non-ignored ones.
git ls-files -z -co --exclude-standard \\
  | xargs -0 pnpm exec biome check --files-ignore-unknown=true --no-errors-on-unmatched
`,Si=`# A Stop hook that only watches: it runs at the end of every turn, never
# blocks, never prints, always exits 0. It reads the session transcript and
# appends one JSON line per repo the turn edited, with a verdict:
#
#   verify     the repo's \`verify\` skill ran after the last edit
#   commands   a test/build/lint/typecheck command ran after the last edit
#   docs-only  only documentation files were edited
#   none       code was edited and nothing checked it afterwards
#
# Only edits made by this session count (Edit, Write, NotebookEdit calls in
# its own transcript), so other sessions on the same repo raise no false alarms.

# Merge this into the "hooks" object of ~/.claude/settings.json, next to your
# other hooks: do not overwrite the file. The guard matters: a Stop hook that
# exits 2 sends the agent back to work, and python3 exits 2 when the script is
# missing, so a hook meant to only watch would block every turn.
{
  "Stop": [
    {
      "hooks": [
        {
          "type": "command",
          "command": "f=\\"$HOME/.claude/hooks/verify-gate.py\\"; [ -f \\"$f\\" ] && python3 \\"$f\\"; exit 0",
          "timeout": 10
        }
      ]
    }
  ]
}

# After a week or two, read the verdicts per repo before deciding to enforce:
python3 ~/.claude/hooks/verify-gate.py --report
`,Ii=`<!--
Copy it to <repo>/REVIEW.md, replace the placeholders, delete this comment.

How it is used: the reviewer (Codex, opencode, /code-review) gets the diff plus
this file read from the base branch (\`git show <base>:REVIEW.md\`), never from
the branch under review, so a change cannot rewrite the rules that judge it.
Change REVIEW.md in its own commit, never together with the code it judges.

Writing rules:
- Every rule comes from a real bug (cite the fix commits) or a stated project
  constraint (cite CLAUDE.md, an ADR, a spec). No generic advice.
- A rule must be checkable from a diff: concrete trigger paths, concrete check.
- Keep it under about 15 rules. When a bug slips through review, add or sharpen
  a rule; when a rule never triggers or only produces noise, delete it.
-->

# Review guide: <PROJECT>

Check only the rules whose trigger matches a path in the diff. For each finding, name the rule (R1, R2, ...) or say "outside REVIEW.md" when it is a bug no rule covers. Report real defects with a concrete failure scenario; skip anything listed under "Do not flag".

## Rules

### R1: <short title>
Trigger: <paths or globs>
Check: <what must hold in the diff>
Why: <the failure it prevents> (fixes: <sha>, <sha> | source: <CLAUDE.md, ADR, spec section>)

## Do not flag

- Formatting, import order and lint-level style: <linter> enforces them in CI.
- <Deliberate convention that looks wrong but is intended, with its source.>
`,Ai=`# Everything that enters the transcript goes to the model provider and cannot
# be taken back. Check secrets by name or count, never by value.
ENV_FILE=path/to/your/env/file

# Never: these print values into the conversation.
#   cat "$ENV_FILE"    grep TOKEN "$ENV_FILE"    env    printenv    echo "$API_KEY"

test -r "$ENV_FILE" || echo "cannot read $ENV_FILE"

# Is the key there? Exit code only.
grep -q '^STRIPE_API_KEY=' "$ENV_FILE" && echo present || echo missing

# How many times is it defined? A count, no value.
grep -c '^STRIPE_API_KEY=' "$ENV_FILE"

# Which keys exist? Names only.
grep -o '^[A-Z_]*=' "$ENV_FILE"

# Anchor the pattern to the exact key, and still never print the line:
#   grep STRIPE "$ENV_FILE"                  also hits STRIPE_WEBHOOK_SECRET, and prints its value
#   grep -c '^STRIPE_API_KEY=' "$ENV_FILE"   one key, a count, no value

# If a value does get printed: say so at once and rotate the secret.
`,Ti=`# Improvement log

What in this setup (rules, hooks, scripts, release flows) should get better.
One entry per issue, newest at the bottom. Each fix is its own task and branch.

Status: \`open\`, \`done <sha or PR>\`, or \`dropped (<reason>)\`.

## YYYY-MM-DD: <short title of what went wrong>

- **What happened:** the agent committed before the user confirmed, against
  the commit rule. Caught at once, nothing was pushed.
- **Proposal:** a hook on \`git commit\` that always asks for confirmation, so
  the rule no longer depends on the agent remembering it.
- **Status:** open

## YYYY-MM-DD: <a release step that is still manual>

- **What happened:** the release script tagged a version with no changelog
  section; someone noticed by hand.
- **Proposal:** the script refuses to start when the changelog has no section
  for the version.
- **Status:** done <sha or PR>
`,zi=`# The global settings file lives in a git repo and is symlinked on every machine:
#   ~/.claude/settings.json -> <your-config-repo>/claude/settings.json
# Project-specific settings (permissions, domains, auto mode environment) go in
# the project instead, and stay out of git:
#   <repo>/.claude/settings.local.json

# A SessionStart hook in the global settings: if the shared file has uncommitted
# changes, the agent sees a warning before anything else. It never blocks.
{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "d=\\"$HOME/path/to/your-config-repo\\"; [ -d \\"$d/.git\\" ] || exit 0; git -C \\"$d\\" diff --quiet -- claude/settings.json && exit 0; echo 'WARNING: the shared global settings have uncommitted changes. Tell the user and show the diff stat. Project settings belong in the project .claude/settings.local.json.'; exit 0",
            "timeout": 5
          }
        ]
      }
    ]
  }
}

# The matching rule in the global CLAUDE.md:
#   Never write project-specific settings into the global settings file:
#   it is shared between machines. Use the project's .claude/settings.local.json.
`,xi=`# Merge a pull request only once its checks have shown up and passed.
pr="$1"

# Right after \`gh pr create\` the checks may not be registered yet:
# "no checks reported" means "wait", not "green".
for attempt in $(seq 1 12); do
  gh pr checks "$pr" 2>&1 | grep -q 'no checks reported' || break
  sleep 5
done

if gh pr checks "$pr" 2>&1 | grep -q 'no checks reported'; then
  # Still nothing after a minute: fine only when no workflow runs on PRs.
  if grep -qs 'pull_request' .github/workflows/*.yml .github/workflows/*.yaml; then
    echo "workflows run on pull requests but none reported: stop and ask" >&2
    exit 1
  fi
  echo "no CI on this repo"
else
  gh pr checks "$pr" --watch --fail-fast || {
    echo "a check failed: report it, do not merge" >&2
    exit 1
  }
fi

# A green review that took seconds and wrote nothing did not review:
# open its log before trusting it.
gh pr checks "$pr"
`,Ci="Alberto Barrago",xt="Senior Software Engineer",lt=i("Cagliari, Italy"),Ct="albertobarrago@gmail.com",vt="albertobarrago_cv.pdf",Pi=i("Senior Software Engineer with a product-builder mindset, turning ideas into scalable, production-ready tools that solve real-world problems."),qi={frontend:["Angular","React","Vanilla JS"],backend:["Node.js","Fastify","FastAPI","Flask","Spring Boot"],apple:["Swift","SwiftUI","SwiftData","AppKit","iOS/macOS"],database:["MongoDB","Oracle","MySQL"],devops:["Docker","GitHub/GitLab CI","Azure DevOps"],tools:["Git","Neovim","tmux","Zed"],ai:["LLM Integration","Prompt Engineering","AI Agents"]},Mi=[{role:"Tech Leader / Senior Software Engineer",company:"C22 Consulting",period:i("2026 - Present"),highlight:i("Leading React, iOS, and Java architecture across active projects; mentoring developers and driving staff engineering practices. Researching and benchmarking custom LLM solutions and AI workflows with Claude and MCP")},{role:"Senior Software Engineer / DevOps",company:"Minsait/Indra",period:"2023 - 2025",highlight:i("Angular component library for 6+ teams, DevOps ownership, CI/CD optimization -30% deploy time")},{role:"Senior Software Developer",company:"Softfobia",period:"2022 - 2023",highlight:i("Led full-stack teams, 20% load time improvement")},{role:"Software Developer",company:"Accenture",period:"2021 - 2022",highlight:i("Kafka microservices architecture, Angular 12 apps")},{role:"Software Developer",company:"Sinossi",period:"2016 - 2021",highlight:i("Mobile apps for Deutsche Bank, TIM (Fortune 500)")}],Li=[{name:"Markasso",description:i("A fast, minimal, keyboard-first whiteboard engine for the browser. Marker + Picasso. No framework. No runtime. Just canvas."),url:"https://markasso.it",language:"TypeScript (0 deps)",badges:[{href:"https://mcprush.com/to/markasso-mcp?ref=badge",src:"https://mcprush.com/badge/markasso-mcp/score.svg",alt:i("Markasso MCP on mcprush")}]},{name:"Iris",description:i("A native macOS mail and calendar app with a Rust core: Gmail, Microsoft and any IMAP account in one inbox, with your mail kept on your Mac."),url:"https://github.com/AlbertoBarrago/iris",language:"Swift + Rust"},{name:"Telemaco",description:i("A headless browser engine in Rust: real JavaScript, real DOM, native layout and paint, speaking the Chrome DevTools Protocol. No Chromium required."),url:"https://github.com/AlbertoBarrago/telemaco",language:"Rust"},{name:"GitLab Alert",description:i("A native macOS menu bar companion for GitLab: merge requests, issues, failed pipelines and background notifications. Built with SwiftPM, no Xcode project."),url:"https://github.com/AlbertoBarrago/gitlab-alert",language:"Swift"},{name:"RSS-Reader",description:i("A lightweight, native macOS RSS Reader app built with Swift. Lives in your menu bar: clean, minimal, no bloat."),url:"https://github.com/AlbertoBarrago/RSS-Reader",language:"Swift"},{name:"Timelog",description:i("A lightweight time-tracking app for iOS and macOS built with SwiftUI and SwiftData."),url:"https://github.com/AlbertoBarrago/Timelog",language:"Swift"},{name:"DockDock",description:i("A native macOS utility that shows live window previews when you hover over Dock icons."),url:"https://github.com/AlbertoBarrago/DockDock",language:"Swift"},{name:"Sgommello",description:i("Break reminder for macOS: a monster breaks your screen until you take a real break."),url:"https://github.com/AlbertoBarrago/Sgommello",language:"Swift"}],Ei=[{name:"wir",description:i("What Is Running - Port and Process Inspector."),install:"brew install AlbertoBarrago/tap/wir",url:"https://github.com/AlbertoBarrago/wir",tap:"AlbertoBarrago/tap"},{name:"jm",description:i("Switch between JDKs registered with macOS. Primary shell command: jm."),install:"brew install AlbertoBarrago/tap/jm",url:"https://github.com/AlbertoBarrago/jm",tap:"AlbertoBarrago/tap"},{name:"serval",description:i("Local-first CLI that estimates the blast radius of a code change. Primary shell command: serval."),install:"brew install AlbertoBarrago/tap/serval",url:"https://github.com/AlbertoBarrago/serval",tap:"AlbertoBarrago/tap"},{name:"otelma",description:i("A local LLM inference runtime, built from scratch in Go for Apple Silicon on top of llama.cpp. Smaller and more didactic than Ollama, with a configurable unified memory budget as an explicit constraint. v0.2."),install:"brew install AlbertoBarrago/tap/otelma",url:"https://github.com/AlbertoBarrago/otelma",tap:"AlbertoBarrago/tap"}],_i=[{category:i("Free programming books"),items:[{name:"Free Programming Books (IT)",description:i("Curated list of free programming books in Italian."),url:"https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-it.md"},{name:"Free Programming Books (EN)",description:i("The full English-language list of free programming books."),url:"https://github.com/EbookFoundation/free-programming-books"},{name:"The Odin Project",description:i("Free, open-source full-stack curriculum (HTML/CSS, JS, Node, Rails)."),url:"https://www.theodinproject.com/"},{name:"freeCodeCamp",description:i("Free certifications and interactive courses for web development."),url:"https://www.freecodecamp.org/"}]},{category:i("Free courses & practice"),items:[{name:"Exercism",description:i("Free coding exercises and mentoring across 70+ languages."),url:"https://exercism.org/"},{name:"Roadmap.sh",description:i("Step-by-step roadmaps and guides for developer roles."),url:"https://roadmap.sh/"},{name:"Khan Academy",description:i("Free courses in math, science, and computer programming."),url:"https://www.khanacademy.org/"},{name:"MIT OpenCourseWare",description:i("Free lecture notes, exams, and videos from MIT courses."),url:"https://ocw.mit.edu/"}]},{category:i("Docs & references"),items:[{name:"MDN Web Docs",description:i("The definitive reference for web platform technologies."),url:"https://developer.mozilla.org/"},{name:"DevDocs",description:i("Fast, offline-capable API documentation browser."),url:"https://devdocs.io/"},{name:"Explain Shell",description:i("Paste a shell command to see what each part does."),url:"https://explainshell.com/"},{name:"Regex101",description:i("Online regex tester and debugger with live explanation."),url:"https://regex101.com/"}]},{category:i("Free tools & perks"),items:[{name:"Markasso",description:i("My own fast, minimal, keyboard-first whiteboard engine. Marker + Picasso. No framework. No runtime. Just canvas."),url:"https://markasso.it"},{name:"GitHub Student Pack",description:i("Free developer tools and credits for students."),url:"https://education.github.com/pack"},{name:"Coolors",description:i("Free color palette generator and contrast checker."),url:"https://coolors.co/"},{name:"TinyPNG",description:i("Compress PNG/WebP images for the web, free tier."),url:"https://tinypng.com/"}]}],xe={published:"2026-11-17",inspiration:{label:i("Verification loops, by the Claude Code team at Anthropic")},practices:[{id:"claude-md-rules",added:"2026-11-17",updated:"2026-11-18",status:"adopted",title:i("Verification rules in CLAUDE.md"),why:i("An agent does what its instructions make cheap. Without written rules it declares victory on a green build, retries a flaky test until it passes, or edits the test instead of the code. A few explicit lines in the global CLAUDE.md change the default for every session."),steps:[i("Put the rules in the global `~/.claude/CLAUDE.md`, so they apply to every repo, and keep project specifics in the repo's own CLAUDE.md."),i("Verify by running: the repo's `verify` skill when there is one, otherwise drive the real app."),i("Three rounds, then stop: after three failed fix attempts the agent hands over the failing output and what it tried."),i("Keep the checks out of reach: a change must never weaken the tests, lint config, `verify` skill or `REVIEW.md` that judge it in the same commit.")],snippets:[{id:"claude-md-rules",title:i("Excerpt for your CLAUDE.md"),language:"markdown",code:li}],diagrams:[{src:"/agent-playbook/verification-loop.svg",source:"/agent-playbook/verification-loop.markasso",alt:i("Flowchart: the agent makes a change and verifies it by running the app. If it passes, the change is ready for testing with a Verified commit stamp. If not, the agent fixes the code and verifies again, up to three rounds, then stops and brings in the human."),caption:i("The loop these rules describe.")}]},{id:"verify-skill",added:"2026-11-17",status:"adopted",title:i("A verify skill in every repo"),why:i('"Run the app" means something different in every repo. A `verify` skill writes it down once: the cheap checks, how to boot the real thing, which flows to drive and what to expect, so the agent collects evidence instead of guessing.'),steps:[i("Copy the template to `<repo>/.claude/skills/verify/SKILL.md` and replace every placeholder; delete the sections that do not apply."),i("Track it in git: ignore `.claude/*` but not `.claude/skills/`."),i("Run it twice in a row on a clean main before trusting it: it is your smoke test harness, it must be fast and deterministic."),i("Say what is out of scope (paid API calls, deploys, what the tools cannot see) and when to ask a human instead."),i("Every new project starts with `.claude/skills/verify` from the template, on day one."),i("In work or client repos you don't own, keep the skill local with `.git/info/exclude` and never commit it.")],snippets:[{id:"verify-skill-template",title:i("Template"),language:"markdown",code:ci},{id:"verify-skill-kickoff",title:i("Kickoff, and local-only skills for repos you don't own"),language:"bash",code:bi},{id:"verify-skill-playwright-e2e",title:i("Section for an end-to-end Playwright suite"),language:"markdown",code:vi},{id:"verify-skill-markasso",title:i("Real example: Markasso, a web app driven through Playwright MCP"),language:"markdown",code:di,origin:{label:"Markasso",url:"https://github.com/AlbertoBarrago/markasso"},collapsed:!0},{id:"verify-skill-themis",title:i("Real example: Themis, a CLI driven in a temp project"),language:"markdown",code:pi,origin:{label:"Themis",url:"https://github.com/AlbertoBarrago/themis"},collapsed:!0}]},{id:"verified-trailer",added:"2026-11-17",status:"adopted",title:i("A Verified trailer on every commit"),why:i("After the fact, nobody remembers whether a commit was run, tested or just built. A one-line trailer records it, and because `none` is allowed, unverified commits stay honest and easy to find."),steps:[i("End every commit message with `Verified: verify`, `tests`, `manual` or `none (<reason>)`."),i("Let the `verify` skill's report tell the agent which value to use."),i("Query it with `git log` trailers: no tooling needed.")],snippets:[{id:"verified-trailer",title:i("Format and queries"),language:"bash",code:ui}]},{id:"verify-gate",added:"2026-11-18",status:"trial",title:i("A Stop hook that watches before it blocks"),why:i('Rules say "verify before you are done", but nothing tells you how often a session ends without it. A Stop hook can measure that. Blocking straight away would punish every false positive, so the first version only watches and writes down what it saw.'),steps:[i("Run it at the end of every turn: it reads the session transcript and logs one verdict per edited repo, `verify`, `commands`, `docs-only` or `none`."),i("Count only the edits of the current session, so other sessions on the same repo cannot raise false alarms."),i("Never block, never print, always exit 0: a broken hook must not break the session."),i("Read the report after a week or two, fix the false positives, and only then decide whether to block turns that end on `none`.")],snippets:[{id:"verify-gate-hook",title:i("Registration and report"),language:"bash",code:Si}]},{id:"browser-tool",added:"2026-11-17",updated:"2026-11-20",status:"trial",title:i("Choosing the browser tool"),why:i("A verify skill is only as good as the browser that drives it. We ran one real test on Markasso's canvas: draw a rectangle, then check that it landed in localStorage. The results decided which tool does what."),steps:[i("Telemaco: FAIL. No layout engine, and `browser_evaluate` does not await Promises."),i("chrome-devtools-mcp: PASS only with synthetic events dispatched from a script, since it has no drag at coordinates; about 36 s."),i("Playwright MCP: PASS with real mouse input (`browser_mouse_drag_xy`), about 24 s. On the first try it even hit a panel lying over the canvas, exactly as a real user would."),i("Decision, written in the global CLAUDE.md: Telemaco stays for reading the web, search and stealth fetches; driving and verifying local apps moved to Playwright MCP, pinned, headless and isolated. Markasso's verify skill now draws on the canvas with real mouse input, and Telemaco 0.3.0 dropped everything else: no CDP server, no scrape, no remote.")],snippets:[{id:"playwright-mcp-setup",title:i("Playwright MCP for local apps"),language:"bash",code:yi,origin:{label:"Playwright MCP",url:"https://github.com/microsoft/playwright-mcp"}}]},{id:"second-opinion",added:"2026-11-17",updated:"2026-11-20",status:"trial",title:i("A second opinion with Codex or opencode"),why:i("An agent reviewing its own diff shares its own blind spots. A second model with a fresh prompt finds a different set of bugs, as long as you give it the code, not your conclusion, and treat its output as input, not truth."),steps:[i("Codex is the long-term reviewer for deep and critical reviews, one call per review because its quota is limited; opencode's free models take smaller diffs, control runs and scoped tasks."),i("Size the model to the task: light for a quick question, standard for a small or medium diff, deep for a branch, a plan or a debug session, where two free models run in parallel and you cross-check them."),i("Ask before running it, and say what you send and why."),i("When the repo has a `REVIEW.md`, send it read from the base branch and ask the reviewer to apply the rules whose trigger matches the diff."),i("Read-only by default: opencode's `plan` agent or Codex's `read-only` sandbox. Write access only inside a separate git worktree."),i("Read-only is not harmless: the `plan` agent blocks file edits, not shell commands. The prompt forbids build, clean, install and any other writing command, compiling uses a separate build directory, and no review runs while a build or test run is using the same tree."),i("A subagent that works on another repo creates its own worktree there with `git worktree add`: the agent tool's worktree isolation only covers the session's repo."),i("Use only models whose provider keeps no data and does not train on it, and never send secrets or client code you may not share."),i("Verify every finding against the code, fix what is real, and write down what you rejected and why.")],snippets:[{id:"second-opinion",title:i("Commands"),language:"bash",code:hi}]},{id:"review-md",added:"2026-11-18",updated:"2026-11-20",status:"trial",title:i("A REVIEW.md the change cannot rewrite"),why:i("A generic review prompt finds generic issues. A `REVIEW.md` tells the reviewer what breaks in this code, and because it is always read from the base branch, a change cannot soften the rules that judge it."),steps:[i("Give the reviewer the diff plus `git show <base>:REVIEW.md`, never the copy in the branch under review."),i("Every rule comes from a real bug, citing the fix commits, or from a stated project constraint. No generic advice."),i("Make each rule checkable from a diff: a trigger on paths, a concrete check, and why it exists."),i("Keep it under about 15 rules: add or sharpen one when a bug slips through review, delete the ones that never trigger or only produce noise."),i("No `REVIEW.md` yet? When the agent proposes a review, it also proposes a first version built from the `fix:` commits in `git log`, citing their hashes. It only proposes: the file is written after a human says yes."),i("When a fix corrects a bug that an earlier review missed, the agent proposes the rule to add or sharpen: trigger, check, and the fix commit."),i("Change `REVIEW.md` in its own commit, never together with the code it judges.")],snippets:[{id:"review-md-template",title:i("Template"),language:"markdown",code:Ii}]},{id:"improvement-log",added:"2026-11-20",status:"trial",title:i("An improvement log for the setup itself"),why:i("Rules get skipped, hooks miss a case, a release step stays manual until it breaks. Fixed on the spot, each lesson is lost; fixed in the middle of another task, it widens the diff. A short log keeps them in one place until each gets its own fix."),steps:[i("Keep one file next to the agent's rules, one entry per issue: what happened, the proposed fix, a status (`open`, `done <sha or PR>`, `dropped (<reason>)`)."),i("The agent adds an entry when something breaks, a rule gets skipped, or a step turns out manual and fragile, and says so in one line."),i("Each fix is its own task and branch; close the entry with its commit or PR."),i("When there is time to improve the setup, start from the `open` entries instead of from memory."),i("Prefer fixes that make a rule enforced rather than remembered: a hook or a script check beats another line of instructions.")],snippets:[{id:"improvement-log",title:i("Template"),language:"markdown",code:Ti}]},{id:"themis-gates",added:"2026-11-17",status:"adopted",title:i("Themis: gates and a locked contract"),why:i("For larger work, rules are not enough: the agent must not be able to move the goalposts. Themis turns a spec into acceptance tests, locks them by digest, and only then lets agents write code that a separate verifier judges."),steps:[i("Write the spec: goal, verify steps, limits, acceptance criteria."),i("Approve the plan (gate 1) and the tests (gate 2): approving the tests records the digests of tests, spec, verifier and config in `.themis/lock.json`, and a guard rejects any change to them."),i("Run: each task works in its own worktree; the verifier's exit code says retry or blocked, and `max_iterations` caps the attempts."),i("Close with a retro (gate 3): misses become changes to the agents' instructions.")],snippets:[{id:"themis-gates",title:i("The gated flow"),language:"bash",code:mi,origin:{label:"Themis",url:"https://github.com/AlbertoBarrago/themis"}}],diagrams:[{src:"/agent-playbook/themis-pipeline.svg",source:"/agent-playbook/themis-pipeline.markasso",alt:i("Flowchart of the Themis pipeline: spec, plan, locked contract, worker, verifier with retries and a guard on the locked checks, failed or blocked after max iterations, reviewer on the committed diff, merge, retro."),caption:i("The Themis gated pipeline: the checks are locked before the worker starts.")}]}],pitfalls:[{id:"dev-server-port",added:"2026-11-17",title:i("The dev server port belongs to someone else"),why:i("Several sessions and agents run at once. An agent that finds port 5173 busy may happily test the server another agent started, on different code, and report a pass that means nothing."),steps:[i("Pick a free port at runtime and start with `--strictPort`, so a race fails instead of silently moving."),i("Fail the wait loop if your own process dies."),i("Check a marker that proves the server is yours (the page title, a health payload) before testing, and never stop a server you did not start."),i("Playwright with a fixed port and `reuseExistingServer` has the same trap: check that the port is free before the suite runs.")],snippets:[{id:"dev-server-free-port",title:i("Free port, strict, checked"),language:"bash",code:gi}]},{id:"telemaco-no-layout",added:"2026-11-17",title:i("Telemaco has a DOM, not a layout"),why:i("Telemaco runs real JavaScript and a real DOM but no layout engine: sizes are placeholders and computed styles come back as defaults. Canvas hit-testing and visual checks cannot be driven from it, `browser_evaluate` returns before a Promise settles, and pretending otherwise produces false passes."),steps:[i("Assert on structure and state: titles, element counts, text, console errors."),i("Drive forms through the DOM, for example `form.requestSubmit()`."),i("Cover canvas logic with unit tests, and ask a human for visual and phone-width checks (`Verified: manual`).")],snippets:[{id:"telemaco-dom-check",title:i("A DOM-only check"),language:"javascript",code:fi,origin:{label:"Telemaco",url:"https://github.com/AlbertoBarrago/telemaco"}}]},{id:"ui-language",added:"2026-11-17",title:i("A real browser speaks the system language"),why:i('A real Chrome opens the app in the system language. On an Italian Mac a selector like `title^="Rectangle"` finds nothing, because the button now reads "Rettangolo", and the check fails for a reason that has nothing to do with the change.'),steps:[i("Prefer selectors that do not depend on the language: structure, roles, `data-*` hooks you own."),i("When the app has no stable hooks yet, force the `en-US` locale in the browser tool and say so in the verify skill.")],snippets:[{id:"language-independent-selectors",title:i("Fragile and robust selectors"),language:"javascript",code:wi}]},{id:"lint-untracked",added:"2026-11-17",title:i("Untracked editor folders break the linter"),why:i('`biome check .` walks every folder in the working tree, including local editor settings and scratch directories that are not part of the project, and fails on them. The agent then "fixes" files nobody asked it to touch, or reports a red lint that is not real.'),steps:[i("Lint exactly what git knows about: tracked files plus new, non-ignored ones."),i("Use that command in the verify skill, so humans and agents run the same check.")],snippets:[{id:"biome-tracked-files",title:i("Lint only what git tracks"),language:"bash",code:ki}]},{id:"secrets-in-transcript",added:"2026-11-18",title:i("A secret printed once is already gone"),why:i("Whatever an agent prints enters the transcript, and the transcript goes to the model provider. A quick `cat .env` or a loose `grep` to check that a key exists is enough to ship its value out of your machine, and deleting the message afterwards does not take it back."),steps:[i("Write the rule in the global CLAUDE.md: never print anything that can hold a secret, so no `cat`, `head`, `env`, `printenv`, `echo` or plain `grep` on it."),i("Check a key by name or count only: `grep -q`, `grep -c`, or the list of key names."),i("Anchor the pattern to the exact key: a loose one matches other keys and prints their values."),i("If a value does get printed, the agent says so at once and the secret is rotated, not just deleted from the chat.")],snippets:[{id:"secret-key-checks",title:i("Checks that print no values"),language:"bash",code:Ai}]},{id:"global-settings-drift",added:"2026-11-20",title:i("Project settings leak into the global file"),why:i("Keeping the agent's global settings in a git repo, symlinked on every machine, gives you the same setup everywhere. It also means that a permission or an environment block written for one project silently lands in every session on every machine, and nobody notices until it gets in the way."),steps:[i("Write the rule in the global CLAUDE.md: project-specific settings go in the project's `.claude/settings.local.json`, never in the global file."),i("Add a `SessionStart` hook that warns when the shared settings file has uncommitted changes, so drift shows up at the start of the next session."),i("The hook only warns and always exits 0: the human decides whether to commit the change or move it into the project.")],snippets:[{id:"global-settings-guard",title:i("Rule and hook"),language:"bash",code:zi}]},{id:"pr-checks-not-a-pass",added:"2026-11-23",title:i('"No checks reported" is not a pass'),why:i("Right after a pull request is opened, its checks may not be registered yet. An agent that asks for their status at that moment gets an empty list and merges with no CI having run. A review job that errors out, or finishes in a few seconds without reviewing anything, is just as easy to read as green: one such job can keep failing silently for months."),steps:[i("Before merging, watch the checks until they have appeared and finished (`gh pr checks <n> --watch`)."),i('An empty list right after `gh pr create` means "not registered yet": retry for about a minute. Treat it as "no CI" only when the repo has no workflow that runs on pull requests.'),i("A failing review, or one that ran without reviewing (seconds long, no output), is reported to the human and never merged past.")],snippets:[{id:"pr-checks-wait",title:i("Wait for checks, then merge"),language:"bash",code:xi}]}],roadmap:[{title:i("Stop hook in observe mode"),sectionId:"verify-gate",summary:i("A global hook that logs when a session ends without verification, without blocking anything yet, so false positives surface before it ever enforces.")},{title:i("A REVIEW.md per repo"),sectionId:"review-md",summary:i("What the reviewer should look at for this code, always read from the base branch so a change cannot rewrite its own review rules.")},{title:i("Adopt Playwright MCP"),sectionId:"browser-tool",summary:i("Done: the verify skills that drive local apps moved from Telemaco to Playwright MCP, starting with Markasso.")},{title:i("Audit Telemaco"),sectionId:"browser-tool",summary:i("Done in Telemaco 0.3.0: it keeps what it does best, reading the web, search and stealth fetches through the CLI and the MCP server, and the CDP server, scrape and remote are gone.")},{title:i("One reviewer, several rounds"),summary:i("Tune a single reviewer and feed each round the findings and failures of the previous ones, instead of stacking parallel reviewers.")},{title:i("A diff-triggered reliability checklist"),summary:i("Checklist items with a trigger readable from a diff, matched through Serval's blast radius, so only the few relevant checks run on each change.")},{title:i("A hook that asks before every commit"),summary:i("The rule says never commit without the human's ok, and the agent still slipped once. A hook on `git commit` that always asks would make it enforced instead of remembered.")},{title:i("Guardrails for system-level changes"),summary:i("An agent that changes operating system defaults, such as which app opens a file type, triggers one confirmation dialog per change and can move unrelated defaults with it, like the web browser. The plan: probe a single change first, check the real effect instead of the command's exit status, and keep a backup to roll back to.")}],changelog:[{date:"2026-11-23",summary:i('A new pitfall: "no checks reported" right after opening a pull request is not a pass, and a review that ran without reviewing is not green. The roadmap gains guardrails for system-level changes made by an agent.'),sections:["pr-checks-not-a-pass"]},{date:"2026-11-20",summary:i("New name: How we build is now the Agent Playbook, at /agent-playbook/ with the `playbook` command. Old links and deep links still work: they redirect to the same section.")},{date:"2026-11-20",summary:i("The roadmap caught up with reality: Playwright MCP now drives the verify skills and Telemaco has been slimmed down, so both items point to the browser tool section, whose Markasso example is now the real Playwright skill."),sections:["browser-tool"]},{date:"2026-11-20",summary:i("A new practice, an improvement log for the setup itself, and a pitfall on project settings leaking into the shared global file. Read-only reviews now forbid writing commands too, and a repo without a REVIEW.md gets a first version proposed from its fix commits."),sections:["improvement-log","global-settings-drift","second-opinion","review-md"]},{date:"2026-11-18",summary:i("Two new practices, a Stop hook in observe mode and a REVIEW.md read from the base branch, and a pitfall on secrets in the transcript. The second opinion now sizes the model to the task, the browser tool decision is in the global rules, and the Playwright setup matches the real one."),sections:["verify-gate","review-md","secrets-in-transcript","second-opinion","browser-tool","claude-md-rules"]},{date:"2026-11-17",summary:i("First edition: six practices, four pitfalls and a roadmap, on a page of its own with a link for every section.")}]},Oe={github:"https://github.com/AlbertoBarrago",email:`mailto:${Ct}`,bsky:"https://bsky.app/profile/albzoser.bsky.social"},ct=si.version,$i=()=>{const e=document.createElement("a");e.href=`/${vt}`,e.download=vt,e.dispatchEvent(new MouseEvent("click"))};function G(e){return e.replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[o]??o)}const Ri=30;function X(e){return G(e).replace(/`([^`]+)`/g,"<code>$1</code>")}function Ye(e){return[...e.practices,...e.pitfalls]}function Oi(e=new Date){const o=t=>String(t).padStart(2,"0");return`${e.getFullYear()}-${o(e.getMonth()+1)}-${o(e.getDate())}`}function Di(e,o){return Math.round((Date.parse(`${o}T00:00:00Z`)-Date.parse(`${e}T00:00:00Z`))/864e5)}function Pt(e,o,t){const a=n=>{const r=Di(n,t);return r>=0&&r<=Ri};return e.added!==o&&a(e.added)?"new":e.updated&&a(e.updated)?"updated":null}function ji(e){return[e.published,...Ye(e).flatMap(t=>[t.added,t.updated??t.added]),...e.changelog.map(t=>t.date)].reduce((t,a)=>a>t?a:t)}function qt(e){return Ye(e).flatMap(o=>o.diagrams??[])}function Bi(e,o){return o<=0?0:(e%o+o)%o}const Ge="next-up",ze="changelog";function Ce(e){return`<time datetime="${e}">${st(e)}</time>`}function De(e,o,t,a="reader-nav-link"){return t?`<button class="${a}" type="button" data-action="goto-guide" data-target="${e}">${o}</button>`:`<a class="${a}" href="#${e}">${o}</a>`}const Ni=new Set(["markdown","text"]);function Ui(e,o){const t=`<button class="reader-action guide-copy" type="button" data-action="copy-snippet">${i("copy")}</button>`,a=`<div class="guide-snippet-bar"><span class="guide-snippet-lang">${G(e.language)}</span>${t}</div>`,n=e.origin?`<p class="guide-origin">${i("from")} ${e.origin.url?`<a class="terminal-link" href="${e.origin.url}" target="_blank" rel="noopener noreferrer">${G(e.origin.label)} ↗</a>`:G(e.origin.label)}</p>`:"",r=`${a}<pre class="guide-code${Ni.has(e.language)?" is-prose":""}"><code>${G(e.code)}</code></pre>${n}`;return e.collapsed?`<details class="guide-snippet"><summary class="guide-snippet-title">${X(e.title)}</summary>${r}</details>`:`<div class="guide-snippet"><div class="guide-snippet-title">${X(e.title)}</div>${r}</div>`}function Gi(e,o,{interactive:t,today:a}){const n={adopted:i("adopted"),trial:i("in trial")},r=Pt(e,o.published,a),s={new:i("new"),updated:i("recently updated")},c=e.updated&&e.updated!==e.added?`${i("updated")} ${Ce(e.updated)}`:`${i("added")} ${Ce(e.added)}`,u=`<button class="reader-action guide-anchor" type="button" data-action="copy-guide-link" data-target="${e.id}" aria-label="${i("Copy the link to this section")}: ${G(e.title)}">${i("copy link")}</button>`;return`<p class="guide-section-meta">${e.status?`<span class="guide-status is-${e.status}">${n[e.status]}</span>`:""}${r?`<span class="guide-badge">${s[r]}</span>`:""}<span>${c}</span>${u}</p>`}function yt(e,o,t,a){const n=qt(t),r=(e.diagrams??[]).map(s=>`<figure class="guide-figure">
	<a href="${s.src}" target="_blank" rel="noopener" data-action="open-diagram" data-diagram="${n.indexOf(s)}" aria-label="${i("Open diagram")}: ${G(s.caption)}"><img src="${s.src}" alt="${G(s.alt)}" loading="lazy" decoding="async"></a>
	<figcaption>${X(s.caption)} <a class="terminal-link" href="${s.source}" download>${i("Markasso source")}</a></figcaption>
</figure>`).join("");return`<section class="guide-section" aria-labelledby="${e.id}">
	<h2 class="guide-title" id="${e.id}"><span class="guide-number">${String(o+1).padStart(2,"0")}</span><span>${X(e.title)}</span></h2>
	${Gi(e,t,a)}
	<div class="guide-label">${i("why")}</div>
	<p class="guide-why">${X(e.why)}</p>
	<div class="guide-label">${i("how")}</div>
	<ol class="guide-steps" role="list">${e.steps.map(s=>`<li>${X(s)}</li>`).join("")}</ol>
	${e.snippets.map(s=>Ui(s)).join("")}
	${r}
</section>`}function Wi(e,o){const t="reader-toc-link",a=r=>`<ol class="reader-toc-list" role="list">${r.map(s=>`<li class="reader-toc-item">${De(s.id,`${s.label}${s.fresh?` <span class="guide-toc-dot" aria-label="(${i("recently updated")})">●</span>`:""}`,o.interactive,t)}</li>`).join("")}</ol>`,n=r=>r.map(s=>({id:s.id,label:X(s.title),fresh:!!Pt(s,e.published,o.today)}));return`<div class="guide-toc-group">${i("Practices")}</div>${a(n(e.practices))}
<div class="guide-toc-group">${i("Pitfalls")}</div>${a(n(e.pitfalls))}
<div class="guide-toc-group">${i("More")}</div>${a([{id:Ge,label:i("Next up")},{id:ze,label:i("Changelog")}])}`}function Mt(e){const{inspiration:o}=e,t=o.url?`<a class="terminal-link" href="${o.url}" target="_blank" rel="noopener noreferrer">${G(o.label)} ↗</a>`:`<em>${G(o.label)}</em>`;return`<p class="guide-meta">${i("Inspired by")} ${t} · ${i("updated")} ${Ce(ji(e))} · ${e.practices.length} ${i("practices")} · ${e.pitfalls.length} ${i("pitfalls")}</p>`}function Fi(e,o){const t=e.changelog[0],a=t?`<aside class="guide-latest"><span class="guide-label">${i("Latest change")}</span> ${Ce(t.date)}<p>${X(t.summary)}</p>${De(ze,`${i("see every change")} →`,o.interactive)}</aside>`:"",n=e.roadmap.map(s=>`<li><span class="guide-roadmap-title">${s.sectionId?De(s.sectionId,X(s.title),o.interactive):X(s.title)}</span><p>${X(s.summary)}</p></li>`).join(""),r=e.changelog.map(s=>{var c;return`<li>${Ce(s.date)}<p>${X(s.summary)}</p>${(c=s.sections)!=null&&c.length?`<p class="guide-changelog-sections">${s.sections.map(u=>{const w=Ye(e).find(k=>k.id===u);return w?De(u,X(w.title),o.interactive):""}).join(" · ")}</p>`:""}</li>`}).join("");return`<article class="guide">
<header class="guide-header">
	<h1 class="blog-title" id="guide-title" tabindex="-1">${i("Agent Playbook")}</h1>
	<p class="blog-intro">${i("A practical guide to how I work with coding agents. Each practice says why it matters, how to do it, and gives you a block to copy.")}</p>
	${Mt(e)}
	${a}
</header>

<h2 class="guide-part">${i("Practices")}</h2>
${e.practices.map((s,c)=>yt(s,c,e,o)).join("")}
<h2 class="guide-part">${i("Pitfalls we hit")}</h2>
${e.pitfalls.map((s,c)=>yt(s,c,e,o)).join("")}
<section class="guide-closing" aria-labelledby="${Ge}">
	<h2 class="guide-part" id="${Ge}">${i("Next up")}</h2>
	<ul class="guide-roadmap" role="list">${n}</ul>
</section>
<section class="guide-closing" aria-labelledby="${ze}">
	<h2 class="guide-part" id="${ze}">${i("Changelog")}</h2>
	<ol class="guide-changelog" role="list">${r}</ol>
</section>
</article>`}function Hi(e){const o=t=>`<ol role="list">${t.map(a=>`<li><button class="reader-nav-link" type="button" data-action="open-guide" data-target="${a.id}">${X(a.title)}</button></li>`).join("")}</ol>`;return`<div class="guide-card">
<div class="output-title">${i("Agent Playbook")}</div>
<p class="prose">${i("A practical guide to how I work with coding agents. Each practice says why it matters, how to do it, and gives you a block to copy.")}</p>
${Mt(e)}
<nav class="guide-index" aria-label="${i("Guide contents")}">
	<div class="utils-category">${i("Practices")}</div>${o(e.practices)}
	<div class="utils-category">${i("Pitfalls")}</div>${o(e.pitfalls)}
</nav>
<div class="output-links"><button class="inline-command command" type="button" data-action="open-guide">${i("open the guide")}</button></div>
</div>`}function Vi(e,o){const t=e.getContext("2d");if(!t)return()=>{};const a=8,n=5,r=32,s=24,c=12,u=40,w=20,k=3,I=12,l=5,q=7,W=4,F=.003,M=["#ff6b6b","#ff6b6b","#ffbd2e","#ffbd2e","#00ff41"],T=1e3/60;let h="waiting",y=0,D=3,E=parseInt(localStorage.getItem("spaceInvadersHigh")||"0",10),H=0,Q=0,g=0,z=[],x=[],$=[];function d(){const p=e.width||e.clientWidth||1,v=e.height||e.clientHeight||1;e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight);const S=e.width/p,ee=e.height/v;g=Math.max(0,Math.min(e.width-u,g*S));for(const te of z)te.x*=S,te.y*=ee;for(const te of x)te.x*=S,te.y*=ee;for(const te of $)te.x*=S,te.y*=ee;h!=="playing"&&(g=e.width/2-u/2)}d();const C=new ResizeObserver(d);C.observe(e);const j=()=>e.height-40;let L=1,b=0,N=40;const V=10,J=20;function R(){z=[];const p=a*(r+c)-c,v=(e.width-p)/2;for(let S=0;S<n;S++)for(let ee=0;ee<a;ee++)z.push({x:v+ee*(r+c),y:60+S*(s+c),row:S,alive:!0});L=1,b=0,N=40}let Y=0;const Z={};function ie(p){if(p.key==="Escape"){o();return}(h==="waiting"||h==="gameover"||h==="won")&&p.key==="Enter"&&(h="playing",y=0,D=3,x=[],$=[],g=e.width/2-u/2,R()),Z[p.key]=!0,(p.key===" "||p.key==="ArrowLeft"||p.key==="ArrowRight")&&p.preventDefault()}function we(p){Z[p.key]=!1}window.addEventListener("keydown",ie),window.addEventListener("keyup",we);function _e(p){if(h==="playing"){Z.ArrowLeft&&g>0&&(g-=l*p),Z.ArrowRight&&g<e.width-u&&(g+=l*p),g=Math.max(0,Math.min(e.width-u,g)),Y>0&&(Y=Math.max(0,Y-p)),Z[" "]&&Y===0&&(x.push({x:g+u/2-k/2,y:j()-I}),Y=15);for(let v=x.length-1;v>=0;v--){if(x[v].y-=q*p,x[v].y<0){x.splice(v,1);continue}for(const S of z)if(S.alive&&x[v]&&x[v].x<S.x+r&&x[v].x+k>S.x&&x[v].y<S.y+s&&x[v].y+I>S.y){S.alive=!1,x.splice(v,1),y+=10,y>E&&(E=y,localStorage.setItem("spaceInvadersHigh",String(E)));const ee=z.filter(te=>te.alive).length;ee>0&&(N=Math.max(4,Math.floor(40*(ee/(n*a)))));break}}if(z.every(v=>!v.alive)){h="won";return}if(b+=p,b>=N){b=0;let v=!1;for(const S of z)if(S.alive&&(L>0&&S.x+r+V>e.width-10||L<0&&S.x-V<10)){v=!0;break}if(v){L*=-1;for(const S of z)S.y+=J}else for(const S of z)S.x+=V*L;for(const S of z)if(S.alive&&S.y+s>=j()){h="gameover";return}}for(const v of z.filter(S=>S.alive))Math.random()<F*p&&$.push({x:v.x+r/2-k/2,y:v.y+s});for(let v=$.length-1;v>=0;v--){if($[v].y+=W*p,$[v].y>e.height){$.splice(v,1);continue}if($[v].x<g+u&&$[v].x+k>g&&$[v].y<j()+w&&$[v].y+I>j()&&($.splice(v,1),D--,D<=0)){h="gameover";return}}}}function $e(){if(t){if(t.fillStyle="#0a0a0a",t.fillRect(0,0,e.width,e.height),h==="waiting"){t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("SPACE INVADERS",e.width/2,e.height/2-60),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS ENTER TO START",e.width/2,e.height/2+10),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Arrows = Move | Fire = Shoot",e.width/2,e.height/2+50),t.fillText("ESC = Exit | High Score: "+E,e.width/2,e.height/2+78),t.textAlign="left";return}t.fillStyle="#00bfff",t.beginPath(),t.moveTo(g+u/2,j()),t.lineTo(g,j()+w),t.lineTo(g+u,j()+w),t.closePath(),t.fill();for(const p of z)p.alive&&(t.fillStyle=M[p.row],t.fillRect(p.x+4,p.y,r-8,s-4),t.fillRect(p.x+2,p.y+4,6,4),t.fillRect(p.x+r-8,p.y+4,6,4),t.fillRect(p.x+6,p.y-4,3,6),t.fillRect(p.x+r-9,p.y-4,3,6),t.fillRect(p.x,p.y+s-6,4,6),t.fillRect(p.x+r-4,p.y+s-6,4,6));t.fillStyle="#00ff41";for(const p of x)t.fillRect(p.x,p.y,k,I);t.fillStyle="#ff6b6b";for(const p of $)t.fillRect(p.x,p.y,k,I);t.fillStyle="#00ff41",t.font="22px VT323, monospace",t.textAlign="left",t.fillText("SCORE: "+y,10,24),t.textAlign="center",t.fillText("HIGH: "+E,e.width/2,24),t.textAlign="right",t.fillText("LIVES: "+"♥".repeat(D),e.width-10,24),t.textAlign="left",h==="gameover"&&(t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("GAME OVER",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+y,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO RESTART",e.width/2,e.height/2+60),t.textAlign="left"),h==="won"&&(t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("YOU WIN!",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+y,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO PLAY AGAIN",e.width/2,e.height/2+60),t.textAlign="left")}}function Re(p){Q===0&&(Q=p);const v=Math.min((p-Q)/T,3);Q=p,_e(v),$e(),H=requestAnimationFrame(Re)}return R(),H=requestAnimationFrame(Re),function(){cancelAnimationFrame(H),window.removeEventListener("keydown",ie),window.removeEventListener("keyup",we),C.disconnect()}}const pe=10,ve=20,wt=[{shape:[[1,1,1,1]],color:"#00bfff"},{shape:[[1,1],[1,1]],color:"#ffbd2e"},{shape:[[0,1,0],[1,1,1]],color:"#a855f7"},{shape:[[1,0,0],[1,1,1]],color:"#ff6b6b"},{shape:[[0,0,1],[1,1,1]],color:"#00ff41"},{shape:[[0,1,1],[1,1,0]],color:"#ff6b6b"},{shape:[[1,1,0],[0,1,1]],color:"#00ff41"}];function Yi(){const e=[];for(let o=0;o<ve;o++)e.push(new Array(pe).fill(null));return e}function Ki(e,o,t,a){for(let n=0;n<o.length;n++)for(let r=0;r<o[n].length;r++){if(!o[n][r])continue;const s=t+r,c=a+n;if(s<0||s>=pe||c>=ve||c>=0&&e[c][s])return!0}return!1}function Qi(e){const o=e.length,t=e[0].length,a=[];for(let n=0;n<t;n++){a.push([]);for(let r=o-1;r>=0;r--)a[n].push(e[r][n])}return a}function Ji(e){let o=0;for(let t=ve-1;t>=0;t--)e[t].every(a=>a!==null)&&(e.splice(t,1),e.unshift(new Array(pe).fill(null)),o++,t++);return o}function Xi(e,o){return e<=0?0:([0,100,300,500,800][e]||800)*o}function Zi(e){const o=Math.floor(e/10)+1,t=Math.max(5,45-(o-1)*4);return{level:o,dropInterval:t}}function eo(e,o){const t=e.getContext("2d");if(!t)return()=>{};let a="waiting",n=0,r=1,s=0,c=parseInt(localStorage.getItem("tetrisHigh")||"0",10),u=0,w=0;const k=1e3/60;let I=[],l=null,q=0,W=45;function F(){e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight)}F();const M=new ResizeObserver(F);M.observe(e);function T(){I=Yi()}function h(d,C,j){return Ki(I,d,C,j)}function y(){const d=wt[Math.floor(Math.random()*wt.length)];l={shape:d.shape.map(C=>[...C]),color:d.color,x:Math.floor((pe-d.shape[0].length)/2),y:0},h(l.shape,l.x,l.y)&&(a="gameover",l=null)}function D(){if(l){for(let d=0;d<l.shape.length;d++)for(let C=0;C<l.shape[d].length;C++){if(!l.shape[d][C])continue;const j=l.y+d;j>=0&&(I[j][l.x+C]=l.color)}E(),y()}}function E(){const d=Ji(I);d>0&&(n+=Xi(d,r),s+=d,{level:r,dropInterval:W}=Zi(s),n>c&&(c=n,localStorage.setItem("tetrisHigh",String(c))))}const H={};function Q(d){if(d.key==="Escape"){o();return}if((a==="waiting"||a==="gameover")&&d.key==="Enter"&&(a="playing",n=0,r=1,s=0,W=45,T(),y()),a!=="playing"||!l){H[d.key]=!0;return}if(d.key==="ArrowLeft")h(l.shape,l.x-1,l.y)||l.x--;else if(d.key==="ArrowRight")h(l.shape,l.x+1,l.y)||l.x++;else if(d.key==="ArrowDown")h(l.shape,l.x,l.y+1)?D():l.y++;else if(d.key==="ArrowUp"||d.key===" "){const C=Qi(l.shape);h(C,l.x,l.y)?h(C,l.x-1,l.y)?h(C,l.x+1,l.y)||(l.shape=C,l.x++):(l.shape=C,l.x--):l.shape=C}H[d.key]=!0,["ArrowLeft","ArrowRight","ArrowDown","ArrowUp"," "].includes(d.key)&&d.preventDefault()}function g(d){H[d.key]=!1}window.addEventListener("keydown",Q),window.addEventListener("keyup",g);function z(d){a!=="playing"||!l||(q+=d,q>=W&&(q=0,h(l.shape,l.x,l.y+1)?D():l.y++))}function x(){if(!t)return;t.fillStyle="#0a0a0a",t.fillRect(0,0,e.width,e.height);const d=e.width<520,C=d?20:200,j=d?96:60,L=Math.max(8,Math.min(Math.floor((e.height-j)/ve),Math.floor((e.width-C)/pe))),b=L*pe,N=L*ve,V=Math.floor((e.width-b)/2),J=Math.max(d?68:36,Math.floor((e.height-N)/2)+10);if(a==="waiting"){t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("TETRIS",e.width/2,e.height/2-60),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS ENTER TO START",e.width/2,e.height/2+10),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Arrows = Move | Up/Space = Rotate",e.width/2,e.height/2+50),t.fillText("ESC = Exit | High Score: "+c,e.width/2,e.height/2+78),t.textAlign="left";return}t.strokeStyle="#333",t.lineWidth=2,t.strokeRect(V-1,J-1,b+2,N+2);for(let R=0;R<ve;R++)for(let Y=0;Y<pe;Y++){const Z=V+Y*L,ie=J+R*L;I[R][Y]?(t.fillStyle=I[R][Y],t.fillRect(Z+1,ie+1,L-2,L-2)):(t.fillStyle="#111",t.fillRect(Z,ie,L,L),t.strokeStyle="#1a1a1a",t.lineWidth=.5,t.strokeRect(Z,ie,L,L))}if(l){t.fillStyle=l.color;for(let R=0;R<l.shape.length;R++)for(let Y=0;Y<l.shape[R].length;Y++){if(!l.shape[R][Y])continue;const Z=V+(l.x+Y)*L,ie=J+(l.y+R)*L;t.fillRect(Z+1,ie+1,L-2,L-2)}}t.fillStyle="#00ff41",t.font=d?"18px VT323, monospace":"22px VT323, monospace",t.textAlign="left",t.fillText("SCORE: "+n,10,24),t.fillText("LEVEL: "+r,10,d?46:50),t.textAlign="center",t.fillText("HIGH: "+c,e.width/2,24),t.textAlign="right",t.fillText("LINES: "+s,e.width-10,24),t.textAlign="left",a==="gameover"&&(t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("GAME OVER",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+n+"  Lines: "+s,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO RESTART",e.width/2,e.height/2+60),t.textAlign="left")}function $(d){w===0&&(w=d);const C=Math.min((d-w)/k,3);w=d,z(C),x(),u=requestAnimationFrame($)}return T(),u=requestAnimationFrame($),function(){cancelAnimationFrame(u),window.removeEventListener("keydown",Q),window.removeEventListener("keyup",g),M.disconnect()}}function to(e,o){const t=e.getContext("2d");if(!t)return()=>{};const a=12,n=80,r=10,s=5,c=4,u=3.5,w=7,k=1e3/60;let I="waiting",l=0,q=0,W=0,F=0,M=0,T=0,h=0,y=0,D=c,E=c*.5;function H(){const b=e.width||e.clientWidth||1,N=e.height||e.clientHeight||1;e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight);const V=e.width/b,J=e.height/N;M=Math.max(0,Math.min(e.height-n,M*J)),T=Math.max(0,Math.min(e.height-n,T*J)),h=Math.max(0,Math.min(e.width-r,h*V)),y=Math.max(0,Math.min(e.height-r,y*J)),I!=="playing"&&(M=e.height/2-n/2,T=e.height/2-n/2,h=e.width/2,y=e.height/2)}H();const Q=new ResizeObserver(H);Q.observe(e);function g(){h=e.width/2,y=e.height/2,D=c*(Math.random()>.5?1:-1),E=(Math.random()*2-1)*c*.5}const z={};function x(b){if(b.key==="Escape"){o();return}(I==="waiting"||I==="gameover")&&b.key==="Enter"&&(I="playing",l=0,q=0,M=e.height/2-n/2,T=e.height/2-n/2,g()),z[b.key]=!0,(b.key==="ArrowUp"||b.key==="ArrowDown")&&b.preventDefault()}function $(b){z[b.key]=!1}window.addEventListener("keydown",x),window.addEventListener("keyup",$);function d(b){if(I!=="playing")return;const N=e.getBoundingClientRect(),V=b.clientY-N.top;M=Math.max(0,Math.min(e.height-n,V-n/2)),b.preventDefault()}e.addEventListener("pointerdown",d),e.addEventListener("pointermove",d);function C(b){if(I!=="playing")return;z.ArrowUp&&M>0&&(M-=s*b),z.ArrowDown&&M<e.height-n&&(M+=s*b),M=Math.max(0,Math.min(e.height-n,M));const N=T+n/2;D>0?N<y-10?T+=u*b:N>y+10&&(T-=u*b):N<e.height/2-5?T+=u*.5*b:N>e.height/2+5&&(T-=u*.5*b),T=Math.max(0,Math.min(e.height-n,T)),h+=D*b,y+=E*b,y<=0&&(y=0,E=Math.abs(E)),y+r>=e.height&&(y=e.height-r,E=-Math.abs(E));const V=20;h<=V+a&&h+r>=V&&y+r>=M&&y<=M+n&&D<0&&(D=Math.abs(D)*1.05,E=((y+r/2-M)/n-.5)*c*2,h=V+a);const J=e.width-20-a;h+r>=J&&h<=J+a&&y+r>=T&&y<=T+n&&D>0&&(D=-Math.abs(D)*1.05,E=((y+r/2-T)/n-.5)*c*2,h=J-r),h<0&&(q++,q>=w?I="gameover":g()),h>e.width&&(l++,l>=w?I="gameover":g())}function j(){if(t){if(t.fillStyle="#0a0a0a",t.fillRect(0,0,e.width,e.height),I==="waiting"){t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("PONG",e.width/2,e.height/2-60),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS ENTER TO START",e.width/2,e.height/2+10),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Arrow Up/Down or Drag = Move",e.width/2,e.height/2+50),t.fillText("First to "+w+" wins | ESC = Exit",e.width/2,e.height/2+78),t.textAlign="left";return}if(t.setLineDash([8,8]),t.strokeStyle="#333",t.lineWidth=2,t.beginPath(),t.moveTo(e.width/2,0),t.lineTo(e.width/2,e.height),t.stroke(),t.setLineDash([]),t.fillStyle="#00ff41",t.fillRect(20,M,a,n),t.fillStyle="#ff6b6b",t.fillRect(e.width-20-a,T,a,n),t.fillStyle="#ffbd2e",t.fillRect(h,y,r,r),t.fillStyle="#00ff41",t.font="48px VT323, monospace",t.textAlign="center",t.fillText(String(l),e.width/2-60,55),t.fillStyle="#ff6b6b",t.fillText(String(q),e.width/2+60,55),t.textAlign="left",t.font="18px VT323, monospace",t.fillStyle="#888",t.textAlign="left",t.fillText("YOU",20,e.height-15),t.textAlign="right",t.fillText("CPU",e.width-20,e.height-15),t.textAlign="left",I==="gameover"){t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height);const b=l>=w;t.fillStyle=b?"#00ff41":"#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText(b?"YOU WIN!":"CPU WINS",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText(l+" - "+q,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO RESTART",e.width/2,e.height/2+60),t.textAlign="left"}}}function L(b){F===0&&(F=b);const N=Math.min((b-F)/k,3);F=b,C(N),j(),W=requestAnimationFrame(L)}return W=requestAnimationFrame(L),function(){cancelAnimationFrame(W),window.removeEventListener("keydown",x),window.removeEventListener("keyup",$),e.removeEventListener("pointerdown",d),e.removeEventListener("pointermove",d),Q.disconnect()}}function io(e,o){const t=e.getContext("2d");if(!t)return()=>{};const a=24,n=.34,r=-6.6,s=58,c=168,u=2.15,w=126,k=46,I=1e3/60,l=100;let q="waiting",W=0,F=parseInt(localStorage.getItem("flappyBirdHigh")||"0",10),M=0,T=0,h=0,y=0,D=w,E=0,H=0,Q=0,g=null,z=null,x=[];function $(){const m=e.width||e.clientWidth||1,f=e.height||e.clientHeight||1;e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight);const K=e.width/m,oe=e.height/f;for(const O of x)O.x*=K,O.gapY=L(O.gapY*oe);q!=="playing"?C():(E=Math.max(50,Math.min(e.width-30,E*K)),H=Math.max(a,Math.min(e.height-k-a,H*oe)))}$();const d=new ResizeObserver($);d.observe(e);function C(){E=Math.max(80,Math.floor(e.width*.28)),H=Math.floor(e.height*.45),Q=0}function j(){const m=Math.max(160,e.height-k);return Math.max(86,Math.min(c,m-112))}function L(m){const f=j(),K=56,oe=Math.max(K,e.height-k-f-48);return Math.max(K,Math.min(oe,m))}function b(){q="playing",W=0,y=0,h=0,D=w,x=[],C(),N(),Y()}function N(){const f=Math.max(68,e.height-k-j()-48),K=56+Math.random()*(f-56);x.push({x:e.width+20,gapY:K,passed:!1})}function V(){if(J(),q==="waiting"||q==="gameover"){b();return}q==="playing"&&(Q=r,Z())}function J(){if(g){g.state==="suspended"&&g.resume();return}const m=globalThis.AudioContext??globalThis.webkitAudioContext;g=new m,z=g.createGain(),z.gain.value=.16,z.connect(g.destination)}function R(m,f,K="square",oe=.2){if(!g||!z)return;const O=g.currentTime,ce=g.createOscillator(),de=g.createGain();ce.type=K,ce.frequency.setValueAtTime(m,O),de.gain.setValueAtTime(1e-4,O),de.gain.exponentialRampToValueAtTime(oe,O+.01),de.gain.exponentialRampToValueAtTime(1e-4,O+f),ce.connect(de),de.connect(z),ce.start(O),ce.stop(O+f+.02)}function Y(){R(440,.08,"square",.14),g&&setTimeout(()=>R(660,.08,"square",.12),65)}function Z(){R(720,.06,"square",.11)}function ie(){R(880,.07,"triangle",.14),setTimeout(()=>R(1175,.08,"triangle",.12),60)}function we(){if(!g||!z)return;const m=g.currentTime,f=g.createOscillator(),K=g.createGain();f.type="sawtooth",f.frequency.setValueAtTime(190,m),f.frequency.exponentialRampToValueAtTime(60,m+.22),K.gain.setValueAtTime(.22,m),K.gain.exponentialRampToValueAtTime(1e-4,m+.24),f.connect(K),K.connect(z),f.start(m),f.stop(m+.26)}function _e(m){if(m.key==="Escape"){o();return}(m.key==="Enter"||m.key===" ")&&(V(),m.preventDefault())}function $e(){V()}window.addEventListener("keydown",_e),e.addEventListener("pointerdown",$e);function Re(){if(q!=="playing")return;for(y++,Q+=n,H+=Q;y>=D;)N(),D+=w;for(const O of x)O.x-=u,!O.passed&&O.x+s<E&&(O.passed=!0,W++,ie(),W>F&&(F=W,localStorage.setItem("flappyBirdHigh",String(F))));x=x.filter(O=>O.x+s>-20);const m=E-a/2,f=E+a/2,K=H-a/2,oe=H+a/2;if(K<=0||oe>=e.height-k){q="gameover",we();return}for(const O of x){const ce=f>O.x&&m<O.x+s,de=K<O.gapY,oi=oe>O.gapY+j();if(ce&&(de||oi)){q="gameover",we();return}}}function p(){const m=t.createLinearGradient(0,0,0,e.height);m.addColorStop(0,"#082238"),m.addColorStop(1,"#071014"),t.fillStyle=m,t.fillRect(0,0,e.width,e.height),t.fillStyle="rgba(0, 255, 65, 0.08)";for(let f=y*-.3%90;f<e.width;f+=90)t.fillRect(f,80,34,8),t.fillRect(f+8,72,18,8)}function v(){const m=j();for(const f of x)t.fillStyle="#00a33a",t.fillRect(f.x,0,s,f.gapY),t.fillRect(f.x,f.gapY+m,s,e.height-k-f.gapY-m),t.fillStyle="#00ff41",t.fillRect(f.x-4,f.gapY-14,s+8,14),t.fillRect(f.x-4,f.gapY+m,s+8,14),t.fillStyle="rgba(0,0,0,0.22)",t.fillRect(f.x+s-12,0,6,f.gapY-14),t.fillRect(f.x+s-12,f.gapY+m+14,6,e.height-k)}function S(){const m=e.height-k;t.fillStyle="#332211",t.fillRect(0,m,e.width,k),t.fillStyle="#ffbd2e",t.fillRect(0,m,e.width,4),t.fillStyle="rgba(0, 255, 65, 0.35)";for(let f=y*-u%28;f<e.width;f+=28)t.fillRect(f,m+10,14,4)}function ee(){const m=Math.max(-.45,Math.min(.7,Q/12));t.save(),t.translate(E,H),t.rotate(m),t.fillStyle="#ffbd2e",t.fillRect(-12,-10,22,20),t.fillStyle="#ffe680",t.fillRect(-16,-2,14,10),t.fillStyle="#ff6b6b",t.fillRect(8,-2,12,6),t.fillStyle="#fff",t.fillRect(2,-8,6,6),t.fillStyle="#0a0a0a",t.fillRect(6,-6,2,2),t.restore()}function te(){t.fillStyle="#00ff41",t.font="22px VT323, monospace",t.textAlign="left",t.fillText("SCORE: "+W,10,24),t.textAlign="center",t.fillText("HIGH: "+F,e.width/2,24),t.textAlign="right",t.fillText("SPACE = FLAP",e.width-10,24),t.textAlign="left"}function ei(){t.fillStyle="rgba(0,0,0,0.45)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("FLAPPY BIRD",e.width/2,e.height/2-70),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS SPACE OR CLICK TO START",e.width/2,e.height/2),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Space/Click = Flap",e.width/2,e.height/2+40),t.fillText("ESC = Exit | High Score: "+F,e.width/2,e.height/2+70),t.textAlign="left"}function ti(){t.fillStyle="rgba(0,0,0,0.68)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("GAME OVER",e.width/2,e.height/2-30),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+W,e.width/2,e.height/2+10),t.fillStyle="#888",t.fillText("PRESS SPACE OR CLICK TO RESTART",e.width/2,e.height/2+50),t.textAlign="left"}function ii(){p(),v(),S(),ee(),te(),q==="waiting"&&ei(),q==="gameover"&&ti()}function bt(m){T===0&&(T=m);const f=Math.min(m-T,l);for(T=m,h+=f;h>=I;)Re(),h-=I;ii(),M=requestAnimationFrame(bt)}return C(),M=requestAnimationFrame(bt),function(){cancelAnimationFrame(M),window.removeEventListener("keydown",_e),e.removeEventListener("pointerdown",$e),d.disconnect(),g==null||g.close(),g=null,z=null}}const oo=Object.freeze({"--background":"#0b0f14","--background-deep":"#070a0e","--surface":"#111820","--foreground":"#b8c4d4","--bright":"#e7edf5","--muted":"#667485","--border":"#22303d","--cyan":"#5eead4","--blue":"#7aa2f7","--green":"#9ece6a","--yellow":"#e0af68","--purple":"#bb9af7","--red":"#f7768e"});function no(){console.log(`%c    _    _     ____   _____
   / \\  | |   | __ ) |__  /
  / _ \\ | |   |  _ \\   / /
 / ___ \\| |___| |_) | / /_
/_/   \\_\\_____|____/ /____|`,"color: #9ece6a; font-family: monospace; font-weight: bold; line-height: 1.2;"),console.log("%cPortfolio shell v%s %c· running on curiosity","color: #5eead4; font-family: monospace;",ct,"color: #667485; font-family: monospace;"),console.log(`%c> reading the source instead of clicking around? my kind of visitor.
> say hi: %s
> code: %s`,"color: #b8c4d4; font-family: monospace;",Ct,Oe.github),console.log("%csteal the theme (dark CRT terminal palette):","color: #e0af68; font-family: monospace;"),console.log(Object.entries(oo).map(([o,t])=>`${o}: ${t};`).join(`
`))}function ao(e){const o=document.createElement("div");o.className="music-ambience",o.setAttribute("aria-hidden","true");for(let n=0;n<24;n++){const r=document.createElement("i");r.style.setProperty("--bar",n),o.append(r)}document.body.prepend(o);let t=!1;async function a(){if(document.hidden||t)return;t=!0;let n;try{const s=await fetch(e,{signal:AbortSignal.timeout(8e3),credentials:"omit"});s.ok&&(n=await s.json())}catch{}finally{t=!1}const r=!!(n!=null&&n.playing&&typeof n.title=="string"&&typeof n.artist=="string"&&/^https:\/\/open\.spotify\.com\/track\/[A-Za-z0-9]+$/.test(n.url));o.classList.toggle("is-playing",r);for(const s of document.querySelectorAll("[data-now-playing]"))if(s.hidden=!r,s.replaceChildren(),r){s.append(`

${i("In my headphones now:")} `);const c=document.createElement("a");c.className="terminal-link",c.href=n.url,c.target="_blank",c.rel="noopener noreferrer",c.textContent=`${n.artist} — ${n.title}`,s.append(c)}}a(),setInterval(a,3e4),document.addEventListener("visibilitychange",()=>{o.classList.toggle("is-suspended",document.hidden),a()})}const ro={title:"Una piccola cassetta degli attrezzi per Claude Code",date:"2026-10-13",tags:["ai-agents","claude-code","developer-tools","opensource"],label:"Traduzione AI, rivista dall’autore"},so=`<p>Quando lavoro con un agente di coding, scrivere codice è solo una parte del lavoro.</p>
<p>Prima di modificare un repository, voglio capire su cosa potrebbe incidere la modifica. Quando uso una libreria, voglio leggerne la documentazione, soprattutto se non la conosco bene. E prima di considerare il lavoro finito, voglio un modo concreto per verificarlo.</p>
<p>Queste esigenze mi hanno portato a costruire tre progetti: <strong>Themis, Serval e Telemaco</strong>.</p>
<p>Li ho sviluppati separatamente, ma credo che abbiano senso insieme. Ognuno affronta una parte del lavoro che chiedo a un agente di fare.</p>
<p>L’idea è semplice: installare gli strumenti, renderli disponibili a Claude Code e dirgli quando usare ciascuno.</p>
<h2>Themis: definire cosa significa “finito”</h2>
<p>Una richiesta in linguaggio naturale lascia spazio all’interpretazione. Anche un codice che funziona può risolvere un problema diverso da quello che avevo in mente.</p>
<p>Themis parte da una specifica con decisioni e criteri di accettazione. Organizza il lavoro degli agenti intorno a un ciclo di verifica. Approvo il piano e i test di accettazione; a quel punto i test vengono bloccati e un verificatore controlla il risultato.</p>
<p>Al momento, l’adapter disponibile è quello per Claude Code. Themis ne gestisce le invocazioni ed esegue direttamente la verifica. Il progetto è ancora nelle prime fasi di sviluppo e, per ora, si installa dai sorgenti.</p>
<p>Codice: <a href="https://github.com/AlbertoBarrago/themis">github.com/AlbertoBarrago/themis</a>.</p>
<h2>Serval: capire l’impatto di una modifica</h2>
<p>Prima di toccare un file, la domanda è: cosa dipende da questo codice?</p>
<p>Serval analizza un repository in locale, combinando dipendenze, cronologia Git, configurazione CI e regole per le aree critiche. Produce una stima del rischio insieme ai segnali su cui si basa.</p>
<p>Posso chiedere a Claude di usare quell’analisi per individuare i moduli da leggere e le verifiche da eseguire. Il punteggio è un indicatore: non garantisce che una modifica sia sicura e non predice un guasto con certezza. Aiuta a decidere dove prestare attenzione.</p>
<p>Codice: <a href="https://github.com/AlbertoBarrago/serval">github.com/AlbertoBarrago/serval</a>.</p>
<h2>Telemaco: consultare il web mentre si lavora</h2>
<p>Quando una modifica dipende dal comportamento di una libreria o da un’API esterna, voglio che l’agente consulti le fonti.</p>
<p>Telemaco è un motore browser headless in Rust, pensato per lo scraping e gli agenti AI. Offre una CLI e un server MCP per accedere alle pagine ed estrarne i contenuti.</p>
<p>In questo workflow può aiutare Claude a recuperare documentazione e informazioni dal web. L’agente deve comunque valutare quelle informazioni, citare le fonti e distinguere ciò che ha verificato da ciò che ha dedotto.</p>
<p>Codice: <a href="https://github.com/AlbertoBarrago/telemaco">github.com/AlbertoBarrago/telemaco</a>.</p>
<h2>Una richiesta, tre strumenti</h2>
<p>Sono strumenti separati, installati e configurati individualmente. Una volta disponibili, il punto di partenza può essere una normale richiesta a Claude Code.</p>
<p>Per esempio, questo è il tipo di istruzione che gli darei:</p>
<blockquote>
<p>Devo aggiungere il rinnovo dei token di autenticazione.</p>
<p>Per prima cosa, usa Serval per analizzare i file coinvolti e quelli che dipendono da loro. Se ti servono informazioni sulle librerie interessate, usa Telemaco per consultare la documentazione ufficiale e riportare le fonti.</p>
<p>Usa Themis per preparare la specifica, il piano e i test di accettazione. Fermati ai passaggi che richiedono approvazione. Dopo la mia approvazione, esegui il lavoro attraverso il suo ciclo di verifica.</p>
<p>Alla fine, mostrami il diff, i risultati delle verifiche e gli eventuali limiti rimasti.</p>
</blockquote>
<p>È un esempio di come voglio usare insieme questi strumenti. Per rendere ripetibile il workflow, gli agenti che fanno il lavoro devono avere sia le istruzioni sia l’accesso agli strumenti. Installare un eseguibile non basta: bisogna anche stabilire come usarlo nel workflow.</p>
<p>Themis gestisce il ciclo di esecuzione e verifica. Serval e Telemaco forniscono informazioni che possono orientare la specifica, il piano e l’implementazione. Il loro uso deve essere previsto nelle istruzioni degli agenti coinvolti.</p>
<h2>Perché metterli insieme?</h2>
<p>Come progetti singoli, descrivono tre problemi diversi. Insieme descrivono un modo di lavorare: capire l’impatto, consultare le fonti, definire il risultato atteso e verificarlo.</p>
<p>Mi piace questa composizione perché ogni strumento mantiene una responsabilità chiara. Posso usarli insieme oppure scegliere solo quello che mi serve.</p>
<p>È questa la cassetta degli attrezzi che voglio costruire intorno a Claude Code: strumenti concreti, istruzioni precise e un lavoro di cui si possano vedere le decisioni e verificare i risultati.</p>
`,lo=Object.freeze(Object.defineProperty({__proto__:null,html:so,meta:ro},Symbol.toStringTag,{value:"Module"})),co={title:"Il problema non è quanto codice scrive l'AI. È quanto ne comprendiamo.",date:"2026-11-13",tags:["opinion","ai","agents","engineering"],label:"testo originale dell’autore, refusi corretti con AI"},po=`<p><em>Una riflessione sull&#39;AI nello sviluppo software, sul rischio di perdere competenze e su cosa significhi davvero essere sviluppatori oggi.</em></p>
<p>Ho letto <a href="https://coyotetracks.org/blog/right-amount-of-ai/">Is There a Right Amount of AI?</a> su Coyote Tracks. È un articolo che solleva questioni legittime sull&#39;utilizzo dell&#39;intelligenza artificiale nello sviluppo software: qualità del codice, perdita di competenze, debito tecnico e responsabilità.</p>
<p>Condivido molte delle preoccupazioni espresse dall&#39;autore. Ma credo che ci sia un punto sul quale valga la pena ragionare diversamente.</p>
<p><strong>Non penso che il problema sia quanto codice generiamo con l&#39;AI. Penso che il problema sia quanto di quel codice siamo ancora capaci di comprendere, valutare e mantenere.</strong></p>
<h2>Scrivere codice non è mai stato il vero obiettivo</h2>
<p>Per anni abbiamo misurato, almeno implicitamente, la produttività degli sviluppatori attraverso la loro capacità di produrre codice.</p>
<p>Più velocemente implementavi una funzionalità, più eri considerato produttivo.</p>
<p>Ma scrivere codice è soltanto una parte del nostro lavoro.</p>
<p>Prima ancora di aprire un editor dobbiamo comprendere un problema, individuare i vincoli, valutare compromessi, progettare soluzioni e prevedere cosa potrebbe andare storto.</p>
<p>Il codice è la rappresentazione concreta di queste decisioni.</p>
<p>Se un agente AI riesce a produrre quella rappresentazione più velocemente di me, perché dovrei necessariamente considerarlo un problema?</p>
<p>La domanda diventa un&#39;altra: <strong>sono ancora io a prendere le decisioni?</strong></p>
<h2>Il rischio del de-skilling è reale</h2>
<p>Su questo punto concordo con l&#39;autore.</p>
<p>Delegare continuamente attività che non comprendiamo può portarci a perdere competenze, o a non svilupparle affatto.</p>
<p>Se chiediamo a un agente di implementare un sistema di autenticazione senza comprendere sessioni, token, revoca e gestione degli errori, abbiamo un problema.</p>
<p>Se accettiamo una modifica soltanto perché i test passano, senza capire quali comportamenti quei test coprano, abbiamo un altro problema.</p>
<p>Ma non credo che la soluzione sia necessariamente scrivere più codice manualmente.</p>
<p>Credo sia <strong>mantenere attivo il processo di ragionamento</strong>.</p>
<p>Uno sviluppatore può scrivere personalmente migliaia di righe senza comprendere davvero l&#39;architettura complessiva. Un altro può farne generare la maggior parte e conoscere perfettamente ogni decisione importante.</p>
<p>La quantità di codice digitato non è una misura affidabile della competenza.</p>
<p>Naturalmente, questo non significa che leggere un diff equivalga sempre a saper implementare ciò che contiene. Le competenze pratiche richiedono esercizio, e delegare sistematicamente attività che non abbiamo mai imparato a svolgere può renderci dipendenti dagli strumenti.</p>
<p>È un rischio da riconoscere, non da ignorare.</p>
<h2>Da autore del codice a responsabile del sistema</h2>
<p>Negli ultimi tempi il mio modo di sviluppare è cambiato parecchio.</p>
<p>Uso quotidianamente agenti AI. Scrivo meno codice direttamente e passo molto più tempo a leggere diff, verificare implementazioni, ragionare sulle architetture e individuare comportamenti inattesi.</p>
<p>All&#39;inizio questa transizione mi sembrava rischiosa.</p>
<p>Oggi la considero un&#39;evoluzione del mio modo di lavorare, non una rinuncia al ruolo di sviluppatore.</p>
<p>Ma c&#39;è una condizione fondamentale: non posso permettermi di diventare un semplice approvatore automatico delle modifiche proposte dagli agenti.</p>
<p>Devo continuare a chiedermi:</p>
<ul>
<li>Perché è stata scelta questa soluzione?</li>
<li>Quali alternative sono state scartate?</li>
<li>Cosa succede quando un servizio non risponde?</li>
<li>Questa modifica introduce dipendenze inutili?</li>
<li>Quali regressioni potrebbero sfuggire ai test?</li>
<li>Sarò in grado di intervenire quando qualcosa si romperà in produzione?</li>
</ul>
<p>Se non so rispondere, il fatto che il codice funzioni oggi non è sufficiente.</p>
<p>E se non riesco a spiegare una decisione architetturale senza chiedere nuovamente all&#39;agente, probabilmente non ho ancora compreso abbastanza quella parte del sistema.</p>
<h2>Il codice generato non è codice verificato</h2>
<p>Un altro punto sul quale concordo con l&#39;articolo riguarda il debito tecnico.</p>
<p>Gli agenti possono produrre codice ridondante, introdurre astrazioni inutili, duplicare funzionalità esistenti e risolvere problemi locali creando inconsistenze globali.</p>
<p>A volte lo fanno con una sicurezza sorprendente.</p>
<p>Ma qui emerge una distinzione importante: <strong>generazione e validazione sono due responsabilità diverse</strong>.</p>
<p>Possiamo delegare la prima molto più facilmente della seconda.</p>
<p>Un test verde non dimostra che un&#39;architettura sia corretta. Un diff apparentemente pulito non garantisce che non siano state introdotte regressioni. E una spiegazione convincente dell&#39;agente non costituisce una verifica indipendente.</p>
<p>Servono contratti chiari, test significativi, osservabilità, review e, soprattutto, qualcuno capace di mettere in discussione il risultato.</p>
<p>Questo non elimina gli errori, ma rende il processo controllabile.</p>
<h2>Non tutto deve essere delegato</h2>
<p>Non sostengo che utilizzare più AI sia necessariamente meglio.</p>
<p>Ci sono attività che preferisco svolgere personalmente, altre nelle quali voglio sperimentare, altre ancora che delego senza particolare esitazione.</p>
<p>A volte scrivo codice semplicemente perché voglio comprendere meglio una tecnologia.</p>
<p>Altre volte lascio che un agente produca un&#39;implementazione e mi concentro sui vincoli e sulla sua correttezza.</p>
<p>Non vedo una contraddizione.</p>
<p>Il problema nasce quando la delega diventa automatica, indipendentemente dalla complessità, dal rischio o dalla nostra capacità di valutare il risultato.</p>
<p>E vale anche il contrario: rifiutare uno strumento soltanto per preservare una modalità di lavoro non garantisce maggiore qualità.</p>
<h2>La responsabilità non si delega</h2>
<p>Le questioni etiche sollevate dall&#39;articolo meritano una discussione autonoma.</p>
<p>Il consumo di risorse, il copyright, l&#39;impatto economico sugli sviluppatori indipendenti e la concentrazione di potere nelle aziende che producono modelli non scompaiono perché utilizziamo l&#39;AI in modo competente.</p>
<p>Sono problemi reali, che non possiamo liquidare con un semplice aumento della produttività.</p>
<p>Ma sul piano strettamente ingegneristico credo che il principio fondamentale rimanga invariato.</p>
<p>Se distribuisco un&#39;applicazione, ne sono responsabile.</p>
<p>Non importa se una funzione è stata scritta da me, suggerita da un collega, copiata da una documentazione o generata da un modello.</p>
<p>Se introduce una vulnerabilità, perde dati o smette di funzionare, non posso attribuire la responsabilità allo strumento che l&#39;ha prodotta.</p>
<p>L&#39;AI può aiutarmi a costruire il software.</p>
<p>Non può assumersi la responsabilità delle mie decisioni.</p>
<h2>La vera domanda</h2>
<p>Forse tra qualche anno scriveremo manualmente soltanto una piccola parte del codice che distribuiamo.</p>
<p>Forse continueremo a scriverne molto più di quanto immaginiamo.</p>
<p>Non credo sia questo il punto decisivo.</p>
<p>La nostra professione è già cambiata molte volte. Abbiamo introdotto linguaggi di alto livello, framework, librerie, generatori, strumenti di automazione e infrastrutture che nascondono complessità enormi.</p>
<p>Ogni astrazione ci ha permesso di smettere di occuparci direttamente di alcuni dettagli, ma ci ha anche richiesto nuove competenze.</p>
<p>L&#39;AI potrebbe rappresentare un cambiamento più profondo, perché non automatizza soltanto operazioni ripetitive: partecipa alla costruzione delle soluzioni e propone decisioni tecniche.</p>
<p>Proprio per questo dobbiamo essere ancora più rigorosi nel valutarle.</p>
<p>Non voglio misurare la mia competenza contando le righe di codice che ho scritto personalmente.</p>
<p>Voglio misurarla attraverso la mia capacità di comprendere un sistema, modificarlo, individuare i suoi limiti e assumermi la responsabilità del suo funzionamento.</p>
<p><strong>Il rischio non è smettere di digitare codice.</strong></p>
<p><strong>Il rischio è smettere di saperlo giudicare.</strong></p>
<hr>
<p><em>Una risposta a <a href="https://coyotetracks.org/blog/right-amount-of-ai/">Is There a Right Amount of AI?</a>, pubblicato su Coyote Tracks.</em></p>
`,uo=Object.freeze(Object.defineProperty({__proto__:null,html:po,meta:co},Symbol.toStringTag,{value:"Module"})),ho={title:"Lo sviluppo è morto",date:"2026-09-22",tags:["opinion","ai","career","italy","craft"],label:"traduzione AI da un testo scritto dall’autore"},mo=`<p>Ho iniziato nel 2011, da freelance fino al 2014, e non ho mai smesso. Quindici anni. Abbastanza per avere delle opinioni. Ancora pochi, per chi ha iniziato nel 1995 e può ridere delle mie.</p>
<p>Ricordo Dreamweaver, quando ancora nessuno se ne vergognava. Ricordo Eclipse che divorava un portatile solo per aprire un progetto. Ricordo l’arrivo di Sublime Text, come se qualcuno avesse finalmente capito che un editor di testo è un editor di testo. Ricordo le librerie di pattern da cui copiavamo tutti senza mai citare nessuno. Ricordo CodePen, che <a href="https://en.wikipedia.org/wiki/CodePen">Chris Coyier ha cofondato nel 2012 con Alex Vazquez e Tim Sabat</a>, e <a href="https://chriscoyier.net/bio/">CSS-Tricks</a>, che ha gestito dal 2007 fino all’acquisizione da parte di DigitalOcean nel 2022. E lo ricordo sul palco, intorno al 2016, mentre mostrava il proprio workflow e gli strumenti che usava davvero, birra in mano: sembrava di ascoltare uno che ti spiega qualcosa al bar, più che di assistere a una presentazione recitata. Allora era normale. Il web l’ha perso e non l’ha più ritrovato.</p>
<p>Quella era la cultura. Piccola, rumorosa, generosa, costruita sull’idea che avremmo continuato a fare più o meno questo ancora a lungo.</p>
<h2>L’Italia, una nota a margine</h2>
<p>L’Italia non ne ha mai fatto parte. Abbiamo avuto un vero momento: la <a href="https://en.wikipedia.org/wiki/Programma_101">Olivetti Programma 101</a>, New York, 1965, forse il primo computer da tavolo, oltre 40.000 unità vendute, <a href="https://www.fondazioneadrianolivetti.it/en/p101-cecam/">dieci comprate dalla NASA e usate per pianificare l’allunaggio dell’Apollo 11</a>. Poi più nulla di quella portata. Mai più.</p>
<p>Le eccezioni ci sono e sono reali. <a href="https://en.wikipedia.org/wiki/Salvatore_Sanfilippo">Salvatore Sanfilippo ha pubblicato Redis il 26 febbraio 2009</a>, scritto in Sicilia per risolvere un problema nel suo prodotto di analytics, ed è diventato l’infrastruttura sotto una parte consistente di internet. Ma una persona non fa un movimento. La media qui è mediocre da vent’anni, tenuta a galla da una manciata di persone che ci mettevano ben più passione di quanta ne giustificasse lo stipendio. Il famoso uno per cento. Chi ha davvero lavorato in questo paese sa che quel numero non è una figura retorica.</p>
<p>L’ho affrontato nell’unico modo che funziona: ho ignorato la conversazione locale e seguito direttamente le persone che costruivano davvero, una per ambito. Prima su Twitter, poi su qualunque cosa Twitter sia diventato, ora su Bluesky per chi vuole ancora una timeline che gli appartenga.</p>
<h2>Questa volta non è come le altre</h2>
<p>E poi è arrivato quest’anno.</p>
<p>Non stiamo facendo il lavoro che abbiamo fatto negli ultimi vent’anni. Non intendo che gli strumenti siano cambiati di nuovo. Gli strumenti cambiano ogni tre anni, ogni volta qualcuno dichiara morta la professione, e ogni volta si sbaglia. Ho assistito a quattro giri di questa storia.</p>
<p>Questo non è un altro giro. Il lavoro è diventato altro. Quello che faccio ora è specificare, porre vincoli, revisionare, decidere. Scrivere codice, che prima era il lavoro, ne è diventata la parte meno costosa. E il ritmo del cambiamento non è lineare, non sta rallentando, e nessuno che stimo pensa che stia per farlo.</p>
<p>La divisione non è tra chi usa i nuovi strumenti e chi no. È tra chi ha mantenuto i fondamentali e chi non li ha mai avuti. Se sai davvero cosa fa un sistema, puoi salire e scendere di livello: leggere il codice generato, giudicare l’architettura, fiutare l’astrazione sbagliata, decidere cosa non costruire affatto. Se non hai mai avuto quelle basi, resti bloccato a un solo livello a dire “sì, e non fare errori” a una macchina che non sei in grado di verificare. Non è una carriera. Stai consegnando le chiavi.</p>
<p>Quindi, quando qualcuno mi chiede dove vedo questa professione tra dieci anni, salto la risposta rassicurante sui nuovi ruoli che emergeranno e sul lavoro che si limiterà a cambiare forma.</p>
<p>Non la vedo. Ci sarà qualcos’altro, e non si chiamerà sviluppo.</p>
<h2>Di nuovo l’uno per cento</h2>
<p>C’è un’idea su cui continuo a tornare, e voglio essere preciso su cosa sia e cosa non sia.</p>
<p>Chi pratica la Meditazione Trascendentale sostiene quello che chiama Effetto Maharishi: <a href="https://research.miu.edu/maharishi-effect/">un gruppo grande quanto la radice quadrata dell’uno per cento di una popolazione sarebbe sufficiente a produrre un cambiamento misurabile in quella popolazione</a>. La ricerca risale alla fine degli anni Settanta. È anche <a href="https://en.wikipedia.org/wiki/Maharishi_Effect">respinta come pseudoscienza</a>, gli studi hanno problemi reali con i controlli e con la correlazione spacciata per causalità, e non sto chiedendo a nessuno di crederci.</p>
<p>Ne prendo in prestito l’idea, non le pretese scientifiche. L’idea è questa: la parte di una popolazione che deve cambiare direzione prima che tutti gli altri si riorientino di conseguenza è molto più piccola di quanto si pensi. Quella parte l’ho vista succedere, senza alcuna meditazione, in ogni cambiamento che ho vissuto. Una manciata di persone ha imboccato una strada e, due anni dopo, il settore si chiedeva se ne avesse mai percorsa un’altra.</p>
<p>Ed è questa la parte scomoda. Quella radice quadrata dell’uno per cento, nel nostro settore, ha già cambiato strada. Non sta aspettando che il resto di noi finisca di discutere se tutto questo sia reale.</p>
<p>Quindi, dove pensiamo di andare?</p>
<h2>Fonti</h2>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Programma_101">Programma 101, Wikipedia</a> e <a href="https://www.fondazioneadrianolivetti.it/en/p101-cecam/">Fondazione Adriano Olivetti</a></li>
<li><a href="https://en.wikipedia.org/wiki/Salvatore_Sanfilippo">Salvatore Sanfilippo, Wikipedia</a> e <a href="https://en.wikipedia.org/wiki/Redis">Redis, Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/CodePen">CodePen, Wikipedia</a> e <a href="https://chriscoyier.net/bio/">La biografia di Chris Coyier</a></li>
<li><a href="https://research.miu.edu/maharishi-effect/">Ricerca sull’Effetto Maharishi, MIU</a> e <a href="https://en.wikipedia.org/wiki/Maharishi_Effect">Effetto Maharishi, Wikipedia</a></li>
</ul>
`,go=Object.freeze(Object.defineProperty({__proto__:null,html:mo,meta:ho},Symbol.toStringTag,{value:"Module"})),fo={title:"GitLab Alert: le attività GitLab che ti riguardano, nella barra dei menu",date:"2026-09-16",tags:["swift","macos","gitlab","menubar","opensource"],label:"traduzione AI da un testo scritto dall’autore"},bo=`<p><strong>GitLab Alert</strong> è un’app per la barra dei menu di macOS che porta nell’angolo dello schermo le attività GitLab che richiedono la tua attenzione, senza dover aprire una scheda del browser: merge request in attesa della tua revisione, merge request che hai aperto, issue assegnate a te e stato delle pipeline dei progetti che segui. Nessuna icona nel Dock, nessuna finestra da gestire, nessuna scheda da dimenticare.</p>
<p>Funziona con GitLab.com e con le istanze self-managed, è gratuita e ha licenza MIT.</p>
<h2>Una scheda del browser non è un buon posto per le notifiche</h2>
<p>Ogni giorno facevo così: aprivo GitLab, controllavo le richieste di revisione e la pipeline della notte, chiudevo la scheda e me ne dimenticavo. Due ore dopo, ricominciavo.</p>
<p>Una scheda ti mostra tutto o niente e non ricorda quello che hai già visto. Le notifiche email di GitLab hanno il problema opposto: arrivano continuamente, arrivano per cose che non ti interessano e dopo una settimana le filtri in una cartella che non apri mai.</p>
<p>Quindi il perimetro era volutamente ristretto:</p>
<ul>
<li><strong>Solo le attività che mi riguardano.</strong> Merge request di cui sono assegnatario, revisore o autore. Issue assegnate a me. L’ultima pipeline dei progetti inclusi.</li>
<li><strong>Notificare i cambiamenti, non lo stato.</strong> Una pipeline fallita genera una notifica una volta, quando fallisce, non a ogni controllo per i tre giorni successivi.</li>
<li><strong>Sola lettura, per costruzione.</strong> Il token viene richiesto con <code>read_api</code> e nient’altro. L’app non può approvare una merge request o chiudere un’issue, perché non ha il permesso di farlo.</li>
<li><strong>Offline è uno stato, non un errore.</strong> Se manca la rete, l’ultima dashboard valida resta sullo schermo invece di sparire.</li>
</ul>
<h2>Tre interfacce, tre compiti</h2>
<p>L’app usa la modalità accessoria di macOS: nessuna icona nel Dock. La sua unica presenza fissa sullo schermo è l’icona nella barra dei menu. Tutto il resto viene creato solo quando serve ed eliminato alla chiusura.</p>
<p><strong>Il popover</strong> serve per dare un’occhiata. Un clic sinistro sull’icona mostra richieste di revisione, merge request che hai aperto, issue assegnate e attività dei repository, con un massimo di cinque righe per sezione espansa. Risponde a “c’è qualcosa?” in meno di un secondo e, se c’è, “vedi tutto” ti porta al passo successivo.</p>
<p><strong>La finestra di dettaglio</strong> è lo spazio di lavoro vero e proprio. Dalla barra laterale scegli quali dati visualizzare; nella tabella li filtri e li ordini; nel pannello dei dettagli leggi per intero l’elemento selezionato e “apri su GitLab” ti manda al browser quando devi finalmente fare il lavoro. Un clic su una notifica apre questa finestra sull’elemento giusto: l’app conserva l’identificatore dell’elemento da selezionare e lo usa non appena la vista ha caricato i dati, così anche una notifica cliccata ad app chiusa arriva dove deve.</p>
<p><strong>Le impostazioni</strong> contengono l’origine (protocollo, host e porta) dell’istanza, il token, le notifiche e la selezione dei repository. Di default vengono inclusi i progetti di cui sei membro, attivi negli ultimi 90 giorni, escludendo i fork: di solito va bene, qualche volta no. Il pannello Repository permette di cercare nell’intero catalogo e includere o escludere singoli progetti a mano.</p>
<h2>Essere silenziosa è una funzionalità, e ha richiesto lavoro</h2>
<p>Basta una scelta sbagliata perché un’app che fa polling e manda notifiche diventi rumore da silenziare. Per evitarlo, ho fatto tre scelte.</p>
<p><strong>Il primo aggiornamento è silenzioso.</strong> Una nuova installazione usa il primo ciclo riuscito come punto di partenza per le notifiche, senza notificare nulla. Altrimenti il primo avvio scaricherebbe dodici notifiche su merge request che ignori da una settimana, e chiuderesti l’app prima che abbia dimostrato di essere utile.</p>
<p><strong>Lo stato viene scritto prima di inviare le notifiche.</strong> Lo snapshot, i riferimenti usati per distinguere gli eventi nuovi da quelli già elaborati e il relativo registro delle attività vengono salvati in un’unica scrittura dello stato, e solo dopo partono le notifiche. Un crash nel momento sbagliato non può riproporre al prossimo avvio la pipeline fallita ieri.</p>
<p><strong>Lo stato di lettura è locale ed esplicito.</strong> Aprire il popover non segna nulla come visto. Espandere una sezione non segna nulla come visto. Sei tu a segnare le righe, e questo cambia solo la presentazione locale: l’app non chiude, conferma o aggiorna mai nulla su GitLab. L’elenco degli identificatori degli elementi già visti ha una dimensione limitata e viene salvato su disco, così un elemento che hai archiviato resta tale tra un avvio e l’altro, mentre un evento successivo sullo stesso elemento riceve un identificatore distinto e compare come nuovo evento non letto.</p>
<h2>Un polling che si comporta bene sul server di qualcun altro</h2>
<p>Le istanze GitLab self-managed sono spesso macchine piccole, che qualcuno del team infrastruttura mantiene oltre alle proprie mansioni ordinarie. Un’app che le martella ogni 30 secondi è un’app che viene bloccata.</p>
<p>Un singolo actor, <code>PollScheduler</code>, gestisce l’intero ciclo. Serializza i cambiamenti del ciclo di vita e unisce un aggiornamento manuale a uno automatico, così non c’è mai più di un ciclo di rete in corso, per quanto tu prema con entusiasmo il pulsante di aggiornamento. Sospensione, spegnimento dello schermo e cambiamenti di sessione arrivano da AppKit e gli vengono inoltrati. Raggiungibilità della rete, stato energetico e apertura del popover determinano insieme l’intervallo prima del prossimo controllo: un portatile sospeso e a batteria non ha bisogno di fare polling.</p>
<p>Durante un ciclo, le richieste indipendenti vengono eseguite in parallelo, gli endpoint degli elenchi seguono correttamente la paginazione di GitLab invece di leggere la prima pagina e sperare, e i controlli delle pipeline per progetto girano in un task group con concorrenza limitata. Il client rispetta <code>Retry-After</code>. Se raggiunge il rate limit, attende prima di inviare altre richieste. Dimensione delle pagine e concorrenza delle pipeline sono configurabili nelle impostazioni, entro limiti sicuri, perché i numeri giusti per gitlab.com non sono quelli giusti per un’istanza self-managed con 40 utenti.</p>
<h2>Come è organizzato il codice</h2>
<p>Due moduli, e la separazione è anche la strategia di test.</p>
<p><code>GitLabKit</code> è un pacchetto SwiftPM locale senza alcuna dipendenza dall’interfaccia: client REST v4, modelli, archivi su Portachiavi e file, rate limiting e un motore senza effetti collaterali che rileva le differenze nelle attività che confronta gli snapshot precedente e attuale. <code>GitLabAlert</code> è il contenitore: ciclo di vita AppKit, elemento nella barra dei menu, viste SwiftUI, impostazioni, notifiche. Le viste parlano con un <code>AppModel</code> sul main actor e con nient’altro, così nessuna vista crea mai un client di rete o scrive stato persistente, e <code>AppDelegate</code> costruisce l’intero grafo delle dipendenze.</p>
<p>Poiché la logica interessante è in un pacchetto senza viste, i test coprono mapping delle API, gestione degli errori del Portachiavi tramite implementazioni di test degli archivi, aggiornamenti concorrenti, cancellazione, sostituzione dell’account, navigazione dalle notifiche e stato di lettura persistente. L’interfaccia nella barra dei menu mantiene comunque una checklist di QA manuale, che è la risposta onesta.</p>
<p>Cambiare l’origine GitLab viene trattato come un confine tra account, non come una preferenza. L’app annulla il lavoro in corso, ferma lo scheduler e ne azzera lo stato, elimina il vecchio token e crea un nuovo client. Solo allora accetta il token del nuovo account. Le risposte arrivate in ritardo sono associate a un identificatore di revisione e non possono far riapparire nel nuovo account i dati del precedente.</p>
<p>Il token vive nel Portachiavi, non raggiunge mai una vista e viene inviato nell’header <code>PRIVATE-TOKEN</code> solo all’origine configurata. I file di stato contengono i dati della dashboard e nessuna credenziale, scritti atomicamente con permessi riservati al proprietario. Nessun tracciamento d’uso, nessun servizio di terze parti a runtime.</p>
<h2>Stato del progetto</h2>
<p>In sviluppo attivo. Le release sono firmate con l’identità stabile del progetto, ma non notarizzate da Apple, quindi il primo avvio richiede un passaggio in <strong>Privacy e sicurezza → Apri comunque</strong>. Il README lo spiega, insieme alla compilazione dai sorgenti via SwiftPM (non c’è un <code>.xcodeproj</code> e Xcode non è necessario). Le istanze GitLab ospitate sotto un sottopercorso dell’URL non sono ancora supportate.</p>
<p>Il repository è su <a href="https://github.com/AlbertoBarrago/gitlab-alert">github.com/AlbertoBarrago/gitlab-alert</a>, con la pagina del prodotto su <a href="https://albz.it/gitlab-alert/">albz.it/gitlab-alert</a>. Se trova posto nella tua barra dei menu, una stella su GitHub fa piacere.</p>
`,vo=Object.freeze(Object.defineProperty({__proto__:null,html:bo,meta:fo},Symbol.toStringTag,{value:"Module"})),yo={title:"Iris: un’app di posta e calendario per il Mac, in Rust",date:"2026-10-08",tags:["rust","macos","email","calendar","opensource"],label:"traduzione AI da un testo scritto dall’autore"},wo=`<p>Volevo un’app di posta e calendario per il mio Mac che tenesse le email sul mio computer, parlasse direttamente con Gmail e Microsoft e fosse open source. Quell’app è <strong>Iris</strong>.</p>
<h2>Cosa fa Iris</h2>
<p>Iris legge la posta di Gmail, degli account Microsoft (Outlook.com, Hotmail, Live e Microsoft 365) e degli altri account tramite IMAP e SMTP, individuando automaticamente le impostazioni del server. Mostra la posta in una casella unificata oppure separata per account, con calendari e contatti accanto alla posta. Firma e cifra le email con OpenPGP e S/MIME.</p>
<p>I dati della posta e del calendario restano sul tuo computer e Iris non ha un server proprio. Per Gmail, Iris comunica direttamente con Google; per gli account Microsoft usa Microsoft Graph, quindi nessun altro server vede le tue email.</p>
<h2>Pensata per macOS</h2>
<p>Il cuore è in Rust: sincronizzazione, archivio locale, ricerca e operazioni sulla posta. Per l’interfaccia, sto passando a SwiftUI e AppKit, così si comporta come un’app per Mac: il Portachiavi per le password, le notifiche di sistema, gli aggiornamenti tramite Sparkle, il badge nel Dock.</p>
<h2>Un assistente, se lo vuoi</h2>
<p>Iris ha un assistente opzionale. Resta disattivato finché non scegli un modello: Claude Code, una chiave Anthropic o un modello in esecuzione sul tuo computer. Può riassumere una conversazione, cercare email, preparare una risposta o ripulire le newsletter, e chiede prima di intervenire sulla tua posta.</p>
<h2>A che punto è</h2>
<p>Iris è un progetto che sviluppo e uso ogni giorno. Il codice è pubblico su GitHub sotto GPL e le build per macOS sono versioni di test: c’è ancora lavoro da fare. Iris è partita dal codice di <a href="https://github.com/c9dev/penguin-mail">Penguin Mail</a>, con la stessa licenza.</p>
<h2>Entra nella lista d’attesa</h2>
<p>Vuoi provare Iris quando ci sarà una build pronta per te? <a href="mailto:albertobarrago@gmail.com?subject=Iris%20waitlist%3A%20beam%20me%20in&body=Ciao%20Alberto%2C%0D%0A%0D%0AAggiungimi%20alla%20lista%20d%27attesa%20di%20Iris.%20Sono%20pronto%20a%20far%20trasferire%20un%20nuovo%20client%20nella%20mia%20casella%20di%20posta.%0D%0A%0D%0ANome%3A%0D%0AVersione%20macOS%3A%0D%0A%0D%0AGrazie%21">Teletrasportami nella lista</a> e ti aggiungo alla lista d’attesa.</p>
<ul>
<li>Iris: <a href="https://albz.it/iris/">albz.it/iris</a></li>
<li>Codice: <a href="https://github.com/AlbertoBarrago/iris">github.com/AlbertoBarrago/iris</a></li>
</ul>
`,ko=Object.freeze(Object.defineProperty({__proto__:null,html:wo,meta:yo},Symbol.toStringTag,{value:"Module"})),So={title:"Iron Doctrine: multiplayer online deterministico con un motore ECS condiviso",date:"2026-08-31",tags:["typescript","game-dev","multiplayer","ecs","pnpm"],label:"traduzione AI da un testo scritto dall’autore"},Io=`<p><strong>Iron Doctrine</strong> è un gioco di strategia in tempo reale che sto costruendo in un monorepo pnpm, con un motore ECS deterministico al centro e, da questa settimana, una modalità online 1v1 funzionante.</p>
<h2>L’architettura</h2>
<p>Il repository è diviso in <code>packages/</code> e <code>apps/</code>:</p>
<ul>
<li><strong>packages/shared</strong>: il protocollo di rete (<code>ClientMessage</code>/<code>ServerMessage</code>), tipi e costanti condivisi (<code>SIM_HZ</code>, <code>DEFAULT_INPUT_DELAY</code>) e il <code>LockstepCoordinator</code></li>
<li><strong>packages/engine</strong>: un motore di simulazione ECS deterministico (entità/comandi/sistemi), che espone <code>Simulation.step()</code>/<code>enqueue()</code>, senza alcuna dipendenza dal rendering o dalla rete</li>
<li><strong>apps/client</strong>: React + Pixi.js, interamente nel browser</li>
<li><strong>apps/server</strong>: un host WebSocket Node/<code>ws</code> che inoltra i comandi senza simulare nulla</li>
</ul>
<h2>Il gioco locale: il game loop</h2>
<p><code>GameRenderer</code> (una grande classe che gestisce rendering, input e audio) gestisce un <code>SimBridge</code>, che a sua volta gestisce il Web Worker in cui gira la <code>Simulation</code>. Il worker avanza con un clock autonomo (<code>setTimeout</code>), applica i comandi appena arrivano e produce uno snapshot per tick, che il thread principale interpola e disegna.</p>
<h2>Il passaggio online</h2>
<p>L’aggiunta di questa settimana: partite 1v1 in rete basate sul modello deterministico lockstep.</p>
<ol>
<li><strong>apps/server</strong> esegue un singolo <code>MatchRelay</code> in memoria per processo. Non simula nulla: assegna ciascun comando in arrivo a un tick futuro e ritrasmette lo stesso insieme di comandi confermati a entrambi i client ogni <code>SIM_DT_MS</code>. La simulazione è deterministica perché entrambi i client eseguono lo stesso motore sullo stesso flusso di comandi.</li>
<li><strong>NetworkClient</strong> comunica con il server via WebSocket, traduce i tick confermati e li passa a un secondo tipo di bridge, <code>NetworkedSimBridge</code>, che implementa la stessa interfaccia <code>SimBridgeLike</code> di quello locale, con due differenze: i comandi locali vanno al server (<code>sendCommand</code>) invece che direttamente al worker, e il worker avanza di un solo tick quando arriva una conferma dalla rete (<code>networkTick</code>), invece di procedere autonomamente.</li>
<li><strong>Il problema “sei sempre il giocatore 0”</strong>: buona parte dell’interfaccia e dell’HUD assumeva che l’utente locale fosse il giocatore 0. L’ho risolto con <code>playerPerspective.ts</code>, un modulo puro che scambia le etichette <code>owner</code>/<code>player</code>/<code>winner</code> (0↔1) solo al confine con la rete, così ogni client continua a considerarsi internamente il giocatore 0.</li>
<li><code>GameRenderer</code> ora riceve il bridge nel costruttore (locale o di rete) invece di istanziarlo sempre da sé. Quel singolo punto di iniezione ha reso possibile il resto della modalità online senza riscrivere le circa 1700 righe della classe.</li>
</ol>
<h2>Perché questa scelta</h2>
<p>Mantenere la simulazione deterministica e indipendente dalla rete in <code>packages/engine</code> significa usare lo stesso codice per schermaglie, campagna e gioco online. Il server non deve mai conoscere lo stato del gioco: fornisce soltanto il riferimento temporale comune con cui ordinare i comandi. Il compromesso è che entrambi i client devono produrre risultati identici bit per bit a partire dagli stessi input. Per questo l’intero modello di rete si basa sulla riproduzione dei comandi, non sulla sincronizzazione dello stato.</p>
<h2>I prossimi passi</h2>
<p>L’1v1 funziona; ora tocca gestire le riconnessioni e verificare che il modello lockstep regga con il jitter di una rete reale, non solo su localhost.</p>
`,Ao=Object.freeze(Object.defineProperty({__proto__:null,html:Io,meta:So},Symbol.toStringTag,{value:"Module"})),To={title:"Da Ollama ad Azure OpenAI in un giorno, tutto scriptabile",date:"2026-11-20",tags:["ai","rag","azure","infrastructure-as-code","ai-agents"],label:"Testo assistito da AI, rivisto dall’autore"},zo=`<p><em>Note da una migrazione: un assistente RAG costruito e misurato in locale, portato sui modelli cloud di un grosso cliente senza creare niente a mano nel portale.</em></p>
<p>Per mesi l&#39;assistente ha girato sul mio Mac: Ollama, bge-m3 per gli embedding, gemma3:12b per la chat, un indice Elasticsearch e un set di valutazione da 50 domande. Poi è arrivato il momento di portarlo sui modelli Azure del cliente, con una consegna di tre righe: entra, creati quello che serve, se non hai i permessi avvisa. E rendi tutto scriptabile e replicabile.</p>
<p>L&#39;ultima frase si è rivelata la più importante. Ecco cosa ho imparato in una giornata.</p>
<h2>Prima la ricognizione, in sola lettura</h2>
<p>Prima di creare qualsiasi risorsa ho passato un&#39;ora con la Azure CLI a guardare e basta: ruoli, sottoscrizione, provider registrati, catalogo dei modelli e quote nelle regioni UE.</p>
<p>Prima sorpresa: si entra come ospite nel tenant del cliente, e il portale mostra la tua directory di casa. &quot;Non si vede nulla&quot; finché non cambi directory.</p>
<p>Seconda sorpresa, quella che conta: i modelli scelti qualche settimana prima erano ancora in catalogo, ma senza una quota attivabile. Solo batch. Il piano è cambiato prima di scrivere una riga, e due modelli più recenti hanno preso il loro posto: gpt-5.4-mini come principale, gpt-5.5 per il confronto.</p>
<p>Fatta dopo, la stessa scoperta avrebbe voluto dire rifare il lavoro. E l&#39;esplorazione a mano è diventata subito uno script, <code>discover.sh</code>, che chiunque può rilanciare.</p>
<h2>Le scelte, scritte nel codice</h2>
<p>L&#39;infrastruttura è in Bicep: nativo di Azure, nessun file di stato da custodire, e <code>what-if</code> per vedere cosa cambierà prima di applicarlo. Alcune decisioni volevo renderle difficili da annullare per sbaglio:</p>
<ul>
<li><strong>Dati in UE</strong>: deployment DataZone Standard EU, così prompt e risposte restano nella zona dati europea. Il tipo Bicep accetta solo quella SKU: passare a Global richiede una modifica rivista, non una parola cambiata in un file di parametri.</li>
<li><strong>Versioni dei modelli bloccate</strong>, senza aggiornamenti automatici: i benchmark restano confrontabili.</li>
<li><strong>La chiave nel Key Vault</strong>, mai negli output del deployment, mai stampata, neanche dallo smoke test.</li>
<li><strong>Chi ha accesso ai modelli è un elenco nel file dei parametri</strong>, non un clic nel portale: si legge in git, con data e motivo.</li>
</ul>
<p>Tutto passa da <code>deploy.sh</code>: what-if, conferma, applica. Rilanciarlo non cambia niente se niente è cambiato.</p>
<h2>Gli errori veri arrivano solo dal deploy vero</h2>
<p>Il what-if era pulito. Il primo deploy è fallito lo stesso.</p>
<p>Azure dichiara l&#39;account AI &quot;creato&quot; prima che sia davvero pronto, e la lettura della chiave falliva con <code>RequestConflict</code>. I modelli e il vault c&#39;erano, il segreto no. In un primo momento ho letto quel <code>Failed</code> come un tentativo ripetuto andato a buon fine: sbagliato, e l&#39;ho detto. La correzione è stata una dipendenza: il segreto viene scritto dopo i deployment dei modelli, quando l&#39;account è certamente pronto. Senza, ogni ambiente nuovo, produzione compresa, si sarebbe rotto nello stesso punto.</p>
<p>Due intoppi minori, utili lo stesso. Una conferma <code>[y/N]</code> lanciata senza terminale riceveva fine input e usciva in silenzio: ora lo dice e suggerisce <code>--yes</code>. E due deploy partiti in parallelo: il secondo è stato rifiutato da Azure, senza danni.</p>
<h2>Le astrazioni scritte mesi prima ripagano</h2>
<p>Nel backend, chat ed embedding erano già due interfacce, e il mapping dell&#39;indice prendeva le dimensioni dal provider attivo. La migrazione è stata aggiungere due implementazioni, scelte da una proprietà di configurazione. Nessun refactor.</p>
<p>I dettagli che hanno contato:</p>
<ul>
<li>gpt-5.5 rifiuta <code>temperature: 0.1</code> e accetta solo il default: la temperatura va configurata per modello, e inviata solo se presente.</li>
<li>Gli embedding di Azure hanno 3072 dimensioni contro le 1024 di bge-m3: serve un indice nuovo, e il vecchio resta per i confronti.</li>
<li>I vettori restituiti vanno ordinati per <code>index</code>, non per posizione. Sui 429 si aspetta quanto dice <code>Retry-After</code>, ma solo durante il reindex: una domanda dell&#39;utente deve fallire subito.</li>
<li>Se mancano endpoint o chiave, il backend non parte. Meglio un avvio fallito che un 503 a ogni domanda.</li>
</ul>
<h2>Misurare di nuovo, non presumere</h2>
<p>Cambiato il modello di embedding, cambia la distribuzione dei punteggi. La soglia di pertinenza, che scarta le domande fuori tema prima che arrivino al modello, era tarata sul vecchio. L&#39;ho rimisurata con 8 domande fuori tema (&quot;ricetta della carbonara&quot;) e 10 in tema: tra il punteggio fuori tema più alto e quello in tema più basso c&#39;è un varco di 0,05, e la vecchia soglia cade nel mezzo. Confermata, ma ora è un dato, non una speranza.</p>
<p>Poi il benchmark: le stesse 50 domande, tre giri, voto dato a mano.</p>
<table>
<thead>
<tr>
<th></th>
<th>gemma3:12b in locale</th>
<th>gpt-5.4-mini</th>
<th>gpt-5.5</th>
</tr>
</thead>
<tbody><tr>
<td>Voto</td>
<td>93/100</td>
<td>95, 95, 95</td>
<td>99, 99, 99</td>
</tr>
<tr>
<td>Errori gravi</td>
<td>almeno uno</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Tempo mediano</td>
<td>circa 17 s</td>
<td>1,4 s</td>
<td>5,5 s</td>
</tr>
</tbody></table>
<p>Il dato più utile non è il punteggio, è la stabilità. Tre giri identici dicono che le risposte parziali sono difetti strutturali (recupero, prompt), non sfortuna del campionamento. Una di queste, infatti, nessun modello può risolverla: il documento giusto non arriva tra le fonti.</p>
<p>La scelta finale non l&#39;ho fatta io, ed è giusto così. gpt-5.5 corregge quattro risposte parziali su cinque, ma costa circa dieci volte tanto a domanda (un paio di centesimi contro due decimi di centesimo) ed è quattro volte più lento. Qualità contro costo e velocità è una decisione del cliente: nel frattempo gpt-5.5 è il default, e cambiarlo è una riga di configurazione.</p>
<h2>Un secondo parere, verificato</h2>
<p>Il diff degli script, e poi quello del backend, sono passati da un secondo modello, in sola lettura e con il divieto esplicito di eseguire comandi. Circa metà dei rilievi erano veri: un README che insegnava un comando che stampava la chiave, uno smoke test che poteva risultare verde senza aver fatto chiamate, la chiave API dentro un <code>toString()</code> generato da Lombok. Gli altri li ho scartati dopo averli verificati sul codice. Un secondo parere vale solo così.</p>
<p>Prima del merge, tutto il lavoro (settanta commit) è passato da una review più profonda, con Codex. Quindici rilievi, sette da bloccare il merge, nessuno di rumore. I più seri erano difetti di logica del dominio che nessun test aveva visto: contenuti marcati come non più validi finivano nell&#39;indice come se fossero in vigore. Accanto, i classici che si scrivono in fretta: l&#39;endpoint dell&#39;assistente aperto a tutti i ruoli invece che agli operatori, il testo delle domande negli audit log, immagini e link nel Markdown del modello resi come HTML, una risposta salvata nel browser che sopravviveva al cambio di utente nella stessa scheda. Sette fix, sette commit separati, poi il merge. I rilievi più ampi, che toccano la correttezza delle risposte su casi complessi, sono pianificati per la fase di produzione invece che infilati in fretta.</p>
<h2>Il monitoraggio ripaga al primo uso</h2>
<p>L&#39;ultimo script legge Azure Monitor: richieste e token per modello, esiti HTTP. Al primo lancio ha mostrato quattro errori 500 sugli embedding durante il reindex: erano la causa dei due documenti mancanti nell&#39;indice nuovo. Il provider ritentava solo sui 429, ora anche sui 5xx. Un reindex riprendibile ha recuperato i due documenti, e il nuovo indice ora corrisponde al vecchio documento per documento. Su qualche migliaio di richieste, l&#39;errore &quot;raro&quot; capita.</p>
<p>Le stesse metriche, con il listino ufficiale, danno il costo vero della giornata: circa 5 euro in tutto, due reindex completi e tutti i benchmark compresi. Un reindex completo costa circa un euro. (Trucco della CLI: senza un <code>--end-time</code> esplicito, Azure Monitor restituisce serie vuote.)</p>
<p>E il &quot;se non hai i permessi, avvisa&quot;? Il budget mensile con gli avvisi è scritto nel Bicep, ma con i nostri ruoli Azure risponde che non possiamo leggere i prezzi. Così è diventato opzionale, e lo attiverà chi gestisce la fatturazione. Nel frattempo il tetto vero è la capacità di ogni deployment: oltre, Azure risponde 429 e non fattura.</p>
<h2>Il passaggio di consegne</h2>
<p>Il backend non sa niente di Azure finché il cluster non glielo dice: tre valori di configurazione e un segreto, caricati da un meccanismo che c&#39;era già, nessuna riga di codice da cambiare. I valori sono pronti e passano a chi gestisce la piattaforma, con due note: la chiave va nel Secret, non nella ConfigMap, e non viaggia in chat. Insieme, una guida operativa per i colleghi.</p>
<p>Alla domanda &quot;quindi adesso è tutto esposto su internet?&quot; la risposta è stata breve: solo l&#39;endpoint del modello, protetto da chiave. Backend e dati restano dove erano, e una allowlist di IP è un rinforzo opzionale.</p>
<p>Resta un limite noto, scritto e non nascosto: una domanda su un singolo paragrafo di un testo molto lungo non recupera quel paragrafo. È un problema di recupero, e nessun modello lo risolve da solo.</p>
<h2>Cosa mi porto a casa</h2>
<ul>
<li>Tutto quello che fai a mano nel portale è debito: se non è in uno script, il prossimo ambiente lo rifarai da capo.</li>
<li>La ricognizione in sola lettura viene prima, perché può cambiare il piano.</li>
<li>Il what-if non vede le corse: le trova solo il deploy vero.</li>
<li>Le interfacce giuste, scritte quando non servivano, sono quelle che rendono possibile una migrazione in un giorno.</li>
<li>Una review profonda prima del merge trova quello che i test non sanno cercare: la logica del dominio.</li>
<li>Quando leggi male un risultato, dillo ad alta voce e correggi. Costa meno che difenderlo.</li>
</ul>
`,xo=Object.freeze(Object.defineProperty({__proto__:null,html:zo,meta:To},Symbol.toStringTag,{value:"Module"})),Co={title:"Markasso Cloud, e un regalo per il Mac",date:"2026-11-04",tags:["markasso","cloud","macos","ai-agents","indie"],label:"Testo assistito da AI, rivisto dall’autore"},Po=`<p>Markasso 1.17 è fuori, ed è un rilascio un po’ diverso dagli altri: per la prima volta c’è qualcosa che si paga. Si chiama <strong>Markasso Cloud</strong>, e prima di raccontare cosa fa voglio togliere l’elefante dalla lavagna.</p>
<h2>Non sto cercando di arricchirmi</h2>
<p>Markasso è nato perché volevo una lavagna veloce, scura, da usare con la tastiera. È diventato il progetto a cui tengo di più, e resterà così.</p>
<p>Alcune cose, però, non vivono nel tuo browser. Le board sincronizzate e gli agenti AI che disegnano nelle sessioni live girano su un’infrastruttura pubblica, che è sempre accesa e ha un costo vero, ogni mese. Markasso Cloud costa <strong>5 € al mese o 48 € l’anno</strong>: è il minimo per tenere in piedi quella parte. Non è il mio yacht, al massimo un caffè ogni tanto.</p>
<h2>Cosa fa Markasso Cloud</h2>
<ul>
<li><strong>Board nel cloud.</strong> Salvi una board dal menu Cloud e ottieni un link in lettura e uno in modifica. La apri sul web in ufficio e sul Mac a casa, ed è la stessa.</li>
<li><strong>Agenti AI nelle sessioni live.</strong> Inviti Claude, Codex o un altro agente con MCP in una sessione e disegna con te, sulla stessa lavagna, in tempo reale.</li>
</ul>
<p>Non serve un account. Il pagamento passa da Polar, la chiave di licenza arriva per email e la incolli in Markasso: se è valida, festeggia con i coriandoli.</p>
<h2>Quello che c’era resta gratis</h2>
<p>Tutto quello che Markasso faceva ieri lo fa ancora oggi, gratis, come sempre:</p>
<ul>
<li>la lavagna intera, senza limiti;</li>
<li>i file in locale, nel tuo browser;</li>
<li>le sessioni live tra persone;</li>
<li>il server MCP locale, per far disegnare un agente sulle tue board;</li>
<li>la lettura delle board cloud che qualcuno ti condivide.</li>
</ul>
<p>Cloud è una comodità in più, non un pedaggio. Se non ti serve, Markasso non ti chiede niente.</p>
<h2>Il regalo: Markasso per Mac</h2>
<p>Insieme a Cloud arriva <strong>Markasso per Mac</strong>, un’app nativa scritta in Swift. È gratis.</p>
<p>Funziona su macOS 26 o successivo, con Apple Silicon e Intel, e apre i file <code>.markasso</code> come un’app del sistema. Con una board cloud il flusso diventa naturale: la lavagna sul web al lavoro, sul Mac a casa, e la board ti segue. La build non è ancora notarizzata, quindi la prima apertura chiede un passaggio in più: sulla pagina trovi le istruzioni.</p>
<h2>Se ti va</h2>
<p>Se Markasso ti piace e Cloud ti serve, abbonarti è il modo più bello per tenerlo vivo. Se non ti serve va benissimo così: disegna, condividi, raccontalo a qualcuno. Per me vale uguale.</p>
<ul>
<li>Markasso: <a href="https://markasso.it">markasso.it</a></li>
<li>Cloud: <a href="https://markasso.it/cloud">markasso.it/cloud</a></li>
<li>Mac: <a href="https://markasso.it/mac">markasso.it/mac</a></li>
<li>Codice: <a href="https://github.com/AlbertoBarrago/markasso">github.com/AlbertoBarrago/markasso</a></li>
</ul>
`,qo=Object.freeze(Object.defineProperty({__proto__:null,html:Po,meta:Co},Symbol.toStringTag,{value:"Module"})),Mo={title:"I miei primi (e ultimi?) quarant’anni",date:"2026-09-29",tags:["opinion","life","freedom","career","italy"],label:"testo originale dell’autore, refusi corretti con AI"},Lo=`<p>Domani compio quarant’anni.</p>
<p>Giunto a questo punto della mia vita, da appassionato del codice a tal punto da perdere diottrie, affetti e ragione… mi ritrovo a fare una valutazione non tanto tecnica quanto umana.</p>
<h2>Otto ore</h2>
<p>Otto ore passate dietro un monitor per trascorrerne meno di sei per i propri affari.</p>
<p>Otto ore di cui sarebbero necessarie forse due al giorno d’oggi per essere “1000x”, come dice DHH, partendo da una conoscenza basica di fondo.</p>
<h2>L’atto di volontà</h2>
<p>Libertà è un processo mentale, non una semplice parola; ognuno vive la propria dimensione di libertà. Ma credo, in fondo, che in pochi la sperimentino e piuttosto ne vedano i tratti per differenza.</p>
<p>L’atto di volontà è l’unica cosa che accompagna un reale cambiamento, che porta con sé rinunce, fatica, disciplina e a volte ti chiede pure di essere uno col tuo distacco.</p>
<p>Non c’è una conclusione, non c’è un vero senso; ma vi è sicuramente un significato per ciascuno che si soffermi a leggere.</p>
<h2>La realtà italiana</h2>
<p>Andare a toccare l’erba, ritiro anticipato: tutte realtà che non ci toccano come italiani. Qui al massimo diventi CTO e prendi comunque meno di un portaborse di qualche ministro italiano.</p>
<h2>Qualcosa di positivo, forse</h2>
<p>Ma c’è un dato positivo, credo, essendo che il negativo è chiaro.</p>
<p>Bisogna solo trovarlo.</p>
<p><em>Valete.</em></p>
`,Eo=Object.freeze(Object.defineProperty({__proto__:null,html:Lo,meta:Mo},Symbol.toStringTag,{value:"Module"})),_o={title:"Otelma: costruire da zero un runtime locale per LLM",date:"2026-08-31",tags:["go","llm","llama-cpp","apple-silicon","ai"],label:"traduzione AI da un testo scritto dall’autore"},$o=`<p><strong>Otelma</strong> è un runtime locale per l’inferenza LLM che sto costruendo in Go.</p>
<p>L’obiettivo è costruire qualcosa di volutamente più piccolo di Ollama: capire cosa c’è davvero tra un file GGUF e un’applicazione locale che usa un LLM, trattando la memoria unificata come una risorsa reale e finita, invece di qualcosa di cui prima o poi si occuperà il sistema operativo.</p>
<p>Al momento gira su Apple Silicon, usa <code>llama.cpp</code> come primo backend di inferenza ed espone sia la propria API locale sia un’interfaccia minima compatibile con OpenAI.</p>
<h2>L’architettura</h2>
<p>Otelma è diviso in quattro livelli principali:</p>
<ul>
<li><strong>CLI</strong>: <code>pull</code>, <code>list</code>, <code>ps</code>, <code>run</code>, <code>chat</code>, <code>serve</code>, <code>config</code>, <code>version</code></li>
<li><strong>API del runtime locale</strong>: ciclo di vita dei modelli, scheduling, contabilizzazione della memoria ed endpoint HTTP</li>
<li><strong>Backend di inferenza</strong>: un’astrazione sul motore di inferenza effettivo; oggi <code>llama.cpp</code>, MLX in programma</li>
<li><strong>Archivio dei modelli</strong>: metadati GGUF locali, checksum, dimensioni e download da Hugging Face</li>
</ul>
<p>Anche i comandi locali della CLI passano dall’API HTTP.</p>
<p>Eseguire:</p>
<p><code>otelma run qwen2.5-0.5b &quot;What is the capital of Italy?&quot;</code></p>
<p>non aggira il runtime per invocare direttamente <code>llama.cpp</code>. La CLI parla con la stessa API che userebbe un’applicazione esterna.</p>
<p>Se il server non è ancora in esecuzione, Otelma lo avvia automaticamente in background.</p>
<h2>Il ciclo di vita dei modelli come macchina a stati</h2>
<p>Una cosa che non volevo era una gestione dei modelli nascosta dietro un insieme di booleani e controlli sui processi.</p>
<p>Ogni modello passa invece attraverso una macchina a stati esplicita:</p>
<p><code>NOT_PRESENT → DOWNLOADED → LOADING → READY → BUSY → UNLOADING</code></p>
<p>Il gestore dei modelli è responsabile di quelle transizioni.</p>
<p>Il runtime ha così un unico punto in cui gestire domande come:</p>
<ul>
<li>questo modello è davvero disponibile in locale?</li>
<li>è già caricato?</li>
<li>può essere usato da un’altra richiesta?</li>
<li>sta generando in questo momento?</li>
<li>può essere scaricato dalla memoria in sicurezza?</li>
</ul>
<p>Il registro viene salvato su disco, così il runtime ritrova i modelli scaricati anche dopo un riavvio, senza doverli cercare di nuovo.</p>
<h2>La memoria unificata fa parte dell’architettura</h2>
<p>Apple Silicon rende comoda l’inferenza locale perché CPU e GPU condividono la memoria unificata.</p>
<p>Significa anche che fingere che la memoria sia illimitata è una cattiva astrazione.</p>
<p>Su una macchina con 24 GB di memoria unificata, caricare più modelli grandi insieme può diventare molto rapidamente un problema del sistema operativo.</p>
<p>Otelma ha quindi un <code>Budget</code> di memoria esplicito.</p>
<p>Prima di caricare un modello, il gestore riserva la quantità di memoria prevista. Se questa riserva supera il limite configurato, il caricamento viene rifiutato prima che il processo di inferenza parta.</p>
<p>La distinzione importante è che è il runtime a decidere se c’è abbastanza memoria per caricare il modello:</p>
<p><code>canLoad(model) → yes/no</code></p>
<p>invece di un eventuale OOM.</p>
<p>Questo vincolo ha influenzato l’architettura molto più di quanto mi aspettassi all’inizio.</p>
<h2>llama.cpp è un backend, non il runtime</h2>
<p>Otelma non implementa direttamente le operazioni sui tensori o l’inferenza dei transformer.</p>
<p>Per eseguire l’inferenza, il backend attuale avvia <code>llama-server</code> di <code>llama.cpp</code>.</p>
<p>Ma il resto di Otelma non lo sa.</p>
<p>Il runtime comunica attraverso un’interfaccia del backend che gestisce il caricamento dei modelli, il loro scaricamento dalla memoria e la generazione. <code>llama.cpp</code> è semplicemente la prima implementazione.</p>
<p>Questa separazione dovrebbe permettere di aggiungere in seguito un backend MLX senza cambiare la gestione dei modelli, lo scheduling, l’archivio o l’API pubblica.</p>
<p>Quella distinzione è stata una delle ragioni principali per costruire il progetto: un motore di inferenza e un runtime di inferenza risolvono problemi diversi.</p>
<h2>Compatibile con OpenAI fin dall’inizio</h2>
<p>Otelma espone anche un sottoinsieme minimo dell’API OpenAI:</p>
<p><code>POST /v1/chat/completions</code></p>
<p>e:</p>
<p><code>GET /v1/models</code></p>
<p>L’obiettivo non è riprodurre l’intera API OpenAI.</p>
<p>È rendere il runtime subito utilizzabile dal software che supporta già un endpoint OpenAI personalizzato.</p>
<p>L’applicazione non dovrebbe aver bisogno di sapere se il modello dietro quell’endpoint gira nel cloud, tramite <code>llama.cpp</code> o, in futuro, tramite MLX.</p>
<h2>Pull, run, chat</h2>
<p>Il workflow attuale è volutamente ridotto:</p>
<p><code>otelma list</code></p>
<p><code>otelma pull qwen2.5-0.5b</code></p>
<p><code>otelma run qwen2.5-0.5b &quot;What is the capital of Italy?&quot;</code></p>
<p>oppure, per una sessione interattiva:</p>
<p><code>otelma chat qwen2.5-0.5b</code></p>
<p>I modelli possono anche essere scaricati direttamente da Hugging Face, mentre il catalogo integrato offre un percorso più semplice, basato sul nome, per quelli conosciuti.</p>
<p>A questo punto l’intera pipeline funziona dall’inizio alla fine:</p>
<p><code>pull → load → inference → unload</code></p>
<p>con metadati persistenti dei modelli, contesto su più turni, avvio del server in background e inferenza reale.</p>
<h2>Perché costruirlo?</h2>
<p>Esistono già ottimi strumenti per eseguire LLM in locale.</p>
<p>È proprio per questo che voglio mantenere Otelma piccolo.</p>
<p>Non volevo un’altra interfaccia sopra un runtime esistente. Volevo capire il runtime stesso: ciclo di vita dei modelli, gestione dei processi, riserve di memoria, scheduling, archivio, compatibilità delle API e dove dovrebbe iniziare e finire il motore di inferenza vero e proprio.</p>
<p>Costruire una versione essenziale rende visibili quei confini.</p>
<h2>I prossimi passi</h2>
<p>Lo scheduler attuale serializza volutamente le richieste ed è ancora basato su un singolo mutex.</p>
<p>È sufficiente a rendere deterministico il ciclo di vita, ma è anche il prossimo limite architetturale da superare.</p>
<p>Poi: scheduling migliore, rimozione dei modelli, risposte in streaming e un backend MLX.</p>
<p>Il progetto è ancora abbastanza piccolo perché ogni astrazione abbia una ragione di esistere, e per ora voglio mantenerlo così.</p>
`,Ro=Object.freeze(Object.defineProperty({__proto__:null,html:$o,meta:_o},Symbol.toStringTag,{value:"Module"})),Oo={title:"Ho costruito una CLI per rispondere a una domanda: cosa romperà questa modifica?",date:"2026-08-27",tags:["programming","devops","go","opensource"],label:"traduzione AI da un testo scritto dall’autore"},Do=`<p>Ci siamo passati tutti.</p>
<p>Apri un repository, modifichi un file che sembra del tutto innocuo, esegui i test e apri una pull request.</p>
<p>Poi qualcuno commenta:</p>
<blockquote>
<p>“Attenzione. Quel modulo è usato anche dalla pipeline di fatturazione.”</p>
</blockquote>
<p>O peggio, nessuno se ne accorge.</p>
<p>La modifica viene integrata.</p>
<p>E qualcosa si rompe.</p>
<p>Il problema non è necessariamente il codice scritto male. In codebase grandi o poco familiari, capire la portata di una modifica è sorprendentemente difficile.</p>
<p>Così ho iniziato a costruire Serval.</p>
<p>Serval è una CLI che lavora in locale e prova a rispondere a una domanda semplice:</p>
<p><em>Se modifico questo file, su cosa è probabile che abbia effetto?</em></p>
<h2>Il problema</h2>
<p>Quando voglio capire l’impatto di una modifica, di solito finisco per usare una combinazione di:</p>
<pre><code>rg &quot;someModule&quot;
git log
git blame
</code></pre>
<p>Poi controllo gli import, cerco nella configurazione CI, verifico quali file cambiano di solito insieme e mi affido a quello che so del repository.</p>
<p>Funziona.</p>
<p>Ma è soprattutto lavoro manuale.</p>
<p>E quando il repository non lo conosci bene, finisci spesso per andare a intuito.</p>
<p>Volevo qualcosa di più vicino a:</p>
<pre><code>serval inspect src/auth/token.ts
</code></pre>
<p>e ottenere:</p>
<pre><code>Target
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
</code></pre>
<p>Non una previsione.</p>
<p>Non:</p>
<blockquote>
<p>“L’AI pensa che questa modifica potrebbe essere pericolosa.”</p>
</blockquote>
<p>Elementi concreti.</p>
<h2>Quattro segnali invece di uno</h2>
<p>Guardare solo gli import non basta.</p>
<p>Un grafo delle dipendenze può dirmi:</p>
<pre><code>A -&gt; B -&gt; C
</code></pre>
<p>Se modifico C, so che B e potenzialmente A ne risentono.</p>
<p>Utile.</p>
<p>Ma i repository contengono più informazioni del loro grafo delle dipendenze.</p>
<h3>1. Grafo delle dipendenze</h3>
<p>Serval scansiona il repository e costruisce un grafo a partire dalle dipendenze native dei linguaggi.</p>
<p>Al momento analizza repository scritti in:</p>
<ul>
<li>JavaScript / TypeScript</li>
<li>Go</li>
<li>Python</li>
<li>Java</li>
<li>C</li>
</ul>
<p>Dato un file, Serval percorre il grafo a ritroso e individua quali altri file ne dipendono.</p>
<p>Questo ci dice fin dove può propagarsi la modifica attraverso le dipendenze.</p>
<p>Ma la struttura è solo il primo segnale.</p>
<h3>2. Cronologia Git</h3>
<p>Git contiene qualcosa di sorprendentemente vicino alla memoria di una codebase.</p>
<p>Se due file cambiano ripetutamente insieme, è un’informazione.</p>
<p>Se un modulo è stato modificato di continuo negli ultimi mesi, anche quella è un’informazione.</p>
<p>Serval guarda quindi aspetti come:</p>
<ul>
<li>frequenza storica delle modifiche</li>
<li>frequenza delle modifiche congiunte</li>
</ul>
<p>Immagina due file con grafi delle dipendenze identici.</p>
<p>Uno non cambia da due anni.</p>
<p>L’altro è cambiato nove volte negli ultimi 90 giorni e cambia spesso insieme ad altri 15 moduli.</p>
<p>Probabilmente quei file non dovrebbero ricevere lo stesso punteggio di rischio.</p>
<h3>3. Configurazione CI</h3>
<p>C’è poi un altro grafo nascosto nella maggior parte dei repository: la CI/CD.</p>
<p>Una modifica può attivare test di integrazione, build, deploy o pipeline di validazione a seconda dei filtri sui percorsi.</p>
<p>Serval comprende attualmente la configurazione di:</p>
<ul>
<li>GitHub Actions</li>
<li>GitLab CI</li>
<li>Azure Pipelines</li>
<li>Jenkins</li>
</ul>
<p>Questo offre un altro elemento utile: quali automazioni tocca davvero questa modifica?</p>
<h3>4. Percorsi critici</h3>
<p>Alcune parti di un sistema meritano semplicemente più attenzione.</p>
<p>L’autenticazione non è la stessa cosa di una modifica a un README.</p>
<p>La logica dei pagamenti non è la stessa cosa di una modifica a una utility CSS.</p>
<p>Serval permette quindi di definire regole sui percorsi critici specifiche per il repository attraverso <code>.serval.yml</code>.</p>
<p>Di nuovo, non sta cercando di dimostrare che qualcosa si romperà.</p>
<p>Sta raccogliendo elementi che dicono: probabilmente dovresti guardare questa modifica con più attenzione.</p>
<h2>Perché il punteggio è deterministico</h2>
<p>Questa è diventata una delle decisioni progettuali più importanti del progetto.</p>
<p>Sarebbe stato facilissimo inviare il contesto del repository a un LLM e chiedere:</p>
<blockquote>
<p>“Quanto è rischiosa questa modifica da 0 a 100?”</p>
</blockquote>
<p>Ho scelto deliberatamente di non farlo.</p>
<p>Il punteggio di base prodotto da Serval è deterministico.</p>
<p>Lo stesso stato del repository e la stessa configurazione producono lo stesso risultato.</p>
<p>Soprattutto, ogni punto si può spiegare.</p>
<p>Qualcosa del genere:</p>
<pre><code>Risk
  MEDIUM: 38/100

  +4   2 downstream modules
  +14  high historical churn
  +12  91 frequently co-changed modules
  +8   2 CI workflows affected
</code></pre>
<p>Non c’è un ragionamento nascosto dietro quel 38.</p>
<p>Puoi verificarlo.</p>
<p>Puoi non essere d’accordo.</p>
<p>Puoi cambiare la configurazione.</p>
<p>Ma puoi capire da dove arriva.</p>
<p>Per gli strumenti di ingegneria, credo che questa proprietà conti.</p>
<h2>Quindi… niente AI?</h2>
<p>Non esattamente.</p>
<p>Serval supporta le spiegazioni AI.</p>
<p>Per esempio:</p>
<pre><code>serval inspect src/auth/token.ts --explain
</code></pre>
<p>La parte interessante è il confine.</p>
<p>L’AI non può cambiare il punteggio.</p>
<p>Riceve solo l’analisi deterministica e la spiega in linguaggio naturale.</p>
<p>E dato che Serval lavora in locale, il provider predefinito può essere un’istanza locale di Ollama.</p>
<p>Si possono usare altri provider tramite CLI installate in locale, come Claude, Codex o Gemini.</p>
<p>Questa architettura mi piace molto più di un LLM al centro del sistema:</p>
<pre><code>repository
    ↓
deterministic analysis
    ↓
risk model
    ↓
result
    ↓
optional AI explanation
</code></pre>
<p>Il modello spiega gli elementi disponibili. Non li inventa.</p>
<h2>La scelta di lavorare in locale</h2>
<p>Serval non richiede:</p>
<ul>
<li>un account</li>
<li>un backend SaaS</li>
<li>di caricare il repository altrove</li>
<li>una chiave API per le funzionalità di base</li>
</ul>
<p>L’analisi avviene in locale.</p>
<p>Questo conta per gli strumenti di sviluppo, perché il repository contiene già tutto ciò che serve per la maggior parte dell’analisi:</p>
<ul>
<li>codice sorgente</li>
<li>cronologia Git</li>
<li>configurazione CI</li>
<li>configurazione del repository</li>
</ul>
<p>Perché inviare tutto altrove se possiamo calcolare la risposta in locale?</p>
<h2>Può diventare anche un controllo in CI</h2>
<p>La stessa analisi può essere eseguita sul diff attuale:</p>
<pre><code>serval diff
</code></pre>
<p>oppure produrre output leggibile dalle macchine:</p>
<pre><code>serval diff --json
</code></pre>
<p>E questo rende possibile un altro caso d’uso:</p>
<pre><code>serval diff --fail-on high
</code></pre>
<p>Se uno dei file modificati raggiunge il livello di rischio HIGH, Serval termina con un codice di uscita diverso da zero.</p>
<p>Significa che lo strumento può passare da “informazione interessante per lo sviluppatore” a “segnale deterministico nella pipeline di delivery”.</p>
<p>Mi interessa particolarmente esplorare questa direzione. Non come un altro quality gate che blocca gli sviluppatori a caso, ma come un modo per rendere visibile l’impatto atteso di una modifica prima del merge.</p>
<h2>Installazione</h2>
<p>Serval è scritto in Go e distribuito tramite Homebrew.</p>
<pre><code>brew install AlbertoBarrago/tap/serval
</code></pre>
<p>Poi, dentro un repository Git:</p>
<pre><code>serval inspect path/to/file
</code></pre>
<p>oppure semplicemente:</p>
<pre><code>serval path/to/file
</code></pre>
<p>Ci sono anche comandi per ispezionare direttamente il grafo e la cronologia:</p>
<pre><code>serval graph path/to/file
serval history path/to/file
serval doctor
</code></pre>
<p>E dato che ho un debole per gli strumenti CLI della vecchia scuola:</p>
<pre><code>man serval
</code></pre>
<p>esiste anche quello.</p>
<h2>Cosa sto cercando di esplorare</h2>
<p>Serval è ancora giovane.</p>
<p>Mi interessa meno fingere che un punteggio da 0 a 100 possa prevedere magicamente se il software si romperà, e più una domanda diversa:</p>
<p><em>Quante informazioni utili sul rischio di una modifica sono già dentro i nostri repository?</em></p>
<p>I grafi delle dipendenze ci dicono cosa è collegato.</p>
<p>Git ci dice quali file sono stati modificati insieme nel corso del progetto.</p>
<p>La CI ci dice quali automazioni sono coinvolte.</p>
<p>Le regole del repository ci dicono quali aree meritano più attenzione.</p>
<p>Nessuno di questi segnali, da solo, è particolarmente rivoluzionario.</p>
<p>L’esperimento è combinarli in uno strumento piccolo, locale e spiegabile.</p>
<p>E forse è anche qui che l’AI si inserisce meglio in questo tipo di strumenti di sviluppo: senza sostituire l’analisi deterministica, ma aggiungendosi quando serve un ragionamento in linguaggio naturale.</p>
<p>Serval è open source e ha licenza MIT.</p>
<p>Progetto: <a href="https://albz.it/serval/">albz.it/serval</a></p>
<p>Codice: <a href="https://github.com/AlbertoBarrago/serval">github.com/AlbertoBarrago/serval</a></p>
<p>Se lavori su grandi repository, monorepo, sistemi legacy o progetti con pipeline CI articolate, mi interesserebbe soprattutto sapere quali segnali usi prima di toccare una parte della codebase che non conosci.</p>
`,jo=Object.freeze(Object.defineProperty({__proto__:null,html:Do,meta:Oo},Symbol.toStringTag,{value:"Module"})),Bo={title:"Telemaco: un motore browser headless in Rust, senza Chromium",date:"2026-09-04",tags:["rust","browser","scraping","ai-agents","cdp","sideprojects"],label:"traduzione AI da un testo scritto dall’autore"},No=`<p><strong>Telemaco</strong> è un motore browser headless che sto costruendo in Rust. Esegue JavaScript reale tramite V8, mantiene un vero albero DOM, ha una propria pipeline di layout e rendering e comunica tramite il Chrome DevTools Protocol, così Puppeteer e Playwright si collegano senza configurazioni aggiuntive. Niente Chromium, niente WebView, niente download da 300 MB. Un eseguibile da 70 MB che parte subito e carica una pagina in circa 85 ms.</p>
<p>Questa è la storia di come è nato, perché esiste e quali scelte gli hanno dato forma.</p>
<h2>Il problema: Chromium come tassa</h2>
<p>Per anni, “browser headless” ha significato una sola cosa: Chrome headless. Funziona, ma porta con sé un costo di cui ti accorgi solo quando aumentano i carichi.</p>
<ul>
<li><strong>Il download.</strong> Ogni runner CI, ogni container nuovo, ogni portatile di un collega scarica circa 300 MB di Chromium. Playwright e Puppeteer rendono l’operazione indolore, ed è proprio per questo che nessuno la mette in discussione.</li>
<li><strong>La memoria.</strong> Una singola istanza di Chrome headless, senza fare nulla, occupa oltre 200 MB. Avviane qualcuna per fare scraping in parallelo e ti ritrovi a pianificare la RAM come nel 2010.</li>
<li><strong>L’avvio.</strong> Due secondi per partire prima ancora di aver caricato una pagina.</li>
<li><strong>Il fingerprint.</strong> Chrome headless è facilissimo da riconoscere. Se il sito da cui estrai dati usa sistemi di rilevamento, sei già in una corsa agli armamenti contro i sistemi anti-bot.</li>
</ul>
<p>Niente di tutto questo è intrinseco al compito. Un motore browser è un parser, un DOM, un motore di layout, una pipeline di rendering e un runtime JavaScript. Chromium è un modo molto pesante di assemblare quei pezzi. Ne volevo uno più leggero.</p>
<h2>L’esigenza da cui è partito</h2>
<p>Due esigenze concrete hanno guidato il progetto.</p>
<p>La prima: <strong>ricerca ed estrazione efficienti dal web</strong>. Lavoro con colleghi che passano le giornate a estrarre dati strutturati dal web, come record Salesforce, documentazione MDN e pagine di prodotti. Gli strumenti sono o un client HTTP grezzo (che non può eseguire JavaScript) o un browser completo (che è eccessivo). Mancava una via di mezzo: qualcosa che eseguisse davvero JavaScript e gestisse un DOM completo, ma abbastanza piccolo da essere trattato come un’utilità, non come un progetto infrastrutturale.</p>
<p>La seconda: <strong>test end-to-end senza Chromium</strong>. Se hai mai eseguito una suite Playwright in CI, conosci il rituale: scarica il browser, spera che i flag della sandbox siano giusti, guarda salire la memoria. Volevo la stessa interfaccia di automazione CDP, gli stessi <code>page.goto</code> e <code>page.evaluate</code>, ma con qualcosa che non richiedesse affatto l’installazione di un browser. Un singolo eseguibile che <em>è</em> il browser.</p>
<h2>Sulle spalle di molti progetti</h2>
<p>Non volevo reinventare un browser da zero, e non ho dovuto farlo. L’ecosistema Rust ha messo insieme quasi tutti i pezzi senza fare troppo rumore, e ho scelto di costruire Telemaco su quei componenti.</p>
<ul>
<li><strong>I componenti di Servo</strong>: <code>html5ever</code> per il parsing HTML, <code>selectors</code> per individuare gli elementi che corrispondono ai selettori CSS, <code>cssparser</code>, <code>servo_arc</code>. I meccanismi DOM e CSS che il browser di ricerca di Mozilla ha consolidato per anni.</li>
<li><strong><code>taffy</code></strong> per il motore di layout, una libreria flexbox/grid interamente in Rust.</li>
<li><strong><code>tiny-skia</code></strong> per la rasterizzazione e <strong><code>ab_glyph</code></strong> per il rendering dei glifi: la pipeline di rendering, anch’essa interamente in Rust.</li>
<li><strong>V8 tramite <code>deno_core</code></strong> per JavaScript. V8 vero, lo stesso motore usato da Chrome, così la semantica JavaScript è esattamente quella che ti aspetti.</li>
<li><strong><code>chromiumoxide</code></strong> e il Chrome DevTools Protocol per l’interfaccia di automazione.</li>
</ul>
<p>Il progetto è nato come fork di <strong>Obscura</strong> (Apache-2.0), un motore browser headless di h4ckf0r0day. Questa è l’origine, senza giri di parole: non sono partito da una pagina bianca, ma da una base solida che ho portato in una direzione diversa. Sono cambiati i nomi dei crate, l’interfaccia della CLI e l’identità del progetto, e la codebase è stata adattata ed estesa con un obiettivo pratico, orientato allo scraping e agli agenti. L’attribuzione è nel file <code>NOTICE</code> del repository: è un’opera derivata, e lo dichiara.</p>
<h2>L’architettura</h2>
<p>Telemaco è un workspace di nove crate, con un crate per livello. Le chiamate tra crate passano dal livello superiore, anziché avvenire tra componenti dello stesso livello. Ecco come sono suddivisi:</p>
<table>
<thead>
<tr>
<th>Crate</th>
<th>Ruolo</th>
</tr>
</thead>
<tbody><tr>
<td><code>telemaco-cli</code></td>
<td>CLI: <code>fetch</code>, <code>serve</code> (server CDP), <code>scrape</code>, <code>mcp</code></td>
</tr>
<tr>
<td><code>telemaco-cdp</code></td>
<td>Server Chrome DevTools Protocol (WebSocket)</td>
</tr>
<tr>
<td><code>telemaco-js</code></td>
<td>Runtime V8/<code>deno_core</code>; shim DOM e bridge JS/Rust</td>
</tr>
<tr>
<td><code>telemaco-dom</code></td>
<td>Albero DOM</td>
</tr>
<tr>
<td><code>telemaco-net</code></td>
<td>Client HTTP, client stealth, archivio cookie, cache robots, elenco dei tracker bloccati</td>
</tr>
<tr>
<td><code>telemaco-browser</code></td>
<td>Tipo <code>Page</code>, navigazione, valutazione JavaScript</td>
</tr>
<tr>
<td><code>telemaco-render</code></td>
<td>Cascata dei selettori, layout mantenuto in memoria, rendering, screenshot, PDF</td>
</tr>
<tr>
<td><code>telemaco-mcp</code></td>
<td>Strumenti di automazione MCP con stato</td>
</tr>
<tr>
<td><code>telemaco</code></td>
<td>API della libreria Rust incorporabile</td>
</tr>
</tbody></table>
<p>Alcune invarianti hanno dato forma all’intero progetto:</p>
<ul>
<li><strong>Un isolate V8 per processo.</strong> V8 è <code>!Send</code>, quindi tutto il codice asincrono gira su un <code>LocalSet</code> di <code>tokio</code> e ogni operazione JavaScript passa attraverso un singolo lock globale. L’esecuzione JavaScript viene serializzata, il che va bene per un motore browser: il DOM è comunque a thread singolo.</li>
<li><strong>Una pagina problematica non deve mai bloccare un worker.</strong> C’è un watchdog per la terminazione di V8 su ogni pagina e una scadenza rigida a livello di processo. Una pagina che entra in un ciclo infinito viene terminata, non il worker.</li>
<li><strong>Protezione SSRF predefinita.</strong> Le richieste verso loopback, indirizzi RFC1918 e link-local sono bloccate, a meno di passare esplicitamente <code>--allow-private-network</code>. Uno strumento di scraping che può raggiungere la tua rete interna è un rischio; questo lo impedisce per default.</li>
</ul>
<h2>Come si usa</h2>
<p>Recuperare una pagina ed eseguire JavaScript reale:</p>
<pre><code class="language-bash">$ telemaco fetch https://news.ycombinator.com --eval &quot;document.title&quot;
Hacker News
</code></pre>
<p>Pilotarlo come Chrome headless, da Puppeteer:</p>
<pre><code class="language-js">import puppeteer from &#39;puppeteer-core&#39;;

const browser = await puppeteer.connect({
  browserWSEndpoint: &#39;ws://127.0.0.1:9222/devtools/browser&#39;,
});
const page = await browser.newPage();
await page.goto(&#39;https://news.ycombinator.com&#39;);

const stories = await page.evaluate(() =&gt;
  Array.from(document.querySelectorAll(&#39;.titleline &gt; a&#39;))
    .map(a =&gt; ({ title: a.textContent, url: a.href }))
);
</code></pre>
<p>Fare scraping di molti URL in parallelo:</p>
<pre><code class="language-bash">$ telemaco scrape url1 url2 url3 --concurrency 25 --format json
</code></pre>
<p>Per gli agenti AI c’è anche un server MCP che espone lo stesso browser a Claude Desktop, Cursor o qualunque client MCP:</p>
<pre><code class="language-json">{
  &quot;mcpServers&quot;: {
    &quot;telemaco&quot;: { &quot;command&quot;: &quot;telemaco&quot;, &quot;args&quot;: [&quot;mcp&quot;] }
  }
}
</code></pre>
<h2>I numeri</h2>
<table>
<thead>
<tr>
<th>Metrica</th>
<th>Telemaco</th>
<th>Chrome headless</th>
</tr>
</thead>
<tbody><tr>
<td>Memoria</td>
<td>30 MB</td>
<td>200+ MB</td>
</tr>
<tr>
<td>Dimensione eseguibile</td>
<td>70 MB</td>
<td>300+ MB</td>
</tr>
<tr>
<td>Caricamento pagina</td>
<td>85 ms</td>
<td>~500 ms</td>
</tr>
<tr>
<td>Avvio</td>
<td>Immediato</td>
<td>~2 s</td>
</tr>
<tr>
<td>Anti-rilevamento</td>
<td>Integrato</td>
<td>Assente</td>
</tr>
<tr>
<td>Puppeteer / Playwright</td>
<td>Sì</td>
<td>Sì</td>
</tr>
</tbody></table>
<p>Caricamenti delle pagine circa 12 volte più veloci e un sesto della memoria sulle pagine con framework, con la stessa interfaccia di automazione CDP.</p>
<h2>Perché “Telemaco”</h2>
<p>Il nome è quello del figlio di Ulisse, che parte alla ricerca di notizie del padre. Un cercatore, per definizione. Mi sembrava giusto per uno strumento che serve a cercare e recuperare ciò che si trova sul web.</p>
<h2>Una direzione, più che un prodotto</h2>
<p>Telemaco non sta cercando di vendere niente. È una visione diversa di cosa possa essere un motore browser: abbastanza piccolo da essere un’utilità, abbastanza veloce da essere uno strumento e onesto sulle proprie origini. È costruito sul lavoro di molti progetti e persone stimati, come Servo, taffy, tiny-skia, deno_core e Obscura, ed è open source sotto Apache-2.0, così chiunque può prenderlo e usarlo per il proprio problema.</p>
<p>Se hai mai voluto fare scraping o eseguire test e2e senza installare un browser, Telemaco nasce proprio da questa esigenza. Clonalo, compilalo, usalo.</p>
<ul>
<li>Pagina del progetto: <a href="https://albz.it/telemaco/">albz.it/telemaco</a></li>
<li>Codice: <a href="https://github.com/AlbertoBarrago/telemaco">github.com/AlbertoBarrago/telemaco</a></li>
</ul>
`,Uo=Object.freeze(Object.defineProperty({__proto__:null,html:No,meta:Bo},Symbol.toStringTag,{value:"Module"})),Go={title:"Tenore: smetti di mantenere tre volte la stessa configurazione degli agenti",date:"2026-10-01",tags:["programming","ai-agents","developer-tools","typescript","opensource"],label:"traduzione AI da un testo scritto dall’autore"},Wo=`<p>Ho costruito <strong>Tenore</strong>, una CLI che prende una configurazione condivisa per gli agenti AI di coding e la compila nei loro file nativi.</p>
<p>Il problema è la manutenzione ordinaria. Claude Code, Codex CLI e Antigravity conservano istruzioni, permessi e configurazioni dei server MCP in file diversi. Appena ne usi più di uno, le stesse regole del progetto iniziano a comparire in più file.</p>
<p>Cambi il comando dei test, aggiungi un server, restringi un permesso: ogni copia richiede attenzione. Prima o poi ne salti una. Cambiare agente significa allora controllare se la configurazione dice ancora quello che volevi.</p>
<p>Con Tenore, quella configurazione ha un unico riferimento: la directory <code>.agents/</code>.</p>
<h2>La configurazione come codice sorgente</h2>
<p>L’idea è mantenere le istruzioni in Markdown, le policy strutturate nel frontmatter YAML e generare i file che ogni agente si aspetta.</p>
<p>Un repository può iniziare con:</p>
<pre><code class="language-text">.agents/
  AGENTS.md
  policy.md
  memory/
    architecture.md
</code></pre>
<p><code>AGENTS.md</code> contiene il testo: come lavorare nel repository, quali convenzioni contano, cosa richiede più attenzione. <code>policy.md</code> descrive permessi, server MCP e override specifici per ciascun target. I file di memoria contengono note persistenti per argomento.</p>
<p>Tenore analizza quei sorgenti, combina le configurazioni dei diversi ambiti e passa il risultato all’adapter di ogni agente di destinazione. Gli adapter producono configurazioni native, come <code>CLAUDE.md</code> o <code>.codex/config.toml</code>.</p>
<p>I file generati diventano così output di build che si può revisionare. Sai dove modificare le regole condivise e dove viene implementata la conversione per ciascun agente.</p>
<h2>Un piccolo esempio</h2>
<p>Il pacchetto npm si chiama <code>tenore-cli</code>; l’eseguibile è <code>tenore</code>. Richiede Node.js 20.12 o successivo.</p>
<pre><code class="language-sh">pnpm add -g tenore-cli
tenore init
</code></pre>
<p>In un terminale, <code>tenore init</code> ora apre una procedura guidata. Rileva la configurazione esistente degli agenti e permette di scegliere cosa importare e per quali agenti generare i file. Propone anche di aggiornare <code>.gitignore</code> e registrare server MCP per memoria condivisa e accesso al web.</p>
<p>La procedura mostra un’anteprima della sincronizzazione prima di chiedere conferma. Non scrive nulla finché non confermi. Alla fine stampa i comandi equivalenti, così la configurazione può essere ripetuta in uno script.</p>
<p>Per una configurazione automatica, <code>tenore init --yes</code> accetta i valori predefiniti della procedura, anche senza un terminale. Altri flag, oppure una shell non interattiva senza <code>--yes</code>, usano il normale flusso a comandi. Per esempio, <code>tenore init --targets claude,codex</code> imposta gli agenti per cui generare i file.</p>
<p>I sorgenti generati restano modificabili. Dopo aver aggiornato <code>.agents/AGENTS.md</code>, un <code>.agents/policy.md</code> minimo potrebbe essere così:</p>
<pre><code class="language-yaml">---
targets: [claude, codex]
permissions:
  default: ask
  allow:
    - shell: &quot;pnpm test*&quot;
  ask:
    - shell: &quot;git push*&quot;
---
</code></pre>
<p>Sono pattern di comandi: <code>pnpm test*</code> corrisponde anche ai comandi con quel prefisso, quindi il pattern dovrebbe riflettere quello che vuoi davvero consentire.</p>
<p>Quando cambi i sorgenti dopo la configurazione iniziale, controlla le modifiche generate prima di applicarle:</p>
<pre><code class="language-sh">tenore diff
tenore sync
</code></pre>
<p>Quel passaggio di revisione conta. Un compilatore di configurazioni è utile solo se riesci a comprenderne l’output, soprattutto quando quell’output controlla i permessi.</p>
<p>Anche la configurazione esistente può essere il punto di partenza. Per un repository già configurato per Claude Code:</p>
<pre><code class="language-sh">tenore init --import claude
tenore diff
tenore sync
</code></pre>
<p>L’importazione offre un percorso di migrazione senza trascrivere tutto a mano nella nuova struttura.</p>
<h2>Regole condivise, contesto locale</h2>
<p>La configurazione ha tre ambiti: globale, repository e locale. Vengono uniti in quest’ordine.</p>
<p>I sorgenti globali si trovano in <code>~/.agents/</code>, quelli del repository in <code>.agents/</code> e quelli specifici della macchina in <code>.agents/local/</code>. L’inizializzazione aggiunge l’ambito locale alle regole di esclusione di Git. La configurazione globale viene inclusa esplicitamente con <code>--global</code>.</p>
<p><code>tenore init --global</code> porta la stessa procedura guidata nella configurazione personale. Può importare le impostazioni globali esistenti degli agenti in <code>~/.agents/</code> e mostra il diff completo prima di scrivere le modifiche.</p>
<p>Le regole di unione distinguono i diversi tipi di dati. Istruzioni e memoria vengono combinate nell’ordine degli ambiti. Le liste vengono deduplicate. Le impostazioni scalari prendono generalmente il valore dell’ambito più ristretto.</p>
<p>I permessi richiedono una gestione più rigorosa: deny prevale su ask, che prevale su allow. Un allow a livello di repository non può annullare un deny globale. Le regole scartate durante l’unione producono avvisi.</p>
<p>Questo permette a un progetto di aggiungere contesto mantenendo le restrizioni definite in un ambito più ampio.</p>
<h2>Memoria condivisa e accesso al web</h2>
<p>I file di memoria ora possono essere letti e aggiornati attraverso il server MCP di Tenore. Basta registrarlo una volta in <code>.agents/policy.md</code>:</p>
<pre><code class="language-yaml">mcp:
  tenore-memory:
    command: npx
    args: [&quot;-y&quot;, &quot;tenore-cli&quot;, &quot;mcp&quot;]
</code></pre>
<p>Dopo <code>tenore sync</code>, ogni agente selezionato riceve la configurazione del server. Il server espone strumenti per elencare, leggere, cercare e aggiornare le note per argomento. Le note restano salvate nella stessa directory condivisa. Le scritture sono limitate alle directory di memoria. Quando un agente crea un nuovo argomento, esegui di nuovo <code>tenore sync</code> per includerlo nei file generati.</p>
<p>L’accesso al web può seguire un approccio simile. Tenore permette di dichiarare una volta un server MCP web e tradurne la configurazione per ogni agente. L’esempio documentato usa <a href="https://github.com/AlbertoBarrago/telemaco">Telemaco</a>, ma si può usare un altro server MCP web o browser.</p>
<p>Qui conta una distinzione: <code>network: none</code> disabilita l’accesso web nativo degli agenti, mentre i server MCP restano separati. L’accesso attraverso quei server è governato da regole esplicite sui permessi MCP. Questo permette di usare un server web condiviso chiedendo conferma per i suoi strumenti.</p>
<h2>Anche i file generati vanno protetti</h2>
<p>Le persone modificano i file direttamente. Anche gli strumenti. Un generatore deve tenerne conto prima di sovrascrivere una configurazione esistente.</p>
<p>Tenore registra gli hash degli artefatti generati in <code>.agents/.lock</code>. Se un file generato cambia dopo una sincronizzazione, quella successiva rileva la divergenza e lo salta. I file esistenti che Tenore non gestisce vengono trattati come conflitti finché non vengono importati.</p>
<p>Per la CI c’è:</p>
<pre><code class="language-sh">tenore check
</code></pre>
<p>Termina con esito negativo in presenza di sorgenti non validi, divergenze, conflitti o modifiche generate ancora da applicare. Anche la coerenza della configurazione entra così nelle verifiche del repository.</p>
<p>Se smetti di usare un agente come target, Tenore segnala i suoi vecchi file generati come orfani e li mantiene per default. <code>tenore sync --prune</code> li rimuove solo se non sono stati modificati.</p>
<h2>Dove la portabilità si complica</h2>
<p>Gli adapter attuali coprono Claude Code, Codex CLI e Antigravity, ma i loro modelli di permessi sono diversi. Un formato sorgente comune non può far sparire quelle differenze.</p>
<p>La policy documentata di Tenore è produrre un mapping più restrittivo con un avviso quando non è disponibile una traduzione esatta. Alcune funzionalità richiedono una gestione esplicita: i mapping del filesystem di Codex richiedono l’attivazione dei profili di permessi, mentre i permessi di Antigravity vengono configurati nell’ambito utente.</p>
<p>Sono limiti da considerare quando rivedi la configurazione generata. Le istruzioni condivise non possono nemmeno garantire comportamenti identici degli agenti; rendono coerenti e più facili da mantenere le regole desiderate.</p>
<p>Il progetto è ancora in corso. Il criterio per valutarlo è semplice: quanto diventa più facile controllare la modifica a una regola e applicarla agli strumenti che usi?</p>
<p>Tenore è scritto in TypeScript e pubblicato con licenza MIT. Il <a href="https://github.com/AlbertoBarrago/tenore">repository</a> contiene sorgenti e istruzioni di configurazione; il <a href="https://github.com/AlbertoBarrago/tenore/blob/main/docs/mapping.md">riferimento sui mapping</a> documenta le decisioni di traduzione. Puoi installarlo da <a href="https://www.npmjs.com/package/tenore-cli">npm</a>.</p>
`,Fo=Object.freeze(Object.defineProperty({__proto__:null,html:Wo,meta:Go},Symbol.toStringTag,{value:"Module"})),Ho={title:"L’illusione delle skill: perché partire da una pagina bianca funziona meglio dei prompt AI preconfezionati",date:"2026-10-05",tags:["opinion","ai","agents","architecture","engineering"],label:"traduzione AI da un testo scritto dall’autore"},Vo=`<p>Negli ultimi diciotto mesi, un’illusione rassicurante ha invaso gli strumenti AI: la convinzione che i grandi modelli linguistici abbiano bisogno di “skill”.</p>
<p>Le vedi ovunque. Skill, profili per agenti, pacchetti di istruzioni, raccolte di prompt specializzati. Vengono vendute come formule segrete o condivise in repository GitHub con migliaia di stelle: “l’architetto React senior definitivo”, “l’esperto di migrazioni cloud”, “il toolkit di refactoring Go per la produzione”. Le persone scaricano cartelle di file Markdown, le inseriscono nella configurazione dell’agente e si convincono di aver appena aggiunto al modello vent’anni di esperienza nel settore.</p>
<p>È fumo negli occhi. Anzi, è peggio. Nel migliore dei casi, le skill preconfezionate sono peso morto nella finestra di contesto. Nel peggiore, peggiorano attivamente il ragionamento, inquinano il meccanismo di attenzione e rovinano l’output.</p>
<p>Le skill non fanno nulla. Una pagina bianca funziona meglio, ogni volta.</p>
<h2>Il telefono senza fili semantico</h2>
<p>Quando inserisci una skill di terze parti nel ciclo di esecuzione del tuo agente, non stai dando più conoscenza al modello. Accetti che il senso delle tue istruzioni possa essere alterato. Stai lasciando che uno sconosciuto anonimo decida come il modello debba interpretare ciò che vuoi ottenere.</p>
<p>Considera cosa succede quando chiedi a un modello di frontiera di fare qualcosa di concreto:</p>
<blockquote>
<p>“Rendi deterministica questa macchina a stati e rimuovi tutte le mutazioni implicite.”</p>
</blockquote>
<p>Con un contesto pulito, il modello dedica tutta la propria attenzione alla tua codebase e al vincolo preciso che hai posto. Ogni token di ragionamento va nell’analisi delle strutture dati, delle transizioni di stato e delle invarianti.</p>
<p>Ora immagina di far passare la stessa istruzione attraverso una tipica “skill di architettura esperta”. Prima ancora che il modello tocchi il codice, nel contesto finiscono millecinquecento token di dogmi preconfezionati: regole generiche di programmazione difensiva, codice di contorno obbligatorio, consigli per tenere le funzioni sotto le venti righe, pattern enterprise astratti e tre istruzioni separate su come strutturare le spiegazioni.</p>
<p>A quel punto il modello non sta più risolvendo il tuo problema. Sta giocando al telefono senza fili.</p>
<p>Invece di scrivere codice deterministico, è impegnato a bilanciare il tuo prompt con le fissazioni di qualcun altro. Introduce classi wrapper inutili perché la skill gli ha detto di essere modulare. Divide una logica pulita in quattro file perché la skill ha prescritto la separazione delle responsabilità. Si inventa casi limite che non esistono nel tuo dominio perché la skill gli ha detto di essere prudente.</p>
<p>Non hai ottenuto un risultato migliore. Hai lasciato che le opinioni di qualcun altro intralciassero il lavoro del modello.</p>
<h2>L’harness e la skill</h2>
<p>Chi vende e colleziona skill sta confondendo due cose completamente diverse: l’harness e il prompt.</p>
<p>L’harness di un agente ha una funzione concreta: gestisce il ciclo di esecuzione.</p>
<ul>
<li>Dà al modello accesso al filesystem.</li>
<li>Fornisce una shell in cui eseguire comandi.</li>
<li>Esegue il compilatore, la suite di test e il linter.</li>
<li>Cattura stderr e restituisce il codice di uscita.</li>
</ul>
<p>L’harness non dice al modello cosa pensare. Mette il risultato alla prova dei fatti e restituisce al modello ciò che è successo. Quando un modello scrive codice sbagliato in un buon harness, il compilatore protesta, i test falliscono e il modello legge gli errori per correggersi. È oggettivo. È verificato.</p>
<p>Una skill non fa niente di tutto questo. È solo testo statico. È qualcuno che scrive “ricordati di gestire gli errori in modo robusto” in un file Markdown. Dà al modello zero nuove capacità, nessun feedback e nessuna verifica.</p>
<p>Un modello di frontiera dentro un harness essenziale è un ingegnere con un terminale funzionante. Un modello caricato con venti skill è lo stesso ingegnere costretto a lavorare mentre qualcuno gli recita un manuale generico nell’orecchio.</p>
<h2>Cosa ci dicono davvero i benchmark</h2>
<p>Non è solo una preferenza personale. Ogni dato serio del 2025 e del 2026 va nella stessa direzione.</p>
<p>Guarda le classifiche SWE-bench e gli strumenti che producono davvero codice funzionante: Claude Code, Aider e SWE-agent. Nessuno si basa su raccolte di profili specialistici preconfezionati. Non hanno un “profilo da esperto Rust” o una “skill Django”. Si basano su cicli brevi e semplici, composti da poche operazioni di base: leggere un file, modificarlo, eseguire un comando bash, controllare il diff.</p>
<p>La prova più significativa è arrivata da Princeton e Stanford con mini-swe-agent. Hanno costruito un agente di coding completo in circa cento righe di Python. Nessun framework complesso per agenti, nessuno smistamento tra profili specialistici, nessun modulo di skill. Solo un ciclo di base che dà al modello accesso diretto ai comandi bash. Quello script di cento righe ha superato il settanta per cento su SWE-bench Verified, rivaleggiando con enormi framework modulari.</p>
<p>Valutazioni recenti su SWE-bench Pro e Verified mostrano che cambiare l’architettura dell’harness può spostare le prestazioni di oltre ventidue punti percentuali con lo stesso identico modello. Nel frattempo, passare da un modello di frontiera a un altro sullo stesso harness spesso cambia il risultato di meno dell’uno per cento. L’harness fa la differenza. Le skill preconfezionate non la fanno affatto.</p>
<p>Nel proprio lavoro di ricerca sulla costruzione di agenti efficaci, Anthropic è arrivata alla stessa conclusione: mantenere semplici le architetture degli agenti. Appena introduci meccanismi complessi per scegliere tra profili specialistici, dibattiti tra agenti e astrazioni rigide dei prompt, i tassi di fallimento schizzano in alto.</p>
<p>Poi c’è <em>The Bitter Lesson</em> di Rich Sutton: la lezione più grande della storia dell’AI è che i metodi generali che sfruttano il calcolo battono costantemente le euristiche progettate dagli esseri umani. La conoscenza codificata a mano perde sempre. Le skill preconfezionate non sono altro che euristiche artigianali che fingono di essere software.</p>
<h2>Deterioramento del contesto ed economia dell’attenzione</h2>
<p>Ogni token nel prompt di sistema ha un costo. Non solo economico, ma cognitivo.</p>
<p>Nel luglio 2025, Chroma Research ha pubblicato il proprio studio su Context Rot, valutando diciotto modelli di frontiera con contesti di lunghezza crescente. I risultati erano chiari: ogni modello subisce un peggioramento delle prestazioni e bruschi cali di accuratezza molto prima di raggiungere la finestra di contesto dichiarata. L’attenzione si diluisce mentre il prompt cresce.</p>
<p>All’inizio del 2026, LOCA-bench ha confermato la stessa realtà per gli agenti autonomi: accumulare istruzioni, cronologia degli stati e linee guida ridondanti causa deviazioni catastrofiche dal compito.</p>
<p>Quando riempi il prompt con centinaia di righe di istruzioni preconfezionate, succedono due cose:</p>
<ol>
<li><strong>Deriva delle istruzioni:</strong> il modello deve trovare un compromesso tra vincoli negativi in conflitto. Se la tua skill dice “usa sempre pattern funzionali” e la codebase usa una macchina a stati a oggetti, il modello spreca token di ragionamento per risolvere una contraddizione artificiale.</li>
<li><strong>Perdita di sfumature:</strong> quando il contesto è pulito, anche le sfumature dei vincoli nel tuo prompt mantengono tutto il loro peso. Quando il contesto è sommerso dal boilerplate, quei vincoli vengono appiattiti.</li>
</ol>
<p>Partire da una pagina bianca rende immediata la generazione del primo token, affidabile il caching dei prompt e mantiene pulito il contesto. Il modello risponde a quello che dici tu, non a quello che qualcun altro ha detto sei mesi fa.</p>
<h2>Smetti di comprare le parole degli altri</h2>
<p>L’impulso a collezionare skill nasce da un fraintendimento di cosa sia davvero programmare con l’AI.</p>
<p>Se sai cosa stai costruendo, non ti serve il prompt di qualcun altro. Ti serve la tua conoscenza del dominio: le tue invarianti, i tuoi schemi, le tue suite di test e i tuoi vincoli. Scrivi la specifica, avvia l’harness, rivedi il diff.</p>
<p>E se non sai cosa stai costruendo, nessuna skill preconfezionata da “Senior Architect” lo saprà al posto tuo. Ti darà solo risposte mediocri e generiche, espresse con assoluta sicurezza, al triplo del costo in token.</p>
<p>Lascia perdere i pacchetti di skill. Tieni l’harness essenziale, il terminale aperto e parti da una pagina bianca.</p>
<h2>Fonti</h2>
<ul>
<li><a href="https://research.trychroma.com/context-rot">Chroma Research, Context Rot: How Increasing Input Tokens Impacts LLM Performance (luglio 2025)</a></li>
<li><a href="https://arxiv.org/abs/2602.04948">LOCA-bench: Benchmarking Language Agents Under Controllable and Extreme Context Growth (febbraio 2026)</a></li>
<li><a href="https://github.com/SWE-agent/mini-swe-agent">Princeton NLP e Stanford, mini-swe-agent: A radically simple coding agent in 100 lines of Python</a></li>
<li><a href="https://www.anthropic.com/research/building-effective-agents">Anthropic, Building Effective Agents (dicembre 2024)</a></li>
<li><a href="https://www.swebench.com/">SWE-bench, Software Engineering Benchmark for Language Models</a></li>
<li><a href="http://www.incompleteideas.net/IncIdeas/BitterLesson.html">Rich Sutton, The Bitter Lesson (2019)</a></li>
<li><a href="https://aider.chat/">Aider, AI pair programming in your terminal</a></li>
</ul>
`,Yo=Object.freeze(Object.defineProperty({__proto__:null,html:Vo,meta:Ho},Symbol.toStringTag,{value:"Module"})),Ko={title:"I token non fanno il pilota",date:"2026-10-15",tags:["ai-agents","tokens","software-development"],label:"Testo assistito da AI, rivisto dall’autore"},Qo=`<p>Non penso che valutare il numero di token spesi sia un valido parametro per stabilire il buon uso degli agenti. Nei gruppi di lavoro quei numeri possono diventare una sorta di ranking, dove chi ne consuma di più sta in cima alla piramide e vince. Ma ahimè, non è così. E se scrivo quest’articolo è per dare una chiave di lettura differente.</p>
<h2>La corsa</h2>
<p>Se prendiamo a modello una corsa d’auto, non è chi consuma le gomme o il carburante più rapidamente ad aggiudicarsi il podio, per ragioni sia fisiche che logiche.</p>
<p>Man mano che il pilota acquisisce esperienza di guida in pista, impara a conoscere l’aderenza degli pneumatici, la presa sull’asfalto e i limiti della macchina. Da lì si passa pure al controllo del gas: non puoi sempre andare al massimo, pena spiaccicarti contro qualche bordo della pista.</p>
<p>Con gli agenti succede qualcosa di simile. Puoi continuare a dare gas, aggiungere richieste, far girare strumenti e consumare token. Questo, da solo, non dice quanto ti stai avvicinando al risultato.</p>
<h2>Benzina e aderenza</h2>
<p>Quindi potremmo dire che i token sono la benzina e il contesto sono le gomme.</p>
<p>Il contesto dà aderenza al problema: sapere dove mettere le mani, quali vincoli rispettare e cosa significa aver finito. Se manca questa presa, puoi avere tutto il carburante che vuoi e passare il tempo a correggere la traiettoria. E aggiungere contesto a caso non risolve necessariamente il problema: serve quello pertinente.</p>
<p>Neppure consumare meno ti rende automaticamente un pilota migliore. Se risparmi benzina ma non arrivi al traguardo, c’è poco da festeggiare.</p>
<h2>Prima del podio</h2>
<p>Prima di guardare quanti token sono stati spesi, guarderei cosa è stato ottenuto, se funziona e quanto lavoro è servito per verificarlo e correggerlo. I consumi restano utili per capire la spesa. Per capire quanto siamo diventati bravi, da soli raccontano ben poco.</p>
<p>Da qui lascio a te, lettore, tutte le speculazioni di sorta. Ma prima di salire sul podio, accertiamoci almeno di aver concluso la gara.</p>
`,Jo=Object.freeze(Object.defineProperty({__proto__:null,html:Qo,meta:Ko},Symbol.toStringTag,{value:"Module"})),Xo={title:"wir: What Is Running, uno strumento per ispezionare porte e processi scritto in C",date:"2025-12-30",tags:["c","systems-programming","cli","opensource"],label:"traduzione AI da un testo scritto dall’autore"},Zo=`<p>Ho recentemente pubblicato <strong>wir</strong> (What Is Running), uno strumento da riga di comando scritto in C per controllare cosa gira su determinate porte e ottenere informazioni dettagliate sui processi. Un progetto nato da un’esigenza pratica, che si è trasformato in un’occasione per esplorare la programmazione di sistema in C.</p>
<h2>Il problema</h2>
<p>Quante volte hai trovato una porta occupata senza sapere quale processo la stesse usando? O hai dovuto risalire la gerarchia di un processo per capire chi avesse avviato cosa? Di solito ricorriamo a combinazioni di <code>lsof</code>, <code>netstat</code> e <code>ps</code>, ma perché non avere tutto in un solo comando?</p>
<h2>La soluzione</h2>
<p><code>wir</code> è uno strumento multipiattaforma (macOS e Linux) che permette di:</p>
<ul>
<li>Scoprire quale processo usa una determinata porta</li>
<li>Ottenere informazioni dettagliate su un PID</li>
<li>Visualizzare l’intera catena dei processi padre</li>
<li>Elencare tutti i processi in esecuzione</li>
<li>Vedere le variabili d’ambiente di un processo</li>
<li>Produrre output normale, breve, JSON o ad albero</li>
<li>Ricevere avvisi di sicurezza per configurazioni potenzialmente rischiose</li>
</ul>
<h2>Esempi pratici</h2>
<pre><code class="language-bash"># Who&#39;s using port 8080?
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
</code></pre>
<h2>L’architettura</h2>
<p>Il progetto è strutturato in modo modulare:</p>
<ul>
<li><strong>Livello di astrazione della piattaforma</strong>: gestisce le differenze tra Linux (parsing di <code>/proc</code>) e macOS (<code>libproc</code> e <code>sysctl</code>)</li>
<li><strong>Formattazione dell’output</strong>: supporta diverse modalità di visualizzazione senza duplicare la logica</li>
<li><strong>Gestione coerente degli errori</strong>: ogni allocazione viene controllata, ogni risorsa viene liberata</li>
<li><strong>Gestione rigorosa della memoria</strong>: niente leak, niente comportamento indefinito</li>
</ul>
<h2>Cosa ho imparato</h2>
<p>Scrivere <code>wir</code> è stata un’ottima occasione per mettere in pratica concetti fondamentali:</p>
<ol>
<li><strong>Programmazione di sistema</strong>: interazione con <code>/proc</code>, chiamate di sistema, gestione dei processi</li>
<li><strong>Sviluppo multipiattaforma</strong>: compilazione condizionale e API diverse per ogni sistema operativo</li>
<li><strong>Sicurezza della memoria in C</strong>: gestione manuale della memoria senza garbage collector</li>
<li><strong>Sistemi di build</strong>: Makefile con rilevamento automatico della piattaforma</li>
<li><strong>Progettazione delle API</strong>: un’interfaccia pulita e componibile</li>
</ol>
<h2>Non memorizzo i comandi</h2>
<p>Il mio approccio è questo: non mi interessa memorizzare i comandi esatti di <code>lsof</code> o <code>netstat</code>. Preferisco capire l’architettura sottostante e costruire strumenti che risolvano il problema in modo più elegante. <code>wir</code> non è solo un wrapper: è un’astrazione che nasconde la complessità delle differenze tra sistemi operativi.</p>
<h2>Il futuro</h2>
<p>Il progetto si presta a diverse estensioni:</p>
<ul>
<li>Supporto alle porte UDP</li>
<li>Filtri avanzati sui processi</li>
<li>Supporto ad altri sistemi operativi (BSD, ecc.)</li>
<li>Ottimizzazioni delle prestazioni</li>
<li>Altri formati di output</li>
</ul>
<h2>Provalo</h2>
<p><a href="https://github.com/AlbertoBarrago/wir">wir</a></p>
<p>È un progetto nato per imparare, quindi sentiti libero di sperimentare ed estenderlo. Costruire strumenti di sistema in C è un ottimo modo per capire cosa succede davvero sotto il cofano.</p>
<pre><code class="language-bash"># Build and install
brew tap AlbertoBarrago/tap
brew install wir

# Start using it
wir --port 3000
</code></pre>
`,en=Object.freeze(Object.defineProperty({__proto__:null,html:Zo,meta:Xo},Symbol.toStringTag,{value:"Module"})),tn={title:"A Small Toolbox for Claude Code",date:"2026-10-13",tags:["ai-agents","claude-code","developer-tools","opensource"],label:"AI-assisted, human-reviewed"},on=`<p>When I work with a coding agent, writing code is only part of the job.</p>
<p>Before changing a repository, I want to understand what the change might affect. When I use a library, I want to read its documentation, especially if I don&#39;t know it well. And before calling the work done, I want a concrete way to verify it.</p>
<p>Those needs led me to build three projects: <strong>Themis, Serval, and Telemaco</strong>.</p>
<p>I developed them separately, but I think they make sense together. Each addresses a part of the work I ask an agent to do.</p>
<p>The idea is simple: install the tools, make them available to Claude Code, and tell it when to use each one.</p>
<h2>Themis: defining what “done” means</h2>
<p>A request in natural language leaves room for interpretation. Even working code can solve a different problem from the one I had in mind.</p>
<p>Themis starts with a specification containing decisions and acceptance criteria. It organizes the agents&#39; work around a verification loop. I approve the plan and the acceptance tests; the tests are then locked, and a verifier checks the result.</p>
<p>Claude Code is currently the supported agent adapter. Themis drives its invocations and runs the verification itself. The project is still in early development and, for now, installs from source.</p>
<p>Source: <a href="https://github.com/AlbertoBarrago/themis">github.com/AlbertoBarrago/themis</a>.</p>
<h2>Serval: understanding the impact of a change</h2>
<p>Before touching a file, the question is: what depends on this code?</p>
<p>Serval analyzes a repository locally, combining dependencies, Git history, CI configuration, and rules for critical areas. It produces a risk estimate along with the signals behind it.</p>
<p>I can ask Claude to use that analysis to identify modules worth reading and checks worth running. The score is an indicator: it doesn&#39;t guarantee that a change is safe or predict a failure with certainty. It helps decide where to pay attention.</p>
<p>Source: <a href="https://github.com/AlbertoBarrago/serval">github.com/AlbertoBarrago/serval</a>.</p>
<h2>Telemaco: consulting the web while working</h2>
<p>When a change depends on a library&#39;s behavior or an external API, I want the agent to consult the sources.</p>
<p>Telemaco is a headless browser engine in Rust, built for scraping and AI agents. It offers a CLI and an MCP server for accessing pages and extracting their contents.</p>
<p>In this workflow, it can help Claude retrieve documentation and information from the web. The agent still needs to evaluate that information, cite its sources, and distinguish what it verified from what it inferred.</p>
<p>Source: <a href="https://github.com/AlbertoBarrago/telemaco">github.com/AlbertoBarrago/telemaco</a>.</p>
<h2>One request, three tools</h2>
<p>These are separate tools, installed and configured individually. Once they are available, the entry point can be an ordinary request to Claude Code.</p>
<p>For example, this is the kind of instruction I would give it:</p>
<blockquote>
<p>I need to add authentication token renewal.</p>
<p>First, use Serval to analyze the affected files and their dependents. If you need information about the libraries involved, use Telemaco to consult the official documentation and report your sources.</p>
<p>Use Themis to prepare the specification, plan, and acceptance tests. Stop at the required approval gates. After my approval, execute the work through its verification loop.</p>
<p>At the end, show me the diff, the verification results, and any remaining limitations.</p>
</blockquote>
<p>This is an example of how I want to compose the tools. To make the workflow repeatable, the agents doing the work need both the instructions and access to the tools. Installing a binary alone doesn&#39;t establish that workflow.</p>
<p>Themis owns the execution and verification loop. Serval and Telemaco supply information that can inform the specification, the plan, and the implementation. Their use needs to be reflected in the relevant agent instructions.</p>
<h2>Why put them together?</h2>
<p>As individual projects, they describe three different problems. Together, they describe a way of working: understand the impact, consult the sources, define the expected result, and verify it.</p>
<p>I like this composition because each tool keeps a clear responsibility. I can use them together or pick just the one I need.</p>
<p>That&#39;s the toolbox I want to build around Claude Code: concrete tools, precise instructions for using them, and visible decisions and checks behind the work.</p>
`,nn=Object.freeze(Object.defineProperty({__proto__:null,html:on,meta:tn},Symbol.toStringTag,{value:"Module"})),an={title:"The Problem Isn't How Much Code AI Writes. It's How Much of It We Understand.",date:"2026-11-13",tags:["opinion","ai","agents","engineering"],label:"AI-translated, author-reviewed"},rn=`<p><em>A reflection on AI in software development, on the risk of losing skills, and on what it really means to be a developer today.</em></p>
<p>I read <a href="https://coyotetracks.org/blog/right-amount-of-ai/">Is There a Right Amount of AI?</a> on Coyote Tracks. It&#39;s an article that raises legitimate questions about using artificial intelligence in software development: code quality, skill loss, technical debt, and accountability.</p>
<p>I share many of the author&#39;s concerns. But I think there&#39;s one point worth looking at differently.</p>
<p><strong>I don&#39;t think the problem is how much code we generate with AI. I think the problem is how much of that code we are still able to understand, evaluate, and maintain.</strong></p>
<h2>Writing code was never the real goal</h2>
<p>For years we have measured developer productivity, at least implicitly, by the ability to produce code.</p>
<p>The faster you shipped a feature, the more productive you were considered.</p>
<p>But writing code is only one part of our job.</p>
<p>Before we even open an editor, we have to understand a problem, identify constraints, weigh trade-offs, design solutions, and anticipate what could go wrong.</p>
<p>Code is the concrete representation of those decisions.</p>
<p>If an AI agent can produce that representation faster than I can, why should I necessarily see it as a problem?</p>
<p>The question becomes a different one: <strong>am I still the one making the decisions?</strong></p>
<h2>The de-skilling risk is real</h2>
<p>On this point I agree with the author.</p>
<p>Constantly delegating tasks we don&#39;t understand can make us lose skills, or never develop them in the first place.</p>
<p>If we ask an agent to implement an authentication system without understanding sessions, tokens, revocation, and error handling, we have a problem.</p>
<p>If we accept a change just because the tests pass, without understanding which behaviors those tests cover, we have another problem.</p>
<p>But I don&#39;t think the solution is necessarily to write more code by hand.</p>
<p>I think it&#39;s to <strong>keep the reasoning process active</strong>.</p>
<p>One developer can personally write thousands of lines without really understanding the overall architecture. Another can have most of them generated and know every important decision inside out.</p>
<p>The amount of code typed is not a reliable measure of competence.</p>
<p>Of course, this doesn&#39;t mean that reading a diff is always equivalent to knowing how to implement what it contains. Practical skills require practice, and systematically delegating tasks we never learned to do ourselves can make us dependent on our tools.</p>
<p>It&#39;s a risk to acknowledge, not to ignore.</p>
<h2>From code author to system owner</h2>
<p>Lately the way I develop has changed quite a bit.</p>
<p>I use AI agents every day. I write less code directly and spend much more time reading diffs, verifying implementations, reasoning about architectures, and spotting unexpected behavior.</p>
<p>At first this transition felt risky.</p>
<p>Today I see it as an evolution of the way I work, not as giving up the role of developer.</p>
<p>But there&#39;s one fundamental condition: I can&#39;t afford to become a mere rubber stamp for the changes agents propose.</p>
<p>I have to keep asking myself:</p>
<ul>
<li>Why was this solution chosen?</li>
<li>Which alternatives were discarded?</li>
<li>What happens when a service doesn&#39;t respond?</li>
<li>Does this change introduce unnecessary dependencies?</li>
<li>Which regressions could slip past the tests?</li>
<li>Will I be able to step in when something breaks in production?</li>
</ul>
<p>If I can&#39;t answer, the fact that the code works today is not enough.</p>
<p>And if I can&#39;t explain an architectural decision without asking the agent again, I probably haven&#39;t understood that part of the system well enough yet.</p>
<h2>Generated code is not verified code</h2>
<p>Another point where I agree with the article is technical debt.</p>
<p>Agents can produce redundant code, introduce useless abstractions, duplicate existing functionality, and solve local problems while creating global inconsistencies.</p>
<p>Sometimes they do it with surprising confidence.</p>
<p>But here an important distinction emerges: <strong>generation and validation are two different responsibilities</strong>.</p>
<p>We can delegate the first far more easily than the second.</p>
<p>A green test doesn&#39;t prove an architecture is correct. A seemingly clean diff doesn&#39;t guarantee no regressions were introduced. And a convincing explanation from the agent is not an independent verification.</p>
<p>We need clear contracts, meaningful tests, observability, reviews and, above all, someone capable of challenging the result.</p>
<p>This doesn&#39;t eliminate mistakes, but it makes the process controllable.</p>
<h2>Not everything has to be delegated</h2>
<p>I&#39;m not arguing that using more AI is necessarily better.</p>
<p>There are tasks I prefer to do myself, others where I want to experiment, and others still that I delegate without much hesitation.</p>
<p>Sometimes I write code simply because I want to understand a technology better.</p>
<p>Other times I let an agent produce an implementation and focus on the constraints and on its correctness.</p>
<p>I don&#39;t see a contradiction.</p>
<p>The problem arises when delegation becomes automatic, regardless of complexity, risk, or our ability to evaluate the result.</p>
<p>And the opposite holds too: refusing a tool just to preserve a way of working doesn&#39;t guarantee higher quality.</p>
<h2>Accountability can&#39;t be delegated</h2>
<p>The ethical questions raised by the article deserve a discussion of their own.</p>
<p>Resource consumption, copyright, the economic impact on independent developers, and the concentration of power in the companies that build models don&#39;t disappear because we use AI competently.</p>
<p>They are real problems, and we can&#39;t dismiss them with a simple boost in productivity.</p>
<p>But on a strictly engineering level, I believe the fundamental principle stays the same.</p>
<p>If I ship an application, I&#39;m accountable for it.</p>
<p>It doesn&#39;t matter whether a function was written by me, suggested by a colleague, copied from documentation, or generated by a model.</p>
<p>If it introduces a vulnerability, loses data, or stops working, I can&#39;t blame the tool that produced it.</p>
<p>AI can help me build software.</p>
<p>It can&#39;t take responsibility for my decisions.</p>
<h2>The real question</h2>
<p>Maybe in a few years we&#39;ll write by hand only a small part of the code we ship.</p>
<p>Maybe we&#39;ll keep writing much more of it than we imagine.</p>
<p>I don&#39;t think that&#39;s the decisive point.</p>
<p>Our profession has already changed many times. We introduced high-level languages, frameworks, libraries, generators, automation tools, and infrastructure that hides enormous complexity.</p>
<p>Every abstraction let us stop dealing directly with some details, but it also demanded new skills.</p>
<p>AI might represent a deeper change, because it doesn&#39;t just automate repetitive operations: it takes part in building solutions and proposes technical decisions.</p>
<p>That&#39;s exactly why we need to be even more rigorous in evaluating them.</p>
<p>I don&#39;t want to measure my competence by counting the lines of code I wrote myself.</p>
<p>I want to measure it by my ability to understand a system, change it, find its limits, and take responsibility for how it works.</p>
<p><strong>The risk isn&#39;t that we stop typing code.</strong></p>
<p><strong>The risk is that we stop being able to judge it.</strong></p>
<hr>
<p><em>A response to <a href="https://coyotetracks.org/blog/right-amount-of-ai/">Is There a Right Amount of AI?</a>, published on Coyote Tracks.</em></p>
`,sn=Object.freeze(Object.defineProperty({__proto__:null,html:rn,meta:an},Symbol.toStringTag,{value:"Module"})),ln={title:"Development Is Dead",date:"2026-09-22",tags:["opinion","ai","career","italy","craft"],label:"human-written, AI-reviewed"},cn=`<p>I started in 2011, freelance until 2014, and I never left. Fifteen years. Long enough to have opinions, short enough that whoever started in 1995 gets to laugh at mine.</p>
<p>I remember Dreamweaver, back when nobody was embarrassed about it yet. I remember Eclipse eating a laptop alive just to open a project. I remember Sublime Text landing like someone had finally understood that a text editor is a text editor. I remember the pattern libraries we all copied from and nobody credited. I remember CodePen, which <a href="https://en.wikipedia.org/wiki/CodePen">Chris Coyier co-founded in 2012 with Alex Vazquez and Tim Sabat</a>, and <a href="https://chriscoyier.net/bio/">CSS-Tricks</a>, which he ran from 2007 until DigitalOcean bought it in 2022. And I remember him on stage, around 2016, walking through his own workflow and the tools he actually used, beer in hand, the whole thing closer to a guy explaining something to you in a bar than to a keynote performed at you. That was normal then. The web lost it and never got it back.</p>
<p>That was the culture. Small, loud, generous, and built on the assumption that we would keep doing roughly this for a long time.</p>
<h2>The Italian footnote</h2>
<p>Italy was never part of it. We had one real moment: the <a href="https://en.wikipedia.org/wiki/Programma_101">Olivetti Programma 101</a>, New York, 1965, arguably the first desktop computer, more than 40,000 units sold, <a href="https://www.fondazioneadrianolivetti.it/en/p101-cecam/">ten of them bought by NASA and used to plan the Apollo 11 landing</a>. Then nothing on that scale. Ever again.</p>
<p>There are exceptions and they are real. <a href="https://en.wikipedia.org/wiki/Salvatore_Sanfilippo">Salvatore Sanfilippo released Redis on 26 February 2009</a>, written in Sicily to fix a problem in his own analytics product, and it ended up as infrastructure under a serious chunk of the internet. But one guy is not a scene. The average here has been mediocre for twenty years and it has been kept above water by a handful of people who cared more than anybody was paying them to care. The famous one percent. Anyone who has actually worked in this country knows that number is not a figure of speech.</p>
<p>I dealt with it the only way that works: I ignored the local conversation and followed the people who were actually building, one per domain, directly. First on Twitter, then on whatever Twitter turned into, now on Bluesky for the ones who still want a timeline that belongs to them.</p>
<h2>This time is not like the other times</h2>
<p>And then this year happened.</p>
<p>We are not doing the job we did for the last twenty years. I do not mean the tools changed again. The tools change every three years, every single time somebody declares the profession dead, and every single time they are wrong. I have sat through four rounds of that.</p>
<p>This is not that round. The work moved. What I do now is specify, constrain, review, decide. The typing, the part that was the job, is the cheapest part of the job. And the rate of change is not linear, it is not flattening, and nobody I respect thinks it is about to.</p>
<p>The split is not between who uses the new tools and who does not. It is between who kept the fundamentals and who never had them. If you actually know what a system does, you can move up and down the altitudes: read the generated code, judge the architecture, smell the wrong abstraction, decide what does not get built at all. If you never had that, you are stuck at one altitude saying &quot;yes, and make no mistakes&quot; to a machine you cannot audit. That is not a career. That is a handoff.</p>
<p>So when somebody asks me where I see this profession in ten years, I skip the comforting answer about new roles emerging and the work merely shifting.</p>
<p>I do not see it. Something else will be there, and it will not be called development.</p>
<h2>The one percent, again</h2>
<p>There is an idea I keep circling back to, and I want to be exact about what it is and what it is not.</p>
<p>The Transcendental Meditation people have a claim they call the Maharishi Effect: <a href="https://research.miu.edu/maharishi-effect/">a group the size of the square root of one percent of a population is enough to measurably move that population</a>. The research goes back to the late 1970s. It is also <a href="https://en.wikipedia.org/wiki/Maharishi_Effect">rejected as pseudoscience</a>, the studies have real problems with controls and with correlation dressed up as causation, and I am not asking anybody to believe it.</p>
<p>I am stealing the shape, not the evidence. The shape is this: the fraction of a population that has to move before everything else reorients around it is far smaller than people assume. That part I have watched happen, with zero meditation involved, in every shift I have lived through. A handful of people went somewhere, and two years later the industry was arguing about whether it had ever been anywhere else.</p>
<p>Which is the uncomfortable part. The square root of one percent of this field is already gone. They are not waiting for the rest of us to finish debating whether any of this is real.</p>
<p>So where do we think we are going?</p>
<h2>Sources</h2>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Programma_101">Programma 101, Wikipedia</a> and <a href="https://www.fondazioneadrianolivetti.it/en/p101-cecam/">Fondazione Adriano Olivetti</a></li>
<li><a href="https://en.wikipedia.org/wiki/Salvatore_Sanfilippo">Salvatore Sanfilippo, Wikipedia</a> and <a href="https://en.wikipedia.org/wiki/Redis">Redis, Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/CodePen">CodePen, Wikipedia</a> and <a href="https://chriscoyier.net/bio/">Chris Coyier&#39;s bio</a></li>
<li><a href="https://research.miu.edu/maharishi-effect/">Maharishi Effect research, MIU</a> and <a href="https://en.wikipedia.org/wiki/Maharishi_Effect">Maharishi Effect, Wikipedia</a></li>
</ul>
`,dn=Object.freeze(Object.defineProperty({__proto__:null,html:cn,meta:ln},Symbol.toStringTag,{value:"Module"})),pn={title:"GitLab Alert: the GitLab work that involves you, in your menu bar",date:"2026-09-16",tags:["swift","macos","gitlab","menubar","opensource"],label:"human-written, AI-reviewed"},un=`<p><strong>GitLab Alert</strong> is a macOS menu bar app that keeps the GitLab work needing your attention out of a browser tab and in the corner of your screen: merge requests waiting on your review, merge requests you authored, issues assigned to you, and the pipeline state of the projects you watch. No Dock icon, no window to manage, no tab to forget.</p>
<p>It works with GitLab.com and with self-managed instances, it is free, and it is MIT.</p>
<h2>A browser tab is a bad notification surface</h2>
<p>The workflow it replaces was mine, every day. Open GitLab, check what is waiting on my review, check whether last night&#39;s pipeline went red, close the tab, forget, repeat two hours later.</p>
<p>A tab shows you everything or nothing, and it has no memory of what you already saw. GitLab&#39;s own email notifications have the opposite problem: they arrive constantly, they arrive for things you do not care about, and after a week you filter them into a folder you never open.</p>
<p>So the scope was narrow on purpose:</p>
<ul>
<li><strong>Only the work that involves me.</strong> Merge requests where I am assignee, reviewer or author. Issues assigned to me. The latest pipeline of the projects in scope.</li>
<li><strong>Notify on change, not on state.</strong> A failed pipeline notifies once, when it fails, not on every poll for the next three days.</li>
<li><strong>Read-only, structurally.</strong> The token is requested with <code>read_api</code> and nothing else. The app cannot approve a merge request or close an issue, because it has no permission to.</li>
<li><strong>Offline is a state, not an error.</strong> Losing the network keeps the last good dashboard on screen instead of blanking it.</li>
</ul>
<h2>Three surfaces, three jobs</h2>
<p>The app is an accessory app: no Dock icon, and the status item is the only permanent thing on screen. Everything else is created lazily and thrown away when you close it.</p>
<p><strong>The popover</strong> is the glance. Left click on the status item and you get review requests, your authored merge requests, assigned issues and repository activity, capped at five rows per expanded section. It answers &quot;is there anything?&quot; in under a second, and if there is, &quot;see all&quot; hands you off.</p>
<p><strong>The detail window</strong> is the actual workspace. Sidebar picks the dataset, the table filters and sorts it, the inspector shows the full selected item, and &quot;open on GitLab&quot; sends you to the browser when you finally have to do the work. Click a notification and it opens here, on the right item: the identifier travels through a pending selection that the view resolves once its dataset exists, so a notification clicked during a cold launch still lands where it should.</p>
<p><strong>Settings</strong> is where the instance origin, the token, notifications and the repository scope live. The default scope is projects you are a member of, active in the past 90 days, forks excluded, which is usually right and occasionally is not. The Repositories pane lets you search the whole catalogue and include or exclude individual projects by hand.</p>
<h2>Being quiet is a feature, and it took work</h2>
<p>Anything that polls and notifies is one bad decision away from becoming noise you mute. Three decisions carry most of that weight.</p>
<p><strong>The first refresh is silent.</strong> A fresh install seeds its notification watermarks from the first successful cycle without notifying anything. Otherwise your very first launch would dump twelve notifications about merge requests you have been ignoring for a week, and you would quit before the app ever proved useful.</p>
<p><strong>State is written before notifications are posted.</strong> The snapshot, its watermarks and the resulting activity log are persisted in a single state write, and only then do notifications go out. A crash at the wrong moment cannot replay yesterday&#39;s failed pipeline on the next launch.</p>
<p><strong>Read state is local and explicit.</strong> Opening the popover marks nothing as seen. Expanding a section marks nothing as seen. You mark rows yourself, and it changes local presentation only: the app never closes, acknowledges or updates anything on GitLab. Seen identifiers are bounded and persisted, so an item you dismissed stays dismissed across launches, while a later event on the same item gets a distinct identifier and comes back unread on its own merits.</p>
<h2>Polling that behaves on someone else&#39;s server</h2>
<p>Self-managed GitLab instances are frequently small boxes that somebody in infrastructure maintains on top of their real job. An app that hammers one every 30 seconds is an app that gets blocked.</p>
<p>A single actor, <code>PollScheduler</code>, owns the whole cycle. It serializes lifecycle changes and joins a manual refresh with an automatic one, so there is never more than one network cycle in flight no matter how enthusiastically you click refresh. Sleep, screen sleep and session changes arrive from AppKit and get forwarded to it. Reachability, power state and whether the popover is currently open all feed into the next interval: a laptop asleep on battery is not a laptop that needs to poll.</p>
<p>Within a cycle, independent requests run concurrently, list endpoints follow GitLab&#39;s pagination properly instead of reading page one and hoping, and the per-project pipeline checks run in a bounded task group. The client honors <code>Retry-After</code> and waits out exhausted rate limit floors before starting anything else. Page size and pipeline concurrency are exposed in Settings, within safe limits, because the right numbers for gitlab.com are not the right numbers for a self-managed instance with 40 users.</p>
<h2>Where things live</h2>
<p>Two modules, and the split is also the testing strategy.</p>
<p><code>GitLabKit</code> is a local SwiftPM package with no UI dependency at all: the REST v4 client, models, the Keychain and file stores, rate limiting, and a pure activity diff engine that compares the previous and current snapshots. <code>GitLabAlert</code> is the shell: AppKit lifecycle, the status item, SwiftUI views, settings, notifications. Views talk to a main-actor <code>AppModel</code> and nothing else, so no view ever creates a network client or writes persistent state, and <code>AppDelegate</code> builds the whole dependency graph.</p>
<p>Because the interesting logic sits in a package with no views, the tests cover API mapping, Keychain error handling through test stores, concurrent refreshes, cancellation, account replacement, notification routing and persisted read state. The menu bar UI still gets a manual QA checklist, which is the honest answer.</p>
<p>Changing the GitLab origin is treated as an account boundary, not a preference. In-flight work is cancelled, the scheduler is stopped and cleared, the previous token is deleted and a new client is built before the replacement token is accepted. Late responses carry a revision and cannot resurrect data from the previous account into the new one.</p>
<p>The token lives in the Keychain, never reaches a view, and is sent in the <code>PRIVATE-TOKEN</code> header only to the configured origin. State files hold dashboard data and no credentials, written atomically with owner-only permissions. No analytics, no third-party services at runtime.</p>
<h2>Status</h2>
<p>Under active development. Releases are signed with the project&#39;s stable identity but not Apple-notarized, so the first launch needs one pass through <strong>Privacy &amp; Security → Open Anyway</strong>; the README covers it, along with building from source via SwiftPM (there is no <code>.xcodeproj</code>, and Xcode is not required). GitLab instances hosted below a URL sub-path are not supported yet.</p>
<p>The repository is at <a href="https://github.com/AlbertoBarrago/gitlab-alert">github.com/AlbertoBarrago/gitlab-alert</a>, with the product page at <a href="https://albz.it/gitlab-alert/">albz.it/gitlab-alert</a>. If it earns a place in your menu bar, a star is appreciated.</p>
`,hn=Object.freeze(Object.defineProperty({__proto__:null,html:un,meta:pn},Symbol.toStringTag,{value:"Module"})),mn={title:"Iris: a mail and calendar app for the Mac, in Rust",date:"2026-10-08",tags:["rust","macos","email","calendar","opensource"],label:"human-written, AI-reviewed"},gn=`<p>I wanted a mail and calendar app for my Mac that keeps my mail on my own computer, talks to Gmail and Microsoft directly, and is open source. That app is <strong>Iris</strong>.</p>
<h2>What Iris does</h2>
<p>Iris reads Gmail, Microsoft accounts (Outlook.com, Hotmail, Live and Microsoft 365) and any IMAP and SMTP account, and finds the server settings for you. It shows your accounts in one inbox or one at a time, with calendars and contacts next to your mail. It signs and encrypts mail with OpenPGP and S/MIME.</p>
<p>Mail and calendar data stay on your computer, and Iris has no server of its own. Gmail talks to Google directly and Microsoft accounts talk to Microsoft Graph, so no other server sees your mail.</p>
<h2>Built for macOS</h2>
<p>The core is Rust: sync, the local store, search and the mail actions. On top of it Iris is moving to a native interface in SwiftUI and AppKit, so it behaves like a Mac app: the Keychain for passwords, the system&#39;s notifications, updates through Sparkle, the Dock badge.</p>
<h2>An assistant, if you want one</h2>
<p>Iris has an optional assistant. It stays off until you pick a model: Claude Code, an Anthropic key, or a model running on your own machine. It can summarize a conversation, find mail, draft a reply or clean up newsletters, and it asks before it acts on your mail.</p>
<h2>Where it is</h2>
<p>Iris is a project I build and use every day. The source is public on GitHub under the GPL, and the macOS builds are test builds while there is still work ahead. Iris started from the code of <a href="https://github.com/c9dev/penguin-mail">Penguin Mail</a>, under the same license.</p>
<h2>Join the waiting list</h2>
<p>Want to try Iris when there&#39;s a build ready for you? <a href="mailto:albertobarrago@gmail.com?subject=Iris%20waitlist%3A%20beam%20me%20in&body=Hi%20Alberto%2C%0D%0A%0D%0APlease%20add%20me%20to%20the%20Iris%20waiting%20list.%20I%27m%20ready%20to%20let%20a%20new%20client%20migrate%20into%20my%20inbox.%0D%0A%0D%0AName%3A%0D%0AmacOS%20version%3A%0D%0A%0D%0AThanks%21">Beam me onto the list</a> and I&#39;ll add you to the waiting list.</p>
<ul>
<li>Iris: <a href="https://albz.it/iris/">albz.it/iris</a></li>
<li>Source: <a href="https://github.com/AlbertoBarrago/iris">github.com/AlbertoBarrago/iris</a></li>
</ul>
`,fn=Object.freeze(Object.defineProperty({__proto__:null,html:gn,meta:mn},Symbol.toStringTag,{value:"Module"})),bn={title:"Iron Doctrine: building deterministic online multiplayer with a shared ECS engine",date:"2026-08-31",tags:["typescript","game-dev","multiplayer","ecs","pnpm"],label:"human-written, AI-reviewed"},vn=`<p><strong>Iron Doctrine</strong> is a real-time strategy game I&#39;m building in a pnpm monorepo, with a deterministic ECS engine at its core and, as of this week, a working 1v1 online mode.</p>
<h2>The Architecture</h2>
<p>The repo is split into <code>packages/</code> and <code>apps/</code>:</p>
<ul>
<li><strong>packages/shared</strong>: the network protocol (<code>ClientMessage</code>/<code>ServerMessage</code>), shared types and constants (<code>SIM_HZ</code>, <code>DEFAULT_INPUT_DELAY</code>), and the <code>LockstepCoordinator</code></li>
<li><strong>packages/engine</strong>: a deterministic ECS simulation engine (entities/commands/systems), exposing <code>Simulation.step()</code>/<code>enqueue()</code>, with zero dependency on rendering or networking</li>
<li><strong>apps/client</strong>: React + Pixi.js, running entirely in the browser</li>
<li><strong>apps/server</strong>: a Node/<code>ws</code> WebSocket host that relays commands without simulating anything itself</li>
</ul>
<h2>Local Play: the Game Loop</h2>
<p><code>GameRenderer</code> (a large class handling rendering, input, and audio) owns a <code>SimBridge</code>, which in turn owns a Web Worker running the <code>Simulation</code>. The worker advances on a free-running clock (<code>setTimeout</code>), applies commands as soon as they arrive, and produces one snapshot per tick that the main thread interpolates and draws.</p>
<h2>Going Online</h2>
<p>This week&#39;s addition: real 1v1 matches over the network, built around lockstep determinism.</p>
<ol>
<li><strong>apps/server</strong> runs a single in-memory <code>MatchRelay</code> per process. It doesn&#39;t simulate anything, it just assigns each incoming command to a future tick and rebroadcasts the same confirmed command set to both clients every <code>SIM_DT_MS</code>. Determinism comes from both clients running the same engine against the same command stream.</li>
<li><strong>NetworkClient</strong> talks to the server over WebSocket, translates confirmed ticks, and feeds them into a second bridge type, <code>NetworkedSimBridge</code>, implementing the same <code>SimBridgeLike</code> interface as the local one, but with two differences: local commands go to the server (<code>sendCommand</code>) instead of straight to the worker, and the worker only advances one tick when a network confirmation (<code>networkTick</code>) arrives, instead of running freely.</li>
<li><strong>The &quot;you&#39;re always player 0&quot; problem</strong>: most of the UI/HUD assumed the local user was player 0. Solved with <code>playerPerspective.ts</code>, a pure module that swaps <code>owner</code>/<code>player</code>/<code>winner</code> labels (0↔1) only at the network boundary, so each client keeps internally believing it&#39;s player 0.</li>
<li><code>GameRenderer</code> now accepts the bridge via its constructor (local or networked) instead of always instantiating one itself. That single injection point made the rest of the online mode possible without rewriting the class&#39;s ~1700 lines.</li>
</ol>
<h2>Why This Design</h2>
<p>Keeping the simulation deterministic and network-agnostic in <code>packages/engine</code> means the same code powers skirmish, campaign, and online play. The server never needs to understand game state, it&#39;s just an authoritative clock for command ordering. The tradeoff is that both clients must produce bit-identical results from the same inputs, which is why command replay (not state sync) is the whole networking model.</p>
<h2>What&#39;s Next</h2>
<p>1v1 is working; next up is handling reconnects and validating the lockstep model holds under real network jitter, not just on localhost.</p>
`,yn=Object.freeze(Object.defineProperty({__proto__:null,html:vn,meta:bn},Symbol.toStringTag,{value:"Module"})),wn={title:"From Ollama to Azure OpenAI in a Day, All of It Scripted",date:"2026-11-20",tags:["ai","rag","azure","infrastructure-as-code","ai-agents"],label:"AI-assisted, human-reviewed"},kn=`<p><em>Notes from a migration: a RAG assistant built and measured locally, moved onto a large client&#39;s cloud models without creating anything by hand in the portal.</em></p>
<p>For months the assistant ran on my Mac: Ollama, bge-m3 for embeddings, gemma3:12b for chat, an Elasticsearch index and an evaluation set of 50 questions. Then it was time to move it onto the client&#39;s Azure models, with a three-line brief: get in, create what you need, and if you lack permissions, say so. And make all of it scriptable and repeatable.</p>
<p>That last sentence turned out to be the important one. Here is what I learned in a day.</p>
<h2>Reconnaissance first, read-only</h2>
<p>Before creating a single resource I spent an hour with the Azure CLI just looking: roles, subscription, registered providers, model catalog and quotas in the EU regions.</p>
<p>First surprise: you join the client&#39;s tenant as a guest, and the portal shows your home directory. &quot;Nothing is there&quot; until you switch directory.</p>
<p>Second surprise, the one that mattered: the models picked a few weeks earlier were still in the catalog, but with no quota you could activate. Batch only. The plan changed before I wrote a line, and two newer models took their place: gpt-5.4-mini as the main one, gpt-5.5 for comparison.</p>
<p>Found later, the same fact would have meant redoing the work. And the manual exploration immediately became a script, <code>discover.sh</code>, that anyone can run again.</p>
<h2>Decisions, written in code</h2>
<p>The infrastructure is Bicep: native to Azure, no state file to look after, and <code>what-if</code> to preview a change before applying it. Some decisions I wanted to be hard to undo by accident:</p>
<ul>
<li><strong>Data stays in the EU</strong>: DataZone Standard EU deployments, so prompts and responses are processed inside the EU data zone. The Bicep type accepts only that SKU: moving to Global takes a reviewed change, not one word edited in a parameter file.</li>
<li><strong>Pinned model versions</strong>, no automatic upgrades: benchmarks stay comparable.</li>
<li><strong>The key lives in Key Vault</strong>, never in deployment outputs, never printed, not even by the smoke test.</li>
<li><strong>Who can call the models is a list in the parameter file</strong>, not a click in the portal: you read it in git, with a date and a reason.</li>
</ul>
<p>Everything goes through <code>deploy.sh</code>: what-if, confirm, apply. Running it again changes nothing when nothing changed.</p>
<h2>Real errors only show up in a real deploy</h2>
<p>The what-if was clean. The first deploy failed anyway.</p>
<p>Azure reports the AI account as &quot;created&quot; before it is actually ready, and reading its key failed with <code>RequestConflict</code>. The models and the vault were there, the secret was not. At first I read that <code>Failed</code> as a retry that had succeeded: wrong, and I said so. The fix was a dependency: the secret is written after the model deployments, when the account is certainly ready. Without it, every new environment, production included, would have broken at the same point.</p>
<p>Two smaller snags, useful all the same. A <code>[y/N]</code> prompt run without a terminal got end of input and exited silently: now it says so and suggests <code>--yes</code>. And two deploys started in parallel: Azure rejected the second one, no harm done.</p>
<h2>Abstractions written months ago pay off</h2>
<p>In the backend, chat and embeddings were already two interfaces, and the index mapping took its dimensions from the active provider. The migration meant adding two implementations, picked by a configuration property. No refactor.</p>
<p>The details that mattered:</p>
<ul>
<li>gpt-5.5 rejects <code>temperature: 0.1</code> and accepts only the default: temperature is configured per model, and sent only when set.</li>
<li>Azure&#39;s embeddings have 3072 dimensions against bge-m3&#39;s 1024: that takes a new index, and the old one stays for comparisons.</li>
<li>Returned vectors are sorted by <code>index</code>, not by position. On a 429 the client waits as long as <code>Retry-After</code> says, but only during a reindex: a user&#39;s question should fail fast.</li>
<li>If the endpoint or the key is missing, the backend refuses to start. A failed boot beats a 503 on every question.</li>
</ul>
<h2>Measure again, don&#39;t assume</h2>
<p>Change the embedding model and the score distribution changes too. The relevance threshold, which drops off-topic questions before they reach the model, was tuned on the old one. I measured it again with 8 off-topic questions (&quot;a carbonara recipe&quot;) and 10 on-topic ones: between the highest off-topic score and the lowest on-topic one there is a gap of 0.05, and the old threshold sits right in it. Confirmed, but now it is a measurement, not a hope.</p>
<p>Then the benchmark: the same 50 questions, three runs, graded by hand.</p>
<table>
<thead>
<tr>
<th></th>
<th>gemma3:12b, local</th>
<th>gpt-5.4-mini</th>
<th>gpt-5.5</th>
</tr>
</thead>
<tbody><tr>
<td>Score</td>
<td>93/100</td>
<td>95, 95, 95</td>
<td>99, 99, 99</td>
</tr>
<tr>
<td>Serious errors</td>
<td>at least one</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Median time</td>
<td>about 17 s</td>
<td>1.4 s</td>
<td>5.5 s</td>
</tr>
</tbody></table>
<p>The most useful number is not the score, it is the stability. Three identical runs say the partial answers are structural (retrieval, prompt), not sampling bad luck. Indeed, one of them no model can fix: the right document never reaches the sources.</p>
<p>The final pick was not mine to make, and rightly so. gpt-5.5 fixes four of the five partial answers, but it costs about ten times as much per question (a couple of euro cents against two tenths of a cent) and it is four times slower. Quality against cost and speed is the client&#39;s call: until then gpt-5.5 is the default, and switching is one line of configuration.</p>
<h2>A second opinion, verified</h2>
<p>The diff of the scripts, and later the backend&#39;s, went through a second model, read-only and explicitly forbidden from running commands. About half of its findings were real: a README that taught a command printing the key, a smoke test that could go green without making a single call, the API key inside a Lombok-generated <code>toString()</code>. I rejected the rest after checking them against the code. That is the only way a second opinion is worth having.</p>
<p>Before the merge, the whole body of work (seventy commits) went through a deeper review with Codex. Fifteen findings, seven of them merge blockers, none of them noise. The most serious were domain logic defects no test had seen: content marked as no longer valid was indexed as if it were current. Next to them, the classics you write in a hurry: the assistant endpoint open to every role instead of operators only, question text in the audit logs, images and links in the model&#39;s Markdown rendered as HTML, a saved answer in the browser that survived a change of user in the same tab. Seven fixes, seven separate commits, then the merge. The broader findings, about answer correctness on complex cases, are planned for the production phase instead of being rushed in.</p>
<h2>Monitoring pays off on first use</h2>
<p>The last script reads Azure Monitor: requests and tokens per model, HTTP outcomes. On its first run it showed four 500 errors on embeddings during the reindex: they were why two documents were missing from the new index. The provider retried only on 429, now it retries on 5xx too. A resumable reindex recovered the two documents, and the new index now matches the old one document by document. Over a few thousand requests, the &quot;rare&quot; error happens.</p>
<p>The same metrics, priced with the official price list, give the real cost of the day: about 5 euros in total, two full reindexes and every benchmark included. One full reindex costs about a euro. (A CLI gotcha: without an explicit <code>--end-time</code>, Azure Monitor returns empty series.)</p>
<p>And &quot;if you lack permissions, say so&quot;? The monthly budget with alerts is written in the Bicep, but with our roles Azure answers that we cannot read prices. So it became optional, and whoever handles billing will turn it on. Meanwhile the real cap is each deployment&#39;s capacity: past it, Azure answers 429 and does not bill.</p>
<h2>The handover</h2>
<p>The backend knows nothing about Azure until the cluster tells it: three configuration values and one secret, loaded by a mechanism that was already there, no code to change. The values are ready and go to the people who run the platform, with two notes: the key goes in the Secret, not the ConfigMap, and it never travels through chat. Along with them, an operations guide for colleagues.</p>
<p>To the question &quot;so is everything exposed to the internet now?&quot; the answer was short: only the model endpoint, protected by a key. The backend and the data stay where they were, and an IP allowlist is optional hardening.</p>
<p>One known limit remains, written down rather than hidden: a question about a single paragraph of a very long text does not retrieve that paragraph. It is a retrieval problem, and no model solves it on its own.</p>
<h2>What I take home</h2>
<ul>
<li>Anything you do by hand in the portal is debt: if it is not in a script, you will redo it for the next environment.</li>
<li>Read-only reconnaissance comes first, because it can change the plan.</li>
<li>What-if does not see races: only a real deploy finds them.</li>
<li>The right interfaces, written when nobody needed them, are what make a one-day migration possible.</li>
<li>A deep review before the merge finds what tests don&#39;t know to look for: the domain logic.</li>
<li>When you misread a result, say so out loud and fix it. It costs less than defending it.</li>
</ul>
`,Sn=Object.freeze(Object.defineProperty({__proto__:null,html:kn,meta:wn},Symbol.toStringTag,{value:"Module"})),In={title:"Markasso Cloud, and a gift for the Mac",date:"2026-11-04",tags:["markasso","cloud","macos","ai-agents","indie"],label:"AI-assisted, human-reviewed"},An=`<p>Markasso 1.17 is out, and it&#39;s a slightly different release: for the first time there&#39;s something you can pay for. It&#39;s called <strong>Markasso Cloud</strong>, and before I tell you what it does, let me get the elephant off the whiteboard.</p>
<h2>I&#39;m not trying to get rich</h2>
<p>Markasso started because I wanted a fast, dark whiteboard I could drive from the keyboard. It became the project I care about most, and that&#39;s not changing.</p>
<p>Some things, though, don&#39;t live in your browser. Synced boards and AI agents drawing in live sessions run on public infrastructure that is always on and costs real money every month. Markasso Cloud is <strong>5 € a month or 48 € a year</strong>: the minimum to keep that part running. It&#39;s not buying me a yacht, at most a coffee now and then.</p>
<h2>What Markasso Cloud does</h2>
<ul>
<li><strong>Cloud boards.</strong> Save a board from the Cloud menu and get a read link and an edit link. Open it on the web at the office and on the Mac at home, and it&#39;s the same board.</li>
<li><strong>AI agents in live sessions.</strong> Invite Claude, Codex or any other MCP agent into a session and it draws with you, on the same board, in real time.</li>
</ul>
<p>No account needed. Payment goes through Polar, the licence key arrives by email, and you paste it into Markasso: if it&#39;s valid, there&#39;s confetti.</p>
<h2>Everything else stays free</h2>
<p>Everything Markasso did yesterday it still does today, for free, as always:</p>
<ul>
<li>the whole whiteboard, no limits;</li>
<li>local files, in your browser;</li>
<li>live sessions between people;</li>
<li>the local MCP server, to let an agent draw on your boards;</li>
<li>reading cloud boards someone shares with you.</li>
</ul>
<p>Cloud is an extra convenience, not a toll. If you don&#39;t need it, Markasso asks you for nothing.</p>
<h2>The gift: Markasso for Mac</h2>
<p>Along with Cloud comes <strong>Markasso for Mac</strong>, a native app written in Swift. It&#39;s free.</p>
<p>It runs on macOS 26 or later, on Apple Silicon and Intel, and opens <code>.markasso</code> files like any app on the system. With a cloud board the flow comes naturally: the whiteboard on the web at work, on the Mac at home, and the board follows you. The build isn&#39;t notarized yet, so the first launch needs one extra step: the page has the instructions.</p>
<h2>If you feel like it</h2>
<p>If you like Markasso and Cloud is useful to you, subscribing is the nicest way to keep it alive. If you don&#39;t need it, that&#39;s perfectly fine: draw, share, tell someone about it. It means just as much to me.</p>
<ul>
<li>Markasso: <a href="https://markasso.it">markasso.it</a></li>
<li>Cloud: <a href="https://markasso.it/cloud">markasso.it/cloud</a></li>
<li>Mac: <a href="https://markasso.it/mac">markasso.it/mac</a></li>
<li>Source: <a href="https://github.com/AlbertoBarrago/markasso">github.com/AlbertoBarrago/markasso</a></li>
</ul>
`,Tn=Object.freeze(Object.defineProperty({__proto__:null,html:An,meta:In},Symbol.toStringTag,{value:"Module"})),zn={title:"My first (and last?) forty years",date:"2026-09-29",tags:["opinion","life","freedom","career","italy"],label:"human-written, AI-reviewed"},xn=`<p>Tomorrow I turn forty.</p>
<p>Having reached this point in my life, after loving code enough to lose eyesight, relationships, and sanity over it… I find myself taking stock. Not so much technically as humanly.</p>
<h2>Eight hours</h2>
<p>Eight hours behind a monitor, to spend fewer than six on your own life.</p>
<p>Eight hours, when perhaps two would be enough these days to be “1000x,” as DHH puts it, starting with some basic knowledge.</p>
<h2>An act of will</h2>
<p>Freedom is a mental process, not just a word. Everyone lives within their own dimension of freedom. But deep down, I think few people actually experience it. Most of us recognise its outline through what’s missing.</p>
<p>An act of will is the only thing that accompanies real change. Change brings sacrifice, effort, discipline, and sometimes even asks you to become one with your own detachment.</p>
<p>There is no conclusion, no real sense to all this. But there is surely some meaning for whoever stops to read.</p>
<h2>The Italian reality</h2>
<p>Touching grass, retiring early… things that don’t really concern us Italians. Here, at best, you become a CTO and still earn less than some Italian minister’s bag carrier.</p>
<h2>Something positive, perhaps</h2>
<p>But there is something positive, I think, since the negative is clear enough.</p>
<p>We just have to find it.</p>
<p><em>Valete.</em></p>
`,Cn=Object.freeze(Object.defineProperty({__proto__:null,html:xn,meta:zn},Symbol.toStringTag,{value:"Module"})),Pn={title:"Otelma: building a local LLM runtime from scratch",date:"2026-08-31",tags:["go","llm","llama-cpp","apple-silicon","ai"],label:"human-written, AI-reviewed"},qn=`<p><strong>Otelma</strong> is a local LLM inference runtime I&#39;m building in Go.</p>
<p>The idea is deliberately smaller than Ollama: understand what actually sits between a GGUF file and a local application using an LLM, while treating unified memory as a real, finite resource rather than something the OS will eventually deal with.</p>
<p>It currently runs on Apple Silicon, uses <code>llama.cpp</code> as its first inference backend, and exposes both its own local API and a minimal OpenAI-compatible interface.</p>
<h2>The Architecture</h2>
<p>Otelma is split into four main layers:</p>
<ul>
<li><strong>CLI</strong>: <code>pull</code>, <code>list</code>, <code>ps</code>, <code>run</code>, <code>chat</code>, <code>serve</code>, <code>config</code>, <code>version</code></li>
<li><strong>local runtime API</strong>: model lifecycle, scheduling, memory accounting, and HTTP endpoints</li>
<li><strong>inference backend</strong>: an abstraction over the actual inference engine; <code>llama.cpp</code> today, MLX planned</li>
<li><strong>model storage</strong>: local GGUF metadata, checksums, sizes, and Hugging Face downloads</li>
</ul>
<p>Even local CLI commands go through the HTTP API.</p>
<p>Running:</p>
<p><code>otelma run qwen2.5-0.5b &quot;What is the capital of Italy?&quot;</code></p>
<p>doesn&#39;t bypass the runtime and invoke <code>llama.cpp</code> directly. The CLI talks to the same API an external application would use.</p>
<p>If the server isn&#39;t running yet, Otelma starts it automatically in the background.</p>
<h2>Model Lifecycle as a State Machine</h2>
<p>One thing I didn&#39;t want was model management hidden behind a collection of booleans and process checks.</p>
<p>Each model instead moves through an explicit state machine:</p>
<p><code>NOT_PRESENT → DOWNLOADED → LOADING → READY → BUSY → UNLOADING</code></p>
<p>The model manager owns those transitions.</p>
<p>That gives the runtime one place to answer questions such as:</p>
<ul>
<li>is this model actually available locally?</li>
<li>is it already loaded?</li>
<li>can another request use it?</li>
<li>is it currently generating?</li>
<li>can it be unloaded safely?</li>
</ul>
<p>The registry is persisted to disk, so downloaded models survive runtime restarts without having to rediscover everything from scratch.</p>
<h2>Unified Memory Is Part of the Architecture</h2>
<p>Apple Silicon makes local inference convenient because CPU and GPU share unified memory.</p>
<p>It also means pretending memory is unlimited is a bad abstraction.</p>
<p>On a machine with 24GB of unified memory, loading multiple large models at once can very quickly become the operating system&#39;s problem.</p>
<p>Otelma therefore has an explicit memory <code>Budget</code>.</p>
<p>Before loading a model, the manager reserves its expected memory usage. If the reservation would exceed the configured ceiling, the load is rejected before the inference process starts.</p>
<p>The important distinction is that memory pressure becomes a runtime decision:</p>
<p><code>canLoad(model) → yes/no</code></p>
<p>rather than an eventual OOM.</p>
<p>That constraint influenced the architecture much more than I initially expected.</p>
<h2>llama.cpp Is a Backend, Not the Runtime</h2>
<p>Otelma doesn&#39;t implement tensor operations or transformer inference itself.</p>
<p>For real inference, the current backend launches <code>llama-server</code> from <code>llama.cpp</code>.</p>
<p>But the rest of Otelma doesn&#39;t know that.</p>
<p>The runtime talks through a backend interface responsible for loading, unloading, and generating with a model. <code>llama.cpp</code> is simply the first implementation.</p>
<p>This separation should make it possible to add an MLX backend later without changing model management, scheduling, storage, or the public API.</p>
<p>That distinction was one of the main reasons for building the project: an inference engine and an inference runtime solve different problems.</p>
<h2>OpenAI-Compatible by Default</h2>
<p>Otelma also exposes a minimal subset of the OpenAI API:</p>
<p><code>POST /v1/chat/completions</code></p>
<p>and:</p>
<p><code>GET /v1/models</code></p>
<p>The goal isn&#39;t to reproduce the entire OpenAI API.</p>
<p>It&#39;s to make the runtime immediately usable by software that already supports a custom OpenAI endpoint.</p>
<p>The application shouldn&#39;t need to know whether the model behind that endpoint is running in the cloud, through <code>llama.cpp</code>, or eventually through MLX.</p>
<h2>Pull, Run, Chat</h2>
<p>The current workflow is intentionally small:</p>
<p><code>otelma list</code></p>
<p><code>otelma pull qwen2.5-0.5b</code></p>
<p><code>otelma run qwen2.5-0.5b &quot;What is the capital of Italy?&quot;</code></p>
<p>or for an interactive session:</p>
<p><code>otelma chat qwen2.5-0.5b</code></p>
<p>Models can also be pulled directly from Hugging Face, while the built-in catalog provides a simpler name-based path for known models.</p>
<p>At this point the complete pipeline works end-to-end:</p>
<p><code>pull → load → inference → unload</code></p>
<p>with persistent model metadata, multi-turn context, background server startup, and real inference.</p>
<h2>Why Build This?</h2>
<p>There are already excellent tools for running LLMs locally.</p>
<p>That&#39;s precisely why Otelma is intentionally small.</p>
<p>I didn&#39;t want another UI around an existing runtime. I wanted to understand the runtime itself: model lifecycle, process management, memory reservations, scheduling, storage, API compatibility, and where the actual inference engine should begin and end.</p>
<p>Building the smaller version makes those boundaries visible.</p>
<h2>What&#39;s Next</h2>
<p>The current scheduler deliberately serializes requests and is still based on a single mutex.</p>
<p>That&#39;s enough to make the lifecycle deterministic, but it&#39;s also the obvious next architectural constraint to remove.</p>
<p>After that: better scheduling, model removal, streaming responses, and an MLX backend.</p>
<p>The project is still small enough that every abstraction has a reason to exist, which is exactly where I want it for now.</p>
`,Mn=Object.freeze(Object.defineProperty({__proto__:null,html:qn,meta:Pn},Symbol.toStringTag,{value:"Module"})),Ln={title:"I Built a CLI to Answer One Question: What Will This Change Break?",date:"2026-08-27",tags:["programming","devops","go","opensource"],label:"human-written, AI-reviewed"},En=`<p>We&#39;ve all been there.</p>
<p>You open a repository, change a file that looks completely harmless, run the tests, and open a pull request.</p>
<p>Then someone comments:</p>
<blockquote>
<p>&quot;Careful. That module is also used by the billing pipeline.&quot;</p>
</blockquote>
<p>Or worse, nobody notices.</p>
<p>The change gets merged.</p>
<p>And something breaks.</p>
<p>The problem isn&#39;t necessarily bad code. In large or unfamiliar codebases, understanding the blast radius of a change is surprisingly difficult.</p>
<p>So I started building Serval.</p>
<p>Serval is a local-first CLI that tries to answer one simple question:</p>
<p><em>If I change this file, what am I likely to affect?</em></p>
<h2>The problem</h2>
<p>When I want to understand the impact of a change, I usually end up doing some combination of:</p>
<pre><code>rg &quot;someModule&quot;
git log
git blame
</code></pre>
<p>Then I inspect imports, search CI configuration, check which files usually change together, and rely on whatever knowledge I have about the repository.</p>
<p>That works.</p>
<p>But it is mostly manual.</p>
<p>And on a repository you don&#39;t know well, a large part of the process becomes guesswork.</p>
<p>I wanted something closer to:</p>
<pre><code>serval inspect src/auth/token.ts
</code></pre>
<p>and get:</p>
<pre><code>Target
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
</code></pre>
<p>Not a prediction.</p>
<p>Not:</p>
<blockquote>
<p>&quot;AI thinks this change might be dangerous.&quot;</p>
</blockquote>
<p>Evidence.</p>
<h2>Four signals instead of one</h2>
<p>Looking only at imports isn&#39;t enough.</p>
<p>A dependency graph can tell me:</p>
<pre><code>A -&gt; B -&gt; C
</code></pre>
<p>If I change C, I know that B and potentially A are affected.</p>
<p>Useful.</p>
<p>But repositories contain more information than their dependency graph.</p>
<h3>1. Dependency graph</h3>
<p>Serval scans the repository and builds a graph from language-native dependencies.</p>
<p>It currently understands repositories containing:</p>
<ul>
<li>JavaScript / TypeScript</li>
<li>Go</li>
<li>Python</li>
<li>Java</li>
<li>C</li>
</ul>
<p>For a target file, Serval walks the graph in the opposite direction and calculates its dependents.</p>
<p>That gives us the structural blast radius.</p>
<p>But structure is only the first signal.</p>
<h3>2. Git history</h3>
<p>Git contains something surprisingly close to the memory of a codebase.</p>
<p>If two files repeatedly change together, that&#39;s information.</p>
<p>If a module has been modified constantly during the last few months, that&#39;s information too.</p>
<p>So Serval looks at things like:</p>
<ul>
<li>historical churn</li>
<li>co-change frequency</li>
</ul>
<p>Imagine two files with identical dependency graphs.</p>
<p>One hasn&#39;t changed in two years.</p>
<p>The other changed nine times during the last 90 days and frequently changes together with 15 other modules.</p>
<p>Those files probably shouldn&#39;t receive the same risk score.</p>
<h3>3. CI configuration</h3>
<p>Then there is another graph hiding inside most repositories: CI/CD.</p>
<p>A change can trigger integration tests, builds, deployments or validation pipelines depending on path filters.</p>
<p>Serval currently understands configuration from:</p>
<ul>
<li>GitHub Actions</li>
<li>GitLab CI</li>
<li>Azure Pipelines</li>
<li>Jenkins</li>
</ul>
<p>This gives another useful piece of evidence: which automation does this change actually touch?</p>
<h3>4. Critical paths</h3>
<p>Some parts of a system simply deserve more attention.</p>
<p>Authentication is not the same as changing a README.</p>
<p>Payment logic is not the same as changing a CSS utility.</p>
<p>Serval therefore allows repository-specific critical-path rules through <code>.serval.yml</code>.</p>
<p>Again, this isn&#39;t trying to prove that something will break.</p>
<p>It is accumulating evidence that says: you should probably look at this change more carefully.</p>
<h2>Why the score is deterministic</h2>
<p>This became one of the most important design decisions in the project.</p>
<p>It would have been extremely easy to send the repository context to an LLM and ask:</p>
<blockquote>
<p>&quot;How risky is this change from 0 to 100?&quot;</p>
</blockquote>
<p>I deliberately didn&#39;t do that.</p>
<p>The core score produced by Serval is deterministic.</p>
<p>The same repository state and configuration produce the same result.</p>
<p>More importantly, every point can be explained.</p>
<p>Something like:</p>
<pre><code>Risk
  MEDIUM: 38/100

  +4   2 downstream modules
  +14  high historical churn
  +12  91 frequently co-changed modules
  +8   2 CI workflows affected
</code></pre>
<p>There is no hidden reasoning behind 38.</p>
<p>You can audit it.</p>
<p>You can disagree with it.</p>
<p>You can change the configuration.</p>
<p>But you can understand where it came from.</p>
<p>For engineering tooling, I think that property matters.</p>
<h2>So... no AI?</h2>
<p>Not exactly.</p>
<p>Serval does support AI explanations.</p>
<p>For example:</p>
<pre><code>serval inspect src/auth/token.ts --explain
</code></pre>
<p>The interesting part is the boundary.</p>
<p>The AI cannot change the score.</p>
<p>It only receives the deterministic analysis and explains it in natural language.</p>
<p>And because Serval is local-first, the default provider can be a local Ollama instance.</p>
<p>Other providers can be used through locally installed CLIs such as Claude, Codex or Gemini.</p>
<p>I like this architecture much more than putting an LLM at the center of the system:</p>
<pre><code>repository
    ↓
deterministic analysis
    ↓
risk model
    ↓
result
    ↓
optional AI explanation
</code></pre>
<p>The model explains evidence. It doesn&#39;t invent the evidence.</p>
<h2>Local-first was intentional</h2>
<p>Serval doesn&#39;t require:</p>
<ul>
<li>an account</li>
<li>a SaaS backend</li>
<li>uploading your repository</li>
<li>an API key for its core functionality</li>
</ul>
<p>The analysis happens locally.</p>
<p>That matters for developer tooling because the repository already contains everything needed for most of the analysis:</p>
<ul>
<li>source code</li>
<li>Git history</li>
<li>CI configuration</li>
<li>repository configuration</li>
</ul>
<p>Why send all of that somewhere else if we can calculate the answer locally?</p>
<h2>It can also become a CI gate</h2>
<p>The same analysis can run against your current diff:</p>
<pre><code>serval diff
</code></pre>
<p>or produce machine-readable output:</p>
<pre><code>serval diff --json
</code></pre>
<p>And this makes another use case possible:</p>
<pre><code>serval diff --fail-on high
</code></pre>
<p>If one of the changed files reaches HIGH risk, Serval exits with a non-zero status.</p>
<p>That means the tool can move from &quot;interesting information for the developer&quot; to &quot;a deterministic signal inside the delivery pipeline.&quot;</p>
<p>I&#39;m particularly interested in exploring this direction. Not as another quality gate that randomly blocks developers, but as a way to make the expected impact of a change visible before merge.</p>
<h2>Installing it</h2>
<p>Serval is written in Go and distributed through Homebrew.</p>
<pre><code>brew install AlbertoBarrago/tap/serval
</code></pre>
<p>Then, inside a Git repository:</p>
<pre><code>serval inspect path/to/file
</code></pre>
<p>or simply:</p>
<pre><code>serval path/to/file
</code></pre>
<p>There are also commands for inspecting the graph and history directly:</p>
<pre><code>serval graph path/to/file
serval history path/to/file
serval doctor
</code></pre>
<p>And because I have a soft spot for old-school CLI tooling:</p>
<pre><code>man serval
</code></pre>
<p>exists too.</p>
<h2>What I&#39;m trying to explore</h2>
<p>Serval is still young.</p>
<p>I&#39;m less interested in pretending that a 0-100 score can magically predict whether software will break and more interested in a different question:</p>
<p><em>How much useful information about change risk is already sitting inside our repositories?</em></p>
<p>Dependency graphs tell us what is connected.</p>
<p>Git tells us what historically moves together.</p>
<p>CI tells us what operational machinery is affected.</p>
<p>Repository rules tell us which areas deserve additional attention.</p>
<p>None of these signals is particularly revolutionary on its own.</p>
<p>Combining them into a small, local, explainable tool is the experiment.</p>
<p>And perhaps that&#39;s also where AI fits best in this kind of developer tooling: not replacing deterministic analysis, but sitting on top of it when natural-language reasoning is useful.</p>
<p>Serval is open source and MIT licensed.</p>
<p>Project: <a href="https://albz.it/serval/">albz.it/serval</a></p>
<p>Source: <a href="https://github.com/AlbertoBarrago/serval">github.com/AlbertoBarrago/serval</a></p>
<p>If you work on large repositories, monorepos, legacy systems, or CI-heavy projects, I&#39;d be particularly interested in hearing what signals you use before touching an unfamiliar part of the codebase.</p>
`,_n=Object.freeze(Object.defineProperty({__proto__:null,html:En,meta:Ln},Symbol.toStringTag,{value:"Module"})),$n={title:"Telemaco: a headless browser engine in Rust, without the Chromium",date:"2026-09-04",tags:["rust","browser","scraping","ai-agents","cdp","sideprojects"],label:"human-written, AI-reviewed"},Rn=`<p><strong>Telemaco</strong> is a headless browser engine I&#39;ve been building in Rust. It runs real JavaScript through V8, keeps a real DOM tree, owns its own layout and paint pipeline, and speaks the Chrome DevTools Protocol, so Puppeteer and Playwright connect to it out of the box. No Chromium, no WebView, no 300 MB download. A 70 MB binary that starts instantly and loads a page in ~85 ms.</p>
<p>This is the story of how it came to be, why it exists, and the choices that shaped it.</p>
<h2>The problem: Chromium as a tax</h2>
<p>For years, &quot;headless browser&quot; has meant one thing: headless Chrome. It works, but it carries a cost you only notice when you scale it.</p>
<ul>
<li><strong>The download.</strong> Every CI runner, every fresh container, every teammate&#39;s laptop pulls a ~300 MB Chromium. Playwright and Puppeteer make this painless, which is exactly why nobody questions it.</li>
<li><strong>The memory.</strong> A single headless Chrome instance idles at 200+ MB. Spin up a few for parallel scraping and you&#39;re budgeting RAM like it&#39;s 2010.</li>
<li><strong>The startup.</strong> Two seconds to launch before you&#39;ve even loaded a page.</li>
<li><strong>The fingerprint.</strong> Headless Chrome is trivially detectable. If you&#39;re scraping anything that cares, you&#39;re already fighting an anti-bot arms race.</li>
</ul>
<p>None of this is inherent to the job. A browser engine is a parser, a DOM, a layout engine, a paint pipeline, and a JS runtime. Chromium is one very heavy way to assemble those pieces. I wanted a lighter one.</p>
<h2>The need that started it</h2>
<p>Two concrete needs drove the project.</p>
<p>First, <strong>efficient web search and extraction</strong>. I work with colleagues who spend their days pulling structured data out of the web, like Salesforce records, MDN docs, product pages. The tooling for that is either a raw HTTP client (which can&#39;t run JavaScript) or a full browser (which is overkill). There was no middle ground: something that runs real JS and a real DOM, but is small enough to treat as a utility, not an infrastructure project.</p>
<p>Second, <strong>end-to-end tests without Chromium</strong>. If you&#39;ve ever run a Playwright suite in CI, you know the drill: download the browser, hope the sandbox flags are right, watch the memory climb. I wanted the same CDP automation surface, the same <code>page.goto</code>, the same <code>page.evaluate</code>, but backed by something that doesn&#39;t need a browser install at all. A single binary that <em>is</em> the browser.</p>
<h2>Standing on the shoulders of many projects</h2>
<p>I didn&#39;t want to reinvent a browser from scratch, and I didn&#39;t have to. The Rust ecosystem has quietly assembled most of the pieces, and Telemaco is deliberately built on top of them.</p>
<ul>
<li><strong>Servo&#39;s components</strong>: <code>html5ever</code> for HTML parsing, <code>selectors</code> for CSS matching, <code>cssparser</code>, <code>servo_arc</code>. The DOM and CSS machinery that Mozilla&#39;s research browser spent years hardening.</li>
<li><strong><code>taffy</code></strong> for the layout engine, a pure-Rust flexbox/grid layout library.</li>
<li><strong><code>tiny-skia</code></strong> for rasterization and <strong><code>ab_glyph</code></strong> for glyph rendering, the paint pipeline, also pure Rust.</li>
<li><strong>V8 through <code>deno_core</code></strong> for JavaScript. Real V8, the same engine Chrome uses, so JS semantics are exactly what you expect.</li>
<li><strong><code>chromiumoxide</code></strong> and the Chrome DevTools Protocol for the automation surface.</li>
</ul>
<p>The project started as a fork of <strong>Obscura</strong> (Apache-2.0), a headless browser engine by h4ckf0r0day. That&#39;s the honest origin: I didn&#39;t start from a blank page, I started from a solid foundation and took it in a different direction. The crate names changed, the CLI surface changed, the project identity changed, and the codebase was adapted and extended for a practical, scraping- and agent-oriented focus. The attribution is in the repo&#39;s <code>NOTICE</code> file; this is a derivative work, and it says so.</p>
<h2>The architecture</h2>
<p>Telemaco is a workspace of nine crates, one layer per crate, with cross-crate calls going through the layer above rather than sideways:</p>
<table>
<thead>
<tr>
<th>Crate</th>
<th>Role</th>
</tr>
</thead>
<tbody><tr>
<td><code>telemaco-cli</code></td>
<td>CLI: <code>fetch</code>, <code>serve</code> (CDP server), <code>scrape</code>, <code>mcp</code></td>
</tr>
<tr>
<td><code>telemaco-cdp</code></td>
<td>Chrome DevTools Protocol server (WebSocket)</td>
</tr>
<tr>
<td><code>telemaco-js</code></td>
<td>V8/<code>deno_core</code> runtime; DOM shim + JS/Rust bridge</td>
</tr>
<tr>
<td><code>telemaco-dom</code></td>
<td>DOM tree</td>
</tr>
<tr>
<td><code>telemaco-net</code></td>
<td>HTTP client, stealth client, cookie jar, robots cache, tracker blocklist</td>
</tr>
<tr>
<td><code>telemaco-browser</code></td>
<td>The <code>Page</code> type, navigation, JS evaluation</td>
</tr>
<tr>
<td><code>telemaco-render</code></td>
<td>Selector cascade, retained layout, paint, screenshots, PDF</td>
</tr>
<tr>
<td><code>telemaco-mcp</code></td>
<td>Stateful MCP automation tools</td>
</tr>
<tr>
<td><code>telemaco</code></td>
<td>Embeddable Rust library API</td>
</tr>
</tbody></table>
<p>A few invariants shaped the whole design:</p>
<ul>
<li><strong>One V8 isolate per process.</strong> V8 is <code>!Send</code>, so all async runs on a <code>tokio</code> <code>LocalSet</code>, and every JS op goes through a single global lock. It serializes JS execution, which is fine for a browser engine; the DOM is single-threaded anyway.</li>
<li><strong>One bad page must never hang a worker.</strong> There&#39;s a V8 termination watchdog per page and a process-level hard deadline. A page that spins in an infinite loop gets killed, not the worker.</li>
<li><strong>SSRF by default.</strong> Loopback, RFC1918, and link-local fetches are blocked unless you explicitly pass <code>--allow-private-network</code>. A scraping tool that can reach your internal network is a liability; this closes it by default.</li>
</ul>
<h2>What it looks like</h2>
<p>Fetch a page and run real JavaScript:</p>
<pre><code class="language-bash">$ telemaco fetch https://news.ycombinator.com --eval &quot;document.title&quot;
Hacker News
</code></pre>
<p>Drive it like headless Chrome, from Puppeteer:</p>
<pre><code class="language-js">import puppeteer from &#39;puppeteer-core&#39;;

const browser = await puppeteer.connect({
  browserWSEndpoint: &#39;ws://127.0.0.1:9222/devtools/browser&#39;,
});
const page = await browser.newPage();
await page.goto(&#39;https://news.ycombinator.com&#39;);

const stories = await page.evaluate(() =&gt;
  Array.from(document.querySelectorAll(&#39;.titleline &gt; a&#39;))
    .map(a =&gt; ({ title: a.textContent, url: a.href }))
);
</code></pre>
<p>Scrape many URLs in parallel:</p>
<pre><code class="language-bash">$ telemaco scrape url1 url2 url3 --concurrency 25 --format json
</code></pre>
<p>And for AI agents, there&#39;s an MCP server that exposes the same browser to Claude Desktop, Cursor, or any MCP client:</p>
<pre><code class="language-json">{
  &quot;mcpServers&quot;: {
    &quot;telemaco&quot;: { &quot;command&quot;: &quot;telemaco&quot;, &quot;args&quot;: [&quot;mcp&quot;] }
  }
}
</code></pre>
<h2>The numbers</h2>
<table>
<thead>
<tr>
<th>Metric</th>
<th>Telemaco</th>
<th>Headless Chrome</th>
</tr>
</thead>
<tbody><tr>
<td>Memory</td>
<td>30 MB</td>
<td>200+ MB</td>
</tr>
<tr>
<td>Binary size</td>
<td>70 MB</td>
<td>300+ MB</td>
</tr>
<tr>
<td>Page load</td>
<td>85 ms</td>
<td>~500 ms</td>
</tr>
<tr>
<td>Startup</td>
<td>Instant</td>
<td>~2 s</td>
</tr>
<tr>
<td>Anti-detect</td>
<td>Built-in</td>
<td>None</td>
</tr>
<tr>
<td>Puppeteer / Playwright</td>
<td>Yes</td>
<td>Yes</td>
</tr>
</tbody></table>
<p>Roughly 12x faster page loads and 6x less memory on framework pages, with the same CDP automation surface.</p>
<h2>Why &quot;Telemaco&quot;</h2>
<p>The name is the son of Odysseus, the one who sets out to find news of his father. A searcher, by definition. It felt right for a tool whose whole job is to go out and bring back what&#39;s on the web.</p>
<h2>Not a product, a direction</h2>
<p>Telemaco isn&#39;t trying to sell anything. It&#39;s a different vision of what a browser engine can be: small enough to be a utility, fast enough to be a tool, and honest about where it comes from. It&#39;s built on the work of a lot of respected projects and people, like Servo, taffy, tiny-skia, deno_core, Obscura, and it&#39;s open source under Apache-2.0, so anyone can take it and point it at their own problem.</p>
<p>If you&#39;ve ever wished your scraping or your e2e tests didn&#39;t require a browser install, that&#39;s the itch it scratches. Clone it, build it, drive it.</p>
<ul>
<li>Landing page: <a href="https://albz.it/telemaco/">albz.it/telemaco</a></li>
<li>Source: <a href="https://github.com/AlbertoBarrago/telemaco">github.com/AlbertoBarrago/telemaco</a></li>
</ul>
`,On=Object.freeze(Object.defineProperty({__proto__:null,html:Rn,meta:$n},Symbol.toStringTag,{value:"Module"})),Dn={title:"Tenore: Stop Maintaining the Same Agent Configuration Three Times",date:"2026-10-01",tags:["programming","ai-agents","developer-tools","typescript","opensource"],label:"human-written, AI-reviewed"},jn=`<p>I built <strong>Tenore</strong>, a CLI that takes a shared configuration for AI coding agents and compiles it into their native files.</p>
<p>The problem is ordinary maintenance. Claude Code, Codex CLI and Antigravity have their own places for instructions, permissions and MCP servers. Once you use more than one, the same project rules start appearing in several files.</p>
<p>Change the test command, add a server, tighten a permission: every copy needs attention. Eventually, one gets missed. Switching agents then means checking whether the configuration still says what you intended.</p>
<p>Tenore gives that configuration a source of truth: a directory called <code>.agents/</code>.</p>
<h2>Configuration as source code</h2>
<p>The idea is to keep instructions in Markdown, structured policy in YAML frontmatter, and generate the files each agent expects.</p>
<p>A repository can start with:</p>
<pre><code class="language-text">.agents/
  AGENTS.md
  policy.md
  memory/
    architecture.md
</code></pre>
<p><code>AGENTS.md</code> contains the prose: how to work in the repository, which conventions matter, what deserves extra care. <code>policy.md</code> describes permissions, MCP servers and target-specific overrides. Memory files hold persistent notes by topic.</p>
<p>Tenore parses those sources, merges their scopes, and passes the result to each target adapter. The adapters produce native configuration, such as <code>CLAUDE.md</code> or <code>.codex/config.toml</code>.</p>
<p>That makes the generated files reviewable build output. The shared rules have an explicit home, and each translation has a place in the implementation.</p>
<h2>A small example</h2>
<p>The npm package is called <code>tenore-cli</code>; the executable is <code>tenore</code>. It requires Node.js 20.12 or later.</p>
<pre><code class="language-sh">pnpm add -g tenore-cli
tenore init
</code></pre>
<p>In a terminal, <code>tenore init</code> now opens a setup wizard. It detects existing agent configuration and lets you choose what to import and which agents to generate files for. It also offers to update <code>.gitignore</code> and register MCP servers for shared memory and web access.</p>
<p>The wizard previews the sync before asking for confirmation. Nothing is written until you confirm. At the end, it prints the equivalent commands so the setup can be repeated in a script.</p>
<p>For an unattended setup, <code>tenore init --yes</code> accepts the wizard&#39;s defaults, even without a terminal. Other flags, or a non-interactive shell without <code>--yes</code>, use the plain command flow. For example, <code>tenore init --targets claude,codex</code> sets the agents to generate files for.</p>
<p>The generated sources remain editable. After updating <code>.agents/AGENTS.md</code>, a minimal <code>.agents/policy.md</code> might look like this:</p>
<pre><code class="language-yaml">---
targets: [claude, codex]
permissions:
  default: ask
  allow:
    - shell: &quot;pnpm test*&quot;
  ask:
    - shell: &quot;git push*&quot;
---
</code></pre>
<p>Those are command patterns: <code>pnpm test*</code> also matches commands with that prefix, so the pattern should reflect what you actually want to permit.</p>
<p>When changing the sources after setup, inspect the generated changes before applying them:</p>
<pre><code class="language-sh">tenore diff
tenore sync
</code></pre>
<p>That review step matters. A configuration compiler is useful only if you can understand its output, particularly when the output controls permissions.</p>
<p>Existing configuration can also be the starting point. For a repository already configured for Claude Code:</p>
<pre><code class="language-sh">tenore init --import claude
tenore diff
tenore sync
</code></pre>
<p>Import provides a migration path without manually transcribing everything into the new layout.</p>
<h2>Shared rules, local context</h2>
<p>Configuration has three scopes: global, repository and local. They merge in that order.</p>
<p>Global sources live in <code>~/.agents/</code>, repository sources in <code>.agents/</code>, and machine-specific sources in <code>.agents/local/</code>. Initialization adds the local scope to Git&#39;s ignore rules. Global configuration is included explicitly with <code>--global</code>.</p>
<p><code>tenore init --global</code> brings the same wizard to your personal configuration. It can import existing global agent settings into <code>~/.agents/</code> and shows the full diff before writing changes.</p>
<p>The merge rules distinguish between kinds of data. Instructions and memory are combined in scope order. Lists are deduplicated. Scalar settings generally take the value from the narrowest scope.</p>
<p>Permissions need stricter handling: deny takes precedence over ask, which takes precedence over allow. A repository-level allow cannot undo a global deny. Rules discarded during that merge produce warnings.</p>
<p>This lets a project add context while preserving restrictions established in a broader scope.</p>
<h2>Shared memory and web access</h2>
<p>The memory files can now be read and updated through Tenore&#39;s own MCP server. Register it once in <code>.agents/policy.md</code>:</p>
<pre><code class="language-yaml">mcp:
  tenore-memory:
    command: npx
    args: [&quot;-y&quot;, &quot;tenore-cli&quot;, &quot;mcp&quot;]
</code></pre>
<p>After <code>tenore sync</code>, each selected agent gets the server configuration. It exposes tools to list, read, search and write memory topics, keeping persistent notes in the same shared directory. Writes are confined to the memory directories. When an agent creates a new topic, run <code>tenore sync</code> again to include it in the generated files.</p>
<p>Web access can follow a similar approach. Tenore supports declaring a web MCP server once and translating its configuration for each agent. The documented example uses <a href="https://github.com/AlbertoBarrago/telemaco">Telemaco</a>, but another web or browser MCP server can be used.</p>
<p>One distinction matters here: <code>network: none</code> disables the agents&#39; native web access, while MCP servers remain separate. Access through those servers is governed by explicit MCP permission rules. That makes it possible to use a shared web server with confirmation required for its tools.</p>
<h2>Generated files still need protection</h2>
<p>People edit files directly. Tools do too. A generator needs to account for that before writing over an existing setup.</p>
<p>Tenore records hashes of generated artifacts in <code>.agents/.lock</code>. If a generated file changes after a sync, the next sync detects drift and skips it. Existing files that Tenore does not own are treated as conflicts until imported.</p>
<p>For CI, there is:</p>
<pre><code class="language-sh">tenore check
</code></pre>
<p>It exits unsuccessfully on invalid sources, drift, conflicts or pending generated changes. That gives configuration consistency a check alongside the rest of the repository&#39;s validation.</p>
<p>If you stop targeting an agent, Tenore reports its old generated files as orphans and keeps them by default. <code>tenore sync --prune</code> removes those files only if they have not been modified.</p>
<h2>Where portability gets difficult</h2>
<p>The current adapters cover Claude Code, Codex CLI and Antigravity, but their permission models differ. A common source format cannot make those differences disappear.</p>
<p>Tenore&#39;s documented policy is to emit a more restrictive mapping with a warning when an exact translation is unavailable. Some capabilities need explicit handling: Codex filesystem mappings require opt-in permission profiles, while Antigravity permissions are configured at user scope.</p>
<p>These limitations belong in the review of the generated configuration. Shared instructions also cannot guarantee identical agent behavior; they make the intended rules consistent and easier to maintain.</p>
<p>The project is still a work in progress. The useful measure is whether changing one rule becomes easier to inspect and carry across the tools you use.</p>
<p>Tenore is written in TypeScript and released under the MIT license. The <a href="https://github.com/AlbertoBarrago/tenore">repository</a> contains the source and setup instructions; the <a href="https://github.com/AlbertoBarrago/tenore/blob/main/docs/mapping.md">mapping reference</a> documents translation decisions. You can install it from <a href="https://www.npmjs.com/package/tenore-cli">npm</a>.</p>
`,Bn=Object.freeze(Object.defineProperty({__proto__:null,html:jn,meta:Dn},Symbol.toStringTag,{value:"Module"})),Nn={title:"The Skill Delusion: Why the Blank Slate Beats Packaged AI Prompts",date:"2026-10-05",tags:["opinion","ai","agents","architecture","engineering"],label:"human-written, AI-reviewed"},Un=`<p>A comforting illusion has taken over AI tooling during the last eighteen months: the belief that large language models need &quot;skills.&quot;</p>
<p>You see them everywhere. Skills, personas, agent packages, specialized prompt directories. They are sold as secret sauces or shared in GitHub repositories with thousands of stars: &quot;the ultimate senior React architect,&quot; &quot;the cloud migration persona,&quot; &quot;the production Go refactoring toolkit.&quot; People download folders of markdown files, drop them into their agent config, and convince themselves they just upgraded their model with twenty years of domain expertise.</p>
<p>It is snake oil. In fact, it is worse than snake oil. In the best case, packaged skills are dead weight sitting in your context window. In the worst case, they actively degrade reasoning, pollute the attention mechanism, and ruin your output.</p>
<p>Skills do nothing. The blank canvas beats them every single time.</p>
<h2>The semantic telephone game</h2>
<p>When you inject a third-party skill into your agent loop, you are not giving the model more knowledge. You are surrendering semantic fidelity. You are letting an anonymous stranger decide how the model should interpret your intent.</p>
<p>Consider what happens when you ask a frontier model to do something concrete:</p>
<blockquote>
<p>&quot;Make this state machine deterministic and remove all implicit mutations.&quot;</p>
</blockquote>
<p>With a clean context, the model allocates its full attention budget to your codebase and your exact constraint. Every token of reasoning goes toward analyzing your data structures, your state transitions, and your invariants.</p>
<p>Now imagine running that same instruction through a typical &quot;expert architecture skill.&quot; Before the model even touches your code, fifteen hundred tokens of canned dogma get shoved into the context: generic defensive programming rules, mandatory boilerplate conventions, advice on keeping functions under twenty lines, abstract enterprise patterns, and three separate instructions on how to structure explanations.</p>
<p>Now the model is no longer solving your problem. It is playing a telephone game.</p>
<p>Instead of writing deterministic code, it is busy balancing your prompt against someone else&#39;s pet peeves. It introduces unnecessary wrapper classes because the skill told it to be modular. It splits clean logic across four files because the skill prescribed separation of concerns. It hallucinates edge cases that do not exist in your domain because the skill told it to be cautious.</p>
<p>You did not get a better result. You got someone else&#39;s opinions getting in the way of your machine.</p>
<h2>The harness versus the skill</h2>
<p>The people selling and collecting skills are confusing two completely different things: the harness and the prompt.</p>
<p>An agent harness is real. It is the execution loop:</p>
<ul>
<li>It gives the model access to the filesystem.</li>
<li>It provides a shell where commands can execute.</li>
<li>It runs the compiler, the test suite, and the linter.</li>
<li>It captures stderr and returns the exit code.</li>
</ul>
<p>The harness does not tell the model what to think. It provides a feedback loop against reality. When a model writes broken code inside a good harness, the compiler complains, the tests fail, and the model reads the trace to correct itself. That is objective. That is verified.</p>
<p>A skill does none of that. A skill is just static text. It is someone writing &quot;remember to write robust error handling&quot; in a markdown file. It gives the model zero new capabilities, zero feedback mechanisms, and zero validation.</p>
<p>A frontier model inside a lean harness is an engineer with a working terminal. A model loaded with twenty skills is that same engineer forced to work while someone recites a generic textbook into their ear.</p>
<h2>What the benchmarks actually tell us</h2>
<p>This is not just personal preference. Every serious data point from 2025 and 2026 points in the same direction.</p>
<p>Look at the SWE-bench leaderboards and the tools that actually ship working code: Claude Code, Aider, and SWE-agent. None of them rely on libraries of prepackaged domain personas. They do not have a &quot;Rust persona&quot; or a &quot;Django skill.&quot; They run simple, tight loops around basic primitives: read file, edit file, run bash command, inspect diff.</p>
<p>The most telling proof came from Princeton and Stanford with mini-swe-agent. They built a fully capable coding agent in roughly one hundred lines of Python. No complex agent frameworks, no persona routing, no skill modules. Just a basic loop giving the model direct access to bash commands. That hundred-line script hit over seventy percent on SWE-bench Verified, rivaling massive modular frameworks.</p>
<p>Recent evaluations on SWE-bench Pro and Verified show that swapping out the harness architecture can swing performance by more than twenty-two percentage points on the exact same model. Meanwhile, swapping between top-tier frontier models on the same harness often moves the needle by less than one percent. The harness is the differentiator. Prepackaged skills do not move the needle at all.</p>
<p>In their research paper on building effective agents, Anthropic arrived at the exact same conclusion: keep agent architectures simple. The moment you introduce complex persona routing, multi-agent debates, and rigid prompt abstractions, failure rates skyrocket.</p>
<p>Then there is Rich Sutton&#39;s <em>The Bitter Lesson</em>: the biggest lesson from AI history is that general methods leveraging compute consistently beat human-engineered heuristics. Handcrafted knowledge always loses. Packaged skills are nothing more than handcrafted heuristics pretending to be software.</p>
<h2>Context rot and attention economy</h2>
<p>Every token in your system prompt carries a cost. Not just financial cost, but cognitive cost.</p>
<p>In July 2025, Chroma Research published their study on Context Rot, evaluating eighteen frontier models across increasing context lengths. The findings were stark: every single model experiences performance degradation and hits sharp accuracy cliffs long before reaching its advertised context window. Attention gets diluted as the prompt grows.</p>
<p>In early 2026, LOCA-bench confirmed the same reality for autonomous agents: piling up instructions, state history, and redundant guidelines causes catastrophic task drift.</p>
<p>When you fill the prompt with hundreds of lines of canned instructions, two things happen:</p>
<ol>
<li><strong>Instruction drift:</strong> The model has to compromise between conflicting negative constraints. If your skill says &quot;always use functional patterns&quot; and your codebase uses an object-oriented state machine, the model wastes reasoning tokens resolving an artificial contradiction.</li>
<li><strong>Loss of nuance:</strong> When your context is clean, subtle constraints in your user prompt hit the model with maximum weight. When your context is drowned in boilerplate, those subtle constraints get averaged out.</li>
</ol>
<p>A blank slate gives you instantaneous time-to-first-token, reliable prompt caching, and zero context pollution. The model responds to what you say, not to what someone else said six months ago.</p>
<h2>Stop buying other people&#39;s words</h2>
<p>The urge to collect skills comes from a misunderstanding of what programming with AI actually is.</p>
<p>If you know what you are building, you do not need someone else&#39;s prompt. You need your own domain knowledge: your invariants, your schemas, your test suites, and your constraints. You write the specification, you run the harness, you review the diff.</p>
<p>And if you do not know what you are building, no prepackaged &quot;Senior Architect&quot; skill is going to know it for you. It will only give you confident, generic mediocrity at three times the token cost.</p>
<p>Ditch the skill packs. Keep the harness lean, keep the terminal open, and start from a blank canvas.</p>
<h2>Sources</h2>
<ul>
<li><a href="https://research.trychroma.com/context-rot">Chroma Research, Context Rot: How Increasing Input Tokens Impacts LLM Performance (July 2025)</a></li>
<li><a href="https://arxiv.org/abs/2602.04948">LOCA-bench: Benchmarking Language Agents Under Controllable and Extreme Context Growth (February 2026)</a></li>
<li><a href="https://github.com/SWE-agent/mini-swe-agent">Princeton NLP and Stanford, mini-swe-agent: A radically simple coding agent in 100 lines of Python</a></li>
<li><a href="https://www.anthropic.com/research/building-effective-agents">Anthropic, Building Effective Agents (December 2024)</a></li>
<li><a href="https://www.swebench.com/">SWE-bench, Software Engineering Benchmark for Language Models</a></li>
<li><a href="http://www.incompleteideas.net/IncIdeas/BitterLesson.html">Rich Sutton, The Bitter Lesson (2019)</a></li>
<li><a href="https://aider.chat/">Aider, AI pair programming in your terminal</a></li>
</ul>
`,Gn=Object.freeze(Object.defineProperty({__proto__:null,html:Un,meta:Nn},Symbol.toStringTag,{value:"Module"})),Wn={title:"Tokens Don't Make the Driver",date:"2026-10-15",tags:["ai-agents","tokens","software-development"],label:"AI-translated, author-reviewed"},Fn=`<p>I don&#39;t think counting the tokens spent is a valid way to judge how well someone uses agents. In work teams, those numbers can become a sort of ranking, where whoever consumes the most sits at the top of the pyramid and wins. But alas, that&#39;s not how it works. And I&#39;m writing this article to offer a different way of looking at it.</p>
<h2>The race</h2>
<p>If we take a car race as an example, the driver who burns through tyres or fuel the fastest isn&#39;t the one who gets a place on the podium, for both physical and logical reasons.</p>
<p>As a driver gains experience on the track, they learn about tyre grip, traction on the asphalt, and the limits of the car. Then comes throttle control too: you can&#39;t always go flat out, unless you want to end up smashing into a track barrier.</p>
<p>Something similar happens with agents. You can keep pressing the accelerator, adding requests, running tools, and consuming tokens. That alone doesn&#39;t tell you how much closer you&#39;re getting to the result.</p>
<h2>Fuel and grip</h2>
<p>So we could say that tokens are the fuel and context is the tyres.</p>
<p>Context gives you grip on the problem: knowing where to work, which constraints to respect, and what it means to be finished. Without that grip, you can have all the fuel you want and spend your time correcting your line. And adding random context doesn&#39;t necessarily solve the problem: you need the relevant context.</p>
<p>Consuming less doesn&#39;t automatically make you a better driver either. If you save fuel but never reach the finish line, there&#39;s little to celebrate.</p>
<h2>Before the podium</h2>
<p>Before looking at how many tokens were spent, I&#39;d look at what was achieved, whether it works, and how much work it took to check and correct it. Consumption is still useful for understanding the cost. On its own, it tells us very little about how good we&#39;ve become.</p>
<p>From here, I leave all further speculation to you, the reader. But before stepping onto the podium, let&#39;s at least make sure we&#39;ve finished the race.</p>
`,Hn=Object.freeze(Object.defineProperty({__proto__:null,html:Fn,meta:Wn},Symbol.toStringTag,{value:"Module"})),Vn={title:"wir: What Is Running, a Port and Process Inspector Written in C",date:"2025-12-30",tags:["c","systems-programming","cli","opensource"],label:"human-written, AI-reviewed"},Yn=`<p>I recently released <strong>wir</strong> (What Is Running), a command-line tool written in C to inspect what&#39;s running on specific ports and get detailed process information. A project born from a practical need that turned into an opportunity to explore system programming in C.</p>
<h2>The Problem</h2>
<p>How many times have you had a port occupied without knowing which process is using it? Or needed to trace a process hierarchy to understand who spawned what? We usually resort to combinations of <code>lsof</code>, <code>netstat</code>, and <code>ps</code>, but why not have everything in a single command?</p>
<h2>The Solution</h2>
<p><code>wir</code> is a cross-platform tool (macOS and Linux) that allows you to:</p>
<ul>
<li>Discover which process is using a specific port</li>
<li>Get detailed information about a PID</li>
<li>Visualize the complete ancestry tree of a process</li>
<li>List all running processes</li>
<li>View a process&#39;s environment variables</li>
<li>Output in normal, short, JSON, or tree format</li>
<li>Receive security warnings for potentially risky configurations</li>
</ul>
<h2>Practical Examples</h2>
<pre><code class="language-bash"># Who&#39;s using port 8080?
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
</code></pre>
<h2>The Architecture</h2>
<p>The project is structured in a modular way:</p>
<ul>
<li><strong>Platform abstraction layer</strong>: handles differences between Linux (<code>/proc</code> parsing) and macOS (<code>libproc</code> and <code>sysctl</code>)</li>
<li><strong>Output formatting</strong>: supports multiple display modes without duplicating logic</li>
<li><strong>Consistent error handling</strong>: every allocation is checked, every resource is freed</li>
<li><strong>Strict memory management</strong>: no leaks, no undefined behavior</li>
</ul>
<h2>What I Learned</h2>
<p>Writing <code>wir</code> was an excellent opportunity to practice fundamental concepts:</p>
<ol>
<li><strong>System programming</strong>: interfacing with <code>/proc</code>, system calls, process management</li>
<li><strong>Cross-platform development</strong>: conditional compilation and different APIs for each OS</li>
<li><strong>Memory safety in C</strong>: manual memory management without a garbage collector</li>
<li><strong>Build systems</strong>: Makefile with automatic platform detection</li>
<li><strong>API design</strong>: clean and composable interface</li>
</ol>
<h2>I Don&#39;t Memorize Commands</h2>
<p>As my approach goes: I&#39;m not interested in memorizing the exact <code>lsof</code> or <code>netstat</code> commands. I prefer understanding the underlying architecture and building tools that solve the problem more elegantly. <code>wir</code> isn&#39;t just a wrapper, it&#39;s an abstraction that hides the complexity of OS differences.</p>
<h2>The Future</h2>
<p>The project is open to extensions:</p>
<ul>
<li>UDP port support</li>
<li>Advanced process filtering</li>
<li>Support for other OSes (BSD, etc.)</li>
<li>Performance optimizations</li>
<li>Additional output formats</li>
</ul>
<h2>Try It Out</h2>
<p><a href="https://github.com/AlbertoBarrago/wir">wir</a></p>
<p>It&#39;s a learning project, so feel free to experiment and extend it. Building system tools in C is a great way to understand what&#39;s really happening under the hood.</p>
<pre><code class="language-bash"># Build and install
brew tap AlbertoBarrago/tap
brew install wir

# Start using it
wir --port 3000
</code></pre>
`,Kn=Object.freeze(Object.defineProperty({__proto__:null,html:Yn,meta:Vn},Symbol.toStringTag,{value:"Module"}));function Lt(e){return[...e].sort((o,t)=>o.date.localeCompare(t.date))}function Qn(e){return[...e].sort((o,t)=>t.date.localeCompare(o.date))}function Jn(e,{query:o="",tag:t=""}){const a=o.trim().toLowerCase();return e.filter(n=>(!t||n.tags.includes(t))&&(!a||n.title.toLowerCase().includes(a)||n.tags.some(r=>r.toLowerCase().includes(a))))}function Xn(e){const o=new Map;for(const t of e)for(const a of t.tags)o.set(a,(o.get(a)??0)+1);return[...o].map(([t,a])=>({tag:t,count:a})).sort((t,a)=>a.count-t.count||t.tag.localeCompare(a.tag))}const Zn={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#039;":"'"};function ea(e,o=220){var n;const a=(((n=e.match(/<p>[\s\S]*?<\/p>/gi))==null?void 0:n.join(" "))??e).replace(/<[^>]*>/g," ").replace(/&(?:amp|lt|gt|quot|#0?39);/g,r=>Zn[r]??r).replace(/\s+/g," ").trim();return a.length<=o?a:`${a.slice(0,o).replace(/\s+\S*$/,"")}…`}const ta=Object.assign({"/src/content/articles/it/agent-toolbox.md":lo,"/src/content/articles/it/ai-code-understanding.md":uo,"/src/content/articles/it/development-is-dead.md":go,"/src/content/articles/it/gitlab-alert.md":vo,"/src/content/articles/it/iris.md":ko,"/src/content/articles/it/iron-doctrine.md":Ao,"/src/content/articles/it/local-to-azure-openai.md":xo,"/src/content/articles/it/markasso-cloud.md":qo,"/src/content/articles/it/my-first-and-last-forty-years.md":Eo,"/src/content/articles/it/otelma.md":Ro,"/src/content/articles/it/serval-cli.md":jo,"/src/content/articles/it/telemaco.md":Uo,"/src/content/articles/it/tenore.md":Fo,"/src/content/articles/it/the-skill-delusion.md":Yo,"/src/content/articles/it/tokens-dont-make-the-driver.md":Jo,"/src/content/articles/it/wir-what-is-running.md":en}),ia=Object.assign({"/src/content/articles/agent-toolbox.md":nn,"/src/content/articles/ai-code-understanding.md":sn,"/src/content/articles/development-is-dead.md":dn,"/src/content/articles/gitlab-alert.md":hn,"/src/content/articles/iris.md":fn,"/src/content/articles/iron-doctrine.md":yn,"/src/content/articles/local-to-azure-openai.md":Sn,"/src/content/articles/markasso-cloud.md":Tn,"/src/content/articles/my-first-and-last-forty-years.md":Cn,"/src/content/articles/otelma.md":Mn,"/src/content/articles/serval-cli.md":_n,"/src/content/articles/telemaco.md":On,"/src/content/articles/tenore.md":Bn,"/src/content/articles/the-skill-delusion.md":Gn,"/src/content/articles/tokens-dont-make-the-driver.md":Hn,"/src/content/articles/wir-what-is-running.md":Kn}),ot=new Map,U=Lt(Object.entries(ia).map(([e,o])=>{const t=e.split("/").pop().replace(/\.md$/,""),a=ta[`/src/content/articles/it/${t}.md`],n=A==="it"&&a?a:o;return ot.set(t,n.html),{slug:t,language:A==="it"&&a?"it":"en",hasItalian:!!a,title:n.meta.title??t,date:n.meta.date??"",tags:n.meta.tags??[],label:n.meta.label??""}}));function me(e){return ot.has(e)?ot.get(e):null}const Et="alberto@portfolio:~",oa=Date.now(),Ze=Object.freeze([["Beyond Beliefs","Ben Böhmer"],["Father Ocean (Ben Böhmer Remix)","Monolink, Ben Böhmer"],["Wicked Games","Parra for Cuva, Anna Naklab"],["Mi Mujer","Nicolas Jaar"],["Empty Floor","Jan Blomqvist"],["Abu Simbel","Adriatique, WhoMadeWho"],["Fingerprint","Lane 8"],["Rej","Âme"],["The Rapture Pt.III","&ME"]]),_t=Object.freeze(["help","about","skills","experience","projects","articles","playbook","utils","contact","cv","privacy","games","play","ls","tree","neofetch","history","date","clear","rss","music"]),na=Object.freeze([["help","help"],["about","about"],["skills","skills"],["projects","projects"],["articles","articles"],["utils","utils"],["games","games"],["contact","contact"]]),We=Object.freeze({space:"SPACE INVADERS",tetris:"TETRIS",pong:"PONG",flappy:"FLAPPY BIRD"}),aa=Object.freeze({space:[{label:"START",key:"Enter"},{label:"←",key:"ArrowLeft"},{label:"FIRE",key:" "},{label:"→",key:"ArrowRight"}],tetris:[{label:"START",key:"Enter"},{label:"←",key:"ArrowLeft"},{label:"ROT",key:"ArrowUp"},{label:"→",key:"ArrowRight"},{label:"↓",key:"ArrowDown"}],pong:[{label:"START",key:"Enter"},{label:"↑",key:"ArrowUp"},{label:"↓",key:"ArrowDown"}],flappy:[{label:"START",key:"Enter"},{label:"FLAP",key:" "}]}),dt=Object.freeze({space:Vi,tetris:eo,pong:to,flappy:io}),kt=Object.freeze(["        /\\_/\\","       ( o.o )","        > ^ <","       /|   |\\","      (_|   |_)","         W W","","      I LOVE CAT"]),nt=Object.freeze(["    _    _     ____   _____","   / \\  | |   | __ ) |__  /","  / _ \\ | |   |  _ \\   / /"," / ___ \\| |___| |_) | / /_","/_/   \\_\\_____|____/ /____|"]),St="#%@*+=-<>/\\|",ra=new Set(["ArrowLeft","ArrowRight","ArrowDown"]),Pe=new Map,fe=[];let je=0,re=null,ke=null,be=null,ge=null;const ne=document.getElementById("app");function Be(e){var o;return((o=U.find(t=>t.slug===e))==null?void 0:o.language)??"en"}function Ke(e){return`<nav class="language-selector" aria-label="${A==="it"?"Lingua":"Language"}">
		<a href="${e.it??"/it/"}" lang="it" hreflang="it" ${A==="it"?'aria-current="page"':""} ${e.it?"":'title="Versione italiana non disponibile: vai al portfolio italiano"'}>IT</a>
		<span aria-hidden="true">|</span>
		<a href="${e.en}" lang="en" hreflang="en" ${A==="en"?'aria-current="page"':""}>EN</a>
	</nav>`}const sa="Alberto Barrago | Senior Software Engineer & Product Builder",la=A==="it"?"Senior Software Engineer e product builder: progetto sistemi affidabili e realizzo software per web, mobile, cloud e AI.":"Senior Software Engineer and product builder designing reliable systems and shipping production software across web, mobile, cloud, and AI.";function pt(){return{path:Ve,title:sa,description:la,type:"website",alternates:{en:"/",it:"/it/"}}}function $t(){return{path:Ae(),title:`${i("Articles")} | Alberto Barrago`,description:i("Technical articles and notes by Alberto Barrago."),type:"website",alternates:{en:Ae("en"),it:Ae("it")}}}function Rt(e){const o=U.find(t=>t.slug===e);return o?{path:ue(o.slug,o.language),title:`${o.title} | Alberto Barrago`,description:(me(o.slug)??"").replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim().slice(0,155),type:"article",alternates:{en:ue(e,"en"),it:o.hasItalian?ue(e,"it"):null}}:pt()}function Ot(){return{path:Te(),title:`${i("Agent Playbook")} | Alberto Barrago`,description:i("A practical guide to how I work with coding agents. Each practice says why it matters, how to do it, and gives you a block to copy."),type:"article",alternates:{en:Te("en"),it:Te("it")}}}function le(e=pt()){var a,n;const o=`${window.location.origin}${e.path}`;document.title=e.title,(a=document.querySelector('link[rel="canonical"]'))==null||a.setAttribute("href",o);for(const[r,s]of[['meta[name="description"]',e.description],['meta[property="og:description"]',e.description],['meta[name="twitter:description"]',e.description],['meta[property="og:title"]',e.title],['meta[name="twitter:title"]',e.title],['meta[property="og:url"]',o],['meta[property="og:type"]',e.type]])(n=document.querySelector(r))==null||n.setAttribute("content",s);document.querySelectorAll("link[hreflang]").forEach(r=>r.remove());const t=[["en",e.alternates.en],["it",e.alternates.it],["x-default",e.alternates.en]];for(const[r,s]of t){if(!s)continue;const c=document.createElement("link");c.rel="alternate",c.hreflang=r,c.href=`${window.location.origin}${s}`,document.head.appendChild(c)}}function ca(){const e=na.map(([o,t])=>`<button class="mobile-command" type="button" data-command="${t}">${o}</button>`).join("");return`<main class="terminal" aria-label="${i("Alberto Barrago portfolio terminal")}">
		<div class="terminal-topbar">
			<a class="terminal-link muted terminal-privacy" href="${zt()}">${A==="it"?"Privacy: niente cookie":"Privacy: no cookies"}</a>
			${Ke(pt().alternates)}
		</div>
		<div class="terminal-glow" aria-hidden="true"></div>
		<section class="terminal-output" id="terminal-output" role="log" aria-live="polite" aria-relevant="additions"></section>
		<div class="terminal-bottom">
			<form class="terminal-input-line" id="terminal-form" autocomplete="off">
				<label class="sr-only" for="terminal-input">${i("Terminal command")}</label>
				<span class="prompt" aria-hidden="true"><span class="prompt-user">${Et}</span><span class="prompt-symbol">$</span></span>
				<input id="terminal-input" class="terminal-input" name="command" type="text"
					autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
					aria-describedby="terminal-hint" autofocus>
			</form>
			<p class="sr-only" id="terminal-hint">${i("Type help to list available commands. Use up and down arrows for command history.")}</p>
			<nav class="mobile-commands" aria-label="${i("Quick terminal commands")}">${e}</nav>
		</div>
	</main>
	<div class="crt-overlay" aria-hidden="true"></div>`}function Dt(){return`<div class="ascii-banner accent" role="img" aria-label="ALBZ">${nt.join(`
`)}</div>
<div class="boot-copy"><span class="muted">Portfolio shell v${ct}</span>
<span>${xt} · Product Builder</span>

${i("15+ years: from INPS distribution systems to products for global brands.")}
${i("Technical leadership · Architecture · Web · Mobile · Cloud · AI")}

${i("I turn ambiguity into reliable systems and useful products.")}
<span class="muted">${i("Based in")} ${lt}</span>
${U.length?`
<span class="muted">${i("Latest write-up:")}</span> <button class="inline-command command" data-command="cat ${U[U.length-1].slug}.md">${U[U.length-1].title} →</button>${A==="it"&&U[U.length-1].language==="en"?' <span class="muted">(in inglese)</span>':""}`:""}<span class="muted" data-now-playing hidden></span>

${A==="it"?"Scrivi":"Type"} <button class="inline-command command" data-command="help">help</button> ${A==="it"?"per esplorare, oppure usa i comandi qui sotto.":"to explore, or use the shortcuts below."}</div>`}function da(){const e=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Rome",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date),o=Object.fromEntries(e.map(({type:r,value:s})=>[r,s])),a=Math.floor(Date.UTC(Number(o.year),Number(o.month)-1,Number(o.day))/864e5)%Ze.length,n=Array.from({length:3},(r,s)=>Ze[(a+s*4)%Ze.length]);return`<p class="output-title">${i("Today's recommendations")}</p>
<ul class="music-picks">${n.map(([r,s])=>`<li><a class="terminal-link" href="https://open.spotify.com/search/${encodeURIComponent(`${r} ${s}`)}" target="_blank" rel="noopener noreferrer">${G(r)}</a> <span class="muted">— ${G(s)}</span></li>`).join("")}</ul>
<p class="output-note">${i("Three picks from my listening rotation, changing daily. Links open Spotify search.")}</p>`}function pa(){const e=[["about",i("Short profile and current role")],["skills",i("Technical toolbox by area")],["experience",i("Professional timeline")],["projects",i("Selected open-source work and Homebrew formulae")],["articles",i("Technical articles and notes")],["playbook",i("A practical guide to working with coding agents")],["rss",i("Subscribe to the articles feed")],["music",i("Listen to a track I've picked")],["utils",i("Useful free resources and links")],["contact",i("Ways to get in touch")],["cv",i("Download my resume")],["privacy",i("Read the privacy policy")],["games",i("List embedded retro games")],["play &lt;game&gt;",i("Launch space, tetris, pong, or flappy")],["ls / tree",i("Browse the portfolio filesystem")],["neofetch",i("Compact system profile")],["history / date / clear",i("Terminal utilities")]];return`<div class="output-title">${i("Available commands")}</div>
<div class="command-list">${e.map(([o,t])=>`<div><button class="inline-command command" data-command="${o.split(" ")[0]}">${o}</button><span class="muted">${t}</span></div>`).join("")}</div>
<div class="output-note">${A==="it"?"Premi":"Tip: press"} <span class="key">Tab</span> ${A==="it"?"per completare e":"to autocomplete and"} <span class="key">↑</span>/<span class="key">↓</span> ${A==="it"?"per la cronologia.":"for history."}</div>`}function ua(){return`<div class="output-title">${Ci}</div>
<div class="key-value"><span class="label">${i("role")}</span><span>${xt}</span>
<span class="label">${i("location")}</span><span>${lt}</span>
<span class="label">${i("focus")}</span><span>${i("Product engineering · architecture · technical leadership")}</span>
<span class="label">${i("status")}</span><span class="green">${i("Building useful things")}</span></div>
<p class="prose">${Pi}</p>
<div class="output-links"><button class="inline-command command" data-command="projects">${i("view projects")}</button><button class="inline-command command" data-command="contact">${i("contact me")}</button><button class="inline-command command" data-command="cv">${i("download cv")}</button></div>`}function ha(){return`<div class="output-title">${i("Technical toolbox")}</div>
<blockquote class="skills-quote">${i("Started with a single tool, today I find myself conducting an entire orchestra.")}</blockquote>
<p class="skills-whisper">${i("I'm an AI whisperer.")}</p>
<div class="skills-list">${Object.entries(qi).map(([e,o])=>`<div class="skill-row"><span class="label">${e}</span><span>${o.join("  ·  ")}</span></div>`).join("")}</div>`}function ma(){return`<div class="output-title">${i("Experience")}</div>
<div class="timeline">${Mi.map(e=>`<article class="timeline-item">
	<span class="timeline-period">${e.period}</span>
	<div><div><span class="green">${e.role}</span> <span class="muted">@ ${e.company}</span></div>
	<p>${e.highlight}</p></div>
</article>`).join("")}</div>`}function ga(){return`<div class="output-title">${i("Selected projects")}</div>
<div class="project-list">${Li.map(e=>{var o;return`<article class="project-item">
	<div><a class="terminal-link project-name" href="${e.url}" target="_blank" rel="noopener noreferrer">${e.name} ↗</a><span class="project-language">${e.language}</span></div>
	<p>${e.description}</p>${(o=e.badges)!=null&&o.length?`
	<div class="project-badges">${e.badges.map(t=>`<a href="${t.href}" target="_blank" rel="noopener noreferrer"><img height="20" src="${t.src}" alt="${t.alt}" loading="lazy" /></a>`).join("")}</div>`:""}
</article>`}).join("")}</div>
<div class="output-title output-title-spaced">${i("Homebrew formulae")}</div>
<p class="prose">${i("Command-line tools I've packaged and maintain via Homebrew taps.")}</p>
<div class="project-list">${Ei.map(e=>`<article class="project-item">
	<div><a class="terminal-link project-name" href="${e.url}" target="_blank" rel="noopener noreferrer">${e.name} ↗</a><span class="project-language">${e.tap}</span></div>
	<p>${e.description}</p>
	<p class="brew-install"><code>${e.install}</code></p>
</article>`).join("")}</div>`}const jt="blogFilters",ut=Xn(U),et=ut.filter(({count:e})=>e>1);var Tt;const fa=(Tt=U.at(-1))==null?void 0:Tt.slug;function ba(){const e={query:"",tag:"",order:"desc"};try{const o=JSON.parse(localStorage.getItem(jt)??"null");return!o||typeof o!="object"?e:{query:typeof o.query=="string"?o.query:"",tag:typeof o.tag=="string"&&ut.some(({tag:t})=>t===o.tag)?o.tag:"",order:o.order==="asc"?"asc":"desc"}}catch(o){return console.warn("Could not restore blog filters, using defaults.",o),e}}const _=ba();function Le(){try{localStorage.setItem(jt,JSON.stringify(_))}catch(e){console.warn("Could not persist blog filters.",e)}}function va(e){const o=me(e.slug)??"",t=e.slug===fa,a=e.tags.map(n=>`<li><button class="blog-post-tag" type="button" data-action="filter-tag" data-tag="${n}" aria-pressed="${_.tag===n}">#${n}</button></li>`).join("");return`<article class="blog-post${t?" is-latest":""}" lang="${e.language}" aria-labelledby="post-${e.slug}">
		<p class="blog-post-meta">
			<time datetime="${e.date}">${st(e.date)}</time>
			<span>~${Nt(o).minutes} ${i("min read")}</span>
			${t?`<span class="blog-post-badge">${i("latest")}</span>`:""}
			${A==="it"&&e.language==="en"?"<span>Disponibile in inglese</span>":""}
		</p>
		<h2 class="blog-post-title" id="post-${e.slug}"><button class="blog-post-link" type="button" data-action="read-article" data-slug="${e.slug}">${e.title}</button></h2>
		<p class="blog-post-excerpt">${G(ea(o))}</p>
		<div class="blog-post-footer">
			${a?`<ul class="blog-post-tags" aria-label="Tags">${a}</ul>`:""}
			${e.label?`<span class="reader-label">${e.label}</span>`:""}
		</div>
	</article>`}function ya(){return`<div class="article-reader blog-index" id="blog-index" role="dialog" aria-modal="true" aria-labelledby="blog-title">
		<div class="article-reader-topbar">
			<button class="reader-back" type="button" data-action="close-blog">${i("back")}</button>
			<div class="reader-actions">
				${Ke($t().alternates)}
				<span class="reader-hint muted" aria-hidden="true">${i("ESC · CLOSE")}</span>
			</div>
		</div>
		<div class="article-reader-body">
			<div class="article-reader-main blog-main">
				<header class="blog-header">
					<h1 class="blog-title" id="blog-title" tabindex="-1">~/articles</h1>
					<p class="blog-intro">${i("Notes on the tools I build, the code I ship and the craft behind both.")}</p>
				</header>
				${U.length===0?`<p class="blog-empty">${i("No articles yet.")}</p>`:`
				<search class="blog-controls">
					<label class="blog-search" for="blog-search">
						<span class="blog-search-prompt" aria-hidden="true">grep</span>
						<span class="sr-only">${i("Filter articles")}</span>
						<input id="blog-search" class="blog-search-input" type="search" value="${G(_.query)}"
							placeholder="${i("filter by title or tag")}" autocomplete="off" autocapitalize="off" spellcheck="false"
							aria-controls="blog-list" aria-describedby="blog-count">
					</label>
					<button class="reader-action blog-sort" type="button" id="blog-sort" data-action="toggle-sort" aria-controls="blog-list"></button>
				</search>
				<div class="blog-tags" id="blog-tags" role="group" aria-label="${i("Filter by tag")}"></div>
				<p class="blog-count" id="blog-count" role="status" aria-live="polite"></p>
				<div class="blog-list" id="blog-list"></div>`}
			</div>
		</div>
	</div>`}function ye(e){const o=document.getElementById("blog-index"),t=o==null?void 0:o.querySelector("#blog-list");if(!o||!t)return;const a=Jn(U,_),n=_.order==="desc"?Qn(a):Lt(a),r=et.some(({tag:u})=>u===_.tag)||!_.tag?et:[...et,...ut.filter(({tag:u})=>u===_.tag)],s=o.querySelector("#blog-sort");s.textContent=_.order==="desc"?`${i("newest first")} ↓`:`${i("oldest first")} ↑`,o.querySelector("#blog-tags").innerHTML=[`<button class="tag-chip" type="button" data-action="filter-tag" data-tag="" aria-pressed="${!_.tag}">${i("all")}</button>`,...r.map(({tag:u,count:w})=>`<button class="tag-chip" type="button" data-action="filter-tag" data-tag="${u}" aria-pressed="${_.tag===u}">#${u}<span class="tag-count" aria-label="(${w})">${w}</span></button>`)].join(""),o.querySelector("#blog-count").textContent=`${n.length}/${U.length} ${i("Articles").toLowerCase()}`;const c=[_.query.trim()&&`"${_.query.trim()}"`,_.tag&&`#${_.tag}`].filter(Boolean).join(" ");t.innerHTML=n.length?n.map(va).join(""):`<p class="blog-empty">grep: ${i("no matches for")} ${G(c)} · <button class="reader-nav-link" type="button" data-action="reset-blog-filters">${i("reset filters")}</button></p>`,e!==void 0&&(o.querySelector(`#blog-tags [data-tag="${CSS.escape(e)}"]`)??o.querySelector("#blog-search")).focus()}function Ee(e){const o=document.createElement("div");o.innerHTML=e;const t=o.firstElementChild;return ne.appendChild(t),t}function Qe(){if(!document.getElementById("blog-index")){P.blur();const e=Ee(ya());ye(),e.querySelector("#blog-title").focus({preventScroll:!0})}ae(),le($t()),window.location.pathname!==Ae()&&window.history.pushState(null,"",Ae())}function Bt(){var e;(e=document.getElementById("blog-index"))==null||e.remove(),ae(),ht()&&window.history.pushState(null,"",Ve),le(),P==null||P.focus({preventScroll:!0})}function ae(){const e=document.getElementById("article-reader"),o=document.getElementById("blog-index"),t=document.getElementById("diagram-viewer"),a=document.getElementById("guide-reader"),n=ne.querySelector(".terminal");n instanceof HTMLElement&&(n.inert=!!(e||o||t||a)),o&&(o.inert=!!e),a&&(a.inert=!!t)}function ht(){return/^(?:\/it)?\/articles\/?$/.test(window.location.pathname)}function wa(e){_.tag=_.tag===e?"":e,Le(),ye(e)}function ka(){_.order=_.order==="desc"?"asc":"desc",Le(),ye()}function Sa(){_.query="",_.tag="",Le();const e=document.getElementById("blog-search");e&&(e.value=""),ye("")}const Ia=200;function Nt(e){const o=e.replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim(),t=o?o.split(" ").length:0;return{words:t,chars:o.length,minutes:Math.max(1,Math.round(t/Ia))}}function Aa(e){const o=U.findIndex(c=>c.slug===e),t=U[o],a=Nt(me(e)??""),n=U[o-1],r=U[o+1],s=[n?`<button class="reader-nav-link" type="button" data-action="read-article" data-slug="${n.slug}">← ${n.title}</button>`:"<span></span>",r?`<button class="reader-nav-link reader-nav-next" type="button" data-action="read-article" data-slug="${r.slug}">${r.title} →</button>`:"<span></span>"].join("");return`<div class="article-reader" id="article-reader">
		<div class="article-reader-topbar">
			<button class="reader-back" type="button" data-action="close-reader">${i("back")}</button>
			<div class="reader-actions">
				${Ke(Rt(e).alternates)}
				<button class="reader-action reader-toc-toggle" type="button" data-action="toggle-toc" id="reader-toc-toggle" hidden>${i("chapters")}</button>
				<button class="reader-action" type="button" data-action="share-article" data-slug="${e}">${i("share")}</button>
				<button class="reader-action" type="button" data-action="copy-article-link" data-slug="${e}">${i("copy link")}</button>
				<span class="reader-hint muted">${i("ESC · CLOSE")}</span>
			</div>
		</div>
		<div class="article-reader-body">
			<aside class="reader-toc" id="reader-toc" hidden></aside>
			<div class="article-reader-main">
				<article class="prose" lang="${t.language}">
					<h1>${t.title}</h1>
					<p class="reader-meta muted">${st(t.date)}${t.tags.length?` · ${t.tags.join(" · ")}`:""}${t.label?` · <span class="reader-label">${t.label}</span>`:""}</p>
					<p class="reader-stats muted">${a.words.toLocaleString(Ue)} ${i("words")} · ${a.chars.toLocaleString(Ue)} ${i("chars")} · ~${a.minutes} ${i("min read")}</p>
					${me(e)}
				</article>
				<nav class="reader-nav">${s}</nav>
			</div>
		</div>
	</div>`}function Ta(e){return e.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-")}function za(e){const o=e.querySelector("#reader-toc"),t=e.querySelectorAll(".prose h2, .prose h3");if(t.length===0)return;const a=new Set,n=Array.from(t).map(s=>{let c=Ta(s.textContent??"");for(;a.has(c)||!c;)c=`${c||"section"}-${a.size+1}`;return a.add(c),s.id=c,{id:c,text:s.textContent??"",level:s.tagName==="H2"?2:3}});o.innerHTML=`<span class="reader-toc-title">${i("chapters")}</span><ol class="reader-toc-list">${n.map(s=>`<li class="reader-toc-item level-${s.level}"><button class="reader-toc-link" type="button" data-action="goto-heading" data-target="${s.id}">${s.text}</button></li>`).join("")}</ol>`,o.hidden=!1,e.classList.add("has-toc");const r=e.querySelector("#reader-toc-toggle");r&&(r.hidden=!1),Ut(e,Array.from(t))}function Ut(e,o){mt();const t=e.querySelector(".article-reader-body"),a=e.querySelectorAll(".reader-toc-link"),n=new Set,r=u=>{a.forEach(w=>w.classList.toggle("is-active",w.dataset.target===u))},s=()=>t.scrollTop+t.clientHeight>=t.scrollHeight-4;be=new IntersectionObserver(u=>{for(const k of u)k.isIntersecting?n.add(k.target.id):n.delete(k.target.id);const w=o.find(k=>n.has(k.id));w?r(w.id):s()&&r(o[o.length-1].id)},{root:t,rootMargin:"0px 0px -72% 0px",threshold:0}),o.forEach(u=>be.observe(u)),r(o[0].id);const c=()=>{s()&&r(o[o.length-1].id)};t.addEventListener("scroll",c,{passive:!0}),ge={container:t,handler:c}}function Je(e){var t;if(A==="it"&&Be(e)==="en"){window.location.assign(ue(e,"en"));return}(t=document.getElementById("article-reader"))==null||t.remove(),P.blur();const o=Ee(Aa(e));o.scrollTop=0,za(o),ae(),document.getElementById("blog-index")&&o.querySelector(".reader-back").focus({preventScroll:!0}),le(Rt(e)),window.location.pathname!==ue(e,Be(e))&&window.history.pushState(null,"",ue(e,Be(e)))}function mt(){be==null||be.disconnect(),be=null,ge==null||ge.container.removeEventListener("scroll",ge.handler),ge=null}function Ne(){var e;document.getElementById("article-reader")&&(mt(),(e=document.getElementById("article-reader"))==null||e.remove(),ae())}function Gt(){const e=ft();Ne();const o=document.getElementById("blog-index");if(o){Qe(),((e?o.querySelector(`.blog-post-link[data-slug="${CSS.escape(e)}"]`):null)??o.querySelector("#blog-title")).focus({preventScroll:!0});return}/^(?:\/it)?\/articles\//.test(window.location.pathname)&&window.history.pushState(null,"",Ve),le(),P==null||P.focus({preventScroll:!0})}function at(e){return`${window.location.origin}${ue(e,Be(e))}`}function Fe(e,o=i("copied ✓")){const t=e.textContent;e.textContent=o,e.disabled=!0,window.setTimeout(()=>{e.textContent=t,e.disabled=!1},1500)}async function Wt(e,o){try{await navigator.clipboard.writeText(at(e)),Fe(o)}catch{window.prompt(i("Copy this link:"),at(e))}}async function xa(e,o){const t=U.find(n=>n.slug===e),a=at(e);if(navigator.share){try{await navigator.share({title:(t==null?void 0:t.title)??e,url:a})}catch{}return}await Wt(e,o)}function Ca(){return`<div class="output-title">/utils</div>
<p class="prose">${i("Useful free resources: books, courses, docs, and tools I keep coming back to.")}</p>
${_i.map(e=>`<div class="utils-group">
	<div class="utils-category">${e.category}</div>
	<div class="project-list">${e.items.map(o=>`<article class="project-item">
		<div><a class="terminal-link project-name" href="${o.url}" target="_blank" rel="noopener noreferrer">${o.name} ↗</a></div>
		<p>${o.description}</p>
	</article>`).join("")}</div>
</div>`).join("")}</div>`}const Se=qt(xe);let he=0,Ie=null;function Pa(){const e=Se.length>1;return`<div class="diagram-viewer" id="diagram-viewer" role="dialog" aria-modal="true" aria-label="${i("Diagram viewer")}">
	<div class="article-reader-topbar">
		<button class="reader-back" type="button" data-action="close-diagram">${i("close")}</button>
		<span class="diagram-viewer-count" aria-live="polite"></span>
	</div>
	<div class="diagram-viewer-stage">
		${e?`<button class="diagram-viewer-nav" type="button" data-action="diagram-prev" aria-label="${i("previous diagram")}">‹</button>`:""}
		<figure class="diagram-viewer-figure"><img class="diagram-viewer-image" src="" alt=""><figcaption class="diagram-viewer-caption"></figcaption></figure>
		${e?`<button class="diagram-viewer-nav" type="button" data-action="diagram-next" aria-label="${i("next diagram")}">›</button>`:""}
	</div>
</div>`}function qe(e){const o=document.getElementById("diagram-viewer");if(!o||Se.length===0)return;he=Bi(e,Se.length);const t=Se[he],a=o.querySelector(".diagram-viewer-image");a.src=t.src,a.alt=t.alt,o.querySelector(".diagram-viewer-caption").innerHTML=X(t.caption),o.querySelector(".diagram-viewer-count").textContent=`${he+1} / ${Se.length}`}function qa(e,o){Ie=o;const t=document.getElementById("diagram-viewer")??Ee(Pa());qe(e),ae(),t.querySelector('[data-action="close-diagram"]').focus({preventScroll:!0})}function Ft(){var e;(e=document.getElementById("diagram-viewer"))==null||e.remove(),ae(),Ie==null||Ie.focus({preventScroll:!0}),Ie=null}async function Ma(e){var t;const o=(t=e.closest(".guide-snippet"))==null?void 0:t.querySelector("code");if(o)try{await navigator.clipboard.writeText(o.textContent??""),Fe(e)}catch{const a=document.createRange();a.selectNodeContents(o);const n=window.getSelection();n==null||n.removeAllRanges(),n==null||n.addRange(a),Fe(e,i("selected: copy it"))}}const Ht=Object.freeze([...Ye(xe).map(e=>e.id),Ge,ze]);function La(){const e={interactive:!0,today:Oi()};return`<div class="article-reader guide-reader has-toc" id="guide-reader" role="dialog" aria-modal="true" aria-labelledby="guide-title">
		<div class="article-reader-topbar">
			<button class="reader-back" type="button" data-action="close-guide">${i("back")}</button>
			<div class="reader-actions">
				${Ke(Ot().alternates)}
				<button class="reader-action reader-toc-toggle" type="button" data-action="toggle-toc" aria-controls="guide-toc">${i("chapters")}</button>
				<button class="reader-action" type="button" data-action="copy-guide-link" aria-label="${i("Copy the guide link")}">${i("copy link")}</button>
				<span class="reader-hint muted" aria-hidden="true">${i("ESC · CLOSE")}</span>
			</div>
		</div>
		<div class="article-reader-body">
			<nav class="reader-toc" id="guide-toc" aria-label="${i("Guide contents")}"><span class="reader-toc-title">${i("chapters")}</span>${Wi(xe,e)}</nav>
			<div class="article-reader-main guide-main">${Fi(xe,e)}</div>
		</div>
	</div>`}function Xe(){return/^(?:\/it)?\/agent-playbook\/?$/.test(window.location.pathname)}function Vt(){const e=decodeURIComponent(window.location.hash.slice(1));return Ht.includes(e)?e:void 0}function Ea(e,o){var a,n;const t=document.getElementById("guide-reader");(a=t==null?void 0:t.querySelector(`#${CSS.escape(e)}`))==null||a.scrollIntoView({behavior:o,block:"start"}),(n=t==null?void 0:t.querySelector(".reader-toc"))==null||n.classList.remove("is-open")}function Me(e){let o=document.getElementById("guide-reader");const t=!o;if(!o){P.blur(),o=Ee(La());const n=Ht.map(r=>o==null?void 0:o.querySelector(`#${CSS.escape(r)}`)).filter(r=>r instanceof HTMLElement);Ut(o,n),o.querySelector("#guide-title").focus({preventScroll:!0})}ae(),le(Ot()),e&&Ea(e,t?"auto":"smooth");const a=`${Te()}${e?`#${e}`:""}`;Xe()?e&&window.location.hash!==`#${e}`&&window.history.replaceState(null,"",a):window.history.pushState(null,"",a)}function Yt(){const e=document.getElementById("guide-reader");e&&(mt(),e.remove(),ae())}function Kt(){Yt(),Xe()&&window.history.pushState(null,"",Ve),le(),P==null||P.focus({preventScroll:!0})}function It(){B(Hi(xe)),Me()}async function _a(e,o){const t=`${window.location.origin}${Te()}${o?`#${o}`:""}`;try{await navigator.clipboard.writeText(t),Fe(e)}catch{window.prompt(i("Copy this link:"),t)}}function tt(){return`<div class="output-title">${i("Let's build something useful")}</div>
<div class="key-value"><span class="label">email</span><a class="terminal-link" href="${Oe.email}">albertobarrago@gmail.com</a>
<span class="label">github</span><a class="terminal-link" href="${Oe.github}" target="_blank" rel="noopener noreferrer">github.com/AlbertoBarrago ↗</a>
<span class="label">bluesky</span><a class="terminal-link" href="${Oe.bsky}" target="_blank" rel="noopener noreferrer">@albzoser.bsky.social ↗</a>
<span class="label">${i("location")}</span><span>${lt}</span></div>`}function $a(){return`<div class="output-title">/games</div>
<div class="game-list">${Object.entries(We).map(([e,o])=>`<button class="game-command" data-command="play ${e}"><span>${o}</span><span class="muted">play ${e}</span></button>`).join("")}</div>
<article class="project-item"><a class="terminal-link project-name" href="https://iron-doctrine-omega.vercel.app/" target="_blank" rel="noopener noreferrer">Iron Doctrine ↗</a><p>${i("A real-time strategy game with a deterministic ECS engine and lockstep online 1v1 multiplayer.")}</p></article>
<div class="output-note">${A==="it"?"I giochi si aprono a schermo intero. Premi":"Games open fullscreen. Press"} <span class="key">Esc</span> ${A==="it"?"per tornare.":"to return."}</div>`}function Ra(){return`<div class="tree"><span class="blue">~</span>
├── <button class="inline-command file" data-command="about">about.txt</button>
├── <button class="inline-command directory" data-command="skills">skills/</button>
├── <button class="inline-command file" data-command="experience">experience.log</button>
├── <button class="inline-command directory" data-command="projects">projects/</button>
├── <button class="inline-command directory" data-command="articles">articles/</button>
├── <button class="inline-command file" data-command="playbook">agent-playbook.md</button>
├── <button class="inline-command directory" data-command="utils">utils/</button>
├── <button class="inline-command file" data-command="contact">contact.vcf</button>
├── <button class="inline-command file" data-command="cv">albertobarrago_cv.pdf</button>
└── <button class="inline-command directory" data-command="games">games/</button></div>`}const Oa=[" █████  ██     ","██   ██ ██     ","███████ ██     ","██   ██ ██     ","██   ██ ███████","               ","██████  ███████","██   ██     ██ ","██████     ██  ","██   ██   ██   ","██████  ███████"].join(`
`);function Da(e){const o=Math.floor(e/1e3),t=[["day",Math.floor(o/86400)],["hour",Math.floor(o/3600)%24],["min",Math.floor(o/60)%60],["sec",o%60]].filter(([,n])=>n>0);return(t.length?t:[["sec",0]]).slice(0,2).map(([n,r])=>`${r} ${n}${r===1?"":"s"}`).join(", ")}function ja(){const e=navigator.userAgent,o=[[/Firefox\/(\d+)/,"Firefox"],[/Edg\/(\d+)/,"Edge"],[/OPR\/(\d+)/,"Opera"],[/Chrome\/(\d+)/,"Chrome"],[/Version\/(\d+).*Safari/,"Safari"]];for(const[t,a]of o){const n=e.match(t);if(n)return`${a} ${n[1]}`}return"Web browser"}function Ba(){const e="Zoser@Sosaria",o=[["OS",`albz-sh ${ct}`],["Host","GitHub Pages"],["Kernel","Vanilla JS (ES2022)"],["Uptime",Da(Date.now()-oa)],["Packages","0 (runtime)"],["Shell","albz-sh"],["Guild","AdE"],["Alignment","Player Killer"],["Resolution",`${window.screen.width}x${window.screen.height}`],["Terminal",ja()],["Commands",String(_t.length)],[i("Articles"),String(U.length)],["Games",String(Object.keys(dt).length)],["Build","2026-11-24"]];return`<div class="neofetch"><div class="neofetch-mark" aria-hidden="true">${Oa}</div><div><span class="accent">${e}</span>
<span class="muted">${"─".repeat(e.length)}</span>
${o.map(([t,a])=>`<span><span class="label">${t}:</span> ${G(a)}</span>`).join(`
`)}
<span class="palette"><i></i><i></i><i></i><i></i><i></i><i></i></span></div></div>`}function Na(){return'<div class="ls-output"><button class="inline-command file" data-command="about">about.txt</button><button class="inline-command directory" data-command="skills">skills/</button><button class="inline-command file" data-command="experience">experience.log</button><button class="inline-command directory" data-command="projects">projects/</button><button class="inline-command directory" data-command="articles">articles/</button><button class="inline-command file" data-command="playbook">agent-playbook.md</button><button class="inline-command directory" data-command="utils">utils/</button><button class="inline-command file" data-command="contact">contact.vcf</button><button class="inline-command directory" data-command="games">games/</button></div>'}function Qt(e,o){return e.map(t=>t.split("").map(a=>a===" "||Math.random()>=o?a:St[Math.floor(Math.random()*St.length)]).join("")).join(`
`)}function Ua(){const e=se.querySelector(".ascii-banner");if(!e)return;const o=nt.join(`
`),t=9;let a=0;const n=window.setInterval(()=>{if(a+=1,a>=t){window.clearInterval(n),e.textContent=o;return}e.textContent=Qt(nt,Math.max(0,.55-a*.06))},70)}function Ga(){const e=document.createElement("div");e.className="output-block ascii-banner accent",se.appendChild(e);const o=6;let t=0;const a=window.setInterval(()=>{t+=1,e.textContent=t>=o?kt.join(`
`):Qt(kt,Math.max(0,.6-t*.12)),requestAnimationFrame(()=>{se.scrollTop=se.scrollHeight}),t>=o&&(window.clearInterval(a),B('<span class="green">Purring in binary.</span>'))},90)}function Wa(e){const o=document.createElement("div");o.className="output-block command-echo";const t=document.createElement("span");t.className="prompt",t.innerHTML=`<span class="prompt-user">${Et}</span><span class="prompt-symbol">$</span>`;const a=document.createElement("span");a.textContent=e,o.append(t,a),se.appendChild(o)}function B(e,o=""){const t=`output-block ${o}`.trim();for(const n of Array.from(se.children))n.className===t&&n.innerHTML===e&&n.remove();const a=document.createElement("div");a.className=t,a.innerHTML=e,se.appendChild(a),requestAnimationFrame(()=>{a.scrollIntoView({block:"start"})})}function Jt(e){const o=e.trim();if(!o)return;Wa(o),fe.at(-1)!==o&&fe.push(o),je=fe.length;const[t,...a]=o.split(/\s+/),n=t.toLowerCase(),r=a.join(" ").toLowerCase();if(n==="clear"){se.replaceChildren(),B(Dt(),"welcome-block");return}if(["about","whoami","cat"].includes(n)){n!=="cat"||!r||r==="about.txt"?B(ua()):r==="contact.vcf"?B(tt()):r==="agent-playbook.md"?It():r.endsWith(".md")&&me(r.slice(0,-3))?Je(r.slice(0,-3)):B(`<span class="red">cat: ${G(r)}: ${i("No such file")}</span>`);return}if(n==="articles"){Qe();return}if(n==="playbook"||n==="howwebuild"){It();return}const s={help:pa,skills:ha,experience:ma,projects:ga,utils:Ca,contact:tt,games:$a,ls:Na,tree:Ra,neofetch:Ba};if(s[n]){B(s[n]());return}if(n==="privacy"){B(`<span class="green">${i("Opening the privacy policy…")}</span>`),window.location.assign(zt());return}if(n==="cv"){$i(),B(`<span class="green">${i("Downloading albertobarrago_cv.pdf…")}</span>`);return}if(n==="history"){B(fe.map((c,u)=>`<div><span class="muted">${String(u+1).padStart(3," ")}</span>  ${G(c)}</div>`).join(""));return}if(n==="date"){B(new Intl.DateTimeFormat(Ue,{dateStyle:"full",timeStyle:"long"}).format(new Date));return}if(n==="music"){B(`<div class="output-title">${i("A track I've picked")}</div>
<iframe class="spotify-player" title="${i("Spotify music player")}" src="https://open.spotify.com/embed/track/52UthFOfrbtnjBMK6jyLqk?theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<a class="terminal-link" href="https://open.spotify.com/track/52UthFOfrbtnjBMK6jyLqk" target="_blank" rel="noopener noreferrer">${i("Open in Spotify")} ↗</a>
${da()}`);return}if(n==="rss"){B(`<div class="output-title">RSS feed</div>
<p class="prose">${i("Subscribe to my articles feed in any RSS reader:")}</p>
<div class="key-value"><span class="label">url</span><a class="terminal-link" href="/feed.xml" target="_blank" rel="noopener">https://albz.it/feed.xml</a></div>
<p class="prose">${i("No RSS reader on your Mac yet? I built one too:")} <a class="terminal-link" href="https://github.com/AlbertoBarrago/RSSReader/releases/latest" target="_blank" rel="noopener noreferrer">${i("download RSS Reader")}</a> 😉</p>`);return}if(n==="play"){Fa(r)?(B(`<span class="green">${i("Launching")} ${We[r]}…</span>`),Va(r)):B(`<span class="red">${i("Unknown game")}${r?`: ${G(r)}`:""}.</span> ${A==="it"?"Prova":"Try"} <button class="inline-command command" data-command="games">games</button>.`);return}if(n==="1337"){Ga();return}if(n==="sudo"&&r==="hire alberto"){B(`<span class="green">${i("Permission granted. Opening contact details…")}</span>`),B(tt());return}B(`<span class="red">${i("command not found:")} ${G(n)}</span><br>${A==="it"?"Scrivi":"Type"} <button class="inline-command command" data-command="help">help</button> ${A==="it"?"per vedere i comandi disponibili.":"to see available commands."}`)}function Fa(e){return Object.hasOwn(dt,e)}function Ha(e){const o=aa[e].map(t=>`<button class="game-control-button" type="button" data-control-key="${t.key}">${t.label}</button>`).join("");return`<div class="game-fullscreen" id="game-overlay">
		<div class="game-scanlines" aria-hidden="true"></div>
		<div class="game-topbar"><span class="game-title">${We[e]}</span><button class="game-exit" type="button" data-action="exit-game">${i("ESC · CLOSE")}</button></div>
		<canvas class="game-canvas" aria-label="${We[e]} game"></canvas>
		<div class="game-touch-controls">${o}</div>
	</div>`}function Va(e){He(),P.blur();const o=Ee(Ha(e)),t=o.querySelector(".game-canvas");requestAnimationFrame(()=>{o.isConnected&&(ke=dt[e](t,He))})}function He(){var e;ke==null||ke(),ke=null,Zt(),(e=document.getElementById("game-overlay"))==null||e.remove(),le(),P==null||P.focus({preventScroll:!0})}function rt(e,o){window.dispatchEvent(new KeyboardEvent(o,{key:e,bubbles:!0,cancelable:!0}))}function Ya(e){var r;const t=e.target.closest("[data-control-key]"),a=t==null?void 0:t.dataset.controlKey;if(!t||!a)return;e.preventDefault(),(r=t.setPointerCapture)==null||r.call(t,e.pointerId);const n={key:a,button:t};Pe.set(e.pointerId,n),t.classList.add("is-pressed"),rt(a,"keydown"),ra.has(a)&&(n.delayId=window.setTimeout(()=>{n.intervalId=window.setInterval(()=>rt(a,"keydown"),85)},220))}function gt(e){Pe.has(e.pointerId)&&(e.preventDefault(),Xt(e.pointerId))}function Xt(e){const o=Pe.get(e);o&&(o.delayId&&window.clearTimeout(o.delayId),o.intervalId&&window.clearInterval(o.intervalId),o.button.classList.remove("is-pressed"),Pe.delete(e),rt(o.key,"keyup"))}function Zt(){for(const e of Pe.keys())Xt(e)}document.documentElement.lang=A;ne.innerHTML=ca();const se=document.getElementById("terminal-output"),Ka=document.getElementById("terminal-form"),P=document.getElementById("terminal-input");B(Dt(),"welcome-block");ao("https://albz-spotify.albertobarrago.workers.dev/now-playing");Ua();no();function ft(){var e,o;return((e=window.location.pathname.match(/^(?:\/it)?\/articles\/([^/]+)\/?$/))==null?void 0:e[1])??((o=window.location.hash.match(/^#article\/(.+)$/))==null?void 0:o[1])}const it=ft();it&&me(it)?Je(it):ht()?Qe():Xe()&&Me(Vt());window.addEventListener("popstate",()=>{var o,t;if(Xe()){Ne(),(o=document.getElementById("blog-index"))==null||o.remove(),Me(Vt());return}Yt();const e=ft();e&&me(e)?Je(e):ht()?(Ne(),Qe()):(Ne(),(t=document.getElementById("blog-index"))==null||t.remove(),ae(),le())});Ka.addEventListener("submit",e=>{e.preventDefault();const o=P.value;P.value="",Jt(o)});P.addEventListener("input",()=>{re=null});ne.addEventListener("input",e=>{!(e.target instanceof HTMLInputElement)||e.target.id!=="blog-search"||(_.query=e.target.value,Le(),ye())});P.addEventListener("keydown",e=>{if(e.key==="ArrowUp"||e.key==="ArrowDown"){e.preventDefault();const o=e.key==="ArrowUp"?-1:1;je=Math.max(0,Math.min(fe.length,je+o)),P.value=fe[je]??"",requestAnimationFrame(()=>P.setSelectionRange(P.value.length,P.value.length));return}if(e.key==="Tab"){e.preventDefault();const o=P.value.trim().toLowerCase();if(!o){B(`<span class="muted">${A==="it"?"Scrivi help per vedere i comandi disponibili.":"Type help to see the list of available commands."}</span>`),re=null;return}const t=_t.filter(n=>n.startsWith(o));if(t.length===0){re=null;return}if(t.length===1){P.value=t[0],re=null;return}const a=t.reduce((n,r)=>{let s=0;for(;s<n.length&&s<r.length&&n[s]===r[s];)s+=1;return n.slice(0,s)});if(a.length>o.length){P.value=a,re=null;return}re===o?(B(t.map(n=>`<span class="command">${n}</span>`).join("  ")),re=null):re=o}});ne.addEventListener("click",e=>{var W,F,M,T;const o=e.target,t=document.querySelector(".reader-toc.is-open");t&&!o.closest(".reader-toc")&&!o.closest('[data-action="toggle-toc"]')&&t.classList.remove("is-open");const a=o.closest('[data-action="read-article"]');if(a!=null&&a.dataset.slug){Je(a.dataset.slug);return}if(o.closest('[data-action="close-reader"]')){Gt();return}if(o.closest('[data-action="close-blog"]')){Bt();return}const n=o.closest('[data-action="filter-tag"]');if(n){wa(n.dataset.tag??"");return}if(o.closest('[data-action="toggle-sort"]')){ka();return}if(o.closest('[data-action="reset-blog-filters"]')){Sa();return}const r=o.closest('[data-action="share-article"]');if(r!=null&&r.dataset.slug){xa(r.dataset.slug,r);return}const s=o.closest('[data-action="copy-article-link"]');if(s!=null&&s.dataset.slug){Wt(s.dataset.slug,s);return}const c=o.closest('[data-action="open-diagram"]');if(c&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)){e.preventDefault(),qa(Number(c.dataset.diagram),c);return}if(o.closest('[data-action="diagram-prev"]')){qe(he-1);return}if(o.closest('[data-action="diagram-next"]')){qe(he+1);return}if(o.closest('[data-action="close-diagram"]')||o.classList.contains("diagram-viewer-stage")){Ft();return}const u=o.closest('[data-action="copy-snippet"]');if(u){Ma(u);return}const w=o.closest('[data-action="goto-guide"]');if(w!=null&&w.dataset.target){Me(w.dataset.target);return}const k=o.closest('[data-action="open-guide"]');if(k){Me(k.dataset.target);return}const I=o.closest('[data-action="copy-guide-link"]');if(I){_a(I,I.dataset.target);return}if(o.closest('[data-action="close-guide"]')){Kt();return}if(o.closest('[data-action="toggle-toc"]')){(F=(W=o.closest(".article-reader"))==null?void 0:W.querySelector(".reader-toc"))==null||F.classList.toggle("is-open");return}const l=o.closest('[data-action="goto-heading"]');if(l!=null&&l.dataset.target){const h=document.getElementById("article-reader");(M=document.getElementById(l.dataset.target))==null||M.scrollIntoView({behavior:"smooth",block:"start"}),(T=h==null?void 0:h.querySelector("#reader-toc"))==null||T.classList.remove("is-open");return}const q=o.closest("[data-command]");q!=null&&q.dataset.command&&Jt(q.dataset.command),o.closest('[data-action="exit-game"]')&&He(),!o.closest("a")&&!document.getElementById("game-overlay")&&!document.getElementById("article-reader")&&!document.getElementById("blog-index")&&!document.getElementById("guide-reader")&&P.focus({preventScroll:!0})});ne.addEventListener("pointerdown",Ya);ne.addEventListener("pointerup",gt);ne.addEventListener("pointercancel",gt);ne.addEventListener("lostpointercapture",gt);window.addEventListener("blur",Zt);document.addEventListener("keydown",e=>{if(document.getElementById("diagram-viewer")){if(e.key==="Escape")Ft();else if(e.key==="ArrowLeft")qe(he-1);else if(e.key==="ArrowRight")qe(he+1);else return;e.preventDefault();return}if(e.key==="Escape"&&document.getElementById("game-overlay")&&He(),e.key==="Escape"&&document.getElementById("article-reader"))Gt();else if(e.key==="Escape"&&document.getElementById("guide-reader"))Kt();else if(e.key==="Escape"&&document.getElementById("blog-index")){if(e.target instanceof HTMLInputElement&&e.target.id==="blog-search"&&e.target.value){e.preventDefault(),e.target.value="",_.query="",Le(),ye();return}Bt()}});
