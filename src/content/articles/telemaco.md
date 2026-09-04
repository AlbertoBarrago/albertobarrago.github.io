---
title: Telemaco: a headless browser engine in Rust, without the Chromium
date: 2026-09-04
tags: rust, browser, scraping, ai-agents, cdp, sideprojects
---

**Telemaco** is a headless browser engine I've been building in Rust. It runs real JavaScript through V8, keeps a real DOM tree, owns its own layout and paint pipeline, and speaks the Chrome DevTools Protocol, so Puppeteer and Playwright connect to it out of the box. No Chromium, no WebView, no 300 MB download. A 70 MB binary that starts instantly and loads a page in ~85 ms.

This is the story of how it came to be, why it exists, and the choices that shaped it.

## The problem: Chromium as a tax

For years, "headless browser" has meant one thing: headless Chrome. It works, but it carries a cost you only notice when you scale it.

- **The download.** Every CI runner, every fresh container, every teammate's laptop pulls a ~300 MB Chromium. Playwright and Puppeteer make this painless, which is exactly why nobody questions it.
- **The memory.** A single headless Chrome instance idles at 200+ MB. Spin up a few for parallel scraping and you're budgeting RAM like it's 2010.
- **The startup.** Two seconds to launch before you've even loaded a page.
- **The fingerprint.** Headless Chrome is trivially detectable. If you're scraping anything that cares, you're already fighting an anti-bot arms race.

None of this is inherent to the job. A browser engine is a parser, a DOM, a layout engine, a paint pipeline, and a JS runtime. Chromium is one very heavy way to assemble those pieces. I wanted a lighter one.

## The need that started it

Two concrete needs drove the project.

First, **efficient web search and extraction**. I work with colleagues who spend their days pulling structured data out of the web, like Salesforce records, MDN docs, product pages. The tooling for that is either a raw HTTP client (which can't run JavaScript) or a full browser (which is overkill). There was no middle ground: something that runs real JS and a real DOM, but is small enough to treat as a utility, not an infrastructure project.

Second, **end-to-end tests without Chromium**. If you've ever run a Playwright suite in CI, you know the drill: download the browser, hope the sandbox flags are right, watch the memory climb. I wanted the same CDP automation surface, the same `page.goto`, the same `page.evaluate`, but backed by something that doesn't need a browser install at all. A single binary that *is* the browser.

## Standing on the shoulders of many projects

I didn't want to reinvent a browser from scratch, and I didn't have to. The Rust ecosystem has quietly assembled most of the pieces, and Telemaco is deliberately built on top of them.

- **Servo's components**: `html5ever` for HTML parsing, `selectors` for CSS matching, `cssparser`, `servo_arc`. The DOM and CSS machinery that Mozilla's research browser spent years hardening.
- **`taffy`** for the layout engine, a pure-Rust flexbox/grid layout library.
- **`tiny-skia`** for rasterization and **`ab_glyph`** for glyph rendering, the paint pipeline, also pure Rust.
- **V8 through `deno_core`** for JavaScript. Real V8, the same engine Chrome uses, so JS semantics are exactly what you expect.
- **`chromiumoxide`** and the Chrome DevTools Protocol for the automation surface.

The project started as a fork of **Obscura** (Apache-2.0), a headless browser engine by h4ckf0r0day. That's the honest origin: I didn't start from a blank page, I started from a solid foundation and took it in a different direction. The crate names changed, the CLI surface changed, the project identity changed, and the codebase was adapted and extended for a practical, scraping- and agent-oriented focus. The attribution is in the repo's `NOTICE` file; this is a derivative work, and it says so.

## The architecture

Telemaco is a workspace of nine crates, one layer per crate, with cross-crate calls going through the layer above rather than sideways:

| Crate | Role |
|-------|------|
| `telemaco-cli` | CLI: `fetch`, `serve` (CDP server), `scrape`, `mcp` |
| `telemaco-cdp` | Chrome DevTools Protocol server (WebSocket) |
| `telemaco-js` | V8/`deno_core` runtime; DOM shim + JS/Rust bridge |
| `telemaco-dom` | DOM tree |
| `telemaco-net` | HTTP client, stealth client, cookie jar, robots cache, tracker blocklist |
| `telemaco-browser` | The `Page` type, navigation, JS evaluation |
| `telemaco-render` | Selector cascade, retained layout, paint, screenshots, PDF |
| `telemaco-mcp` | Stateful MCP automation tools |
| `telemaco` | Embeddable Rust library API |

A few invariants shaped the whole design:

- **One V8 isolate per process.** V8 is `!Send`, so all async runs on a `tokio` `LocalSet`, and every JS op goes through a single global lock. It serializes JS execution, which is fine for a browser engine; the DOM is single-threaded anyway.
- **One bad page must never hang a worker.** There's a V8 termination watchdog per page and a process-level hard deadline. A page that spins in an infinite loop gets killed, not the worker.
- **SSRF by default.** Loopback, RFC1918, and link-local fetches are blocked unless you explicitly pass `--allow-private-network`. A scraping tool that can reach your internal network is a liability; this closes it by default.

## What it looks like

Fetch a page and run real JavaScript:

```bash
$ telemaco fetch https://news.ycombinator.com --eval "document.title"
Hacker News
```

Drive it like headless Chrome, from Puppeteer:

```js
import puppeteer from 'puppeteer-core';

const browser = await puppeteer.connect({
  browserWSEndpoint: 'ws://127.0.0.1:9222/devtools/browser',
});
const page = await browser.newPage();
await page.goto('https://news.ycombinator.com');

const stories = await page.evaluate(() =>
  Array.from(document.querySelectorAll('.titleline > a'))
    .map(a => ({ title: a.textContent, url: a.href }))
);
```

Scrape many URLs in parallel:

```bash
$ telemaco scrape url1 url2 url3 --concurrency 25 --format json
```

And for AI agents, there's an MCP server that exposes the same browser to Claude Desktop, Cursor, or any MCP client:

```json
{
  "mcpServers": {
    "telemaco": { "command": "telemaco", "args": ["mcp"] }
  }
}
```

## The numbers

| Metric | Telemaco | Headless Chrome |
|--------|----------|-----------------|
| Memory | 30 MB | 200+ MB |
| Binary size | 70 MB | 300+ MB |
| Page load | 85 ms | ~500 ms |
| Startup | Instant | ~2 s |
| Anti-detect | Built-in | None |
| Puppeteer / Playwright | Yes | Yes |

Roughly 12x faster page loads and 6x less memory on framework pages, with the same CDP automation surface.

## Why "Telemaco"

The name is the son of Odysseus, the one who sets out to find news of his father. A searcher, by definition. It felt right for a tool whose whole job is to go out and bring back what's on the web.

## Not a product, a direction

Telemaco isn't trying to sell anything. It's a different vision of what a browser engine can be: small enough to be a utility, fast enough to be a tool, and honest about where it comes from. It's built on the work of a lot of respected projects and people, like Servo, taffy, tiny-skia, deno_core, Obscura, and it's open source under Apache-2.0, so anyone can take it and point it at their own problem.

If you've ever wished your scraping or your e2e tests didn't require a browser install, that's the itch it scratches. Clone it, build it, drive it.

- Landing page: [albz.it/telemaco](https://albz.it/telemaco/)
- Source: [github.com/AlbertoBarrago/telemaco](https://github.com/AlbertoBarrago/telemaco)
