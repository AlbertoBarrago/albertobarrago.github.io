/**
 * @file HTML for the "How we build" guide: the page body, its contents and
 * the summary card the `howwebuild` command leaves in the terminal log.
 *
 * Pure string templates with no DOM access, so the same markup serves the
 * client overlay and the prerendered page (scripts/prerender-articles.mjs
 * loads this module through Vite). `interactive: false` drops the controls
 * that need JavaScript (copy buttons) and turns in-page navigation into plain
 * `#id` links, for the <noscript> fallback crawlers read.
 */

import { t, formatDate } from './i18n.js';
import { escapeHTML } from './utils.js';
import { inlineMarkup, guideDiagrams, guideLastModified, guideSections, sectionFreshness } from './how-we-build.js';

/** @typedef {import('./how-we-build.js').HowWeBuildGuide} HowWeBuildGuide */
/** @typedef {import('./how-we-build.js').GuideSection} GuideSection */
/** @typedef {import('./how-we-build.js').GuideSnippet} GuideSnippet */

/**
 * @typedef {{ interactive: boolean, today: string }} GuideRenderOptions
 * `today` (YYYY-MM-DD) decides the "new" and "recently updated" badges.
 */

/** Ids of the two closing parts, used as fragments next to the section ids. */
export const ROADMAP_ID = 'next-up';
export const CHANGELOG_ID = 'changelog';

/** @param {string} isoDate @returns {string} */
function timeHTML(isoDate) {
	return `<time datetime="${isoDate}">${formatDate(isoDate)}</time>`;
}

/**
 * A link to a part of the guide: a button that scrolls the overlay when
 * interactive, a fragment link otherwise.
 * @param {string} id
 * @param {string} label already escaped HTML
 * @param {boolean} interactive
 * @param {string} [className]
 * @returns {string}
 */
function gotoHTML(id, label, interactive, className = 'reader-nav-link') {
	return interactive
		? `<button class="${className}" type="button" data-action="goto-guide" data-target="${id}">${label}</button>`
		: `<a class="${className}" href="#${id}">${label}</a>`;
}

/**
 * Languages whose blocks are prose (prompts, CLAUDE.md excerpts, skill
 * templates): they wrap to the column so a paragraph reads without scrolling
 * sideways. Code keeps its lines, since wrapping a shell command reads as two.
 * Copying is unaffected: the button copies the raw text.
 */
const PROSE_LANGUAGES = new Set(['markdown', 'text']);

/** @param {GuideSnippet} snippet @param {boolean} interactive @returns {string} */
function snippetHTML(snippet, interactive) {
	const copy = interactive ? `<button class="reader-action guide-copy" type="button" data-action="copy-snippet">${t('copy')}</button>` : '';
	const bar = `<div class="guide-snippet-bar"><span class="guide-snippet-lang">${escapeHTML(snippet.language)}</span>${copy}</div>`;
	const origin = snippet.origin
		? `<p class="guide-origin">${t('from')} ${snippet.origin.url
			? `<a class="terminal-link" href="${snippet.origin.url}" target="_blank" rel="noopener noreferrer">${escapeHTML(snippet.origin.label)} ↗</a>`
			: escapeHTML(snippet.origin.label)}</p>`
		: '';
	const body = `${bar}<pre class="guide-code${PROSE_LANGUAGES.has(snippet.language) ? ' is-prose' : ''}"><code>${escapeHTML(snippet.code)}</code></pre>${origin}`;
	return snippet.collapsed
		? `<details class="guide-snippet"><summary class="guide-snippet-title">${inlineMarkup(snippet.title)}</summary>${body}</details>`
		: `<div class="guide-snippet"><div class="guide-snippet-title">${inlineMarkup(snippet.title)}</div>${body}</div>`;
}

/**
 * Status chip, freshness badge and dates of a section.
 * @param {GuideSection} section
 * @param {HowWeBuildGuide} guide
 * @param {GuideRenderOptions} options
 * @returns {string}
 */
