/**
 * @file Interactive terminal portfolio
 * @description Keyboard-first portfolio shell with command history, shortcuts,
 * accessible output, and embedded retro games.
 */

import {
	name, role, location, profile, skills, experience,
	experimentalProjects, openSource, brewFormulas, utils, links, version, downloadCv,
} from './index.js';
import { initSpaceInvaders } from './games/spaceInvaders.js';
import { initTetris } from './games/tetris.js';
import { initPong } from './games/pong.js';
import { initFlappyBird } from './games/flappyBird.js';
import { printConsoleBanner } from './console-banner.js';
import { escapeHTML } from './utils.js';
import { articles, getArticleHTML } from './articles.js';

/** @typedef {'space' | 'tetris' | 'pong' | 'flappy'} GameName */
/** @typedef {{ label: string, key: string }} GameControl */

const PROMPT = 'alberto@portfolio:~';
const COMMAND_NAMES = Object.freeze([
	'help', 'about', 'skills', 'experience', 'projects', 'brew', 'lab', 'articles', 'utils', 'contact', 'cv',
	'games', 'play', 'ls', 'tree', 'neofetch', 'history', 'date', 'clear', 'rss',
]);
const MOBILE_COMMANDS = Object.freeze([
	['help', 'help'], ['about', 'about'], ['skills', 'skills'],
	['projects', 'projects'], ['brew', 'brew'], ['lab', 'lab'], ['articles', 'articles'], ['utils', 'utils'], ['games', 'games'], ['contact', 'contact'],
]);

/** @type {Readonly<Record<GameName, string>>} */
const GAME_TITLES = Object.freeze({
	space: 'SPACE INVADERS', tetris: 'TETRIS', pong: 'PONG', flappy: 'FLAPPY BIRD',
});

/** @type {Readonly<Record<GameName, readonly GameControl[]>>} */
const GAME_CONTROLS = Object.freeze({
	space: [
		{ label: 'START', key: 'Enter' }, { label: '←', key: 'ArrowLeft' },
		{ label: 'FIRE', key: ' ' }, { label: '→', key: 'ArrowRight' },
	],
	tetris: [
		{ label: 'START', key: 'Enter' }, { label: '←', key: 'ArrowLeft' },
		{ label: 'ROT', key: 'ArrowUp' }, { label: '→', key: 'ArrowRight' },
		{ label: '↓', key: 'ArrowDown' },
	],
	pong: [
		{ label: 'START', key: 'Enter' }, { label: '↑', key: 'ArrowUp' },
		{ label: '↓', key: 'ArrowDown' },
	],
	flappy: [{ label: 'START', key: 'Enter' }, { label: 'FLAP', key: ' ' }],
});

/** @type {Readonly<Record<GameName, (canvas: HTMLCanvasElement, onExit: () => void) => (() => void)>>} */
const GAME_INIT = Object.freeze({
	space: initSpaceInvaders, tetris: initTetris, pong: initPong, flappy: initFlappyBird,
});

const SECRET_ART = Object.freeze([
	"        /\\_/\\",
	"       ( o.o )",
	"        > ^ <",
	"       /|   |\\",
	"      (_|   |_)",
	"         W W",
	"",
	"      I LOVE CAT",
]);
const ALBZ_ART = Object.freeze([
	"    _    _     ____   _____",
	"   / \\  | |   | __ ) |__  /",
	"  / _ \\ | |   |  _ \\   / /",
	" / ___ \\| |___| |_) | / /_",
	"/_/   \\_\\_____|____/ /____|",
]);
const GLITCH_CHARS = '#%@*+=-<>/\\|';

const REPEATING_CONTROL_KEYS = new Set(['ArrowLeft', 'ArrowRight', 'ArrowDown']);
/** @type {Map<number, { key: string, button: HTMLElement, delayId?: number, intervalId?: number }>} */
const activeControlPointers = new Map();
/** @type {string[]} */
const commandHistory = [];
let historyIndex = 0;
let lastTabPrefix = null;
/** @type {(() => void) | null} */
let gameCleanup = null;
/** @type {IntersectionObserver | null} */
let tocObserver = null;
/** @type {{ container: HTMLElement, handler: () => void } | null} */
let tocScrollFallback = null;

const app = /** @type {HTMLDivElement} */ (document.getElementById('app'));

