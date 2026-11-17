# Playwright MCP to drive local apps with real mouse and keyboard input.
# --isolated: in-memory profile, so parallel sessions don't fight over one profile.
# --caps=vision: coordinate tools such as browser_mouse_drag_xy, needed for canvas work.
# --config: forces the en-US locale, so the app's UI language doesn't follow the system.
cat > playwright-mcp.json <<'JSON'
{
  "browser": {
    "browserName": "chromium",
    "contextOptions": { "locale": "en-US" }
  }
}
JSON

claude mcp add playwright -- npx @playwright/mcp@latest \
  --isolated --caps=vision --config "$PWD/playwright-mcp.json"
