---
title: L’illusione delle skill: perché partire da zero batte i prompt AI preconfezionati
date: 2026-10-05
tags: opinion, ai, agents, architecture, engineering
label: traduzione AI da un testo scritto dall’autore
---

Negli ultimi diciotto mesi, un’illusione rassicurante ha invaso gli strumenti AI: la convinzione che i grandi modelli linguistici abbiano bisogno di “skill”.

Le vedi ovunque. Skill, persona, pacchetti per agenti, directory di prompt specializzati. Vengono vendute come formule segrete o condivise in repository GitHub con migliaia di stelle: “l’architetto React senior definitivo”, “la persona per le migrazioni cloud”, “il toolkit di refactoring Go per la produzione”. Le persone scaricano cartelle di file Markdown, le inseriscono nella configurazione dell’agente e si convincono di aver appena aggiunto al modello vent’anni di esperienza nel settore.

È fumo negli occhi. Anzi, è peggio. Nel migliore dei casi, le skill preconfezionate sono peso morto nella finestra di contesto. Nel peggiore, peggiorano attivamente il ragionamento, inquinano il meccanismo di attenzione e rovinano l’output.

Le skill non fanno nulla. Partire da una pagina bianca le batte ogni volta.

## Il telefono senza fili semantico

Quando inserisci una skill di terze parti nel ciclo del tuo agente, non stai dando più conoscenza al modello. Stai rinunciando alla fedeltà semantica. Stai lasciando che uno sconosciuto anonimo decida come il modello debba interpretare la tua intenzione.

Considera cosa succede quando chiedi a un modello di frontiera di fare qualcosa di concreto:

> “Rendi deterministica questa macchina a stati e rimuovi tutte le mutazioni implicite.”

Con un contesto pulito, il modello dedica tutta la propria attenzione alla tua codebase e al tuo vincolo esatto. Ogni token di ragionamento va nell’analisi delle strutture dati, delle transizioni di stato e delle invarianti.

Ora immagina di far passare la stessa istruzione attraverso una tipica “skill di architettura esperta”. Prima ancora che il modello tocchi il codice, millecinquecento token di dogmi preconfezionati vengono spinti nel contesto: regole generiche di programmazione difensiva, convenzioni obbligatorie di boilerplate, consigli per tenere le funzioni sotto le venti righe, pattern enterprise astratti e tre istruzioni separate su come strutturare le spiegazioni.

A quel punto il modello non sta più risolvendo il tuo problema. Sta giocando al telefono senza fili.

Invece di scrivere codice deterministico, è impegnato a bilanciare il tuo prompt con le fissazioni di qualcun altro. Introduce classi wrapper inutili perché la skill gli ha detto di essere modulare. Divide una logica pulita in quattro file perché la skill ha prescritto la separazione delle responsabilità. Si inventa casi limite che non esistono nel tuo dominio perché la skill gli ha detto di essere prudente.

Non hai ottenuto un risultato migliore. Hai ottenuto le opinioni di qualcun altro che intralciano la tua macchina.

## L’harness e la skill

Chi vende e colleziona skill sta confondendo due cose completamente diverse: l’harness e il prompt.

L’harness di un agente è qualcosa di reale. È il ciclo di esecuzione:

- Dà al modello accesso al filesystem.
- Fornisce una shell in cui eseguire comandi.
- Esegue il compilatore, la suite di test e il linter.
- Cattura stderr e restituisce il codice di uscita.

L’harness non dice al modello cosa pensare. Fornisce un ciclo di riscontro con la realtà. Quando un modello scrive codice sbagliato in un buon harness, il compilatore protesta, i test falliscono e il modello legge la traccia per correggersi. È oggettivo. È verificato.

Una skill non fa niente di tutto questo. È solo testo statico. È qualcuno che scrive “ricordati di gestire gli errori in modo robusto” in un file Markdown. Dà al modello zero nuove capacità, zero meccanismi di riscontro e zero validazione.

Un modello di frontiera dentro un harness essenziale è un ingegnere con un terminale funzionante. Un modello caricato con venti skill è lo stesso ingegnere costretto a lavorare mentre qualcuno gli recita un manuale generico nell’orecchio.

## Cosa ci dicono davvero i benchmark

Non è solo una preferenza personale. Ogni dato serio del 2025 e del 2026 va nella stessa direzione.

Guarda le classifiche SWE-bench e gli strumenti che producono davvero codice funzionante: Claude Code, Aider e SWE-agent. Nessuno si basa su librerie di persona di dominio preconfezionate. Non hanno una “persona Rust” o una “skill Django”. Eseguono cicli semplici e stretti intorno a primitive di base: leggere un file, modificarlo, eseguire un comando bash, controllare il diff.