function terminalHTML() {
	const shortcuts = MOBILE_COMMANDS.map(([label, command]) =>
		`<button class="mobile-command" type="button" data-command="${command}">${label}</button>`
	).join('');

	return `<main class="terminal" aria-label="Alberto Barrago portfolio terminal">
		<div class="terminal-glow" aria-hidden="true"></div>
		<section class="terminal-output" id="terminal-output" role="log" aria-live="polite" aria-relevant="additions"></section>
		<div class="terminal-bottom">
			<form class="terminal-input-line" id="terminal-form" autocomplete="off">
				<label class="sr-only" for="terminal-input">Terminal command</label>
				<span class="prompt" aria-hidden="true"><span class="prompt-user">${PROMPT}</span><span class="prompt-symbol">$</span></span>
				<input id="terminal-input" class="terminal-input" name="command" type="text"
					autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
					aria-describedby="terminal-hint" autofocus>
			</form>
			<p class="sr-only" id="terminal-hint">Type help to list available commands. Use up and down arrows for command history.</p>
			<nav class="mobile-commands" aria-label="Quick terminal commands">${shortcuts}</nav>
		</div>
	</main>
	<div class="crt-overlay" aria-hidden="true"></div>`;
}

function bannerHTML() {
	return `<div class="ascii-banner accent" role="img" aria-label="ALBZ">${ALBZ_ART.join('\n')}</div>
<div class="boot-copy"><span class="muted">Portfolio shell v${version}</span>
<span>${role} · Product Builder</span>

15+ years: from INPS distribution systems to products for global brands.
Technical leadership · Architecture · Web · Mobile · Cloud · AI

I turn ambiguity into reliable systems and useful products.
<span class="muted">Based in ${location}</span>
${articles.length ? `
<span class="muted">Latest write-up:</span> <button class="inline-command command" data-command="cat ${articles[articles.length - 1].slug}.md">${articles[articles.length - 1].title} →</button>` : ''}

Type <button class="inline-command command" data-command="help">help</button> to explore, or use the shortcuts below.</div>`;
}

function helpHTML() {
	const commands = [
		['about', 'Short profile and current role'],
		['skills', 'Technical toolbox by area'],
		['experience', 'Professional timeline'],
		['projects', 'Selected open-source work'],
		['brew', 'Homebrew formulae I maintain'],
		['lab', 'Experimental work in progress'],
		['articles', 'Technical articles and notes'],
		['rss', 'Subscribe to the articles feed'],
		['utils', 'Useful free resources and links'],
		['contact', 'Ways to get in touch'],
		['cv', 'Download my resume'],
		['games', 'List embedded retro games'],
		['play &lt;game&gt;', 'Launch space, tetris, pong, or flappy'],
		['ls / tree', 'Browse the portfolio filesystem'],
		['neofetch', 'Compact system profile'],
		['history / date / clear', 'Terminal utilities'],
	];

	return `<div class="output-title">Available commands</div>
<div class="command-list">${commands.map(([command, description]) =>
		`<div><button class="inline-command command" data-command="${command.split(' ')[0]}">${command}</button><span class="muted">${description}</span></div>`
	).join('')}</div>
<div class="output-note">Tip: press <span class="key">Tab</span> to autocomplete and <span class="key">↑</span>/<span class="key">↓</span> for history.</div>`;
}

function aboutHTML() {
	return `<div class="output-title">${name}</div>
<div class="key-value"><span class="label">role</span><span>${role}</span>
<span class="label">location</span><span>${location}</span>
<span class="label">focus</span><span>Product engineering · architecture · technical leadership</span>
<span class="label">status</span><span class="green">Building useful things</span></div>
<p class="prose">${profile}</p>
<div class="output-links"><button class="inline-command command" data-command="projects">view projects</button><button class="inline-command command" data-command="contact">contact me</button><button class="inline-command command" data-command="cv">download cv</button></div>`;
}

function skillsHTML() {
	return `<div class="output-title">Technical toolbox</div>
<div class="skills-list">${Object.entries(skills).map(([category, items]) =>
		`<div class="skill-row"><span class="label">${category}</span><span>${items.join('  ·  ')}</span></div>`
	).join('')}</div>`;
}

function experienceHTML() {
	return `<div class="output-title">Experience</div>
<div class="timeline">${experience.map((job) => `<article class="timeline-item">
	<span class="timeline-period">${job.period}</span>
	<div><div><span class="green">${job.role}</span> <span class="muted">@ ${job.company}</span></div>
	<p>${job.highlight}</p></div>
</article>`).join('')}</div>`;
}

function projectsHTML() {
	return `<div class="output-title">Selected projects</div>
<div class="project-list">${openSource.map((project) => `<article class="project-item">
	<div><a class="terminal-link project-name" href="${project.url}" target="_blank" rel="noopener noreferrer">${project.name} ↗</a><span class="project-language">${project.language}</span></div>
	<p>${project.description}</p>
</article>`).join('')}</div>`;
}

