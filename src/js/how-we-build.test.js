import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { inlineMarkup, guideDiagrams, wrapIndex } from './how-we-build.js';
import { howWeBuild } from './index.js';

afterEach(() => { vi.unstubAllGlobals(); vi.resetModules(); });

const ROOT = join(import.meta.dirname, '../..');
const STATIC_DIR = join(ROOT, 'static');
const SNIPPETS_DIR = join(ROOT, 'src/content/how-we-build');

/** @param {import('./how-we-build.js').HowWeBuildGuide} guide */
const sectionsOf = (guide) => [...guide.practices, ...guide.pitfalls];

/**
 * Every prose string of the guide (what t() translates), in a stable order.
 * Snippet code and product names are excluded: they stay in English.
 * @param {import('./how-we-build.js').HowWeBuildGuide} guide
 * @returns {string[]}
 */
function proseOf(guide) {
	return [
		guide.inspiration.label,
		...sectionsOf(guide).flatMap((section) => [
			section.title,
			section.why,
			...section.steps,
			...section.snippets.map((snippet) => snippet.title),
			...(section.diagrams ?? []).flatMap((diagram) => [diagram.alt, diagram.caption]),
		]),
		...guide.roadmap.flatMap((item) => [item.title, item.summary]),
	];
}

const snippets = sectionsOf(howWeBuild).flatMap((section) => section.snippets);

describe('inlineMarkup', () => {
	it('renders backtick spans as code', () => {
		expect(inlineMarkup('run `npm test` first')).toBe('run <code>npm test</code> first');
	});

	it('escapes HTML before adding markup, also inside code spans', () => {
		expect(inlineMarkup('<b>`none (<reason>)`')).toBe('&lt;b&gt;<code>none (&lt;reason&gt;)</code>');
	});
});

describe('diagram viewer helpers', () => {
	it('lists the guide diagrams in page order, practices before pitfalls', () => {
		const diagram = (/** @type {string} */ name) => ({ src: `/${name}.svg`, source: `/${name}.markasso`, alt: name, caption: name });
		const section = (/** @type {string} */ id, /** @type {ReturnType<typeof diagram>[]} */ diagrams) => ({ id, title: id, why: '', steps: [], snippets: [], diagrams });
		const guide = {
			updated: '2026-11-17',
			inspiration: { label: '' },
			practices: [section('a', [diagram('one'), diagram('two')]), { ...section('b', []), diagrams: undefined }],
			pitfalls: [section('c', [diagram('three')])],
			roadmap: [],
		};
		expect(guideDiagrams(guide).map((entry) => entry.alt)).toEqual(['one', 'two', 'three']);
	});

	it('wraps slide indexes in both directions', () => {
		expect(wrapIndex(-1, 3)).toBe(2);
		expect(wrapIndex(3, 3)).toBe(0);
		expect(wrapIndex(1, 3)).toBe(1);
		expect(wrapIndex(-4, 3)).toBe(2);
		expect(wrapIndex(5, 0)).toBe(0);
	});

	it('finds the real guide diagrams', () => {
		expect(guideDiagrams(howWeBuild).map((entry) => entry.src)).toEqual([
			'/how-we-build/verification-loop.svg',
			'/how-we-build/themis-pipeline.svg',
		]);
	});
});

describe('howWeBuild guide data', () => {
	it('has unique kebab-case section ids, used as navigation targets', () => {
		const ids = sectionsOf(howWeBuild).map((section) => section.id);
		expect(new Set(ids).size).toBe(ids.length);
		for (const id of ids) expect(id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
	});

	it('gives every section a why, at least one step and at least one block to copy', () => {
		for (const section of sectionsOf(howWeBuild)) {
			expect(section.why.length, section.id).toBeGreaterThan(0);
			expect(section.steps.length, section.id).toBeGreaterThan(0);
			expect(section.snippets.length, section.id).toBeGreaterThan(0);
		}
	});

	it('has unique snippet ids and no empty block', () => {
		const ids = snippets.map((snippet) => snippet.id);
		expect(new Set(ids).size).toBe(ids.length);
		for (const snippet of snippets) expect(snippet.code.trim().length, snippet.id).toBeGreaterThan(0);
	});

	it('uses every block file in src/content/how-we-build/', () => {
		const used = new Set(snippets.map((snippet) => snippet.code));
		for (const file of readdirSync(SNIPPETS_DIR)) {
			expect(used.has(readFileSync(join(SNIPPETS_DIR, file), 'utf8')), file).toBe(true);
		}
	});

	it('keeps the copyable blocks publishable: no personal paths, emails or private config', () => {
		for (const snippet of snippets) {
			expect(snippet.code, snippet.id).not.toMatch(/\/Users\/|~\/Projects|dotfiles|CLAUDE\.local|\.env\b/);
			expect(snippet.code, snippet.id).not.toMatch(/[\w.+-]+@[\w-]+\.[\w.]+/);
			expect(snippet.code, snippet.id).not.toMatch(/\bc22\b/i);
		}
	});

	it('points every diagram at an SVG and its Markasso source committed under static/', () => {
		for (const diagram of sectionsOf(howWeBuild).flatMap((section) => section.diagrams ?? [])) {
			expect(diagram.src).toMatch(/\.svg$/);
			expect(diagram.source).toMatch(/\.markasso$/);
			expect(existsSync(join(STATIC_DIR, diagram.src)), diagram.src).toBe(true);
			expect(existsSync(join(STATIC_DIR, diagram.source)), diagram.source).toBe(true);
		}
	});

	it('uses no em or en dashes, in prose or blocks', () => {
		const texts = [...proseOf(howWeBuild), ...snippets.map((snippet) => snippet.code)];
		for (const text of texts) expect(text).not.toMatch(/[\u2013\u2014]/);
	});

	it('translates every prose string into Italian', async () => {
		vi.stubGlobal('location', { pathname: '/it/' });
		vi.resetModules();
		const { howWeBuild: italianGuide } = await import('./index.js');
		const english = proseOf(howWeBuild);
		const italian = proseOf(italianGuide);
		expect(italian).toHaveLength(english.length);
		italian.forEach((text, index) => {
			expect(text, english[index]).not.toBe(english[index]);
			expect(text).not.toMatch(/[\u2013\u2014]/);
		});
	});
});