La prova più significativa è arrivata da Princeton e Stanford con mini-swe-agent. Hanno costruito un agente di coding completo in circa cento righe di Python. Nessun framework complesso per agenti, nessun instradamento di persona, nessun modulo di skill. Solo un ciclo di base che dà al modello accesso diretto ai comandi bash. Quello script di cento righe ha superato il settanta per cento su SWE-bench Verified, rivaleggiando con enormi framework modulari.

Valutazioni recenti su SWE-bench Pro e Verified mostrano che cambiare l’architettura dell’harness può spostare le prestazioni di oltre ventidue punti percentuali con lo stesso identico modello. Nel frattempo, passare tra i migliori modelli di frontiera sullo stesso harness spesso cambia il risultato di meno dell’uno per cento. L’harness fa la differenza. Le skill preconfezionate non la fanno affatto.

Nel proprio lavoro di ricerca sulla costruzione di agenti efficaci, Anthropic è arrivata alla stessa conclusione: mantenere semplici le architetture degli agenti. Appena introduci instradamenti complessi di persona, dibattiti tra agenti e astrazioni rigide dei prompt, i tassi di fallimento schizzano in alto.

Poi c’è *The Bitter Lesson* di Rich Sutton: la lezione più grande della storia dell’AI è che i metodi generali che sfruttano il calcolo battono costantemente le euristiche progettate dagli esseri umani. La conoscenza costruita a mano perde sempre. Le skill preconfezionate non sono altro che euristiche artigianali che fingono di essere software.

## Deterioramento del contesto ed economia dell’attenzione

Ogni token nel prompt di sistema ha un costo. Non solo economico, ma cognitivo.

Nel luglio 2025, Chroma Research ha pubblicato il proprio studio su Context Rot, valutando diciotto modelli di frontiera con contesti di lunghezza crescente. I risultati erano netti: ogni modello subisce un peggioramento delle prestazioni e bruschi cali di accuratezza molto prima di raggiungere la finestra di contesto dichiarata. L’attenzione si diluisce mentre il prompt cresce.

All’inizio del 2026, LOCA-bench ha confermato la stessa realtà per gli agenti autonomi: accumulare istruzioni, cronologia dello stato e linee guida ridondanti causa deviazioni catastrofiche dal compito.

Quando riempi il prompt con centinaia di righe di istruzioni preconfezionate, succedono due cose:

1. **Deriva delle istruzioni:** il modello deve trovare un compromesso tra vincoli negativi in conflitto. Se la tua skill dice “usa sempre pattern funzionali” e la codebase usa una macchina a stati a oggetti, il modello spreca token di ragionamento per risolvere una contraddizione artificiale.
2. **Perdita di sfumature:** quando il contesto è pulito, i vincoli sottili del tuo prompt arrivano al modello con il massimo peso. Quando il contesto è sommerso dal boilerplate, quei vincoli vengono appiattiti.

Partire da zero ti dà una risposta immediata al primo token, caching affidabile dei prompt e nessun inquinamento del contesto. Il modello risponde a quello che dici tu, non a quello che qualcun altro ha detto sei mesi fa.

## Smetti di comprare le parole degli altri

L’impulso a collezionare skill nasce da un fraintendimento di cosa sia davvero programmare con l’AI.

Se sai cosa stai costruendo, non ti serve il prompt di qualcun altro. Ti serve la tua conoscenza del dominio: le tue invarianti, i tuoi schemi, le tue suite di test e i tuoi vincoli. Scrivi la specifica, esegui l’harness, revisioni il diff.

E se non sai cosa stai costruendo, nessuna skill preconfezionata da “Senior Architect” lo saprà al posto tuo. Ti darà solo mediocrità generica e sicura di sé, al triplo del costo in token.

Lascia perdere i pacchetti di skill. Tieni l’harness essenziale, il terminale aperto e parti da una pagina bianca.

## Fonti

- [Chroma Research, Context Rot: How Increasing Input Tokens Impacts LLM Performance (luglio 2025)](https://research.trychroma.com/context-rot)
- [LOCA-bench: Benchmarking Language Agents Under Controllable and Extreme Context Growth (febbraio 2026)](https://arxiv.org/abs/2602.04948)
- [Princeton NLP e Stanford, mini-swe-agent: A radically simple coding agent in 100 lines of Python](https://github.com/SWE-agent/mini-swe-agent)
- [Anthropic, Building Effective Agents (dicembre 2024)](https://www.anthropic.com/research/building-effective-agents)
- [SWE-bench, Software Engineering Benchmark for Language Models](https://www.swebench.com/)
- [Rich Sutton, The Bitter Lesson (2019)](http://www.incompleteideas.net/IncIdeas/BitterLesson.html)
- [Aider, AI pair programming in your terminal](https://aider.chat/)
