---
title: Iris: un’app di posta e calendario per il Mac, in Rust
date: 2026-10-08
tags: rust, macos, email, calendar, opensource
label: traduzione AI da un testo scritto dall’autore
---

Volevo un’app di posta e calendario per il mio Mac che tenesse le email sul mio computer, parlasse direttamente con Gmail e Microsoft e fosse open source. Quell’app è **Iris**.

## Cosa fa Iris

Iris legge la posta di Gmail, degli account Microsoft (Outlook.com, Hotmail, Live e Microsoft 365) e di qualsiasi account IMAP e SMTP, trovando per te le impostazioni del server. Mostra gli account in una casella unificata oppure uno alla volta, con calendari e contatti accanto alla posta. Firma e cifra le email con OpenPGP e S/MIME.

I dati della posta e del calendario restano sul tuo computer e Iris non ha un server proprio. Gmail comunica direttamente con Google e gli account Microsoft con Microsoft Graph, quindi nessun altro server vede le tue email.

## Pensata per macOS

Il cuore è in Rust: sincronizzazione, archivio locale, ricerca e operazioni sulla posta. Sopra questo nucleo, Iris sta passando a un’interfaccia nativa in SwiftUI e AppKit, così si comporta come un’app per Mac: il Portachiavi per le password, le notifiche di sistema, gli aggiornamenti tramite Sparkle, il badge nel Dock.

## Un assistente, se lo vuoi

Iris ha un assistente opzionale. Resta disattivato finché non scegli un modello: Claude Code, una chiave Anthropic o un modello in esecuzione sul tuo computer. Può riassumere una conversazione, cercare email, preparare una risposta o ripulire le newsletter, e chiede prima di intervenire sulla tua posta.

## A che punto è

Iris è un progetto che sviluppo e uso ogni giorno. Il codice è pubblico su GitHub sotto GPL e le build per macOS sono versioni di test: c’è ancora lavoro da fare. Iris è partita dal codice di [Penguin Mail](https://github.com/c9dev/penguin-mail), con la stessa licenza.

## Entra nella lista d’attesa

Vuoi provare Iris quando ci sarà una build pronta per te? [Teletrasportami nella lista](mailto:albertobarrago@gmail.com?subject=Iris%20waitlist%3A%20beam%20me%20in&body=Ciao%20Alberto%2C%0D%0A%0D%0AAggiungimi%20alla%20lista%20d%27attesa%20di%20Iris.%20Sono%20pronto%20a%20far%20trasferire%20un%20nuovo%20client%20nella%20mia%20casella%20di%20posta.%0D%0A%0D%0ANome%3A%0D%0AVersione%20macOS%3A%0D%0A%0D%0AGrazie%21) e ti aggiungo alla lista d’attesa.

- Iris: [albz.it/iris](https://albz.it/iris/)
- Codice: [github.com/AlbertoBarrago/iris](https://github.com/AlbertoBarrago/iris)
