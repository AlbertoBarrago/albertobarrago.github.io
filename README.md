# ALBZ | Interactive Terminal Portfolio

An interactive, keyboard-first portfolio built as a terminal shell. It presents Alberto Barrago's experience, technical skills, open-source work, and contact details without a frontend framework or runtime dependencies.

**Live:** [albz.it](https://albz.it)

## Highlights

- Fully interactive terminal with command history and autocomplete
- Clickable commands for visitors unfamiliar with terminal interfaces
- Responsive layout with mobile command shortcuts
- Accessible live output, keyboard navigation, and reduced-motion support
- Four fullscreen Canvas games with keyboard and touch controls
- Subtle CRT treatment without compromising readability
- Vanilla JavaScript, ES modules, and strict JSDoc typing
- Zero runtime dependencies

## Terminal Commands

| Command | Description |
| --- | --- |
| `help` | List the available commands |
| `about` | Show profile, role, and current focus |
| `skills` | Display the technical toolbox by area |
| `experience` | Render the professional timeline |
| `projects` | List selected open-source projects |
| `contact` | Show contact details and social links |
| `cv` | Download the résumé |
| `games` | List the embedded games |
| `play <game>` | Launch `space`, `tetris`, `pong`, or `flappy` |
| `ls`, `tree` | Browse the portfolio as a filesystem |
| `neofetch` | Display a compact system profile |
| `history`, `date`, `clear` | Terminal utilities |

The shell also includes command aliases, tab completion, history navigation with the arrow keys, and a few intentionally undocumented easter eggs.

## Architecture

The application is a single-page vanilla JavaScript project built with Vite.

- `index.html` provides metadata, structured data, and the application mount point.
- `src/js/index.js` is the portfolio data layer.
- `src/js/app.js` owns terminal rendering, command routing, event delegation, history, autocomplete, and game lifecycle.
- `src/js/games/` contains isolated Canvas games. Each module returns a cleanup function to release listeners and animation frames.
- `src/styles/main.css` contains the global reset.
- `src/styles/page.css` contains the terminal, responsive, accessibility, and game styles.
- `static/` contains files copied directly into the production build.

The UI uses a single delegated event handler for terminal actions. Commands render deterministic HTML from trusted portfolio data, while user-entered values are escaped before being added to output.

## Requirements

- A current Node.js LTS release
- npm

## Local Development

```bash
git clone https://github.com/AlbertoBarrago/albertobarrago.github.io.git
cd albertobarrago.github.io
npm install
npm run dev
```

Vite prints the local development URL after startup.

## Available Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create the production build in `build/` |
| `npm run preview` | Serve the production build locally |
| `npm run deploy` | Build and publish `build/` to GitHub Pages |

No automated test suite or linter is currently configured. Production builds provide the baseline verification for changes.

## Project Structure

```text
.
├── index.html
├── src
│   ├── js
│   │   ├── app.js
│   │   ├── index.js
│   │   └── games
│   │       ├── flappyBird.js
│   │       ├── pong.js
│   │       ├── spaceInvaders.js
│   │       └── tetris.js
│   └── styles
│       ├── main.css
│       └── page.css
├── static
│   ├── CNAME
│   ├── albertobarrago_cv.pdf
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── jsconfig.json
├── package.json
└── vite.config.js
```

## Deployment

The production site is hosted on GitHub Pages with the custom domain `albz.it`.

```bash
npm run deploy
```

The deploy script builds the project, adds `.nojekyll`, and publishes the generated `build/` directory through the `gh-pages` package. The custom domain is configured by `static/CNAME`.

## Reusing the Project

You may copy and adapt the software for personal and other permitted noncommercial projects under the included license.

Before publishing a derivative portfolio, replace Alberto Barrago's name, biography, employment history, contact details, résumé, project descriptions, metadata, domain configuration, and other personal branding. The license does not grant a right to impersonate the original author.

Commercial use, including resale, paid client work, or selling templates derived from this project, requires a separate written license.

## License

Licensed under the [PolyForm Noncommercial License 1.0.0](LICENSE).

You may use, copy, modify, and distribute this software for permitted noncommercial purposes. Commercial use and resale are not permitted by the included license. This is a source-available license, not an OSI-approved open-source license.

Copyright © 2026 Alberto Barrago.
