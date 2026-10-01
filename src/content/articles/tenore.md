---
title: Tenore: Stop Maintaining the Same Agent Configuration Three Times
date: 2026-10-01
tags: programming, ai-agents, developer-tools, typescript, opensource
---

Today I released **Tenore**, a CLI that takes a shared configuration for AI coding agents and compiles it into their native files.

The problem is ordinary maintenance. Claude Code, Codex CLI and Antigravity have their own places for instructions, permissions and MCP servers. Once you use more than one, the same project rules start appearing in several files.

Change the test command, add a server, tighten a permission: every copy needs attention. Eventually, one gets missed. Switching agents then means checking whether the configuration still says what you intended.

Tenore gives that configuration a source of truth: a directory called `.agents/`.

## Configuration as source code

The idea is to keep instructions in Markdown, structured policy in YAML frontmatter, and generate the files each agent expects.

A repository can start with:

```text
.agents/
  AGENTS.md
  policy.md
  memory/
    architecture.md
```

`AGENTS.md` contains the prose: how to work in the repository, which conventions matter, what deserves extra care. `policy.md` describes permissions, MCP servers and target-specific overrides. Memory files hold persistent notes by topic.

Tenore parses those sources, merges their scopes, and passes the result to each target adapter. The adapters produce native configuration, such as `CLAUDE.md` or `.codex/config.toml`.

That makes the generated files reviewable build output. The shared rules have an explicit home, and each translation has a place in the implementation.

## A small example

The npm package is called `tenore-cli`; the executable is `tenore`. It requires Node.js 20 or later.

```sh
pnpm add -g tenore-cli
tenore init
```

After editing `.agents/AGENTS.md`, a minimal `.agents/policy.md` might look like this:

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

Those are command patterns: `pnpm test*` also matches commands with that prefix, so the pattern should reflect what you actually want to permit.

Before writing anything, inspect the generated changes:

```sh
tenore diff
tenore sync
```

That review step matters. A configuration compiler is useful only if you can understand its output, particularly when the output controls permissions.

Existing configuration can also be the starting point. For a repository already configured for Claude Code:

```sh
tenore init --import claude
tenore diff
tenore sync
```

Import provides a migration path without manually transcribing everything into the new layout.

## Shared rules, local context

Configuration has three scopes: global, repository and local. They merge in that order.

Global sources live in `~/.agents/`, repository sources in `.agents/`, and machine-specific sources in `.agents/local/`. Initialization adds the local scope to Git's ignore rules. Global configuration is included explicitly with `--global`.

The merge rules distinguish between kinds of data. Instructions and memory are combined in scope order. Lists are deduplicated. Scalar settings generally take the value from the narrowest scope.

Permissions need stricter handling: deny takes precedence over ask, which takes precedence over allow. A repository-level allow cannot undo a global deny. Rules discarded during that merge produce warnings.

This lets a project add context while preserving restrictions established in a broader scope.

## Generated files still need protection

People edit files directly. Tools do too. A generator needs to account for that before writing over an existing setup.

Tenore records hashes of generated artifacts in `.agents/.lock`. If a generated file changes after a sync, the next sync detects drift and skips it. Existing files that Tenore does not own are treated as conflicts until imported.

For CI, there is:

```sh
tenore check
```

It exits unsuccessfully on invalid sources, drift, conflicts or pending generated changes. That gives configuration consistency a check alongside the rest of the repository's validation.

## Where portability gets difficult

The current adapters cover Claude Code, Codex CLI and Antigravity, but their permission models differ. A common source format cannot make those differences disappear.

Tenore's documented policy is to emit a more restrictive mapping with a warning when an exact translation is unavailable. Some capabilities need explicit handling: Codex filesystem mappings require opt-in permission profiles, while Antigravity permissions are configured at user scope.

These limitations belong in the review of the generated configuration. Shared instructions also cannot guarantee identical agent behavior; they make the intended rules consistent and easier to maintain.

The project is still a work in progress. The useful measure is whether changing one rule becomes easier to inspect and carry across the tools you use.

Tenore is written in TypeScript and released under the MIT license. The [repository](https://github.com/AlbertoBarrago/tenore) contains the source and setup instructions; the [mapping reference](https://github.com/AlbertoBarrago/tenore/blob/main/docs/mapping.md) documents translation decisions. You can install it from [npm](https://www.npmjs.com/package/tenore-cli).