function brewHTML() {
	return `<div class="output-title">Homebrew formulae</div>
<p class="prose">Command-line tools I've packaged and maintain via Homebrew taps.</p>
<div class="project-list">${brewFormulas.map((formula) => `<article class="project-item">
	<div><a class="terminal-link project-name" href="${formula.url}" target="_blank" rel="noopener noreferrer">${formula.name} ↗</a><span class="project-language">${formula.tap}</span></div>
	<p>${formula.description}</p>
	<p class="brew-install"><code>${formula.install}</code></p>
</article>`).join('')}</div>`;
}

function labHTML() {
	const items = experimentalProjects
		.map(
			(project) => `<article class="project-item lab-project">
	<div class="lab-project-meta"><span class="project-status">${project.status}</span><span class="project-language">${project.language}</span></div>
	<a class="terminal-link project-name" href="${project.url}" target="_blank" rel="noopener noreferrer">${project.name} ↗</a>
	<p>${project.description}</p>
	<p class="lab-project-focus"><span class="label">focus</span>${project.focus}</p>
</article>`
		)
		.join('');

	return `<div class="output-title">Workbench Lab</div>
<p class="prose">Experimental products in active development. Scope and direction may evolve as ideas are validated.</p>
${items}`;
}

/** @param {string} isoDate @returns {string} */
function formatDateIT(isoDate) {
	if (!isoDate) return isoDate;
	const parsed = new Date(`${isoDate}T00:00:00`);
	if (Number.isNaN(parsed.getTime())) return isoDate;
	return new Intl.DateTimeFormat('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(parsed);
}

function articlesHTML() {
	if (articles.length === 0) {
		return `<div class="output-title">Articles</div>
<p class="prose muted">No articles yet.</p>`;
	}
	const ascending = [...articles].sort((a, b) => a.date.localeCompare(b.date));
	return `<div class="output-title">Articles</div>
<div class="project-list">${ascending.map((article) => `<article class="project-item">
	<div><button class="terminal-link project-name inline-command" data-command="cat ${article.slug}.md">${article.title} ↗</button><span class="project-language">${formatDateIT(article.date)}</span></div>
	<p class="muted">${article.tags.join('  ·  ')}</p>
</article>`).join('')}</div>`;
}

const WORDS_PER_MINUTE = 200;

/** @param {string} html @returns {{ words: number, chars: number, minutes: number }} */
function articleStats(html) {
	const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
	const words = text ? text.split(' ').length : 0;
	return { words, chars: text.length, minutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)) };
}

/** @param {string} slug @returns {string} */
function articleReaderHTML(slug) {
	const index = articles.findIndex((article) => article.slug === slug);
	const meta = articles[index];
	const stats = articleStats(getArticleHTML(slug) ?? '');
	const previous = articles[index - 1];
	const next = articles[index + 1];
	const nav = [
		previous
			? `<button class="reader-nav-link" type="button" data-action="read-article" data-slug="${previous.slug}">← ${previous.title}</button>`
			: '<span></span>',
		next
			? `<button class="reader-nav-link reader-nav-next" type="button" data-action="read-article" data-slug="${next.slug}">${next.title} →</button>`
			: '<span></span>',
	].join('');
	return `<div class="article-reader" id="article-reader">
		<div class="article-reader-topbar">
			<button class="reader-back" type="button" data-action="close-reader">back</button>
			<div class="reader-actions">
				<button class="reader-action reader-toc-toggle" type="button" data-action="toggle-toc" id="reader-toc-toggle" hidden>chapters</button>
				<button class="reader-action" type="button" data-action="share-article" data-slug="${slug}">share</button>
				<button class="reader-action" type="button" data-action="copy-article-link" data-slug="${slug}">copy link</button>
				<span class="reader-hint muted">ESC · CLOSE</span>
			</div>
		</div>
		<div class="article-reader-body">
			<aside class="reader-toc" id="reader-toc" hidden></aside>
			<div class="article-reader-main">
				<article class="prose">
					<h1>${meta.title}</h1>
					<p class="reader-meta muted">${formatDateIT(meta.date)}${meta.tags.length ? ` · ${meta.tags.join(' · ')}` : ''}</p>
					<p class="reader-stats muted">${stats.words.toLocaleString()} words · ${stats.chars.toLocaleString()} chars · ~${stats.minutes} min read</p>
					${getArticleHTML(slug)}
				</article>
				<nav class="reader-nav">${nav}</nav>
			</div>
		</div>
	</div>`;
}

/** @typedef {{ id: string, text: string, level: 2 | 3 }} TocEntry */

/** @param {string} text @returns {string} */
function slugifyHeading(text) {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, '')
		.trim()
		.replace(/\s+/g, '-');
}

