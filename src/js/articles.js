/**
 * @file Loads markdown articles committed under src/content/articles. Each
 * file is pre-rendered to HTML at build/dev time by the Vite plugin in
 * vite.config.js (Node-side, using `marked`) — no markdown parser ships to
 * the browser.
 */

/** @typedef {{ slug: string, title: string, date: string, tags: string[] }} ArticleMeta */
/** @typedef {{ meta: { title?: string, date?: string, tags?: string[] }, html: string }} RenderedArticle */

const modules = /** @type {Record<string, RenderedArticle>} */ (
	import.meta.glob('/src/content/articles/*.md', { eager: true })
);

/** @type {Map<string, string>} */
const htmlBySlug = new Map();

/** @type {ArticleMeta[]} */
const articles = Object.entries(modules)
	.map(([path, mod]) => {
		const slug = /** @type {string} */ (path.split('/').pop()).replace(/\.md$/, '');
		htmlBySlug.set(slug, mod.html);
		return {
			slug,
			title: mod.meta.title ?? slug,
			date: mod.meta.date ?? '',
			tags: mod.meta.tags ?? [],
		};
	})
	.sort((a, b) => b.date.localeCompare(a.date));

/** @param {string} slug @returns {string | null} */
function getArticleHTML(slug) {
	return htmlBySlug.has(slug) ? /** @type {string} */ (htmlBySlug.get(slug)) : null;
}

export { articles, getArticleHTML };
