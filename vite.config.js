import { defineConfig } from 'vite';
import { readFileSync } from 'node:fs';
import { parseFrontmatter, renderMarkdownToHTML } from './scripts/markdown.mjs';

const ARTICLES_DIR = '/src/content/articles/';

/**
 * Pre-renders src/content/articles/*.md to { meta, html } at build/dev time
 * using `marked` (a Node-only devDependency). No markdown parser ever ships
 * to the browser — public site or admin panel — because of this.
 */
const articlesRenderPlugin = {
	name: 'articles-render',
	load(id) {
		const [filePath] = id.split('?');
		if (!filePath.includes(ARTICLES_DIR) || !filePath.endsWith('.md')) return null;
		const raw = readFileSync(filePath, 'utf8');
		const { meta, body } = parseFrontmatter(raw);
		const html = renderMarkdownToHTML(body);
		return `export const meta = ${JSON.stringify(meta)};\nexport const html = ${JSON.stringify(html)};\n`;
	},
};

export default defineConfig({
	publicDir: 'static',
	plugins: [articlesRenderPlugin],
	build: {
		outDir: 'build',
	},
});
