# WebCard

Personal portfolio website on GitHub Pages featuring a retro Amiga Workbench-inspired interface with CRT effects.

If you like it, feel free to clone the repo and modify it as you prefer!

## Features

- **Retro Amiga Workbench UI** — Classic terminal-style design with boot sequence animation
- **CRT Effects** — Scanlines, flicker, and authentic retro aesthetics
- **Modem Dial-Up Sound** — Web Audio API synthesis of vintage connection sounds
- **Embedded Retro Games** — Space Invaders, Tetris, and Pong playable in-browser
- **Vanilla JS + Vite** — Zero runtime framework, pure ES modules with JSDoc types
- **Responsive Design** — Works on desktop and mobile
- **Interactive Sections** — About, Skills, Experience, and Contact
- **Downloadable CV** — Quick access to resume

## Tech Stack

| Category | Technology |
|----------|------------|
| Language | Vanilla JavaScript (ES2022+, JSDoc) |
| Build Tool | Vite 6 |
| Deployment | GitHub Pages via gh-pages |
| Games | Canvas API |
| Audio | Web Audio API |

## Getting Started

### Clone

```bash
git clone git@github.com:AlbertoBarrago/albertobarrago.github.io.git my-portfolio
cd my-portfolio
```

### Install

```bash
bun install
```

### Development

```bash
bun run dev
```

### Build

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

### Deploy to GitHub Pages

```bash
bun run deploy
```

## Project Structure

```
├── index.html              # Entry point with SEO meta tags
├── src/
│   ├── js/
│   │   ├── app.js          # Main application module
│   │   ├── index.js        # Portfolio data & constants
│   │   └── games/
│   │       ├── spaceInvaders.js
│   │       ├── tetris.js
│   │       └── pong.js
│   └── styles/
│       ├── main.css        # Global reset
│       └── page.css        # All component styles & CRT effects
├── static/
│   ├── albertobarrago_cv.pdf
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── vite.config.js
├── jsconfig.json
└── package.json
```

## License

Free to use and modify.
