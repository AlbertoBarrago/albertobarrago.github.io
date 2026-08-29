/**
 * @file Loads markdown articles committed under src/content/articles at build
 * time and exposes their metadata plus rendered HTML.
 */

import { renderMarkdown } from './markdown.js';

/** @typedef {{ slug: string, title: string, date: string, tags: string[] }} ArticleMeta */

const rawModules = import.meta.glob('/src/content/articles/*.md', {
	eager: true,
	query: '?raw',
	import: 'default',
});

/** @param {string} raw @returns {{ meta: Record<string, string>, body: string }} */
function parseFrontmatter(raw) {
	const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
	if (!match) return { meta: {}, body: raw };
	const meta = Object.fromEntries(
		match[1].split('\n').filter(Boolean).map((line) => {
			const index = line.indexOf(':');
			return [line.slice(0, index).trim(), line.slice(index + 1).trim()];
		})
	);
	return { meta, body: match[2] };
}

/** @type {Map<string, string>} */
const bodyBySlug = new Map();

/** @type {ArticleMeta[]} */
const articles = Object.entries(rawModules)
	.map(([path, raw]) => {
		const slug = /** @type {string} */ (path.split('/').pop()).replace(/\.md$/, '');
		const { meta, body } = parseFrontmatter(/** @type {string} */ (raw));
		bodyBySlug.set(slug, body);
		return {
			slug,
			title: meta.title ?? slug,
			date: meta.date ?? '',
			tags: meta.tags ? meta.tags.split(',').map((tag) => tag.trim()) : [],
		};
	})
	.sort((a, b) => b.date.localeCompare(a.date));

/** @param {string} slug @returns {string | null} */
function getArticleHTML(slug) {
	const body = bodyBySlug.get(slug);
	return body === undefined ? null : renderMarkdown(body);
}

export { articles, getArticleHTML };
