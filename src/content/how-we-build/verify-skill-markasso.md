---
name: verify
description: Verify a change to Markasso before saying "ready for testing" or committing. Runs typecheck, Biome (check only) and vitest, the MCP build when mcp/ changed, then boots the web app on a private dev server and checks it loads cleanly with Telemaco. Reports the evidence plus the Verified trailer value.
---

# Verify Markasso

Run the steps in order from the repo root and stop at the first failure. Fix the code, not the check.

## Rules

- Never add retries, sleeps or skips, and never edit the existing tests, `biome.json`, `tsconfig*.json`, `vitest.config.ts` or this skill to make a step pass.
- If a step still fails after three fix attempts, stop and report the failing output and what was tried.
- Use `pnpm lint:ci`, never `pnpm lint`: the latter rewrites files.
- Never reuse or stop a dev server you did not start: other sessions and agents run their own (5173 is usually the user's). Start your own on a free port picked at runtime and always stop it, even when a step fails.

## 1. Cheap checks

    pnpm typecheck
    pnpm lint:ci
    pnpm test

`pnpm test` also runs `mcp/tests/`. If the diff touches `mcp/`, also build the server:

    pnpm mcp:build

## 2. Boot smoke (Telemaco)

Start a private dev server on a free port and wait until it answers. The loop fails if the server dies, so a port taken in the meantime can never make you test someone else's server:

    PORT=$(node -e "const s=require('net').createServer();s.listen(0,()=>{console.log(s.address().port);s.close()})")
    pnpm dev --port $PORT --strictPort > <scratchpad>/markasso-dev.log 2>&1 &
    PID=$!
    until curl -fs -o /dev/null http://localhost:$PORT/; do
      kill -0 $PID 2>/dev/null || { tail -20 <scratchpad>/markasso-dev.log; exit 1; }
      sleep 0.5
    done
    echo $PORT

With the Telemaco MCP tools:

1. `browser_navigate` to `http://localhost:$PORT/` with `waitUntil: networkidle0`. Expected: title starts with `Markasso` (any other title means you reached a server that is not yours: stop).
2. `browser_console_messages`. Expected: no errors.
3. `browser_evaluate`:

       ({ canvas: !!document.getElementById('main'), toolbarButtons: document.querySelectorAll('#toolbar button').length, rectangle: !!document.querySelector('#toolbar button[title^="Rectangle"]') })

   Expected: `canvas: true`, `toolbarButtons` greater than 0, `rectangle: true`.
4. `browser_close`, then stop the server:

       kill $(lsof -tiTCP:$PORT -sTCP:LISTEN)

Out of scope: drawing or any interaction on the canvas. Telemaco has no layout engine (`getBoundingClientRect` returns placeholder values), so canvas hit-testing cannot be driven from it; canvas behavior is covered by the vitest suite. When the change is a visible canvas or UI behavior, say so in the report and ask the user for a manual check (`Verified: manual` once they confirm).

## 3. Report

Reply with:

- each command with its exit code, and the vitest totals;
- the Telemaco results for steps 2.1 to 2.3;
- the `Verified:` trailer value: `verify` when steps 1 and 2 passed, `tests` when only step 1 ran, `manual` when the user checked a visible change, `none (<reason>)` otherwise.