/** @param {HTMLElement} overlay */
function buildArticleTOC(overlay) {
	const toc = /** @type {HTMLElement} */ (overlay.querySelector('#reader-toc'));
	const headings = /** @type {NodeListOf<HTMLHeadingElement>} */ (
		overlay.querySelectorAll('.prose h2, .prose h3')
	);
	if (headings.length === 0) return;

	const used = new Set();
	const entries = Array.from(headings).map((heading) => {
		let id = slugifyHeading(heading.textContent ?? '');
		while (used.has(id) || !id) id = `${id || 'section'}-${used.size + 1}`;
		used.add(id);
		heading.id = id;
		return /** @type {TocEntry} */ ({
			id, text: heading.textContent ?? '', level: heading.tagName === 'H2' ? 2 : 3,
		});
	});

	toc.innerHTML = `<span class="reader-toc-title">chapters</span><ol class="reader-toc-list">${
		entries.map((entry) =>
			`<li class="reader-toc-item level-${entry.level}"><button class="reader-toc-link" type="button" data-action="goto-heading" data-target="${entry.id}">${entry.text}</button></li>`
		).join('')
	}</ol>`;
	toc.hidden = false;
	overlay.classList.add('has-toc');
	const toggle = /** @type {HTMLButtonElement | null} */ (overlay.querySelector('#reader-toc-toggle'));
	if (toggle) toggle.hidden = false;
	observeArticleHeadings(overlay, Array.from(headings));
}

/** @param {HTMLElement} overlay @param {HTMLHeadingElement[]} headings */
function observeArticleHeadings(overlay, headings) {
	tocObserver?.disconnect();
	tocScrollFallback?.container.removeEventListener('scroll', tocScrollFallback.handler);
	tocScrollFallback = null;
	const container = /** @type {HTMLElement} */ (overlay.querySelector('.article-reader-body'));
	const links = /** @type {NodeListOf<HTMLElement>} */ (overlay.querySelectorAll('.reader-toc-link'));
	/** @type {Set<string>} */
	const visible = new Set();

	/** @param {string} id */
	const setActive = (id) => {
		links.forEach((link) => link.classList.toggle('is-active', link.dataset.target === id));
	};

	/** @returns {boolean} true when the container is scrolled to (or near) the bottom */
	const isAtBottom = () => container.scrollTop + container.clientHeight >= container.scrollHeight - 4;

	tocObserver = new IntersectionObserver((observerEntries) => {
		for (const entry of observerEntries) {
			if (entry.isIntersecting) visible.add(entry.target.id);
			else visible.delete(entry.target.id);
		}
		const active = headings.find((heading) => visible.has(heading.id));
		if (active) setActive(active.id);
		else if (isAtBottom()) {
			setActive(headings[headings.length - 1].id);
		}
	}, { root: container, rootMargin: '0px 0px -72% 0px', threshold: 0 });

	headings.forEach((heading) => /** @type {IntersectionObserver} */ (tocObserver).observe(heading));
	setActive(headings[0].id);

	// On short screens / short trailing sections the last heading's trigger zone
	// (shrunk by rootMargin) can sit above the scrollable bottom, so it never
	// crosses the IntersectionObserver threshold. A plain scroll listener
	// guarantees the last chapter still activates once the user hits bottom.
	const scrollHandler = () => { if (isAtBottom()) setActive(headings[headings.length - 1].id); };
	container.addEventListener('scroll', scrollHandler, { passive: true });
	tocScrollFallback = { container, handler: scrollHandler };
}

/** @param {string} slug */
function openArticleReader(slug) {
	document.getElementById('article-reader')?.remove();
	input.blur();
	const wrapper = document.createElement('div');
	wrapper.innerHTML = articleReaderHTML(slug);
	const overlay = /** @type {HTMLDivElement} */ (wrapper.firstElementChild);
	app.appendChild(overlay);
	overlay.scrollTop = 0;
	buildArticleTOC(overlay);
	if (window.location.pathname !== `/articles/${slug}/`) {
		window.history.pushState(null, '', `/articles/${slug}/`);
	}
}

function closeArticleReader() {
	tocObserver?.disconnect();
	tocObserver = null;
	tocScrollFallback?.container.removeEventListener('scroll', tocScrollFallback.handler);
	tocScrollFallback = null;
	document.getElementById('article-reader')?.remove();
	if (window.location.pathname.startsWith('/articles/')) {
		window.history.pushState(null, '', '/');
	}
	input?.focus({ preventScroll: true });
}

/** @param {string} slug @returns {string} */
function articleURL(slug) {
	return `${window.location.origin}/articles/${slug}/`;
}

/** @param {HTMLElement} button */
function flashActionLabel(button) {
	const original = button.textContent;
	button.textContent = 'copied ✓';
	button.disabled = true;
	window.setTimeout(() => {
		button.textContent = original;
		button.disabled = false;
	}, 1500);
}

/** @param {string} slug @param {HTMLElement} button */
async function copyArticleLink(slug, button) {
	try {
		await navigator.clipboard.writeText(articleURL(slug));
		flashActionLabel(button);
	} catch {
		window.prompt('Copy this link:', articleURL(slug));
	}
}

