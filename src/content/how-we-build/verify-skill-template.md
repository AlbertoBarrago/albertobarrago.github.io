---
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

Servers: pick a free port at runtime with `--strictPort` (or equivalent), fail the wait loop if your process dies, and check an identifying marker (page title, health payload) before testing. Other sessions and agents run their own servers: never reuse or stop one you did not start.

Smoke flows (always):

1. <Flow>: <steps>. Expected: <observable result>.
2. <Flow that must fail>: <steps>. Expected: <error, exit code>.

Flows for the changed area: <where the feature map lives, e.g. docs/MANUAL.md>. Pick the flows that cover the diff and check their expected results.

Out of scope: <commands this skill must not run, e.g. paid API calls, deploys>.

## 3. Report

Reply with:

- each command run with its exit code;
- the evidence for every flow (output excerpt, screenshot path);
- the `Verified:` trailer value: `verify` when steps 1 and 2 passed, `tests` when only step 1 ran, `none (<reason>)` otherwise.
