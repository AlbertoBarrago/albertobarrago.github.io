---
name: verify
description: Verify a change to Themis end to end before saying "ready for testing" or committing. Runs npm run check, rebuilds dist/, then drives the real CLI (check, init, status) in a temp project and reports the evidence plus the Verified trailer value.
---

# Verify Themis

Run the steps in order from the repo root and stop at the first failure. Fix the code, not the check.

## Rules

- Never add retries, sleeps or skips, and never edit the existing tests, `biome.json`, `tsconfig*.json`, `vitest.config.ts` or this skill to make a step pass.
- If a step still fails after three fix attempts, stop and report the failing output and what was tried.
- Never delete `dist/`: `~/.local/bin/themis` links to `dist/cli/main.js`. Rebuilding in place is fine.
- Do not run commands that call agents (`plan`, `tests`, `run`, `retro`): they cost money and minutes. Their logic is covered by the vitest suite with `FakeAgentRunner`/`FakeExecutor`.
- Always remove the temp directory, even when a step fails.

## 1. Cheap checks

    npm run check

(typecheck, Biome, vitest including `tests/e2e/`).

## 2. Build

    npm run build

## 3. Drive the real CLI

Run in bash (the commands rely on bash arrays and `PIPESTATUS`):

    bash -c '
    set -u
    C=(node "$PWD/dist/cli/main.js")
    T=$(mktemp -d)
    trap "rm -rf \"$T\"" EXIT

    "${C[@]}" check examples/webhook-service/spec.md; echo "check-valid exit=$?"

    printf -- "---\nthemis: 0.2\nstack: node-ts\n---\n# X\n" > "$T/bad.md"
    "${C[@]}" check "$T/bad.md"; echo "check-invalid exit=$?"

    cp examples/getting-started/spec.md "$T/"
    cd "$T" && git init -q
    "${C[@]}" init; echo "init exit=$?"
    "${C[@]}" status --json; echo "status exit=$?"
    ls .themis
    '

Expected:

| Flow | Expected |
|---|---|
| check-valid | exit 0, `valid (6 acceptance criteria, ...)` |
| check-invalid | exit 1, errors `invalid-field`, `unsupported-version`, `no-acceptance-criteria` |
| init | exit 0, writes `.themis/agents/*.md`, `.gitignore`, installs dependencies (needs network for `npm install`), ends with `next: themis plan` |
| status | exit 0, JSON with `spec.ok: true`, `plan: "absent"`, `contract.state: "absent"` |
| .themis | contains `agents`, `guard.mjs`, `local.json`, `verify.sh` |

If the change touches a command not listed above (for example `new`, `approve`, a new flag or a new diagnostic), add a run of that command against the temp project, with its expected exit code and output, to the report.

## 4. Report

Reply with:

- each command with its exit code;
- the relevant output lines for every flow, and any deviation from the table;
- the `Verified:` trailer value: `verify` when steps 1 to 3 passed, `tests` when only step 1 ran, `none (<reason>)` otherwise.
