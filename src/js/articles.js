import { language } from './i18n.js';
/**
 * @file Loads markdown articles committed under src/content/articles. Each
 * file is pre-rendered to HTML at build/dev time by the Vite plugin in
 * vite.config.js (Node-side, using `marked`), no markdown parser ships to
 * the browser.
 */

/** @typedef {{ slug: string, title: string, date: string, tags: string[], label?: string, language: 'en' | 'it', hasItalian: boolean }} ArticleMeta */
/** @typedef {{ meta: { title?: string, date?: string, tags?: string[], label?: string }, html: string }} RenderedArticle */

/**
 * Sorts articles by date, ascending (oldest first).
 * @param {ArticleMeta[]} list
 * @returns {ArticleMeta[]}
 */
function sortArticlesByDateAscending(list) {
	return [...list].sort((a, b) => a.date.localeCompare(b.date));
}

/**
 * Sorts articles by date, descending (newest first, LIFO), as shown by the
 * blog index.
 * @template {{ date: string }} T
 * @param {T[]} list
 * @returns {T[]}
 */
function sortArticlesByDateDescending(list) {
	return [...list].sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * Filters articles by a free-text query (matched case-insensitively against
 * title and tags) and by an exact tag. Empty criteria match everything.
 * @template {{ title: string, tags: string[] }} T
 * @param {T[]} list
 * @param {{ query?: string, tag?: string }} criteria
 * @returns {T[]}
 */
function filterArticles(list, { query = '', tag = '' }) {
	const needle = query.trim().toLowerCase();
	return list.filter((article) =>
		(!tag || article.tags.includes(tag))
		&& (!needle
			|| article.title.toLowerCase().includes(needle)
			|| article.tags.some((entry) => entry.toLowerCase().includes(needle)))
	);
}

/**
 * Collects unique tags with their usage count, most used first, ties broken
 * alphabetically so the chip order is stable across builds.
 * @param {{ tags: string[] }[]} list
 * @returns {{ tag: string, count: number }[]}
 */
function articleTags(list) {
	/** @type {Map<string, number>} */
	const counts = new Map();
	for (const article of list) {
		for (const tag of article.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
	}
	return [...counts]
		.map(([tag, count]) => ({ tag, count }))
		.sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

/** Entities `marked` emits in text nodes; decoded so excerpts can be re-escaped safely. */
const HTML_ENTITIES = /** @type {Record<string, string>} */ ({
	'&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&#039;': "'",
});

/**
 * Builds a plain-text excerpt from rendered article HTML, cut at a word
 * boundary. Only paragraph text is used so headings, lists and code blocks
 * never leak into the teaser. The result is unescaped text: callers must
 * escape it before injecting it into markup.
 * @param {string} html
 * @param {number} [limit]
 * @returns {string}
 */
function articleExcerpt(html, limit = 220) {
	const paragraphs = html.match(/<p>[\s\S]*?<\/p>/gi)?.join(' ') ?? html;
	const text = paragraphs
		.replace(/<[^>]*>/g, ' ')
		.replace(/&(?:amp|lt|gt|quot|#0?39);/g, (entity) => HTML_ENTITIES[entity] ?? entity)
		.replace(/\s+/g, ' ')
		.trim();
	if (text.length <= limit) return text;
	return `${text.slice(0, limit).replace(/\s+\S*$/, '')}…`;
}

const italianModules = /** @type {Record<string, RenderedArticle>} */ (
	import.meta.glob('/src/content/articles/it/*.md', { eager: true })
);
const englishModules = /** @type {Record<string, RenderedArticle>} */ (
	import.meta.glob('/src/content/articles/*.md', { eager: true })
);

/** @type {Map<string, string>} */
const htmlBySlug = new Map();

/** @type {ArticleMeta[]} */
const articles = sortArticlesByDateAscending(
	Object.entries(englishModules).map(([path, english]) => {
		const slug = /** @type {string} */ (path.split('/').pop()).replace(/\.md$/, '');
		const italian = italianModules[`/src/content/articles/it/${slug}.md`];
		const mod = language === 'it' && italian ? italian : english;
		htmlBySlug.set(slug, mod.html);
		return {
			slug,
			language: language === 'it' && italian ? 'it' : 'en',
			hasItalian: Boolean(italian),
			title: mod.meta.title ?? slug,
			date: mod.meta.date ?? '',
			tags: mod.meta.tags ?? [],
			label: mod.meta.label ?? '',
		};
	})
);

/** @param {string} slug @returns {string | null} */
function getArticleHTML(slug) {
	return htmlBySlug.has(slug) ? /** @type {string} */ (htmlBySlug.get(slug)) : null;
}

export {
	articles, getArticleHTML, sortArticlesByDateAscending, sortArticlesByDateDescending,
	filterArticles, articleTags, articleExcerpt,
};
