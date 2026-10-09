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

export { articles, getArticleHTML, sortArticlesByDateAscending };
