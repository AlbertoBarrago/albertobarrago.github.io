---
name: verify
description: Verify a change to Markasso before saying "ready for testing" or committing. Runs typecheck, Biome (check only) and vitest, the MCP build when mcp/ changed, then boots the web app on a private dev server and drives it in a real browser with Playwright MCP (boot smoke plus drawing on the canvas). Reports the evidence plus the Verified trailer value.
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

## 2. Run it in a real browser (Playwright MCP)

Start a private dev server on a free port and wait until it answers. The loop fails if the server dies, so a port taken in the meantime can never make you test someone else's server:

    PORT=$(node -e "const s=require('net').createServer();s.listen(0,()=>{console.log(s.address().port);s.close()})")
    pnpm dev --port $PORT --strictPort > <scratchpad>/markasso-dev.log 2>&1 &
    PID=$!
    until curl -fs -o /dev/null http://localhost:$PORT/; do
      kill -0 $PID 2>/dev/null || { tail -20 <scratchpad>/markasso-dev.log; exit 1; }
      sleep 0.5
    done
    echo $PORT

With the Playwright MCP tools (`mcp__playwright__*`: headless Chrome, isolated profile, 1280x800 viewport, real mouse input). The browser UI language follows the system, so never select by translated text: use ids, shortcuts and the shortcut hint in titles (`(R /`).

Boot smoke:

1. `browser_navigate` to `http://localhost:$PORT/`. Expected: title starts with `Markasso` (any other title means you reached a server that is not yours: stop).
2. `browser_console_messages`. Expected: no errors.
3. `browser_evaluate`:

       () => ({ canvas: !!document.getElementById('main'), toolbarButtons: document.querySelectorAll('#toolbar button').length, rectangle: !!document.querySelector('#toolbar button[title*="(R /"]') })

   Expected: `canvas: true`, `toolbarButtons` greater than 0, `rectangle: true`.

Canvas flow (draw a rectangle):

4. The isolated profile always opens the welcome dialog, and it swallows keyboard shortcuts. Dismiss it with `browser_evaluate` `() => { document.querySelector('.wl-cta')?.click(); }`, `browser_wait_for` 0.5 seconds, then `browser_press_key` `r` to pick the Rectangle tool.
5. `browser_mouse_drag_xy` from (400, 200) to (540, 300). Stay right of x = 260: the style panel covers the left edge of the canvas, and a drag that starts on it selects text instead of drawing.
6. `browser_wait_for` 1.5 seconds (the session save is debounced), then `browser_evaluate`:

       () => (JSON.parse(localStorage.getItem('markasso-session') ?? '{"elements":[]}').elements).map((e) => ({ type: e.type, x: Math.round(e.x), y: Math.round(e.y), w: Math.round(e.width), h: Math.round(e.height) }))

   Expected: exactly one element of type `rectangle`, about 140 x 100.
7. `browser_take_screenshot` as evidence. Playwright MCP only writes under its output directory (set with `--output-dir` in your MCP server config): leave the file name to it and report the path it returns.

Flows for the changed area: `docs/MANUAL.md` is the feature map (tools, shortcuts, menus). Pick the flows that cover the diff and drive them the same way: keyboard shortcuts and coordinates on the canvas, state checks through `localStorage` or the DOM.

8. `browser_close`, then stop the server:

       kill $(lsof -tiTCP:$PORT -sTCP:LISTEN)

## 3. Report

Reply with:

- each command with its exit code, and the vitest totals;
- the results of steps 2.1 to 2.6 and the screenshot path;
- the `Verified:` trailer value: `verify` when steps 1 and 2 passed, `tests` when only step 1 ran, `manual` when the user checked a visible change, `none (<reason>)` otherwise.