/** @param {string} slug @param {HTMLElement} button */
async function shareArticle(slug, button) {
	const article = articles.find((entry) => entry.slug === slug);
	const url = articleURL(slug);
	if (navigator.share) {
		try {
			await navigator.share({ title: article?.title ?? slug, url });
		} catch {
			/* user cancelled the native share sheet */
		}
		return;
	}
	await copyArticleLink(slug, button);
}

function utilsHTML() {
	return `<div class="output-title">/utils</div>
<p class="prose">Useful free resources: books, courses, docs, and tools I keep coming back to.</p>
${utils.map((group) => `<div class="utils-group">
	<div class="utils-category">${group.category}</div>
	<div class="project-list">${group.items.map((item) => `<article class="project-item">
		<div><a class="terminal-link project-name" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.name} ↗</a></div>
		<p>${item.description}</p>
	</article>`).join('')}</div>
</div>`).join('')}</div>`;
}

function contactHTML() {
	return `<div class="output-title">Let's build something useful</div>
<div class="key-value"><span class="label">email</span><a class="terminal-link" href="${links.email}">albertobarrago@gmail.com</a>
<span class="label">github</span><a class="terminal-link" href="${links.github}" target="_blank" rel="noopener noreferrer">github.com/AlbertoBarrago ↗</a>
<span class="label">bluesky</span><a class="terminal-link" href="${links.bsky}" target="_blank" rel="noopener noreferrer">@albzoser.bsky.social ↗</a>
<span class="label">location</span><span>${location}</span></div>`;
}

function gamesHTML() {
	return `<div class="output-title">/games</div>
<div class="game-list">${Object.entries(GAME_TITLES).map(([game, title]) =>
		`<button class="game-command" data-command="play ${game}"><span>${title}</span><span class="muted">play ${game}</span></button>`
	).join('')}</div>
<div class="output-note">Games open fullscreen. Press <span class="key">Esc</span> to return.</div>`;
}

function treeHTML() {
	return `<div class="tree"><span class="blue">~</span>
├── <button class="inline-command file" data-command="about">about.txt</button>
├── <button class="inline-command directory" data-command="skills">skills/</button>
├── <button class="inline-command file" data-command="experience">experience.log</button>
├── <button class="inline-command directory" data-command="projects">projects/</button>
├── <button class="inline-command directory" data-command="brew">brew/</button>
├── <button class="inline-command directory" data-command="lab">lab/</button>
├── <button class="inline-command directory" data-command="articles">articles/</button>
├── <button class="inline-command directory" data-command="utils">utils/</button>
├── <button class="inline-command file" data-command="contact">contact.vcf</button>
├── <button class="inline-command file" data-command="cv">albertobarrago_cv.pdf</button>
└── <button class="inline-command directory" data-command="games">games/</button></div>`;
}

function neofetchHTML() {
	return `<div class="neofetch"><div class="neofetch-mark" aria-hidden="true">╭─────╮
│ A B │
│ L Z │
╰─────╯</div><div><span class="accent">${name}</span>
<span class="muted">─${'─'.repeat(name.length - 1)}</span>
<span><span class="label">Role:</span> ${role}</span>
<span><span class="label">Base:</span> ${location}</span>
<span><span class="label">Stack:</span> JavaScript, Swift, Java, Python</span>
<span><span class="label">Shell:</span> albz-sh ${version}</span>
<span><span class="label">Runtime:</span> Vanilla JS, zero dependencies</span>
<span class="palette"><i></i><i></i><i></i><i></i><i></i><i></i></span></div></div>`;
}

function lsHTML() {
	return `<div class="ls-output"><button class="inline-command file" data-command="about">about.txt</button><button class="inline-command directory" data-command="skills">skills/</button><button class="inline-command file" data-command="experience">experience.log</button><button class="inline-command directory" data-command="projects">projects/</button><button class="inline-command directory" data-command="brew">brew/</button><button class="inline-command directory" data-command="lab">lab/</button><button class="inline-command directory" data-command="articles">articles/</button><button class="inline-command directory" data-command="utils">utils/</button><button class="inline-command file" data-command="contact">contact.vcf</button><button class="inline-command directory" data-command="games">games/</button></div>`;
}

/** @param {readonly string[]} art @param {number} intensity @returns {string} */
function glitchArt(art, intensity) {
	return art.map((line) => line.split('').map((character) =>
		character === ' ' || Math.random() >= intensity
			? character
			: GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
	).join('')).join('\n');
}

/** @param {number} intensity @returns {string} */
function glitchFrame(intensity) {
	return glitchArt(SECRET_ART, intensity);
}

/**
 * Boot-time glitch reveal for the ALBZ banner. Purely additive: it settles on
 * the exact same static art, so the final look is unchanged.
 */
