/**
 * @file Post-build step: generates a static build/articles/<slug>/index.html
 * per article, based on the built build/index.html shell, with per-article
 * <title>/meta/Open Graph/Twitter/canonical/JSON-LD tags and a <noscript>
 * fallback body. This gives crawlers and social unfurlers (which don't run
 * JS or execute only the SPA shell) a real, indexable, shareable URL for
 * each article, while the client-side app still owns the interactive
 * reading experience once JS loads.
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
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

function loadArticles(language = 'en') {
	const directory = language === 'it' ? join(ARTICLES_DIR, 'it') : ARTICLES_DIR;
	if (!existsSync(directory)) return [];
	return readdirSync(directory)
		.filter((file) => file.endsWith('.md'))
		.map((file) => {
			const slug = file.replace(/\.md$/, '');
			const raw = readFileSync(join(directory, file), 'utf8');
			const { meta, body } = parseFrontmatter(raw);
			const html = renderMarkdownToHTML(body);
			return {
				slug,
				language,
				title: /** @type {string} */ (meta.title ?? slug),
				date: /** @type {string} */ (meta.date ?? ''),
				label: /** @type {string} */ (meta.label ?? ''),
				html,
			};
		})
		.sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * Rewrites the shell's language, title, description, Open Graph, Twitter and
 * canonical tags for one page, dropping any hreflang links so the caller can
 * add the right alternates.
 * @param {string} shell
 * @param {{ language: string, url: string, title: string, description: string, type: 'article' | 'website' }} page
 * @returns {string}
 */
