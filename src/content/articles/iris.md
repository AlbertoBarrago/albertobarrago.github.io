---
title: Iris: a mail and calendar app for the Mac, in Rust
date: 2026-10-08
tags: rust, macos, email, calendar, opensource
label: human-written, AI-reviewed
---

I wanted a mail and calendar app for my Mac that keeps my mail on my own computer, talks to Gmail and Microsoft directly, and is open source. That app is **Iris**.

## What Iris does

Iris reads Gmail, Microsoft accounts (Outlook.com, Hotmail, Live and Microsoft 365) and any IMAP and SMTP account, and finds the server settings for you. It shows your accounts in one inbox or one at a time, with calendars and contacts next to your mail. It signs and encrypts mail with OpenPGP and S/MIME.

Mail and calendar data stay on your computer, and Iris has no server of its own. Gmail talks to Google directly and Microsoft accounts talk to Microsoft Graph, so no other server sees your mail.

## Built for macOS

The core is Rust: sync, the local store, search and the mail actions. On top of it Iris is moving to a native interface in SwiftUI and AppKit, so it behaves like a Mac app: the Keychain for passwords, the system's notifications, updates through Sparkle, the Dock badge.

## An assistant, if you want one

Iris has an optional assistant. It stays off until you pick a model: Claude Code, an Anthropic key, or a model running on your own machine. It can summarize a conversation, find mail, draft a reply or clean up newsletters, and it asks before it acts on your mail.

## Where it is

Iris is a project I build and use every day. The source is public on GitHub under the GPL, and the macOS builds are test builds while there is still work ahead. Iris started from the code of [Penguin Mail](https://github.com/c9dev/penguin-mail), under the same license.

## Join the waiting list

Want to try Iris when there's a build ready for you? [Beam me onto the list](mailto:albertobarrago@gmail.com?subject=Iris%20waitlist%3A%20beam%20me%20in&body=Hi%20Alberto%2C%0D%0A%0D%0APlease%20add%20me%20to%20the%20Iris%20waiting%20list.%20I%27m%20ready%20to%20let%20a%20new%20client%20migrate%20into%20my%20inbox.%0D%0A%0D%0AName%3A%0D%0AmacOS%20version%3A%0D%0A%0D%0AThanks%21) and I'll add you to the waiting list.

- Iris: [albz.it/iris](https://albz.it/iris/)
- Source: [github.com/AlbertoBarrago/iris](https://github.com/AlbertoBarrago/iris)