function animateBannerGlitch() {
	const banner = output.querySelector('.ascii-banner');
	if (!banner) return;
	const finalText = ALBZ_ART.join('\n');
	const totalFrames = 9;
	let frame = 0;
	const intervalId = window.setInterval(() => {
		frame += 1;
		if (frame >= totalFrames) {
			window.clearInterval(intervalId);
			banner.textContent = finalText;
			return;
		}
		banner.textContent = glitchArt(ALBZ_ART, Math.max(0, 0.55 - frame * 0.06));
	}, 70);
}

function launchCatEasterEgg() {
	const block = document.createElement('div');
	block.className = 'output-block ascii-banner accent';
	output.appendChild(block);

	const totalFrames = 6;
	let frame = 0;
	const intervalId = window.setInterval(() => {
		frame += 1;
		block.textContent = frame >= totalFrames ? SECRET_ART.join('\n') : glitchFrame(Math.max(0, 0.6 - frame * 0.12));
		requestAnimationFrame(() => { output.scrollTop = output.scrollHeight; });
		if (frame >= totalFrames) {
			window.clearInterval(intervalId);
			appendOutput('<span class="green">Purring in binary.</span>');
		}
	}, 90);
}

/** @param {string} value */
function commandEcho(value) {
	const block = document.createElement('div');
	block.className = 'output-block command-echo';
	const prompt = document.createElement('span');
	prompt.className = 'prompt';
	prompt.innerHTML = `<span class="prompt-user">${PROMPT}</span><span class="prompt-symbol">$</span>`;
	const command = document.createElement('span');
	command.textContent = value;
	block.append(prompt, command);
	output.appendChild(block);
}

/** @param {string} html @param {string} [className] */
function appendOutput(html, className = '') {
	const blockClassName = `output-block ${className}`.trim();
	for (const existing of Array.from(output.children)) {
		if (existing.className === blockClassName && existing.innerHTML === html) existing.remove();
	}
	const block = document.createElement('div');
	block.className = blockClassName;
	block.innerHTML = html;
	output.appendChild(block);
	requestAnimationFrame(() => { block.scrollIntoView({ block: 'start' }); });
}

/** @param {string} rawCommand */
function executeCommand(rawCommand) {
	const value = rawCommand.trim();
	if (!value) return;

	commandEcho(value);
	if (commandHistory.at(-1) !== value) commandHistory.push(value);
	historyIndex = commandHistory.length;
	const [rawName, ...args] = value.split(/\s+/);
	const command = rawName.toLowerCase();
	const argument = args.join(' ').toLowerCase();

	if (command === 'clear') {
		output.replaceChildren();
		appendOutput(bannerHTML(), 'welcome-block');
		return;
	}

	if (['about', 'whoami', 'cat'].includes(command)) {
		if (command !== 'cat' || !argument || argument === 'about.txt') appendOutput(aboutHTML());
		else if (argument === 'contact.vcf') appendOutput(contactHTML());
		else if (argument.endsWith('.md') && getArticleHTML(argument.slice(0, -3))) {
			openArticleReader(argument.slice(0, -3));
		}
		else appendOutput(`<span class="red">cat: ${escapeHTML(argument)}: No such file</span>`);
		return;
	}

	const renderers = /** @type {Record<string, () => string>} */ ({
		help: helpHTML, skills: skillsHTML, experience: experienceHTML,
		projects: projectsHTML, brew: brewHTML, lab: labHTML, articles: articlesHTML, utils: utilsHTML, contact: contactHTML, games: gamesHTML,
		ls: lsHTML, tree: treeHTML, neofetch: neofetchHTML,
	});
	if (renderers[command]) {
		appendOutput(renderers[command]());
		return;
	}

	if (command === 'cv') {
		downloadCv();
		appendOutput('<span class="green">Downloading albertobarrago_cv.pdf…</span>');
		return;
	}
	if (command === 'history') {
		appendOutput(commandHistory.map((entry, index) => `<div><span class="muted">${String(index + 1).padStart(3, ' ')}</span>  ${escapeHTML(entry)}</div>`).join(''));
		return;
	}
	if (command === 'date') {
		appendOutput(new Intl.DateTimeFormat('it-IT', { dateStyle: 'full', timeStyle: 'long' }).format(new Date()));
		return;
	}
	if (command === 'rss') {
		appendOutput(`<div class="output-title">RSS feed</div>
<p class="prose">Subscribe to my articles feed in any RSS reader:</p>
<div class="key-value"><span class="label">url</span><a class="terminal-link" href="/feed.xml" target="_blank" rel="noopener">https://albz.it/feed.xml</a></div>`);
		return;
	}
	if (command === 'play') {
		if (isGameName(argument)) {
			appendOutput(`<span class="green">Launching ${GAME_TITLES[argument]}…</span>`);
			launchGame(argument);
		} else {
			appendOutput(`<span class="red">Unknown game${argument ? `: ${escapeHTML(argument)}` : ''}.</span> Try <button class="inline-command command" data-command="games">games</button>.`);
		}
		return;
	}
	if (command === '1337') {
		launchCatEasterEgg();
		return;
	}
	if (command === 'sudo' && argument === 'hire alberto') {
		appendOutput('<span class="green">Permission granted. Opening contact details…</span>');
		appendOutput(contactHTML());
		return;
	}
	appendOutput(`<span class="red">command not found: ${escapeHTML(command)}</span><br>Type <button class="inline-command command" data-command="help">help</button> to see available commands.`);
}