function applyPageMeta(shell, { language, url, title, description, type }) {
	return shell
		.replace(/<html lang="[^"]*">/, `<html lang="${language}">`)
		.replace(/\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*" \/>/g, '')
		.replace(/<title>.*?<\/title>/s, `<title>${escapeAttr(title)}</title>`)
		.replace(
			/<meta name="description"[\s\S]*?\/>/,
			`<meta name="description" content="${escapeAttr(description)}" />`
		)
		.replace(/<meta property="og:type" content="[^"]*" \/>/, `<meta property="og:type" content="${type}" />`)
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
}

/** @param {string} shell @param {{ slug: string, title: string, date: string, label?: string, html: string }} article @returns {string} */
function renderArticlePage(shell, article, hasItalian) {
	const url = `${SITE_URL}${article.language === 'it' ? '/it' : ''}/articles/${article.slug}/`;
	const title = `${article.title} | Alberto Barrago`;
	const description = excerpt(article.html);

	let page = applyPageMeta(shell, { language: article.language, url, title, description, type: 'article' });

	const articleSchema = `\t<script type="application/ld+json">
		${JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Article',
			headline: article.title,
			datePublished: article.date,
			author: { '@type': 'Person', name: 'Alberto Barrago', url: SITE_URL },
			url,
			mainEntityOfPage: url,
			inLanguage: article.language,
		})}
	</script>\n</head>`;
	page = page.replace('</head>', `${alternateLinks(`/articles/${article.slug}/`, hasItalian ? `/it/articles/${article.slug}/` : null)}${articleSchema}`);

	const fallback = `<noscript><article><h1>${escapeAttr(article.title)}</h1><p>${escapeAttr(article.date)}${article.label ? ` · ${escapeAttr(article.label)}` : ''}</p>${article.html}</article></noscript>`;
	page = page.replace('<div id="app"></div>', `<div id="app">${fallback}</div>`);

	return page;
}

/**
 * Static shell for the blog index (/articles/ or /it/articles/), so a direct
 * load or a crawler gets a real page; the client app opens the interactive
 * index on boot. The <noscript> list is newest first, like the UI default.
 * @param {string} shell
 * @param {{ slug: string, language: string, title: string, date: string, html: string }[]} list
 * @param {'en' | 'it'} language
 * @returns {string}
 */
function renderIndexPage(shell, list, language) {
	const url = `${SITE_URL}${language === 'it' ? '/it' : ''}/articles/`;
	const title = `${language === 'it' ? 'Articoli' : 'Articles'} | Alberto Barrago`;
	const description = language === 'it'
		? 'Articoli tecnici e appunti di Alberto Barrago.'
		: 'Technical articles and notes by Alberto Barrago.';

	let page = applyPageMeta(shell, { language, url, title, description, type: 'website' });
	page = page.replace('</head>', `${alternateLinks('/articles/', '/it/articles/')}</head>`);

	const items = list.map((article) => {
		const href = `${article.language === 'it' ? '/it' : ''}/articles/${article.slug}/`;
		return `<li><a href="${href}" hreflang="${article.language}">${escapeAttr(article.title)}</a> <time datetime="${article.date}">${article.date}</time><p>${escapeAttr(excerpt(article.html))}</p></li>`;
	});
	const fallback = `<noscript><h1>${language === 'it' ? 'Articoli' : 'Articles'}</h1><ul>${items.join('')}</ul></noscript>`;
	return page.replace('<div id="app"></div>', `<div id="app">${fallback}</div>`);
}

/** @param {{ slug: string, date: string }[]} articles @returns {string} */
function renderSitemap(articles) {
	const urls = [
		`  <url><loc>${SITE_URL}/it/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>`,
		`  <url>\n    <loc>${SITE_URL}/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>`,
		// Iris's pages are static files under static/iris/, outside the app.
		`  <url>\n    <loc>${SITE_URL}/articles/</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
		`  <url>\n    <loc>${SITE_URL}/it/articles/</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
		`  <url>\n    <loc>${SITE_URL}/iris/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
		`  <url>\n    <loc>${SITE_URL}/iris/privacy/</loc>\n    <changefreq>yearly</changefreq>\n    <priority>0.3</priority>\n  </url>`,
		...articles.map((article) =>
			`  <url>\n    <loc>${SITE_URL}${article.language === 'it' ? '/it' : ''}/articles/${article.slug}/</loc>\n    <lastmod>${article.date}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`
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
		const url = `${SITE_URL}${article.language === 'it' ? '/it' : ''}/articles/${article.slug}/`;
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

function alternateLinks(englishPath, italianPath) {
	return `<link rel="alternate" hreflang="en" href="${SITE_URL}${englishPath}" />
${italianPath ? `<link rel="alternate" hreflang="it" href="${SITE_URL}${italianPath}" />` : ''}
<link rel="alternate" hreflang="x-default" href="${SITE_URL}${englishPath}" />
`;
}

function main() {
	const articles = loadArticles();
	if (articles.length === 0) return;

	const shell = readFileSync(join(BUILD_DIR, 'index.html'), 'utf8');
	const italianArticles = loadArticles('it');
	const translatedSlugs = new Set(italianArticles.map((article) => article.slug));
	const englishSlugs = new Set(articles.map((article) => article.slug));
	for (const article of italianArticles) {
		if (!englishSlugs.has(article.slug)) throw new Error(`Italian article has no English counterpart: ${article.slug}`);
	}
	writeFileSync(join(BUILD_DIR, 'index.html'), shell.replace('</head>', `${alternateLinks('/', '/it/')}</head>`));
	const description = 'Senior Software Engineer e product builder: progetto sistemi affidabili e realizzo software per web, mobile, cloud e AI.';
	const italianShell = shell
		.replace('<html lang="en">', '<html lang="it">')
		.replace(/("description": "[^"]*")/, `"description": "${description}", "inLanguage": "it"`)
		.replace(/(<meta (?:name="description"|property="og:description"|name="twitter:description")\s+content=")[^"]*(" \/>)/g, `$1${description}$2`)
		.replace('rel="canonical" href="https://albz.it/"', 'rel="canonical" href="https://albz.it/it/"')
		.replace('property="og:url" content="https://albz.it/"', 'property="og:url" content="https://albz.it/it/"')
		.replace('</head>', `${alternateLinks('/', '/it/')}</head>`);
	mkdirSync(join(BUILD_DIR, 'it'), { recursive: true });
	writeFileSync(join(BUILD_DIR, 'it', 'index.html'), italianShell);

	for (const article of [...articles, ...italianArticles]) {
		const dir = join(BUILD_DIR, article.language === 'it' ? 'it' : '', 'articles', article.slug);
		mkdirSync(dir, { recursive: true });
		writeFileSync(join(dir, 'index.html'), renderArticlePage(shell, article, translatedSlugs.has(article.slug)));
	}

	mkdirSync(join(BUILD_DIR, 'articles'), { recursive: true });
	writeFileSync(join(BUILD_DIR, 'articles', 'index.html'), renderIndexPage(shell, articles, 'en'));
	// Italian index lists the Italian version where it exists, the English one otherwise, as the client does.
	const italianIndex = articles.map((article) => italianArticles.find((entry) => entry.slug === article.slug) ?? article);
	mkdirSync(join(BUILD_DIR, 'it', 'articles'), { recursive: true });
	writeFileSync(join(BUILD_DIR, 'it', 'articles', 'index.html'), renderIndexPage(shell, italianIndex, 'it'));

	writeFileSync(join(BUILD_DIR, 'sitemap.xml'), renderSitemap([...articles, ...italianArticles]));
	writeFileSync(join(BUILD_DIR, 'feed.xml'), renderRSS(articles));

	console.log(`Prerendered ${articles.length} article page(s).`);
}

main();
