## 2. End-to-end (Playwright)

Before running the suite, make sure the port in `playwright.config` is free. With `reuseExistingServer: true`, Playwright happily tests whatever already answers on that port: another project, or this project on another branch.

    PORT=<port from playwright.config webServer.url>
    if lsof -tiTCP:$PORT -sTCP:LISTEN >/dev/null; then
      echo "port $PORT is busy: stop, do not test someone else's server"; exit 1
    fi
    BROWSER=none npx playwright test

- `BROWSER=none` keeps `vite --open` from opening browser windows during the run.
- `Executable doesn't exist at ...` means the browser build for this Playwright version is missing. It is setup, not a test failure: run `npx playwright install chromium`, then run the suite again. Do not count it as one of the three rounds.
- Use selectors that do not depend on the UI language (roles with stable names, `data-*` hooks), or set `use: { locale: 'en-US' }` in the config.
