---
title: Iris: bringing an open-source Rust mail client to macOS
date: 2026-10-08
tags: rust, macos, email, calendar, opensource
label: human-written, AI-reviewed
---

I found **Penguin Mail** on Hacker News. It was an open-source mail and calendar app, written in Rust, with a clear focus on keeping your mail on your own computer. I use a Mac, so my first thought was simple: could I bring it to macOS?

That question became **Iris**.

## Starting with Penguin Mail

Penguin Mail is a GTK and libadwaita app built for Linux. It supports Gmail, Microsoft accounts and IMAP, along with calendars, contacts, OpenPGP and S/MIME. The project was already doing a lot of the hard work that makes an email client useful: syncing accounts, handling messages, and keeping local data in step with remote services.

The fact that it was written in Rust and open source made it possible to build on that work. I didn't want to start another mail client from a blank repository. I wanted to see how far I could take a project I liked onto the platform I use every day.

## From a Linux app to Iris

Porting a desktop app is more than getting it to compile on another operating system. Penguin Mail's interface and desktop integration were designed around GTK and Linux. Iris needed to become something I could use on macOS, including the parts users rely on outside the main window: account sign-in, local storage, notifications and updates.

I kept Penguin Mail's foundations and adapted the app into a separate project. Iris is based on [Penguin Mail](https://github.com/c9dev/penguin-mail), created by its original author and contributors.

The project has grown beyond the first port. Iris now brings mail and calendar together, supports Gmail, Microsoft accounts and IMAP, and includes features such as an optional assistant, message signing and encryption. The assistant is off until you choose a model. Mail and calendar data stay on your computer, and Iris has no server of its own.

## Why keep building it?

The original appeal was practical: Penguin Mail had a lot of capability, it was open source, and I wanted that kind of app on my Mac. Once the port worked, there was plenty left to shape into something that felt at home in my own workflow.

Iris is still a personal project in active development. The macOS builds are test builds, and there is more work ahead. The source repository is private for now, and I plan to use Iris myself. If you're interested in the project, write to me.

It began with a small experiment—take an interesting Linux app and see whether it could become useful on macOS—and turned into a project of its own.

## Join the waiting list

Want to try Iris when there's a build ready for you? [Beam me onto the list](mailto:albertobarrago@gmail.com?subject=Iris%20waitlist%3A%20beam%20me%20in&body=Hi%20Alberto%2C%0D%0A%0D%0APlease%20add%20me%20to%20the%20Iris%20waiting%20list.%20I%27m%20ready%20to%20let%20a%20new%20client%20migrate%20into%20my%20inbox.%0D%0A%0D%0AName%3A%0D%0AmacOS%20version%3A%0D%0A%0D%0AThanks%21) and I'll add you to the waiting list.

- Iris: [albz.it/iris](https://albz.it/iris/)
- Original project: [Penguin Mail on GitHub](https://github.com/c9dev/penguin-mail)