function sectionMetaHTML(section, guide, { interactive, today }) {
	const statusLabels = { adopted: t('adopted'), trial: t('in trial') };
	const freshness = sectionFreshness(section, guide.published, today);
	const freshnessLabels = { new: t('new'), updated: t('recently updated') };
	const dates = section.updated && section.updated !== section.added
		? `${t('updated')} ${timeHTML(section.updated)}`
		: `${t('added')} ${timeHTML(section.added)}`;
	const anchor = interactive
		? `<button class="reader-action guide-anchor" type="button" data-action="copy-guide-link" data-target="${section.id}" aria-label="${t('Copy the link to this section')}: ${escapeHTML(section.title)}">${t('copy link')}</button>`
		: `<a class="guide-anchor" href="#${section.id}">#</a>`;
	return `<p class="guide-section-meta">${section.status ? `<span class="guide-status is-${section.status}">${statusLabels[section.status]}</span>` : ''}${freshness ? `<span class="guide-badge">${freshnessLabels[freshness]}</span>` : ''}<span>${dates}</span>${anchor}</p>`;
}

/**
 * One practice or pitfall. The section id is the heading's DOM id and the
 * URL fragment: headings, not whole sections, so the scrollspy tracks where
 * each part starts, as it does for article chapters.
 * @param {GuideSection} section
 * @param {number} index position inside its part (practices or pitfalls)
 * @param {HowWeBuildGuide} guide
 * @param {GuideRenderOptions} options
 * @returns {string}
 */
function sectionHTML(section, index, guide, options) {
	const diagrams = guideDiagrams(guide);
	const figures = (section.diagrams ?? []).map((diagram) => `<figure class="guide-figure">
	<a href="${diagram.src}" target="_blank" rel="noopener" data-action="open-diagram" data-diagram="${diagrams.indexOf(diagram)}" aria-label="${t('Open diagram')}: ${escapeHTML(diagram.caption)}"><img src="${diagram.src}" alt="${escapeHTML(diagram.alt)}" loading="lazy" decoding="async"></a>
	<figcaption>${inlineMarkup(diagram.caption)} <a class="terminal-link" href="${diagram.source}" download>${t('Markasso source')}</a></figcaption>
</figure>`).join('');
	return `<section class="guide-section" aria-labelledby="${section.id}">
	<h2 class="guide-title" id="${section.id}"><span class="guide-number">${String(index + 1).padStart(2, '0')}</span><span>${inlineMarkup(section.title)}</span></h2>
	${sectionMetaHTML(section, guide, options)}
	<div class="guide-label">${t('why')}</div>
	<p class="guide-why">${inlineMarkup(section.why)}</p>
	<div class="guide-label">${t('how')}</div>
	<ol class="guide-steps" role="list">${section.steps.map((step) => `<li>${inlineMarkup(step)}</li>`).join('')}</ol>
	${section.snippets.map((snippet) => snippetHTML(snippet, options.interactive)).join('')}
	${figures}
</section>`;
}

/**
 * Contents of the guide, grouped by part. Interactive entries reuse the
 * article reader's TOC classes, so the same scrollspy highlights them.
 * @param {HowWeBuildGuide} guide
 * @param {GuideRenderOptions} options
 * @returns {string}
 */
export function guideContentsHTML(guide, options) {
	const linkClass = options.interactive ? 'reader-toc-link' : 'guide-toc-link';
	/** @param {{ id: string, label: string, fresh?: boolean }[]} entries */
	const list = (entries) => `<ol class="reader-toc-list" role="list">${entries.map((entry) =>
		`<li class="reader-toc-item">${gotoHTML(entry.id, `${entry.label}${entry.fresh ? ` <span class="guide-toc-dot" aria-label="(${t('recently updated')})">●</span>` : ''}`, options.interactive, linkClass)}</li>`
	).join('')}</ol>`;
	/** @param {GuideSection[]} sections */
	const sectionEntries = (sections) => sections.map((section) => ({
		id: section.id,
		label: inlineMarkup(section.title),
		fresh: Boolean(sectionFreshness(section, guide.published, options.today)),
	}));
	return `<div class="guide-toc-group">${t('Practices')}</div>${list(sectionEntries(guide.practices))}
<div class="guide-toc-group">${t('Pitfalls')}</div>${list(sectionEntries(guide.pitfalls))}
<div class="guide-toc-group">${t('More')}</div>${list([
		{ id: ROADMAP_ID, label: t('Next up') },
		{ id: CHANGELOG_ID, label: t('Changelog') },
	])}`;
}

/**
 * "Inspired by ... · updated <date> · 6 practices · 4 pitfalls".
 * @param {HowWeBuildGuide} guide
 * @returns {string}
 */
