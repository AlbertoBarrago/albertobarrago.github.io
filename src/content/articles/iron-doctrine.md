---
title: Iron Doctrine — building deterministic online multiplayer with a shared ECS engine
date: 2026-08-31
tags: typescript, game-dev, multiplayer, ecs, pnpm
---

**Iron Doctrine** is a real-time strategy game I'm building in a pnpm monorepo, with a deterministic ECS engine at its core and, as of this week, a working 1v1 online mode.

## The Architecture

The repo is split into `packages/` and `apps/`:

- **packages/shared** — the network protocol (`ClientMessage`/`ServerMessage`), shared types and constants (`SIM_HZ`, `DEFAULT_INPUT_DELAY`), and the `LockstepCoordinator`
- **packages/engine** — a deterministic ECS simulation engine (entities/commands/systems), exposing `Simulation.step()`/`enqueue()`, with zero dependency on rendering or networking
- **apps/client** — React + Pixi.js, running entirely in the browser
- **apps/server** — a Node/`ws` WebSocket host that relays commands without simulating anything itself

## Local Play: the Game Loop

`GameRenderer` (a large class handling rendering, input, and audio) owns a `SimBridge`, which in turn owns a Web Worker running the `Simulation`. The worker advances on a free-running clock (`setTimeout`), applies commands as soon as they arrive, and produces one snapshot per tick that the main thread interpolates and draws.

## Going Online

This week's addition: real 1v1 matches over the network, built around lockstep determinism.

1. **apps/server** runs a single in-memory `MatchRelay` per process. It doesn't simulate anything, it just assigns each incoming command to a future tick and rebroadcasts the same confirmed command set to both clients every `SIM_DT_MS`. Determinism comes from both clients running the same engine against the same command stream.
2. **NetworkClient** talks to the server over WebSocket, translates confirmed ticks, and feeds them into a second bridge type, `NetworkedSimBridge`, implementing the same `SimBridgeLike` interface as the local one, but with two differences: local commands go to the server (`sendCommand`) instead of straight to the worker, and the worker only advances one tick when a network confirmation (`networkTick`) arrives, instead of running freely.
3. **The "you're always player 0" problem**: most of the UI/HUD assumed the local user was player 0. Solved with `playerPerspective.ts`, a pure module that swaps `owner`/`player`/`winner` labels (0↔1) only at the network boundary, so each client keeps internally believing it's player 0.
4. `GameRenderer` now accepts the bridge via its constructor (local or networked) instead of always instantiating one itself. That single injection point made the rest of the online mode possible without rewriting the class's ~1700 lines.

## Why This Design

Keeping the simulation deterministic and network-agnostic in `packages/engine` means the same code powers skirmish, campaign, and online play. The server never needs to understand game state, it's just an authoritative clock for command ordering. The tradeoff is that both clients must produce bit-identical results from the same inputs, which is why command replay (not state sync) is the whole networking model.

## What's Next

1v1 is working; next up is handling reconnects and validating the lockstep model holds under real network jitter, not just on localhost.
