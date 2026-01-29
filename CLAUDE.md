# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Retro Amiga Workbench 3.1-inspired portfolio website. Pure vanilla JavaScript (ES2022+) with zero runtime dependencies. Uses Vite 6 as build tool and deploys to GitHub Pages. Package manager is Bun.

## Commands

```bash
bun run dev        # Start Vite dev server
bun run build      # Production build (output: build/)
bun run preview    # Preview production build
bun run deploy     # Build + deploy to GitHub Pages
```

No test suite or linter is configured.

## Architecture

Single-page app with a state-based, event-delegation pattern. No framework.

- **Entry point**: `index.html` → imports `src/js/app.js` as ES module
- **Data layer**: `src/js/index.js` — portfolio content (about, skills, experience, contact links)
- **App controller**: `src/js/app.js` — boot sequence, section rendering via HTML template functions, event delegation on a single root handler using `data-*` attributes, game launcher
- **Games**: `src/js/games/` — self-contained modules (Space Invaders, Tetris, Pong), each exports an init function that returns a cleanup function. Uses Canvas API.
- **Styles**: `src/styles/main.css` (reset) + `src/styles/page.css` (all component styles, CRT effects, responsive at 600px breakpoint)
- **Static assets**: `static/` directory (favicon, CV PDF, robots.txt, sitemap.xml)

## Key Patterns

- **JSDoc typing throughout** with strict TypeScript checking enabled via `jsconfig.json` (`checkJs: true`, ES2022 target). This is vanilla JS with JSDoc types, not TypeScript.
- **ES module system** — all files use `import`/`export`
- **HTML templates** built with tagged template literals in `app.js`
- **Game registry**: `GAME_INIT` object maps game names to factory functions
- **Web Audio API** for modem dial-up sound synthesis
- **Local storage** for game high scores

## Git Workflow

- **Main branch**: `main` (target for PRs)
- **Development branch**: `develop`
- Commit style: conventional-ish (`fix:`, `refactor:`, `chore:`, `feat:`)
