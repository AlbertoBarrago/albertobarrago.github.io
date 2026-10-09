import { afterEach, describe, expect, it, vi } from 'vitest';
import { languageFromPath, articlePath } from './i18n.js';

afterEach(() => { vi.unstubAllGlobals(); vi.resetModules(); });

describe('language URLs', () => {
	it('detects only the Italian path prefix', () => {
		expect(languageFromPath('/it/')).toBe('it');
		expect(languageFromPath('/it/articles/iris/')).toBe('it');
		expect(languageFromPath('/articles/iris/')).toBe('en');
		expect(languageFromPath('/italian/')).toBe('en');
	});
	it('preserves existing English article URLs', () => {
		expect(articlePath('iris', 'en')).toBe('/articles/iris/');
		expect(articlePath('iris', 'it')).toBe('/it/articles/iris/');
	});
	it('loads Italian portfolio content while keeping product names and commands', async () => {
		vi.stubGlobal('location', { pathname: '/it/' });
		vi.resetModules();
		const { location, profile, openSource, brewFormulas } = await import('./index.js');
		expect(location).toBe('Cagliari, Italia');
		expect(profile).toContain('trasformo idee');
		expect(openSource[0].name).toBe('Markasso');
		expect(openSource[0].description).toContain('Una lavagna');
		expect(brewFormulas[0].install).toBe('brew install AlbertoBarrago/tap/wir');
	});
	it('returns no content for an unknown article', async () => {
		vi.stubGlobal('location', { pathname: '/it/' });
		vi.resetModules();
		const { getArticleHTML } = await import('./articles.js');
		expect(getArticleHTML('missing-article')).toBeNull();
	});
	it('loads the complete Italian catalog with translated titles and chapters', async () => {
		vi.stubGlobal('location', { pathname: '/it/' });
		vi.resetModules();
		const { articles, getArticleHTML } = await import('./articles.js');
		for (const article of articles) {
			expect(article.language).toBe('it');
			expect(article.hasItalian).toBe(true);
		}
		expect(getArticleHTML('iris')).toContain('<h2>Cosa fa Iris</h2>');
		expect(getArticleHTML('my-first-and-last-forty-years')).toContain('diottrie, affetti e ragione');
	});
	it('keeps English articles available when an Italian translation exists', async () => {
		vi.stubGlobal('location', { pathname: '/articles/iris/' });
		vi.resetModules();
		const { articles, getArticleHTML } = await import('./articles.js');
		const iris = articles.find((article) => article.slug === 'iris');
		expect(iris.language).toBe('en');
		expect(iris.hasItalian).toBe(true);
		expect(getArticleHTML('iris')).toContain('<h2>What Iris does</h2>');
	});
});
