/**
 * @file Node-only markdown rendering shared by the Vite build-time article
 * plugin and the dev-only admin preview endpoint (see vite.config.js).
 * `marked` runs here, in Node, and never ships to any browser bundle —
 * public or admin.
 */

import { marked } from 'marked';

/** @param {string} raw @returns {{ meta: Record<string, unknown>, body: string }} */
export function parseFrontmatter(raw) {
	const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
	if (!match) return { meta: {}, body: raw };
	/** @type {Record<string, string>} */
	const meta = Object.fromEntries(
		match[1].split('\n').filter(Boolean).map((line) => {
			const index = line.indexOf(':');
			return [line.slice(0, index).trim(), line.slice(index + 1).trim()];
		})
	);
	if (meta.tags) {
		/** @type {Record<string, unknown>} */ (meta).tags = meta.tags.split(',').map((tag) => tag.trim()).filter(Boolean);
	}
	return { meta, body: match[2] };
}

/** @param {string} markdown @returns {string} */
export function renderMarkdownToHTML(markdown) {
	return marked.parse(markdown, { async: false });
}
