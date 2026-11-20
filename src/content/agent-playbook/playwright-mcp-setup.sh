# Playwright MCP to drive local apps with real mouse and keyboard input.
# Pin the version: the server is fetched by npx on every start.
# Pick the current one with `npm view @playwright/mcp version`.
# --scope user:   one setup for every project, not just the current one.
# --headless:     no window stealing focus while you work.
# --isolated:     in-memory profile, so parallel sessions don't fight over one profile.
#                 It also means first-run dialogs show up on every launch.
# --caps vision:  coordinate tools such as browser_mouse_drag_xy, needed for canvas work.
# --output-dir:   screenshots and traces go to a cache folder, not into the repo.
PLAYWRIGHT_MCP_VERSION=0.0.85
claude mcp add --scope user playwright -- npx -y "@playwright/mcp@$PLAYWRIGHT_MCP_VERSION" \
  --browser chrome --headless --isolated --caps vision \
  --viewport-size 1280x800 --output-dir "$HOME/.cache/playwright-mcp"

# The browser follows the system locale, so the app's UI may be translated:
# select by ids, classes, roles or shortcuts, never by visible text.
# If the app has no stable hooks yet, force a locale with a config file:
#   { "browser": { "contextOptions": { "locale": "en-US" } } }
# and add --config "$PWD/playwright-mcp.json" to the command above.
