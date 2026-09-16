---
title: GitLab Alert: the GitLab work that involves you, in your menu bar
date: 2026-09-16
tags: swift, macos, gitlab, menubar, opensource
---

**GitLab Alert** is a macOS menu bar app that keeps the GitLab work needing your attention out of a browser tab and in the corner of your screen: merge requests waiting on your review, merge requests you authored, issues assigned to you, and the pipeline state of the projects you watch. No Dock icon, no window to manage, no tab to forget.

It works with GitLab.com and with self-managed instances, it is free, and it is MIT.

## A browser tab is a bad notification surface

The workflow it replaces was mine, every day. Open GitLab, check what is waiting on my review, check whether last night's pipeline went red, close the tab, forget, repeat two hours later.

A tab shows you everything or nothing, and it has no memory of what you already saw. GitLab's own email notifications have the opposite problem: they arrive constantly, they arrive for things you do not care about, and after a week you filter them into a folder you never open.

So the scope was narrow on purpose:

- **Only the work that involves me.** Merge requests where I am assignee, reviewer or author. Issues assigned to me. The latest pipeline of the projects in scope.
- **Notify on change, not on state.** A failed pipeline notifies once, when it fails, not on every poll for the next three days.
- **Read-only, structurally.** The token is requested with `read_api` and nothing else. The app cannot approve a merge request or close an issue, because it has no permission to.
- **Offline is a state, not an error.** Losing the network keeps the last good dashboard on screen instead of blanking it.

## Three surfaces, three jobs

The app is an accessory app: no Dock icon, and the status item is the only permanent thing on screen. Everything else is created lazily and thrown away when you close it.

**The popover** is the glance. Left click on the status item and you get review requests, your authored merge requests, assigned issues and repository activity, capped at five rows per expanded section. It answers "is there anything?" in under a second, and if there is, "see all" hands you off.

**The detail window** is the actual workspace. Sidebar picks the dataset, the table filters and sorts it, the inspector shows the full selected item, and "open on GitLab" sends you to the browser when you finally have to do the work. Click a notification and it opens here, on the right item: the identifier travels through a pending selection that the view resolves once its dataset exists, so a notification clicked during a cold launch still lands where it should.

**Settings** is where the instance origin, the token, notifications and the repository scope live. The default scope is projects you are a member of, active in the past 90 days, forks excluded, which is usually right and occasionally is not. The Repositories pane lets you search the whole catalogue and include or exclude individual projects by hand.

## Being quiet is a feature, and it took work

Anything that polls and notifies is one bad decision away from becoming noise you mute. Three decisions carry most of that weight.

**The first refresh is silent.** A fresh install seeds its notification watermarks from the first successful cycle without notifying anything. Otherwise your very first launch would dump twelve notifications about merge requests you have been ignoring for a week, and you would quit before the app ever proved useful.

**State is written before notifications are posted.** The snapshot, its watermarks and the resulting activity log are persisted in a single state write, and only then do notifications go out. A crash at the wrong moment cannot replay yesterday's failed pipeline on the next launch.

**Read state is local and explicit.** Opening the popover marks nothing as seen. Expanding a section marks nothing as seen. You mark rows yourself, and it changes local presentation only: the app never closes, acknowledges or updates anything on GitLab. Seen identifiers are bounded and persisted, so an item you dismissed stays dismissed across launches, while a later event on the same item gets a distinct identifier and comes back unread on its own merits.

## Polling that behaves on someone else's server

Self-managed GitLab instances are frequently small boxes that somebody in infrastructure maintains on top of their real job. An app that hammers one every 30 seconds is an app that gets blocked.

A single actor, `PollScheduler`, owns the whole cycle. It serializes lifecycle changes and joins a manual refresh with an automatic one, so there is never more than one network cycle in flight no matter how enthusiastically you click refresh. Sleep, screen sleep and session changes arrive from AppKit and get forwarded to it. Reachability, power state and whether the popover is currently open all feed into the next interval: a laptop asleep on battery is not a laptop that needs to poll.

Within a cycle, independent requests run concurrently, list endpoints follow GitLab's pagination properly instead of reading page one and hoping, and the per-project pipeline checks run in a bounded task group. The client honors `Retry-After` and waits out exhausted rate limit floors before starting anything else. Page size and pipeline concurrency are exposed in Settings, within safe limits, because the right numbers for gitlab.com are not the right numbers for a self-managed instance with 40 users.

## Where things live

Two modules, and the split is also the testing strategy.

`GitLabKit` is a local SwiftPM package with no UI dependency at all: the REST v4 client, models, the Keychain and file stores, rate limiting, and a pure activity diff engine that compares the previous and current snapshots. `GitLabAlert` is the shell: AppKit lifecycle, the status item, SwiftUI views, settings, notifications. Views talk to a main-actor `AppModel` and nothing else, so no view ever creates a network client or writes persistent state, and `AppDelegate` builds the whole dependency graph.

Because the interesting logic sits in a package with no views, the tests cover API mapping, Keychain error handling through test stores, concurrent refreshes, cancellation, account replacement, notification routing and persisted read state. The menu bar UI still gets a manual QA checklist, which is the honest answer.

Changing the GitLab origin is treated as an account boundary, not a preference. In-flight work is cancelled, the scheduler is stopped and cleared, the previous token is deleted and a new client is built before the replacement token is accepted. Late responses carry a revision and cannot resurrect data from the previous account into the new one.

The token lives in the Keychain, never reaches a view, and is sent in the `PRIVATE-TOKEN` header only to the configured origin. State files hold dashboard data and no credentials, written atomically with owner-only permissions. No analytics, no third-party services at runtime.

## Status

Under active development. Releases are signed with the project's stable identity but not Apple-notarized, so the first launch needs one pass through **Privacy & Security → Open Anyway**; the README covers it, along with building from source via SwiftPM (there is no `.xcodeproj`, and Xcode is not required). GitLab instances hosted below a URL sub-path are not supported yet.

The repository is at [github.com/AlbertoBarrago/gitlab-alert](https://github.com/AlbertoBarrago/gitlab-alert), with the product page at [albz.it/gitlab-alert](https://albz.it/gitlab-alert/). If it earns a place in your menu bar, a star is appreciated.
