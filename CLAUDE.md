# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Interactive terminal portfolio (albz.it): a keyboard-first shell where visitors type commands (`help`, `about`, `projects`, `articles`, ...) and the output is appended to a log, with CRT styling and embedded retro games. Bilingual: English at `/`, Italian under `/it/`. Pure vanilla JavaScript (ES2022+) with zero runtime dependencies. Uses Vite 6 as build tool and deploys to GitHub Pages. Package manager is npm.

## Commands

```bash
npm run dev        # Start Vite dev server
npm test           # Vitest (unit tests next to the code, *.test.js / *.test.mjs)
npm run build      # Vite build (output: build/) + scripts/prerender-articles.mjs
npm run preview    # Preview production build
npm run deploy     # Build + deploy to GitHub Pages
```

No linter is configured. Type checking is JSDoc-based through `jsconfig.json` (editor only, no CLI step).

## Architecture

Single-page app with event delegation on a single root handler using `data-*` attributes. No framework.

- **Entry point**: `index.html` imports `src/js/app.js` as ES module
- **Data layer**: `src/js/index.js`: portfolio content (profile, skills, experience, projects, Homebrew formulae, utils, links, "How we build" guide)
- **App controller**: `src/js/app.js`: boot, one `*HTML()` template function per command, `executeCommand` dispatching through the `renderers` map, Tab completion from `COMMAND_NAMES`, overlays (blog index, article reader, games)
- **i18n**: `src/js/i18n.js`: language from the path (`/it/` is Italian), `t()` looks up the Italian string for an English source string, plus path helpers (`articlePath`, `privacyPath`, ...)
- **Articles**: Markdown in `src/content/articles/` (Italian versions in `src/content/articles/it/`), front matter `title`, `date`, `tags`, `label`. Rendered to HTML at build/dev time by the Vite plugin in `vite.config.js` (`marked`, Node only), loaded by `src/js/articles.js`
- **Prerender**: `scripts/prerender-articles.mjs` runs after `vite build` and writes a static page per article and for the blog index (meta, Open Graph, JSON-LD, `<noscript>` body), plus `sitemap.xml` and `feed.xml`
- **Games**: `src/js/games/`: self-contained Canvas modules (Space Invaders, Tetris, Pong, Flappy Bird), each init function returns a cleanup function
- **Styles**: `src/styles/main.css` (reset) + `src/styles/page.css` (design tokens on `:root`, component styles, CRT overlay, mobile layout at 680px)
- **Static assets**: `static/` is Vite's `publicDir`, copied as is (favicon, CV PDF, robots.txt, privacy pages, app update feeds under `static/updates/`, guide diagrams under `static/how-we-build/`)

## Markasso for Mac release notes

`static/updates/markasso/index.html` (https://albz.it/updates/markasso/) is generated, not hand-written: it lists every Mac version from `appcast.xml` with its `Markasso-<version>-<build>.md` notes. After copying a new Mac update into `static/updates/markasso/`, run `node scripts/markasso-release-notes.mjs` and commit the page with the update, before `npm run deploy`. It is a manual step, outside `npm run build`; `npm test` fails while the committed page is out of date.

## Key Patterns

- **JSDoc typing throughout** with strict TypeScript checking enabled via `jsconfig.json` (`checkJs: true`, ES2022 target). This is vanilla JS with JSDoc types, not TypeScript.
- **ES module system**: all files use `import`/`export`
- **HTML templates** built with template literals in `app.js`; escape any user input with `escapeHTML` (`src/js/utils.js`)
- **Adding a command**: write a `*HTML()` renderer, register it in `renderers` inside `executeCommand`, add it to `COMMAND_NAMES` (Tab completion), `helpHTML`, and `treeHTML`/`lsHTML` when it is a section
- **Every visible string goes through `t()`**, with its Italian translation added to the `italian` map in `i18n.js`
- **Content is data**: sections render from arrays in `index.js`; adding an item means editing data, not templates
- **Game registry**: `GAME_INIT` maps game names to factory functions
- **Local storage** for game high scores and blog filters

## "How we build" guide

The `howwebuild` command renders `howWeBuild` from `src/js/index.js`: a guide organized by practice (and pitfalls), each with `why`, `steps` and blocks to copy, plus a short roadmap. Types and the inline markup helper live in `src/js/how-we-build.js`. Prose goes through `t()`; the copyable blocks are raw files in `src/content/how-we-build/`, imported with `?raw`, and stay in English. To update a block, edit its file; to add a practice, add an object to the data. `src/js/how-we-build.test.js` checks the data, the Italian translations, and that blocks contain no personal paths, emails or private config (the site is public). Diagrams are SVGs drawn with Markasso and exported to `static/how-we-build/`, with the Markasso source (`.markasso`, open it with File > Open or the Markasso MCP `diagram_open`) next to each SVG so it can be reopened and re-exported. Diagram labels are English only.

## Git Workflow

- Keep changes focused and use Conventional Commits.