function guideMetaHTML(guide) {
	const { inspiration } = guide;
	const credit = inspiration.url
		? `<a class="terminal-link" href="${inspiration.url}" target="_blank" rel="noopener noreferrer">${escapeHTML(inspiration.label)} ↗</a>`
		: `<em>${escapeHTML(inspiration.label)}</em>`;
	return `<p class="guide-meta">${t('Inspired by')} ${credit} · ${t('updated')} ${timeHTML(guideLastModified(guide))} · ${guide.practices.length} ${t('practices')} · ${guide.pitfalls.length} ${t('pitfalls')}</p>`;
}

/**
 * The guide page body: header with the latest change, practices, pitfalls,
 * roadmap and changelog.
 * @param {HowWeBuildGuide} guide
 * @param {GuideRenderOptions} options
 * @returns {string}
 */
export function guideArticleHTML(guide, options) {
	const latest = guide.changelog[0];
	const latestChange = latest
		? `<aside class="guide-latest"><span class="guide-label">${t('Latest change')}</span> ${timeHTML(latest.date)}<p>${inlineMarkup(latest.summary)}</p>${gotoHTML(CHANGELOG_ID, `${t('see every change')} →`, options.interactive)}</aside>`
		: '';
	const roadmap = guide.roadmap.map((item) => `<li><span class="guide-roadmap-title">${item.sectionId
		? gotoHTML(item.sectionId, inlineMarkup(item.title), options.interactive)
		: inlineMarkup(item.title)}</span><p>${inlineMarkup(item.summary)}</p></li>`).join('');
	const changelog = guide.changelog.map((entry) => `<li>${timeHTML(entry.date)}<p>${inlineMarkup(entry.summary)}</p>${entry.sections?.length
		? `<p class="guide-changelog-sections">${entry.sections.map((id) => {
			const section = guideSections(guide).find((candidate) => candidate.id === id);
			return section ? gotoHTML(id, inlineMarkup(section.title), options.interactive) : '';
		}).join(' · ')}</p>`
		: ''}</li>`).join('');
	return `<article class="guide">
<header class="guide-header">
	<h1 class="blog-title" id="guide-title" tabindex="-1">${t('How we build')}</h1>
	<p class="blog-intro">${t('A practical guide to how I work with coding agents. Each practice says why it matters, how to do it, and gives you a block to copy.')}</p>
	${guideMetaHTML(guide)}
	${latestChange}
</header>
${options.interactive ? '' : `<nav class="guide-contents" aria-label="${t('Guide contents')}">${guideContentsHTML(guide, options)}</nav>`}
<h2 class="guide-part">${t('Practices')}</h2>
${guide.practices.map((section, index) => sectionHTML(section, index, guide, options)).join('')}
<h2 class="guide-part">${t('Pitfalls we hit')}</h2>
${guide.pitfalls.map((section, index) => sectionHTML(section, index, guide, options)).join('')}
<section class="guide-closing" aria-labelledby="${ROADMAP_ID}">
	<h2 class="guide-part" id="${ROADMAP_ID}">${t('Next up')}</h2>
	<ul class="guide-roadmap" role="list">${roadmap}</ul>
</section>
<section class="guide-closing" aria-labelledby="${CHANGELOG_ID}">
	<h2 class="guide-part" id="${CHANGELOG_ID}">${t('Changelog')}</h2>
	<ol class="guide-changelog" role="list">${changelog}</ol>
</section>
</article>`;
}

/**
 * What the `howwebuild` command leaves in the terminal log: a short summary
 * with links into the guide page. Buttons only: the log is never prerendered.
 * @param {HowWeBuildGuide} guide
 * @returns {string}
 */
export function guideCardHTML(guide) {
	/** @param {GuideSection[]} sections */
	const index = (sections) => `<ol role="list">${sections.map((section) =>
		`<li><button class="reader-nav-link" type="button" data-action="open-guide" data-target="${section.id}">${inlineMarkup(section.title)}</button></li>`
	).join('')}</ol>`;
	return `<div class="guide-card">
<div class="output-title">${t('How we build')}</div>
<p class="prose">${t('A practical guide to how I work with coding agents. Each practice says why it matters, how to do it, and gives you a block to copy.')}</p>
${guideMetaHTML(guide)}
<nav class="guide-index" aria-label="${t('Guide contents')}">
	<div class="utils-category">${t('Practices')}</div>${index(guide.practices)}
	<div class="utils-category">${t('Pitfalls')}</div>${index(guide.pitfalls)}
</nav>
<div class="output-links"><button class="inline-command command" type="button" data-action="open-guide">${t('open the guide')}</button></div>
</div>`;
}
