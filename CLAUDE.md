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
- **Data layer**: `src/js/index.js`: portfolio content (profile, skills, experience, projects, Homebrew formulae, utils, links, "Agent Playbook" guide)
- **App controller**: `src/js/app.js`: boot, one `*HTML()` template function per command, `executeCommand` dispatching through the `renderers` map, Tab completion from `COMMAND_NAMES`, overlays (blog index, article reader, games)
- **i18n**: `src/js/i18n.js`: language from the path (`/it/` is Italian), `t()` looks up the Italian string for an English source string, plus path helpers (`articlePath`, `privacyPath`, ...)
- **Articles**: Markdown in `src/content/articles/` (Italian versions in `src/content/articles/it/`), front matter `title`, `date`, `tags`, `label`. Rendered to HTML at build/dev time by the Vite plugin in `vite.config.js` (`marked`, Node only), loaded by `src/js/articles.js`
- **Prerender**: `scripts/prerender-articles.mjs` runs after `vite build` and writes a static page per article and for the blog index (meta, Open Graph, JSON-LD, `<noscript>` body), plus `sitemap.xml` and `feed.xml`
- **Games**: `src/js/games/`: self-contained Canvas modules (Space Invaders, Tetris, Pong, Flappy Bird), each init function returns a cleanup function
- **Styles**: `src/styles/main.css` (reset) + `src/styles/page.css` (design tokens on `:root`, component styles, CRT overlay, mobile layout at 680px)
- **Static assets**: `static/` is Vite's `publicDir`, copied as is (favicon, CV PDF, robots.txt, privacy pages, app update feeds under `static/updates/`, guide diagrams under `static/agent-playbook/`)

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

## "Agent Playbook" guide

The guide (called "How we build" until 2026-11-20) is a page of its own at `/agent-playbook/` (Italian `/it/agent-playbook/`), opened as a reader overlay with a contents sidebar; every section, the roadmap (`#next-up`) and the changelog (`#changelog`) are deep-linkable as `#<id>`. The `playbook` command (and `cat agent-playbook.md`) leaves a summary card in the log and opens the page. Data is `agentPlaybook` in `src/js/index.js`: practices (and pitfalls), each with `why`, `steps` and blocks to copy, plus a roadmap and a changelog. Types and pure helpers (freshness badges, last modified date) live in `src/js/agent-playbook.js`; the HTML lives in `src/js/agent-playbook-view.js`, pure templates shared by the client and the prerender (which loads them through `vite.ssrLoadModule`, once per language). Prose goes through `t()`; the copyable blocks are raw files in `src/content/agent-playbook/`, imported with `?raw`, and stay in English. To update a block, edit its file; to add a practice, add an object to the data with `added` (and `status` for practices).

Keeping it current: when a section's advice changes, set its `updated` date and add an entry at the top of `changelog` (optionally with the `sections` it touched). Sections get a "new" or "recently updated" badge for 30 days, and the page's "updated" date is derived, never bumped by hand. When a roadmap item is done and becomes a section, give the item a `sectionId`. On every update, recheck each roadmap item and every "in progress" claim against the real repos (commits, tags) instead of trusting the page; done items come first in the roadmap, open ones after. The former URLs `/how-we-build/` and `/it/how-we-build/` are static redirect pages written by the prerender (`scripts/redirect-page.mjs`), keeping the `#fragment`; the old `howwebuild` command is a hidden alias. `src/js/agent-playbook.test.js` checks the data, the Italian translations, and that blocks contain no personal paths, emails or private config (the site is public). Diagrams are SVGs drawn with Markasso and exported to `static/agent-playbook/`, with the Markasso source (`.markasso`, open it with File > Open or the Markasso MCP `diagram_open`) next to each SVG so it can be reopened and re-exported. Diagram labels are English only.

## Git Workflow

- Keep changes focused and use Conventional Commits.