/** @param {string} value @returns {value is GameName} */
function isGameName(value) {
	return Object.hasOwn(GAME_INIT, value);
}

/** @param {GameName} type */
function gameOverlayHTML(type) {
	const controls = GAME_CONTROLS[type].map((control) =>
		`<button class="game-control-button" type="button" data-control-key="${control.key}">${control.label}</button>`
	).join('');
	return `<div class="game-fullscreen" id="game-overlay">
		<div class="game-scanlines" aria-hidden="true"></div>
		<div class="game-topbar"><span class="game-title">${GAME_TITLES[type]}</span><button class="game-exit" type="button" data-action="exit-game">ESC · CLOSE</button></div>
		<canvas class="game-canvas" aria-label="${GAME_TITLES[type]} game"></canvas>
		<div class="game-touch-controls">${controls}</div>
	</div>`;
}

/** @param {GameName} type */
function launchGame(type) {
	exitGame();
	input.blur();
	const wrapper = document.createElement('div');
	wrapper.innerHTML = gameOverlayHTML(type);
	const overlay = /** @type {HTMLDivElement} */ (wrapper.firstElementChild);
	app.appendChild(overlay);
	const canvas = /** @type {HTMLCanvasElement} */ (overlay.querySelector('.game-canvas'));
	requestAnimationFrame(() => {
		if (overlay.isConnected) gameCleanup = GAME_INIT[type](canvas, exitGame);
	});
}

function exitGame() {
	gameCleanup?.();
	gameCleanup = null;
	releaseAllGameControls();
	document.getElementById('game-overlay')?.remove();
	input?.focus({ preventScroll: true });
}

/** @param {string} key @param {'keydown' | 'keyup'} type */
function dispatchGameKey(key, type) {
	window.dispatchEvent(new KeyboardEvent(type, { key, bubbles: true, cancelable: true }));
}

/** @param {PointerEvent} event */
function pressGameControl(event) {
	const target = /** @type {HTMLElement} */ (event.target);
	const button = /** @type {HTMLElement | null} */ (target.closest('[data-control-key]'));
	const key = button?.dataset.controlKey;
	if (!button || !key) return;
	event.preventDefault();
	button.setPointerCapture?.(event.pointerId);
	const active = /** @type {{ key: string, button: HTMLElement, delayId?: number, intervalId?: number }} */ ({ key, button });
	activeControlPointers.set(event.pointerId, active);
	button.classList.add('is-pressed');
	dispatchGameKey(key, 'keydown');
	if (REPEATING_CONTROL_KEYS.has(key)) {
		active.delayId = window.setTimeout(() => {
			active.intervalId = window.setInterval(() => dispatchGameKey(key, 'keydown'), 85);
		}, 220);
	}
}

/** @param {PointerEvent} event */
function releaseGameControl(event) {
	const active = activeControlPointers.get(event.pointerId);
	if (!active) return;
	event.preventDefault();
	if (active.delayId) window.clearTimeout(active.delayId);
	if (active.intervalId) window.clearInterval(active.intervalId);
	active.button.classList.remove('is-pressed');
	activeControlPointers.delete(event.pointerId);
	dispatchGameKey(active.key, 'keyup');
}

function releaseAllGameControls() {
	for (const active of activeControlPointers.values()) {
		if (active.delayId) window.clearTimeout(active.delayId);
		if (active.intervalId) window.clearInterval(active.intervalId);
		active.button.classList.remove('is-pressed');
		dispatchGameKey(active.key, 'keyup');
	}
	activeControlPointers.clear();
}

app.innerHTML = terminalHTML();
const output = /** @type {HTMLElement} */ (document.getElementById('terminal-output'));
const form = /** @type {HTMLFormElement} */ (document.getElementById('terminal-form'));
const input = /** @type {HTMLInputElement} */ (document.getElementById('terminal-input'));
appendOutput(bannerHTML(), 'welcome-block');
animateBannerGlitch();
printConsoleBanner();

