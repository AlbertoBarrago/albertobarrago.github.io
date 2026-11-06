/**
 * @file Generates static/updates/markasso/index.html, the full release
 * history of Markasso for Mac, from the Sparkle appcast and the per-version
 * release notes published next to it. Sparkle only shows the newest notes in
 * its update alert, so users who skip versions read the rest here.
 *
 * Manual step, not part of `npm run build`: run `node
 * scripts/markasso-release-notes.mjs` after copying a new Mac update into
 * static/updates/markasso/ and before deploying. The test suite fails if the
 * committed page is out of date.
 *
 * Each notes file is `# Markasso <version>`, then the English notes, then the
 * Italian ones: each language is optional paragraphs followed by one bullet
 * list. Only `**bold**` and `` `code` `` inline markup is supported, and every
 * other character is HTML-escaped.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
export const UPDATES_DIR = join(ROOT, 'static/updates/markasso');
export const OUTPUT_FILE = join(UPDATES_DIR, 'index.html');
const PAGE_URL = 'https://albz.it/updates/markasso/';

/**
 * @typedef {{ version: string, build: string, date: string, notesFile: string }} Release
 * @typedef {{ kind: 'p', text: string } | { kind: 'ul', items: string[] }} Block
 * @typedef {{ en: Block[], it: Block[] }} Notes
 */

const MONTHS = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };

