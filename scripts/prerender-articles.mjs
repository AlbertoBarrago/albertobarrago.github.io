/**
 * @file Post-build step: generates a static build/articles/<slug>/index.html
 * per article, based on the built build/index.html shell, with per-article
 * <title>/meta/Open Graph/Twitter/canonical/JSON-LD tags and a <noscript>
 * fallback body. This gives crawlers and social unfurlers (which don't run
 * JS or execute only the SPA shell) a real, indexable, shareable URL for
 * each article, while the client-side app still owns the interactive
 * reading experience once JS loads.
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseFrontmatter, renderMarkdownToHTML } from './markdown.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const ARTICLES_DIR = join(ROOT, 'src/content/articles');
const BUILD_DIR = join(ROOT, 'build');
const SITE_URL = 'https://albz.it';

/** @param {string} value @returns {string} */
function decodeEntities(value) {
	return value
		.replace(/&#39;/g, "'")
		.replace(/&quot;/g, '"')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&amp;/g, '&');
}

/** @param {string} html @param {number} limit @returns {string} */
function excerpt(html, limit = 155) {
	const text = decodeEntities(html.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
	if (text.length <= limit) return text;
	return `${text.slice(0, limit).replace(/\s+\S*$/, '')}…`;
}

/** @param {string} value @returns {string} */
function escapeAttr(value) {
	return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function loadArticles() {
	return readdirSync(ARTICLES_DIR)
		.filter((file) => file.endsWith('.md'))
		.map((file) => {
			const slug = file.replace(/\.md$/, '');
			const raw = readFileSync(join(ARTICLES_DIR, file), 'utf8');
			const { meta, body } = parseFrontmatter(raw);
			const html = renderMarkdownToHTML(body);
			return {
				slug,
				title: /** @type {string} */ (meta.title ?? slug),
				date: /** @type {string} */ (meta.date ?? ''),
				html,
			};
		})
		.sort((a, b) => b.date.localeCompare(a.date));
}

/** @param {string} shell @param {{ slug: string, title: string, date: string, html: string }} article @returns {string} */
function renderArticlePage(shell, article) {
	const url = `${SITE_URL}/articles/${article.slug}/`;
	const title = `${article.title} | Alberto Barrago`;
	const description = excerpt(article.html);

	let page = shell
		.replace(/<title>.*?<\/title>/s, `<title>${escapeAttr(title)}</title>`)
		.replace(
			/<meta name="description"[\s\S]*?\/>/,
			`<meta name="description" content="${escapeAttr(description)}" />`
		)
		.replace(/<meta property="og:type" content="[^"]*" \/>/, '<meta property="og:type" content="article" />')
		.replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`)
		.replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeAttr(title)}" />`)
		.replace(
			/<meta property="og:description"[\s\S]*?\/>/,
			`<meta property="og:description" content="${escapeAttr(description)}" />`
		)
		.replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeAttr(title)}" />`)
		.replace(
			/<meta name="twitter:description"[\s\S]*?\/>/,
			`<meta name="twitter:description" content="${escapeAttr(description)}" />`
		)
		.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`);

	const articleSchema = `\t<script type="application/ld+json">
		${JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Article',
			headline: article.title,
			datePublished: article.date,
			author: { '@type': 'Person', name: 'Alberto Barrago', url: SITE_URL },
			url,
			mainEntityOfPage: url,
		})}
	</script>\n</head>`;
	page = page.replace('</head>', articleSchema);

	const fallback = `<noscript><article><h1>${escapeAttr(article.title)}</h1><p>${escapeAttr(article.date)}</p>${article.html}</article></noscript>`;
	page = page.replace('<div id="app"></div>', `<div id="app">${fallback}</div>`);

	return page;
}

/** @param {{ slug: string, date: string }[]} articles @returns {string} */
function renderSitemap(articles) {
	const urls = [
		`  <url>\n    <loc>${SITE_URL}/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>`,
		...articles.map((article) =>
			`  <url>\n    <loc>${SITE_URL}/articles/${article.slug}/</loc>\n    <lastmod>${article.date}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`
		),
	];
	return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
}

/** @param {string} value @returns {string} */
function escapeXML(value) {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

/** @param {string} isoDate @returns {string} */
function toRFC822(isoDate) {
	const date = new Date(`${isoDate}T00:00:00Z`);
	return date.toUTCString();
}

/** @param {{ slug: string, title: string, date: string, html: string }[]} articles @returns {string} */
function renderRSS(articles) {
	const items = articles.map((article) => {
		const url = `${SITE_URL}/articles/${article.slug}/`;
		const description = excerpt(article.html);
		return `  <item>
    <title>${escapeXML(article.title)}</title>
    <link>${url}</link>
    <guid isPermaLink="true">${url}</guid>
    <pubDate>${toRFC822(article.date)}</pubDate>
    <description>${escapeXML(description)}</description>
  </item>`;
	});
	return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Alberto Barrago | Articles</title>
    <link>${SITE_URL}/</link>
    <description>Technical articles and notes by Alberto Barrago.</description>
    <language>en</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items.join('\n')}
  </channel>
</rss>
`;
}

function main() {
	const articles = loadArticles();
	if (articles.length === 0) return;

	const shell = readFileSync(join(BUILD_DIR, 'index.html'), 'utf8');

	for (const article of articles) {
		const dir = join(BUILD_DIR, 'articles', article.slug);
		mkdirSync(dir, { recursive: true });
		writeFileSync(join(dir, 'index.html'), renderArticlePage(shell, article));
	}

	writeFileSync(join(BUILD_DIR, 'sitemap.xml'), renderSitemap(articles));
	writeFileSync(join(BUILD_DIR, 'feed.xml'), renderRSS(articles));

	console.log(`Prerendered ${articles.length} article page(s).`);
}

main();
