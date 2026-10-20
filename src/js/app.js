import { language, locale, homePath, articlePath, articlesIndexPath, t } from './i18n.js';
/**
 * @file Interactive terminal portfolio
 * @description Keyboard-first portfolio shell with command history, shortcuts,
 * accessible output, and embedded retro games.
 */

import {
	name, role, location, profile, skills, experience,
	openSource, brewFormulas, utils, links, version, downloadCv,
} from './index.js';
import { initSpaceInvaders } from './games/spaceInvaders.js';
import { initTetris } from './games/tetris.js';
import { initPong } from './games/pong.js';
import { initFlappyBird } from './games/flappyBird.js';
import { printConsoleBanner } from './console-banner.js';
import { escapeHTML } from './utils.js';
import { startNowPlaying } from './now-playing.js';
import {
	articles, getArticleHTML, sortArticlesByDateAscending, sortArticlesByDateDescending,
	filterArticles, articleTags, articleExcerpt,
} from './articles.js';

/** @typedef {'space' | 'tetris' | 'pong' | 'flappy'} GameName */
/** @typedef {{ label: string, key: string }} GameControl */

const PROMPT = 'alberto@portfolio:~';
/** Page load timestamp, used as the shell's uptime origin. */
const BOOT_TIME = Date.now();
const MUSIC_PICKS = Object.freeze([
	['Ojai', 'Catching Flies'],
	['Unfinished Colours', 'Parra for Cuva, Other'],
	['Solo Para Mi', 'Be Svendsen'],
	['Louna', 'Sam Shure'],
	['Atacama', 'PAAX (Tulum)'],
	['Believe', 'Viken Arman, Jo.Ke'],
	['Who Loves The Sun', 'Jo.Ke, Nu'],
	['Daymarks', 'Catching Flies'],
	['State the Obvious', 'Be Svendsen'],
]);
const COMMAND_NAMES = Object.freeze([
	'help', 'about', 'skills', 'experience', 'projects', 'articles', 'utils', 'contact', 'cv',
	'games', 'play', 'ls', 'tree', 'neofetch', 'history', 'date', 'clear', 'rss', 'music',
]);
const MOBILE_COMMANDS = Object.freeze([
	['help', 'help'], ['about', 'about'], ['skills', 'skills'],
	['projects', 'projects'], ['articles', 'articles'], ['utils', 'utils'], ['games', 'games'], ['contact', 'contact'],
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


function metaLanguage(slug) {
	return articles.find((article) => article.slug === slug)?.language ?? 'en';
}

/** @param {string} [slug] @param {boolean} [isIndex] whether the blog index is the current view */
function languageSelectorHTML(slug, isIndex = false) {
	const translated = !slug || articles.find((article) => article.slug === slug)?.hasItalian;
	const italianHref = slug && translated ? articlePath(slug, 'it') : isIndex ? articlesIndexPath('it') : '/it/';
	const englishHref = slug ? articlePath(slug, 'en') : isIndex ? articlesIndexPath('en') : '/';
	return `<nav class="language-selector" aria-label="${language === 'it' ? 'Lingua' : 'Language'}">
		<a href="${italianHref}" lang="it" hreflang="it" ${language === 'it' ? 'aria-current="page"' : ''} ${slug && !translated ? 'title="Versione italiana non disponibile: vai al portfolio italiano"' : ''}>IT</a>
		<span aria-hidden="true">|</span>
		<a href="${englishHref}" lang="en" hreflang="en" ${language === 'en' ? 'aria-current="page"' : ''}>EN</a>
	</nav>`;
}

const homeTitle = 'Alberto Barrago | Senior Software Engineer & Product Builder';
const homeDescription = language === 'it'
	? 'Senior Software Engineer e product builder: progetto sistemi affidabili e realizzo software per web, mobile, cloud e AI.'
	: 'Senior Software Engineer and product builder designing reliable systems and shipping production software across web, mobile, cloud, and AI.';

/** @param {string} [slug] @param {boolean} [isIndex] whether the blog index is the current view */
function updatePageMetadata(slug, isIndex = false) {
	const meta = articles.find((article) => article.slug === slug);
	const path = meta ? articlePath(meta.slug, meta.language) : isIndex ? articlesIndexPath() : homePath;
	const url = `${window.location.origin}${path}`;
	const title = meta ? `${meta.title} | Alberto Barrago` : isIndex ? `${t('Articles')} | Alberto Barrago` : homeTitle;
	const description = meta
		? (getArticleHTML(meta.slug) ?? '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 155)
		: isIndex ? t('Technical articles and notes by Alberto Barrago.') : homeDescription;
	document.title = title;
	document.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
	for (const [selector, value] of [
		['meta[name="description"]', description], ['meta[property="og:description"]', description],
		['meta[name="twitter:description"]', description], ['meta[property="og:title"]', title],
		['meta[name="twitter:title"]', title], ['meta[property="og:url"]', url],
		['meta[property="og:type"]', meta ? 'article' : 'website'],
	]) document.querySelector(selector)?.setAttribute('content', value);
	document.querySelectorAll('link[hreflang]').forEach((link) => link.remove());
	for (const lang of ['en', 'it', 'x-default']) {
		if (meta && lang === 'it' && !meta.hasItalian) continue;
		const link = document.createElement('link');
		link.rel = 'alternate';
		link.hreflang = lang;
		const linkLang = lang === 'it' ? 'it' : 'en';
		link.href = `${window.location.origin}${meta ? articlePath(meta.slug, linkLang) : isIndex ? articlesIndexPath(linkLang) : linkLang === 'it' ? '/it/' : '/'}`;
		document.head.appendChild(link);
	}
}

function terminalHTML() {
	const shortcuts = MOBILE_COMMANDS.map(([label, command]) =>
		`<button class="mobile-command" type="button" data-command="${command}">${label}</button>`
	).join('');

	return `<main class="terminal" aria-label="${t('Alberto Barrago portfolio terminal')}">
		${languageSelectorHTML()}
		<div class="terminal-glow" aria-hidden="true"></div>
		<section class="terminal-output" id="terminal-output" role="log" aria-live="polite" aria-relevant="additions"></section>
		<div class="terminal-bottom">
			<form class="terminal-input-line" id="terminal-form" autocomplete="off">
				<label class="sr-only" for="terminal-input">${t("Terminal command")}</label>
				<span class="prompt" aria-hidden="true"><span class="prompt-user">${PROMPT}</span><span class="prompt-symbol">$</span></span>
				<input id="terminal-input" class="terminal-input" name="command" type="text"
					autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
					aria-describedby="terminal-hint" autofocus>
			</form>
			<p class="sr-only" id="terminal-hint">${t("Type help to list available commands. Use up and down arrows for command history.")}</p>
			<nav class="mobile-commands" aria-label="${t('Quick terminal commands')}">${shortcuts}</nav>
		</div>
	</main>
	<div class="crt-overlay" aria-hidden="true"></div>`;
}

function bannerHTML() {
	return `<div class="ascii-banner accent" role="img" aria-label="ALBZ">${ALBZ_ART.join('\n')}</div>
<div class="boot-copy"><span class="muted">Portfolio shell v${version}</span>
<span>${role} · Product Builder</span>

${t("15+ years: from INPS distribution systems to products for global brands.")}
${t("Technical leadership · Architecture · Web · Mobile · Cloud · AI")}

${t("I turn ambiguity into reliable systems and useful products.")}
<span class="muted">${t('Based in')} ${location}</span>
${articles.length ? `
<span class="muted">${t("Latest write-up:")}</span> <button class="inline-command command" data-command="cat ${articles[articles.length - 1].slug}.md">${articles[articles.length - 1].title} →</button>${language === 'it' && articles[articles.length - 1].language === 'en' ? ' <span class="muted">(in inglese)</span>' : ''}` : ''}

<span class="muted" data-now-playing>${t('At my desk, usually with music in my headphones.')}</span><span data-music-shortcut> <button class="inline-command command" data-command="music">music →</button></span>

${language === 'it' ? 'Scrivi' : 'Type'} <button class="inline-command command" data-command="help">help</button> ${language === 'it' ? 'per esplorare, oppure usa i comandi qui sotto.' : 'to explore, or use the shortcuts below.'}</div>`;
}

function dailyMusicHTML() {
	// Rome's calendar day keeps the selection identical across visitor time zones.
	const parts = new Intl.DateTimeFormat('en-GB', {
		timeZone: 'Europe/Rome', year: 'numeric', month: '2-digit', day: '2-digit',
	}).formatToParts(new Date());
	const date = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
	const day = Math.floor(Date.UTC(Number(date.year), Number(date.month) - 1, Number(date.day)) / 86400000);
	const start = day % MUSIC_PICKS.length;
	const picks = Array.from({ length: 3 }, (_, index) => MUSIC_PICKS[(start + index * 4) % MUSIC_PICKS.length]);
	return `<p class="output-title">${t("Today's recommendations")}</p>
<ul class="music-picks">${picks.map(([title, artist]) => `<li><a class="terminal-link" href="https://open.spotify.com/search/${encodeURIComponent(`${title} ${artist}`)}" target="_blank" rel="noopener noreferrer">${escapeHTML(title)}</a> <span class="muted">— ${escapeHTML(artist)}</span></li>`).join('')}</ul>
<p class="output-note">${t('Three picks from my listening rotation, changing daily. Links open Spotify search.')}</p>`;
}

function helpHTML() {
	const commands = [
		['about', t("Short profile and current role")],
		['skills', t("Technical toolbox by area")],
		['experience', t("Professional timeline")],
		['projects', t("Selected open-source work and Homebrew formulae")],
		['articles', t("Technical articles and notes")],
		['rss', t("Subscribe to the articles feed")],
		['music', t("Listen to a track I've picked")],
		['utils', t("Useful free resources and links")],
		['contact', t("Ways to get in touch")],
		['cv', t("Download my resume")],
		['games', t("List embedded retro games")],
		['play &lt;game&gt;', t("Launch space, tetris, pong, or flappy")],
		['ls / tree', t("Browse the portfolio filesystem")],
		['neofetch', t("Compact system profile")],
		['history / date / clear', t("Terminal utilities")],
	];

	return `<div class="output-title">${t("Available commands")}</div>
<div class="command-list">${commands.map(([command, description]) =>
		`<div><button class="inline-command command" data-command="${command.split(' ')[0]}">${command}</button><span class="muted">${description}</span></div>`
	).join('')}</div>
<div class="output-note">${language === 'it' ? 'Premi' : 'Tip: press'} <span class="key">Tab</span> ${language === 'it' ? 'per completare e' : 'to autocomplete and'} <span class="key">↑</span>/<span class="key">↓</span> ${language === 'it' ? 'per la cronologia.' : 'for history.'}</div>`;
}

function aboutHTML() {
	return `<div class="output-title">${name}</div>
<div class="key-value"><span class="label">${t("role")}</span><span>${role}</span>
<span class="label">${t("location")}</span><span>${location}</span>
<span class="label">${t("focus")}</span><span>${t("Product engineering · architecture · technical leadership")}</span>
<span class="label">${t("status")}</span><span class="green">${t("Building useful things")}</span></div>
<p class="prose">${profile}</p>
<div class="output-links"><button class="inline-command command" data-command="projects">${t("view projects")}</button><button class="inline-command command" data-command="contact">${t("contact me")}</button><button class="inline-command command" data-command="cv">${t("download cv")}</button></div>`;
}

function skillsHTML() {
	return `<div class="output-title">${t("Technical toolbox")}</div>
<blockquote class="skills-quote">${t("Started with a single tool, today I find myself conducting an entire orchestra.")}</blockquote>
<p class="skills-whisper">${t("I'm an AI whisperer.")}</p>
<div class="skills-list">${Object.entries(skills).map(([category, items]) =>
		`<div class="skill-row"><span class="label">${category}</span><span>${items.join('  ·  ')}</span></div>`
	).join('')}</div>`;
}

function experienceHTML() {
	return `<div class="output-title">${t("Experience")}</div>
<div class="timeline">${experience.map((job) => `<article class="timeline-item">
	<span class="timeline-period">${job.period}</span>
	<div><div><span class="green">${job.role}</span> <span class="muted">@ ${job.company}</span></div>
	<p>${job.highlight}</p></div>
</article>`).join('')}</div>`;
}

function projectsHTML() {
	return `<div class="output-title">${t("Selected projects")}</div>
<div class="project-list">${openSource.map((project) => `<article class="project-item">
	<div><a class="terminal-link project-name" href="${project.url}" target="_blank" rel="noopener noreferrer">${project.name} ↗</a><span class="project-language">${project.language}</span></div>
	<p>${project.description}</p>
</article>`).join('')}</div>
<div class="output-title output-title-spaced">${t("Homebrew formulae")}</div>
<p class="prose">${t("Command-line tools I've packaged and maintain via Homebrew taps.")}</p>
<div class="project-list">${brewFormulas.map((formula) => `<article class="project-item">
	<div><a class="terminal-link project-name" href="${formula.url}" target="_blank" rel="noopener noreferrer">${formula.name} ↗</a><span class="project-language">${formula.tap}</span></div>
	<p>${formula.description}</p>
	<p class="brew-install"><code>${formula.install}</code></p>
</article>`).join('')}</div>`;
}

/** @param {string} isoDate @returns {string} */
function formatArticleDate(isoDate) {
	if (!isoDate) return isoDate;
	const parsed = new Date(`${isoDate}T00:00:00`);
	if (Number.isNaN(parsed.getTime())) return isoDate;
	return new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric' }).format(parsed);
}

/** @typedef {'desc' | 'asc'} BlogOrder */
/** @typedef {{ query: string, tag: string, order: BlogOrder }} BlogFilters */

const BLOG_FILTERS_KEY = 'blogFilters';
const BLOG_TAGS = articleTags(articles);
/** Tags used by a single article stay reachable from the post itself, not as chips. */
const BLOG_CHIP_TAGS = BLOG_TAGS.filter(({ count }) => count > 1);
const LATEST_SLUG = articles.at(-1)?.slug;

/**
 * Restores the last blog filters, discarding anything malformed or a tag
 * that no longer exists, so stale storage can never hide every article.
 * @returns {BlogFilters}
 */
function loadBlogFilters() {
	/** @type {BlogFilters} */
	const defaults = { query: '', tag: '', order: 'desc' };
	try {
		const stored = JSON.parse(localStorage.getItem(BLOG_FILTERS_KEY) ?? 'null');
		if (!stored || typeof stored !== 'object') return defaults;
		return {
			query: typeof stored.query === 'string' ? stored.query : '',
			tag: typeof stored.tag === 'string' && BLOG_TAGS.some(({ tag }) => tag === stored.tag) ? stored.tag : '',
			order: stored.order === 'asc' ? 'asc' : 'desc',
		};
	} catch (error) {
		console.warn('Could not restore blog filters, using defaults.', error);
		return defaults;
	}
}

const blogFilters = loadBlogFilters();

function saveBlogFilters() {
	try {
		localStorage.setItem(BLOG_FILTERS_KEY, JSON.stringify(blogFilters));
	} catch (error) {
		console.warn('Could not persist blog filters.', error);
	}
}

/** @param {import('./articles.js').ArticleMeta} article @returns {string} */
function blogPostHTML(article) {
	const html = getArticleHTML(article.slug) ?? '';
	const isLatest = article.slug === LATEST_SLUG;
	const tags = article.tags.map((tag) =>
		`<li><button class="blog-post-tag" type="button" data-action="filter-tag" data-tag="${tag}" aria-pressed="${blogFilters.tag === tag}">#${tag}</button></li>`
	).join('');
	return `<article class="blog-post${isLatest ? ' is-latest' : ''}" lang="${article.language}" aria-labelledby="post-${article.slug}">
		<p class="blog-post-meta">
			<time datetime="${article.date}">${formatArticleDate(article.date)}</time>
			<span>~${articleStats(html).minutes} ${t('min read')}</span>
			${isLatest ? `<span class="blog-post-badge">${t('latest')}</span>` : ''}
			${language === 'it' && article.language === 'en' ? '<span>Disponibile in inglese</span>' : ''}
		</p>
		<h2 class="blog-post-title" id="post-${article.slug}"><button class="blog-post-link" type="button" data-action="read-article" data-slug="${article.slug}">${article.title}</button></h2>
		<p class="blog-post-excerpt">${escapeHTML(articleExcerpt(html))}</p>
		<div class="blog-post-footer">
			${tags ? `<ul class="blog-post-tags" aria-label="Tags">${tags}</ul>` : ''}
			${article.label ? `<span class="reader-label">${article.label}</span>` : ''}
		</div>
	</article>`;
}

/** Shell of the blog index overlay; the filterable parts are filled by renderBlogResults. */
function blogIndexHTML() {
	return `<div class="article-reader blog-index" id="blog-index" role="dialog" aria-modal="true" aria-labelledby="blog-title">
		<div class="article-reader-topbar">
			<button class="reader-back" type="button" data-action="close-blog">${t("back")}</button>
			<div class="reader-actions">
				${languageSelectorHTML(undefined, true)}
				<span class="reader-hint muted" aria-hidden="true">${t("ESC · CLOSE")}</span>
			</div>
		</div>
		<div class="article-reader-body">
			<div class="article-reader-main blog-main">
				<header class="blog-header">
					<h1 class="blog-title" id="blog-title" tabindex="-1">~/articles</h1>
					<p class="blog-intro">${t("Notes on the tools I build, the code I ship and the craft behind both.")}</p>
				</header>
				${articles.length === 0 ? `<p class="blog-empty">${t("No articles yet.")}</p>` : `
				<search class="blog-controls">
					<label class="blog-search" for="blog-search">
						<span class="blog-search-prompt" aria-hidden="true">grep</span>
						<span class="sr-only">${t("Filter articles")}</span>
						<input id="blog-search" class="blog-search-input" type="search" value="${escapeHTML(blogFilters.query)}"
							placeholder="${t("filter by title or tag")}" autocomplete="off" autocapitalize="off" spellcheck="false"
							aria-controls="blog-list" aria-describedby="blog-count">
					</label>
					<button class="reader-action blog-sort" type="button" id="blog-sort" data-action="toggle-sort" aria-controls="blog-list"></button>
				</search>
				<div class="blog-tags" id="blog-tags" role="group" aria-label="${t("Filter by tag")}"></div>
				<p class="blog-count" id="blog-count" role="status" aria-live="polite"></p>
				<div class="blog-list" id="blog-list"></div>`}
			</div>
		</div>
	</div>`;
}

/**
 * Re-renders the filter-dependent parts of the blog index in place, leaving
 * the search input untouched so typing never loses focus or caret position.
 * @param {string} [focusTag] when set, focus moves to that tag's chip (or the
 *   "all" chip for an empty string) because the clicked control was replaced.
 */
function renderBlogResults(focusTag) {
	const overlay = document.getElementById('blog-index');
	const list = overlay?.querySelector('#blog-list');
	if (!overlay || !list) return;
	const filtered = filterArticles(articles, blogFilters);
	const visible = blogFilters.order === 'desc' ? sortArticlesByDateDescending(filtered) : sortArticlesByDateAscending(filtered);
	const chips = BLOG_CHIP_TAGS.some(({ tag }) => tag === blogFilters.tag) || !blogFilters.tag
		? BLOG_CHIP_TAGS
		: [...BLOG_CHIP_TAGS, ...BLOG_TAGS.filter(({ tag }) => tag === blogFilters.tag)];

	const sort = /** @type {HTMLButtonElement} */ (overlay.querySelector('#blog-sort'));
	sort.textContent = blogFilters.order === 'desc' ? `${t('newest first')} ↓` : `${t('oldest first')} ↑`;
	/** @type {HTMLElement} */ (overlay.querySelector('#blog-tags')).innerHTML = [
		`<button class="tag-chip" type="button" data-action="filter-tag" data-tag="" aria-pressed="${!blogFilters.tag}">${t('all')}</button>`,
		...chips.map(({ tag, count }) =>
			`<button class="tag-chip" type="button" data-action="filter-tag" data-tag="${tag}" aria-pressed="${blogFilters.tag === tag}">#${tag}<span class="tag-count" aria-label="(${count})">${count}</span></button>`
		),
	].join('');
	/** @type {HTMLElement} */ (overlay.querySelector('#blog-count')).textContent =
		`${visible.length}/${articles.length} ${t('Articles').toLowerCase()}`;
	const criteria = [blogFilters.query.trim() && `"${blogFilters.query.trim()}"`, blogFilters.tag && `#${blogFilters.tag}`].filter(Boolean).join(' ');
	list.innerHTML = visible.length
		? visible.map(blogPostHTML).join('')
		: `<p class="blog-empty">grep: ${t('no matches for')} ${escapeHTML(criteria)} · <button class="reader-nav-link" type="button" data-action="reset-blog-filters">${t('reset filters')}</button></p>`;

	if (focusTag !== undefined) {
		const chip = /** @type {HTMLElement | null} */ (overlay.querySelector(`#blog-tags [data-tag="${CSS.escape(focusTag)}"]`));
		// Not preventScroll: when a tag inside a post was clicked, the chip row must scroll back into view.
		(chip ?? /** @type {HTMLElement} */ (overlay.querySelector('#blog-search'))).focus();
	}
}

function openBlogIndex() {
	if (!document.getElementById('blog-index')) {
		input.blur();
		const wrapper = document.createElement('div');
		wrapper.innerHTML = blogIndexHTML();
		const overlay = /** @type {HTMLDivElement} */ (wrapper.firstElementChild);
		app.appendChild(overlay);
		renderBlogResults();
		// The heading, not the search field: focusing an input would pop the keyboard on mobile.
		/** @type {HTMLElement} */ (overlay.querySelector('#blog-title')).focus({ preventScroll: true });
	}
	syncOverlayInert();
	updatePageMetadata(undefined, true);
	if (window.location.pathname !== articlesIndexPath()) {
		window.history.pushState(null, '', articlesIndexPath());
	}
}

function closeBlogIndex() {
	document.getElementById('blog-index')?.remove();
	syncOverlayInert();
	if (isBlogIndexLocation()) window.history.pushState(null, '', homePath);
	updatePageMetadata();
	input?.focus({ preventScroll: true });
}

/**
 * Keeps keyboard and assistive-tech focus on the topmost layer: the terminal
 * goes inert under any overlay, the blog index goes inert under the reader.
 */
function syncOverlayInert() {
	const reader = document.getElementById('article-reader');
	const blogIndex = document.getElementById('blog-index');
	const terminal = app.querySelector('.terminal');
	if (terminal instanceof HTMLElement) terminal.inert = Boolean(reader || blogIndex);
	if (blogIndex) blogIndex.inert = Boolean(reader);
}

/** @returns {boolean} */
function isBlogIndexLocation() {
	return /^(?:\/it)?\/articles\/?$/.test(window.location.pathname);
}

/** @param {string} tag the tag to toggle; an empty string clears the tag filter */
function toggleBlogTag(tag) {
	blogFilters.tag = blogFilters.tag === tag ? '' : tag;
	saveBlogFilters();
	renderBlogResults(tag);
}

function toggleBlogOrder() {
	blogFilters.order = blogFilters.order === 'desc' ? 'asc' : 'desc';
	saveBlogFilters();
	renderBlogResults();
}

function resetBlogFilters() {
	blogFilters.query = '';
	blogFilters.tag = '';
	saveBlogFilters();
	const search = /** @type {HTMLInputElement | null} */ (document.getElementById('blog-search'));
	if (search) search.value = '';
	renderBlogResults('');
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
			<button class="reader-back" type="button" data-action="close-reader">${t("back")}</button>
			<div class="reader-actions">
				${languageSelectorHTML(slug)}
				<button class="reader-action reader-toc-toggle" type="button" data-action="toggle-toc" id="reader-toc-toggle" hidden>${t("chapters")}</button>
				<button class="reader-action" type="button" data-action="share-article" data-slug="${slug}">${t("share")}</button>
				<button class="reader-action" type="button" data-action="copy-article-link" data-slug="${slug}">${t("copy link")}</button>
				<span class="reader-hint muted">${t("ESC · CLOSE")}</span>
			</div>
		</div>
		<div class="article-reader-body">
			<aside class="reader-toc" id="reader-toc" hidden></aside>
			<div class="article-reader-main">
				<article class="prose" lang="${meta.language}">
					<h1>${meta.title}</h1>
					<p class="reader-meta muted">${formatArticleDate(meta.date)}${meta.tags.length ? ` · ${meta.tags.join(' · ')}` : ''}${meta.label ? ` · <span class="reader-label">${meta.label}</span>` : ''}</p>
					<p class="reader-stats muted">${stats.words.toLocaleString(locale)} ${t('words')} · ${stats.chars.toLocaleString(locale)} ${t('chars')} · ~${stats.minutes} ${t('min read')}</p>
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

	toc.innerHTML = `<span class="reader-toc-title">${t("chapters")}</span><ol class="reader-toc-list">${
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
	if (language === 'it' && metaLanguage(slug) === 'en') {
		window.location.assign(articlePath(slug, 'en'));
		return;
	}
	document.getElementById('article-reader')?.remove();
	input.blur();
	const wrapper = document.createElement('div');
	wrapper.innerHTML = articleReaderHTML(slug);
	const overlay = /** @type {HTMLDivElement} */ (wrapper.firstElementChild);
	app.appendChild(overlay);
	overlay.scrollTop = 0;
	buildArticleTOC(overlay);
	syncOverlayInert();
	// The post link that opened the reader is now inert: move focus into the reader instead of losing it.
	if (document.getElementById('blog-index')) {
		/** @type {HTMLElement} */ (overlay.querySelector('.reader-back')).focus({ preventScroll: true });
	}
	updatePageMetadata(slug);
	if (window.location.pathname !== articlePath(slug, metaLanguage(slug))) {
		window.history.pushState(null, '', articlePath(slug, metaLanguage(slug)));
	}
}

/** Tears down the reader overlay and its TOC observers without touching history. */
function removeArticleReader() {
	tocObserver?.disconnect();
	tocObserver = null;
	tocScrollFallback?.container.removeEventListener('scroll', tocScrollFallback.handler);
	tocScrollFallback = null;
	document.getElementById('article-reader')?.remove();
	syncOverlayInert();
}

function closeArticleReader() {
	const slug = articleSlugFromLocation();
	removeArticleReader();
	const blogIndex = document.getElementById('blog-index');
	if (blogIndex) {
		// Opened from the blog index: go back to it and return focus to the post the reader came from.
		openBlogIndex();
		const origin = slug ? blogIndex.querySelector(`.blog-post-link[data-slug="${CSS.escape(slug)}"]`) : null;
		/** @type {HTMLElement} */ (origin ?? blogIndex.querySelector('#blog-title')).focus({ preventScroll: true });
		return;
	}
	if (/^(?:\/it)?\/articles\//.test(window.location.pathname)) {
		window.history.pushState(null, '', homePath);
	}
	updatePageMetadata();
	input?.focus({ preventScroll: true });
}

/** @param {string} slug @returns {string} */
function articleURL(slug) {
	return `${window.location.origin}${articlePath(slug, metaLanguage(slug))}`;
}

/** @param {HTMLElement} button */
function flashActionLabel(button) {
	const original = button.textContent;
	button.textContent = t("copied ✓");
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
		window.prompt(t("Copy this link:"), articleURL(slug));
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
<p class="prose">${t("Useful free resources: books, courses, docs, and tools I keep coming back to.")}</p>
${utils.map((group) => `<div class="utils-group">
	<div class="utils-category">${group.category}</div>
	<div class="project-list">${group.items.map((item) => `<article class="project-item">
		<div><a class="terminal-link project-name" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.name} ↗</a></div>
		<p>${item.description}</p>
	</article>`).join('')}</div>
</div>`).join('')}</div>`;
}

function contactHTML() {
	return `<div class="output-title">${t("Let's build something useful")}</div>
<div class="key-value"><span class="label">email</span><a class="terminal-link" href="${links.email}">albertobarrago@gmail.com</a>
<span class="label">github</span><a class="terminal-link" href="${links.github}" target="_blank" rel="noopener noreferrer">github.com/AlbertoBarrago ↗</a>
<span class="label">bluesky</span><a class="terminal-link" href="${links.bsky}" target="_blank" rel="noopener noreferrer">@albzoser.bsky.social ↗</a>
<span class="label">${t("location")}</span><span>${location}</span></div>`;
}

function gamesHTML() {
	return `<div class="output-title">/games</div>
<div class="game-list">${Object.entries(GAME_TITLES).map(([game, title]) =>
		`<button class="game-command" data-command="play ${game}"><span>${title}</span><span class="muted">play ${game}</span></button>`
	).join('')}</div>
<article class="project-item"><a class="terminal-link project-name" href="https://iron-doctrine-omega.vercel.app/" target="_blank" rel="noopener noreferrer">Iron Doctrine ↗</a><p>${t("A real-time strategy game with a deterministic ECS engine and lockstep online 1v1 multiplayer.")}</p></article>
<div class="output-note">${language === 'it' ? 'I giochi si aprono a schermo intero. Premi' : 'Games open fullscreen. Press'} <span class="key">Esc</span> ${language === 'it' ? 'per tornare.' : 'to return.'}</div>`;
}

function treeHTML() {
	return `<div class="tree"><span class="blue">~</span>
├── <button class="inline-command file" data-command="about">about.txt</button>
├── <button class="inline-command directory" data-command="skills">skills/</button>
├── <button class="inline-command file" data-command="experience">experience.log</button>
├── <button class="inline-command directory" data-command="projects">projects/</button>
├── <button class="inline-command directory" data-command="articles">articles/</button>
├── <button class="inline-command directory" data-command="utils">utils/</button>
├── <button class="inline-command file" data-command="contact">contact.vcf</button>
├── <button class="inline-command file" data-command="cv">albertobarrago_cv.pdf</button>
└── <button class="inline-command directory" data-command="games">games/</button></div>`;
}

/**
 * ALBZ monogram in block art. Uses only full/empty cells so it renders
 * identically in any monospace font: the previous box-drawing version broke
 * because `╭─╮│` and letters have different advance widths in the site font.
 */
const NEOFETCH_MARK = [
	' █████  ██     ',
	'██   ██ ██     ',
	'███████ ██     ',
	'██   ██ ██     ',
	'██   ██ ███████',
	'               ',
	'██████  ███████',
	'██   ██     ██ ',
	'██████     ██  ',
	'██   ██   ██   ',
	'██████  ███████',
].join('\n');

/**
 * Formats a duration the way neofetch does: largest two units, plural-aware.
 * @param {number} milliseconds
 * @returns {string}
 */
function formatUptime(milliseconds) {
	const totalSeconds = Math.floor(milliseconds / 1000);
	const units = [
		['day', Math.floor(totalSeconds / 86400)],
		['hour', Math.floor(totalSeconds / 3600) % 24],
		['min', Math.floor(totalSeconds / 60) % 60],
		['sec', totalSeconds % 60],
	].filter(([, value]) => value > 0);
	const shown = (units.length ? units : [['sec', 0]]).slice(0, 2);
	return shown.map(([unit, value]) => `${value} ${unit}${value === 1 ? '' : 's'}`).join(', ');
}

/**
 * Best-effort browser name and major version from the user agent, used as the
 * "Terminal" field. Unknown agents degrade to the generic label rather than
 * guessing.
 * @returns {string}
 */
function detectTerminal() {
	const agent = navigator.userAgent;
	const patterns = [
		[/Firefox\/(\d+)/, 'Firefox'],
		[/Edg\/(\d+)/, 'Edge'],
		[/OPR\/(\d+)/, 'Opera'],
		[/Chrome\/(\d+)/, 'Chrome'],
		[/Version\/(\d+).*Safari/, 'Safari'],
	];
	for (const [pattern, label] of patterns) {
		const match = agent.match(pattern);
		if (match) return `${label} ${match[1]}`;
	}
	return 'Web browser';
}

/**
 * Renders the system profile. Every field is live state of this shell, not a
 * copy of the bio: `about` and `skills` already cover role, location and stack.
 * @returns {string}
 */
function neofetchHTML() {
	// Ultima Online handle: character, shard. Not an address, on purpose.
	const host = 'Zoser@Sosaria';
	/** @type {[string, string][]} */
	const fields = [
		['OS', `albz-sh ${version}`],
		['Host', 'GitHub Pages'],
		['Kernel', 'Vanilla JS (ES2022)'],
		['Uptime', formatUptime(Date.now() - BOOT_TIME)],
		['Packages', '0 (runtime)'],
		['Shell', 'albz-sh'],
		['Guild', 'AdE'],
		['Alignment', 'Player Killer'],
		['Resolution', `${window.screen.width}x${window.screen.height}`],
		['Terminal', detectTerminal()],
		['Commands', String(COMMAND_NAMES.length)],
		[t("Articles"), String(articles.length)],
		['Games', String(Object.keys(GAME_INIT).length)],
		['Build', __BUILD_DATE__],
	];

	return `<div class="neofetch"><div class="neofetch-mark" aria-hidden="true">${NEOFETCH_MARK}</div><div><span class="accent">${host}</span>
<span class="muted">${'─'.repeat(host.length)}</span>
${fields.map(([label, value]) =>
		`<span><span class="label">${label}:</span> ${escapeHTML(value)}</span>`
	).join('\n')}
<span class="palette"><i></i><i></i><i></i><i></i><i></i><i></i></span></div></div>`;
}

function lsHTML() {
	return `<div class="ls-output"><button class="inline-command file" data-command="about">about.txt</button><button class="inline-command directory" data-command="skills">skills/</button><button class="inline-command file" data-command="experience">experience.log</button><button class="inline-command directory" data-command="projects">projects/</button><button class="inline-command directory" data-command="articles">articles/</button><button class="inline-command directory" data-command="utils">utils/</button><button class="inline-command file" data-command="contact">contact.vcf</button><button class="inline-command directory" data-command="games">games/</button></div>`;
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
		else appendOutput(`<span class="red">cat: ${escapeHTML(argument)}: ${t('No such file')}</span>`);
		return;
	}

	if (command === 'articles') {
		openBlogIndex();
		return;
	}

	const renderers = /** @type {Record<string, () => string>} */ ({
		help: helpHTML, skills: skillsHTML, experience: experienceHTML,
		projects: projectsHTML, utils: utilsHTML, contact: contactHTML, games: gamesHTML,
		ls: lsHTML, tree: treeHTML, neofetch: neofetchHTML,
	});
	if (renderers[command]) {
		appendOutput(renderers[command]());
		return;
	}

	if (command === 'cv') {
		downloadCv();
		appendOutput(`<span class="green">${t('Downloading albertobarrago_cv.pdf…')}</span>`);
		return;
	}
	if (command === 'history') {
		appendOutput(commandHistory.map((entry, index) => `<div><span class="muted">${String(index + 1).padStart(3, ' ')}</span>  ${escapeHTML(entry)}</div>`).join(''));
		return;
	}
	if (command === 'date') {
		appendOutput(new Intl.DateTimeFormat(locale, { dateStyle: 'full', timeStyle: 'long' }).format(new Date()));
		return;
	}
	if (command === 'music') {
		appendOutput(`<div class="output-title">${t("A track I've picked")}</div>
<iframe class="spotify-player" title="${t('Spotify music player')}" src="https://open.spotify.com/embed/track/3jIlUwCAEo9VCMbo3U9tBt?theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<a class="terminal-link" href="https://open.spotify.com/track/3jIlUwCAEo9VCMbo3U9tBt" target="_blank" rel="noopener noreferrer">${t('Open in Spotify')} ↗</a>
${dailyMusicHTML()}`);
		return;
	}
	if (command === 'rss') {
		appendOutput(`<div class="output-title">RSS feed</div>
<p class="prose">${t("Subscribe to my articles feed in any RSS reader:")}</p>
<div class="key-value"><span class="label">url</span><a class="terminal-link" href="/feed.xml" target="_blank" rel="noopener">https://albz.it/feed.xml</a></div>
<p class="prose">${t("No RSS reader on your Mac yet? I built one too:")} <a class="terminal-link" href="https://github.com/AlbertoBarrago/RSSReader/releases/latest" target="_blank" rel="noopener noreferrer">${t("download RSS Reader")}</a> 😉</p>`);
		return;
	}
	if (command === 'play') {
		if (isGameName(argument)) {
			appendOutput(`<span class="green">${t('Launching')} ${GAME_TITLES[argument]}…</span>`);
			launchGame(argument);
		} else {
			appendOutput(`<span class="red">${t('Unknown game')}${argument ? `: ${escapeHTML(argument)}` : ''}.</span> ${language === 'it' ? 'Prova' : 'Try'} <button class="inline-command command" data-command="games">games</button>.`);
		}
		return;
	}
	if (command === '1337') {
		launchCatEasterEgg();
		return;
	}
	if (command === 'sudo' && argument === 'hire alberto') {
		appendOutput(`<span class="green">${t('Permission granted. Opening contact details…')}</span>`);
		appendOutput(contactHTML());
		return;
	}
	appendOutput(`<span class="red">${t('command not found:')} ${escapeHTML(command)}</span><br>${language === 'it' ? 'Scrivi' : 'Type'} <button class="inline-command command" data-command="help">help</button> ${language === 'it' ? 'per vedere i comandi disponibili.' : 'to see available commands.'}`);
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
		<div class="game-topbar"><span class="game-title">${GAME_TITLES[type]}</span><button class="game-exit" type="button" data-action="exit-game">${t("ESC · CLOSE")}</button></div>
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
	updatePageMetadata();
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

document.documentElement.lang = language;
app.innerHTML = terminalHTML();
const output = /** @type {HTMLElement} */ (document.getElementById('terminal-output'));
const form = /** @type {HTMLFormElement} */ (document.getElementById('terminal-form'));
const input = /** @type {HTMLInputElement} */ (document.getElementById('terminal-input'));
appendOutput(bannerHTML(), 'welcome-block');
startNowPlaying(import.meta.env.VITE_SPOTIFY_ENDPOINT);
animateBannerGlitch();
printConsoleBanner();

/** @returns {string | undefined} */
function articleSlugFromLocation() {
	return window.location.pathname.match(/^(?:\/it)?\/articles\/([^/]+)\/?$/)?.[1]
		?? window.location.hash.match(/^#article\/(.+)$/)?.[1];
}

const bootSlug = articleSlugFromLocation();
if (bootSlug && getArticleHTML(bootSlug)) openArticleReader(bootSlug);
else if (isBlogIndexLocation()) openBlogIndex();

window.addEventListener('popstate', () => {
	const slug = articleSlugFromLocation();
	if (slug && getArticleHTML(slug)) openArticleReader(slug);
	else if (isBlogIndexLocation()) {
		removeArticleReader();
		openBlogIndex();
	} else {
		removeArticleReader();
		document.getElementById('blog-index')?.remove();
		syncOverlayInert();
		updatePageMetadata();
	}
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

app.addEventListener('input', (event) => {
	if (!(event.target instanceof HTMLInputElement) || event.target.id !== 'blog-search') return;
	blogFilters.query = event.target.value;
	saveBlogFilters();
	renderBlogResults();
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
			appendOutput(`<span class="muted">${language === 'it' ? 'Scrivi help per vedere i comandi disponibili.' : 'Type help to see the list of available commands.'}</span>`);
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
	if (target.closest('[data-action="close-blog"]')) {
		closeBlogIndex();
		return;
	}
	const tagTarget = /** @type {HTMLElement | null} */ (target.closest('[data-action="filter-tag"]'));
	if (tagTarget) {
		toggleBlogTag(tagTarget.dataset.tag ?? '');
		return;
	}
	if (target.closest('[data-action="toggle-sort"]')) {
		toggleBlogOrder();
		return;
	}
	if (target.closest('[data-action="reset-blog-filters"]')) {
		resetBlogFilters();
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
	if (!target.closest('a') && !document.getElementById('game-overlay') && !document.getElementById('article-reader') && !document.getElementById('blog-index')) {
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
	else if (event.key === 'Escape' && document.getElementById('blog-index')) {
		// First ESC in a non-empty search clears it (like the native search field), the next one closes.
		if (event.target instanceof HTMLInputElement && event.target.id === 'blog-search' && event.target.value) {
			event.preventDefault();
			event.target.value = '';
			blogFilters.query = '';
			saveBlogFilters();
			renderBlogResults();
			return;
		}
		closeBlogIndex();
	}
});
