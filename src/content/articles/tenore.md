---
title: Tenore: Stop Maintaining the Same Agent Configuration Three Times
date: 2026-10-01
tags: programming, ai-agents, developer-tools, typescript, opensource
---

I built **Tenore**, a CLI that takes a shared configuration for AI coding agents and compiles it into their native files.

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

The npm package is called `tenore-cli`; the executable is `tenore`. It requires Node.js 20.12 or later.

```sh
pnpm add -g tenore-cli
tenore init
```

In a terminal, `tenore init` now opens a setup wizard. It detects existing agent configuration and lets you choose what to import and which agents to generate files for. It also offers to update `.gitignore` and register MCP servers for shared memory and web access.

The wizard previews the sync before asking for confirmation. Nothing is written until you confirm. At the end, it prints the equivalent commands so the setup can be repeated in a script.

For an unattended setup, `tenore init --yes` accepts the wizard's defaults, even without a terminal. Other flags, or a non-interactive shell without `--yes`, use the plain command flow. For example, `tenore init --targets claude,codex` sets the agents to generate files for.

The generated sources remain editable. After updating `.agents/AGENTS.md`, a minimal `.agents/policy.md` might look like this:

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

When changing the sources after setup, inspect the generated changes before applying them:

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

`tenore init --global` brings the same wizard to your personal configuration. It can import existing global agent settings into `~/.agents/` and shows the full diff before writing changes.

The merge rules distinguish between kinds of data. Instructions and memory are combined in scope order. Lists are deduplicated. Scalar settings generally take the value from the narrowest scope.

Permissions need stricter handling: deny takes precedence over ask, which takes precedence over allow. A repository-level allow cannot undo a global deny. Rules discarded during that merge produce warnings.

This lets a project add context while preserving restrictions established in a broader scope.

## Shared memory and web access

The memory files can now be read and updated through Tenore's own MCP server. Register it once in `.agents/policy.md`:

```yaml
mcp:
  tenore-memory:
    command: npx
    args: ["-y", "tenore-cli", "mcp"]
```

After `tenore sync`, each selected agent gets the server configuration. It exposes tools to list, read, search and write memory topics, keeping persistent notes in the same shared directory. Writes are confined to the memory directories. When an agent creates a new topic, run `tenore sync` again to include it in the generated files.

Web access can follow a similar approach. Tenore supports declaring a web MCP server once and translating its configuration for each agent. The documented example uses [Telemaco](https://github.com/AlbertoBarrago/telemaco), but another web or browser MCP server can be used.

One distinction matters here: `network: none` disables the agents' native web access, while MCP servers remain separate. Access through those servers is governed by explicit MCP permission rules. That makes it possible to use a shared web server with confirmation required for its tools.

## Generated files still need protection

People edit files directly. Tools do too. A generator needs to account for that before writing over an existing setup.

Tenore records hashes of generated artifacts in `.agents/.lock`. If a generated file changes after a sync, the next sync detects drift and skips it. Existing files that Tenore does not own are treated as conflicts until imported.

For CI, there is:

```sh
tenore check
```

It exits unsuccessfully on invalid sources, drift, conflicts or pending generated changes. That gives configuration consistency a check alongside the rest of the repository's validation.

If you stop targeting an agent, Tenore reports its old generated files as orphans and keeps them by default. `tenore sync --prune` removes those files only if they have not been modified.

## Where portability gets difficult

The current adapters cover Claude Code, Codex CLI and Antigravity, but their permission models differ. A common source format cannot make those differences disappear.

Tenore's documented policy is to emit a more restrictive mapping with a warning when an exact translation is unavailable. Some capabilities need explicit handling: Codex filesystem mappings require opt-in permission profiles, while Antigravity permissions are configured at user scope.

These limitations belong in the review of the generated configuration. Shared instructions also cannot guarantee identical agent behavior; they make the intended rules consistent and easier to maintain.

The project is still a work in progress. The useful measure is whether changing one rule becomes easier to inspect and carry across the tools you use.

Tenore is written in TypeScript and released under the MIT license. The [repository](https://github.com/AlbertoBarrago/tenore) contains the source and setup instructions; the [mapping reference](https://github.com/AlbertoBarrago/tenore/blob/main/docs/mapping.md) documents translation decisions. You can install it from [npm](https://www.npmjs.com/package/tenore-cli).