/** @param {string} value @returns {string} */
export function escapeHTML(value) {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

/**
 * Turns an RFC 822 pubDate into the YYYY-MM-DD date it names, in the
 * pubDate's own time zone (the day the release was published where it was
 * published), without going through Date and the machine's time zone.
 * @param {string} pubDate e.g. "Fri, 06 Nov 2026 12:52:45 +0100"
 * @returns {string}
 */
export function pubDateToISO(pubDate) {
	const match = /(\d{1,2}) ([A-Z][a-z]{2}) (\d{4})/.exec(pubDate);
	const month = match ? MONTHS[/** @type {keyof typeof MONTHS} */ (match[2])] : undefined;
	if (!match || !month) throw new Error(`Unrecognised pubDate: ${pubDate}`);
	return `${match[3]}-${month}-${match[1].padStart(2, '0')}`;
}

/**
 * Reads the releases from the appcast, newest first by build number.
 * @param {string} xml
 * @returns {Release[]}
 */
export function parseAppcast(xml) {
	const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
	/** @param {string} item @param {string} tag @returns {string} */
	const field = (item, tag) => {
		const match = new RegExp(`<${tag}>([^<]*)</${tag}>`).exec(item);
		if (!match) throw new Error(`Appcast item without <${tag}>: ${item.slice(0, 120)}`);
		return match[1].trim();
	};
	return items
		.map((item) => {
			const version = field(item, 'sparkle:shortVersionString');
			const build = field(item, 'sparkle:version');
			return { version, build, date: pubDateToISO(field(item, 'pubDate')), notesFile: `Markasso-${version}-${build}.md` };
		})
		.sort((a, b) => Number(b.build) - Number(a.build));
}

/**
 * Splits a notes file into its English and Italian halves. Each language
 * section ends with a bullet list, so the first list closes the English half.
 * A file with a single section is treated as English only.
 * @param {string} markdown
 * @returns {Notes}
 */
export function parseNotes(markdown) {
	const lines = markdown.replace(/\r\n/g, '\n').split('\n');
	if (lines[0]?.startsWith('# ')) lines.shift();

	/** @type {Block[]} */
	const blocks = [];
	for (const chunk of lines.join('\n').split(/\n\s*\n/)) {
		const chunkLines = chunk.split('\n').filter((line) => line.trim() !== '');
		if (chunkLines.length === 0) continue;
		if (chunkLines[0].startsWith('- ')) {
			/** @type {string[]} */
			const items = [];
			for (const line of chunkLines) {
				if (line.startsWith('- ')) items.push(line.slice(2).trim());
				else items[items.length - 1] += ` ${line.trim()}`;
			}
			blocks.push({ kind: 'ul', items });
		} else {
			blocks.push({ kind: 'p', text: chunkLines.map((line) => line.trim()).join(' ') });
		}
	}

	const firstList = blocks.findIndex((block) => block.kind === 'ul');
	if (firstList === -1) return { en: blocks, it: [] };
	return { en: blocks.slice(0, firstList + 1), it: blocks.slice(firstList + 1) };
}

/**
 * Escapes the text, then renders `code` spans and **bold**. Code spans are
 * cut out first so asterisks inside them stay literal.
 * @param {string} text
 * @returns {string}
 */
export function renderInline(text) {
	return text
		.split(/(`[^`]+`)/)
		.map((part) => {
			if (part.length > 1 && part.startsWith('`') && part.endsWith('`')) {
				return `<code>${escapeHTML(part.slice(1, -1))}</code>`;
			}
			return escapeHTML(part).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
		})
		.join('');
}

/** @param {Block[]} blocks @returns {string} */
function renderBlocks(blocks) {
	return blocks
		.map((block) => block.kind === 'p'
			? `\t\t\t<p>${renderInline(block.text)}</p>`
			: `\t\t\t<ul>\n${block.items.map((item) => `\t\t\t\t<li>${renderInline(item)}</li>`).join('\n')}\n\t\t\t</ul>`)
		.join('\n');
}

/**
 * The download for the newest release: the full package (app plus
 * install.sh) when it was published, otherwise Sparkle's update archive.
 * @param {Release} release
 * @param {(file: string) => boolean} exists
 * @returns {string | null}
 */
export function downloadFile(release, exists) {
	const full = `Markasso-${release.version}.zip`;
	const update = `Markasso-${release.version}-${release.build}.zip`;
	if (exists(full)) return full;
	if (exists(update)) return update;
	return null;
}

/**
 * @param {{ release: Release, notes: Notes }[]} entries newest first
 * @param {string | null} download file name of the newest release's download
 * @returns {string}
 */
export function renderPage(entries, download) {
	const sections = entries.map(({ release, notes }, index) => {
		const id = `v${release.version}`;
		const latest = index === 0
			? ` <span class="badge">latest</span>`
			: '';
		const downloadLink = index === 0 && download
			? `\n\t\t<p class="download"><a href="${escapeHTML(download)}">Download Markasso ${escapeHTML(release.version)}</a> <span class="muted">(${escapeHTML(download)})</span></p>`
			: '';
		const italian = notes.it.length > 0
			? `\n\t\t<div class="lang" lang="it">\n\t\t\t<p class="label">Italiano</p>\n${renderBlocks(notes.it)}\n\t\t</div>`
			: '';
		return `\t<section class="release" id="${escapeHTML(id)}">
		<h2><a href="#${escapeHTML(id)}">Markasso ${escapeHTML(release.version)}</a>${latest}</h2>
		<p class="meta">Build ${escapeHTML(release.build)} <span class="muted">·</span> <time datetime="${escapeHTML(release.date)}">${escapeHTML(release.date)}</time></p>${downloadLink}
		<div class="lang" lang="en">
			<p class="label">English</p>
${renderBlocks(notes.en)}
		</div>${italian}
	</section>`;
	});

	return `<!doctype html>
<!-- Generated by scripts/markasso-release-notes.mjs from appcast.xml and the Markasso-*.md notes. Do not edit by hand. -->
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Markasso for Mac: release notes</title>
<meta name="description" content="Every version of Markasso for Mac with its release notes, in English and Italian.">
<meta name="color-scheme" content="light dark">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="canonical" href="${PAGE_URL}">
<link rel="alternate" type="application/rss+xml" title="Markasso for Mac updates" href="appcast.xml">
<style>
:root { --bg: #f6f8fa; --fg: #2b3440; --bright: #0b0f14; --muted: #6a7686; --border: #d5dde6; --cyan: #0f766e; --surface: #ffffff;
	--mono: "SFMono-Regular", "Cascadia Code", "Roboto Mono", Consolas, "Liberation Mono", monospace; }
@media (prefers-color-scheme: dark) {
	:root { --bg: #0b0f14; --fg: #b8c4d4; --bright: #e7edf5; --muted: #667485; --border: #22303d; --cyan: #5eead4; --surface: #10161d; }
}
* { box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; }
body { margin: 0; background: var(--bg); color: var(--fg); font: 15px/1.7 var(--mono); }
main { max-width: 760px; margin: 0 auto; padding: 2.5rem 16px 4rem; }
nav { display: flex; justify-content: space-between; flex-wrap: wrap; gap: .5rem 1rem; margin-bottom: 2rem; }
a { color: var(--cyan); text-underline-offset: 3px; }
h1 { color: var(--bright); font-size: 1.6rem; line-height: 1.3; margin: 0 0 .5rem; }
.intro { margin: 0 0 1rem; }
.toc { display: flex; flex-wrap: wrap; gap: .25rem .9rem; padding: 0; margin: 0 0 1rem; list-style: none; }
.release { margin-top: 2.5rem; }
h2 { color: var(--bright); font-size: 1.15rem; margin: 0 0 .25rem; border-bottom: 1px solid var(--border); padding-bottom: .3rem; }
h2::before { content: "## "; color: var(--muted); }
h2 a { color: inherit; text-decoration: none; }
h2 a:hover { text-decoration: underline; }
.badge { font-size: .75rem; font-weight: normal; color: var(--bg); background: var(--cyan); border-radius: 4px; padding: .05rem .4rem; margin-left: .4rem; vertical-align: middle; }
.meta, .muted, .label { color: var(--muted); }
.meta { margin: 0 0 .75rem; font-size: .9rem; }
.download { margin: 0 0 1rem; overflow-wrap: anywhere; }
.lang { background: var(--surface); border: 1px solid var(--border); border-radius: 6px; padding: .75rem 1rem; margin: .75rem 0; }
.label { margin: 0; font-size: .8rem; text-transform: uppercase; letter-spacing: .08em; }
.lang p:not(.label) { margin: .5rem 0; }
.lang ul { padding-left: 1.2rem; margin: .5rem 0 .25rem; }
li { margin: .35rem 0; }
code { color: var(--bright); background: color-mix(in srgb, var(--cyan) 12%, transparent); border-radius: 3px; padding: 0 .25rem; }
strong { color: var(--bright); }
footer { margin-top: 3rem; font-size: .85rem; }
</style>
</head>
<body>
<main>
	<nav aria-label="Site">
		<a href="/">← albz.it</a>
		<a href="https://markasso.it/mac">markasso.it/mac</a>
	</nav>

	<h1>Markasso for Mac: release notes</h1>
	<p class="intro">Every version of Markasso for Mac, newest first, with its notes in English and Italian. The app's update alert shows only the latest notes: if you skipped a few versions, this is what changed in between.</p>
	<p class="intro muted" lang="it">Tutte le versioni di Markasso per Mac, dalla più recente, con le note in inglese e in italiano.</p>
	<ul class="toc" aria-label="Versions">
${entries.map(({ release }) => `\t\t<li><a href="#v${escapeHTML(release.version)}">${escapeHTML(release.version)}</a></li>`).join('\n')}
	</ul>

${sections.join('\n\n')}

	<footer class="muted">Updates are delivered inside the app through its <a href="appcast.xml">update feed</a>.</footer>
</main>
</body>
</html>
`;
}

/**
 * Builds the page from the files in `dir`.
 * @param {string} dir
 * @returns {string}
 */
export function generate(dir = UPDATES_DIR) {
	const releases = parseAppcast(readFileSync(join(dir, 'appcast.xml'), 'utf8'));
	if (releases.length === 0) throw new Error('The appcast lists no releases');
	const entries = releases.map((release) => {
		const path = join(dir, release.notesFile);
		if (!existsSync(path)) throw new Error(`Missing release notes for ${release.version} (${release.build}): ${release.notesFile}`);
		return { release, notes: parseNotes(readFileSync(path, 'utf8')) };
	});
	return renderPage(entries, downloadFile(releases[0], (file) => existsSync(join(dir, file))));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
	writeFileSync(OUTPUT_FILE, generate());
	console.log(`Wrote ${OUTPUT_FILE}`);
}