/** @returns {string | undefined} */
function articleSlugFromLocation() {
	return window.location.pathname.match(/^\/articles\/([^/]+)\/?$/)?.[1]
		?? window.location.hash.match(/^#article\/(.+)$/)?.[1];
}

const bootSlug = articleSlugFromLocation();
if (bootSlug && getArticleHTML(bootSlug)) openArticleReader(bootSlug);

window.addEventListener('popstate', () => {
	const slug = articleSlugFromLocation();
	if (slug && getArticleHTML(slug)) openArticleReader(slug);
	else document.getElementById('article-reader')?.remove();
});

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const value = input.value;
	input.value = '';
	executeCommand(value);
});

input.addEventListener('input', () => {
	lastTabPrefix = null;
});

input.addEventListener('keydown', (event) => {
	if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
		event.preventDefault();
		const direction = event.key === 'ArrowUp' ? -1 : 1;
		historyIndex = Math.max(0, Math.min(commandHistory.length, historyIndex + direction));
		input.value = commandHistory[historyIndex] ?? '';
		requestAnimationFrame(() => input.setSelectionRange(input.value.length, input.value.length));
		return;
	}
	if (event.key === 'Tab') {
		event.preventDefault();
		const prefix = input.value.trim().toLowerCase();
		if (!prefix) {
			appendOutput('<span class="muted">Type \'help\' to see the list of available commands.</span>');
			lastTabPrefix = null;
			return;
		}
		const matches = COMMAND_NAMES.filter((command) => command.startsWith(prefix));
		if (matches.length === 0) {
			lastTabPrefix = null;
			return;
		}
		if (matches.length === 1) {
			input.value = matches[0];
			lastTabPrefix = null;
			return;
		}
		const commonPrefix = matches.reduce((common, match) => {
			let end = 0;
			while (end < common.length && end < match.length && common[end] === match[end]) end += 1;
			return common.slice(0, end);
		});
		if (commonPrefix.length > prefix.length) {
			input.value = commonPrefix;
			lastTabPrefix = null;
			return;
		}
		if (lastTabPrefix === prefix) {
			appendOutput(matches.map((match) => `<span class="command">${match}</span>`).join('  '));
			lastTabPrefix = null;
		} else {
			lastTabPrefix = prefix;
		}
	}
});

app.addEventListener('click', (event) => {
	const target = /** @type {HTMLElement} */ (event.target);
	const openToc = document.querySelector('#reader-toc.is-open');
	if (openToc && !target.closest('#reader-toc') && !target.closest('[data-action="toggle-toc"]')) {
		openToc.classList.remove('is-open');
	}
	const readArticleTarget = /** @type {HTMLElement | null} */ (target.closest('[data-action="read-article"]'));
	if (readArticleTarget?.dataset.slug) {
		openArticleReader(readArticleTarget.dataset.slug);
		return;
	}
	if (target.closest('[data-action="close-reader"]')) {
		closeArticleReader();
		return;
	}
	const shareTarget = /** @type {HTMLElement | null} */ (target.closest('[data-action="share-article"]'));
	if (shareTarget?.dataset.slug) {
		shareArticle(shareTarget.dataset.slug, shareTarget);
		return;
	}
	const copyTarget = /** @type {HTMLElement | null} */ (target.closest('[data-action="copy-article-link"]'));
	if (copyTarget?.dataset.slug) {
		copyArticleLink(copyTarget.dataset.slug, copyTarget);
		return;
	}
	if (target.closest('[data-action="toggle-toc"]')) {
		document.getElementById('reader-toc')?.classList.toggle('is-open');
		return;
	}
	const headingTarget = /** @type {HTMLElement | null} */ (target.closest('[data-action="goto-heading"]'));
	if (headingTarget?.dataset.target) {
		const reader = document.getElementById('article-reader');
		document.getElementById(headingTarget.dataset.target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		reader?.querySelector('#reader-toc')?.classList.remove('is-open');
		return;
	}
	const commandTarget = /** @type {HTMLElement | null} */ (target.closest('[data-command]'));
	if (commandTarget?.dataset.command) executeCommand(commandTarget.dataset.command);
	if (target.closest('[data-action="exit-game"]')) exitGame();
	if (!target.closest('a') && !document.getElementById('game-overlay') && !document.getElementById('article-reader')) {
		input.focus({ preventScroll: true });
	}
});

app.addEventListener('pointerdown', pressGameControl);
app.addEventListener('pointerup', releaseGameControl);
app.addEventListener('pointercancel', releaseGameControl);
app.addEventListener('lostpointercapture', releaseGameControl);
window.addEventListener('blur', releaseAllGameControls);
document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape' && document.getElementById('game-overlay')) exitGame();
	if (event.key === 'Escape' && document.getElementById('article-reader')) closeArticleReader();
});
