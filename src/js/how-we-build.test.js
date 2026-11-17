import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { inlineMarkup, guideDiagrams, wrapIndex, daysBetween, sectionFreshness, guideLastModified, isoDay, FRESH_DAYS } from './how-we-build.js';
import { guideArticleHTML, guideCardHTML, guideContentsHTML, ROADMAP_ID, CHANGELOG_ID } from './how-we-build-view.js';
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
		const section = (/** @type {string} */ id, /** @type {ReturnType<typeof diagram>[]} */ diagrams) => ({ id, title: id, added: '2026-11-17', why: '', steps: [], snippets: [], diagrams });
		const guide = {
			published: '2026-11-17',
			inspiration: { label: '' },
			practices: [section('a', [diagram('one'), diagram('two')]), { ...section('b', []), diagrams: undefined }],
			pitfalls: [section('c', [diagram('three')])],
			roadmap: [],
			changelog: [],
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

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** @param {Partial<import('./how-we-build.js').GuideSection>} fields */
const fixtureSection = (fields) => ({ id: 'x', title: 'X', added: '2026-01-01', why: '', steps: [], snippets: [], ...fields });

describe('guide freshness', () => {
	it('counts whole days across a daylight saving change', () => {
		expect(daysBetween('2026-03-28', '2026-03-30')).toBe(2);
		expect(daysBetween('2026-11-17', '2026-11-17')).toBe(0);
		expect(daysBetween('2026-11-18', '2026-11-17')).toBe(-1);
	});

	it('formats today as a local YYYY-MM-DD day', () => {
		expect(isoDay(new Date(2026, 0, 5, 23, 30))).toBe('2026-01-05');
	});

	it('marks sections added after the first edition as new, for FRESH_DAYS', () => {
		const section = fixtureSection({ added: '2026-02-01' });
		expect(sectionFreshness(section, '2026-01-01', '2026-02-01')).toBe('new');
		expect(sectionFreshness(section, '2026-01-01', `2026-03-${String(FRESH_DAYS - 27).padStart(2, '0')}`)).toBe('new');
		expect(sectionFreshness(section, '2026-01-01', '2026-04-01')).toBeNull();
	});

	it('does not mark first-edition sections as new', () => {
		expect(sectionFreshness(fixtureSection({ added: '2026-01-01' }), '2026-01-01', '2026-01-02')).toBeNull();
	});

	it('marks recently updated sections, and ignores dates in the future', () => {
		const section = fixtureSection({ added: '2026-01-01', updated: '2026-05-10' });
		expect(sectionFreshness(section, '2026-01-01', '2026-05-20')).toBe('updated');
		expect(sectionFreshness(section, '2026-01-01', '2026-05-01')).toBeNull();
	});

	it('derives the last modified date from sections and changelog', () => {
		const guide = {
			published: '2026-01-01',
			inspiration: { label: '' },
			practices: [fixtureSection({ id: 'a', updated: '2026-03-01' })],
			pitfalls: [fixtureSection({ id: 'b', added: '2026-02-01' })],
			roadmap: [],
			changelog: [{ date: '2026-02-15', summary: '' }],
		};
		expect(guideLastModified(guide)).toBe('2026-03-01');
		expect(guideLastModified({ ...guide, changelog: [{ date: '2026-04-01', summary: '' }] })).toBe('2026-04-01');
	});
});

describe('howWeBuild guide data over time', () => {
	const ids = new Set(sectionsOf(howWeBuild).map((section) => section.id));

	it('dates every section, never updated before it was added', () => {
		expect(howWeBuild.published).toMatch(ISO_DATE);
		for (const section of sectionsOf(howWeBuild)) {
			expect(section.added, section.id).toMatch(ISO_DATE);
			expect(section.added >= howWeBuild.published, section.id).toBe(true);
			if (section.updated) {
				expect(section.updated, section.id).toMatch(ISO_DATE);
				expect(section.updated >= section.added, section.id).toBe(true);
			}
		}
	});

	it('gives a known status to every practice and none to pitfalls', () => {
		for (const practice of howWeBuild.practices) expect(['adopted', 'trial'], practice.id).toContain(practice.status);
		for (const pitfall of howWeBuild.pitfalls) expect(pitfall.status, pitfall.id).toBeUndefined();
	});

	it('keeps the changelog dated, newest first and pointing at real sections', () => {
		expect(howWeBuild.changelog.length).toBeGreaterThan(0);
		const dates = howWeBuild.changelog.map((entry) => entry.date);
		for (const date of dates) expect(date).toMatch(ISO_DATE);
		expect(dates).toEqual([...dates].sort().reverse());
		for (const id of howWeBuild.changelog.flatMap((entry) => entry.sections ?? [])) expect(ids.has(id), id).toBe(true);
	});

	it('links roadmap items only to real sections', () => {
		for (const item of howWeBuild.roadmap) if (item.sectionId) expect(ids.has(item.sectionId), item.sectionId).toBe(true);
	});

	it('reserves the closing fragments for the roadmap and the changelog', () => {
		expect(ids.has(ROADMAP_ID)).toBe(false);
		expect(ids.has(CHANGELOG_ID)).toBe(false);
	});

	it('translates the changelog into Italian, without dashes', async () => {
		vi.stubGlobal('location', { pathname: '/it/' });
		vi.resetModules();
		const { howWeBuild: italianGuide } = await import('./index.js');
		italianGuide.changelog.forEach((entry, index) => {
			const english = howWeBuild.changelog[index].summary;
			expect(english).not.toMatch(/[\u2013\u2014]/);
			expect(entry.summary, english).not.toBe(english);
			expect(entry.summary).not.toMatch(/[\u2013\u2014]/);
		});
	});
});

describe('guide view', () => {
	const today = howWeBuild.published;

	it('renders every section, the roadmap and the changelog as linkable parts', () => {
		const html = guideArticleHTML(howWeBuild, { interactive: true, today });
		for (const id of [...sectionsOf(howWeBuild).map((section) => section.id), ROADMAP_ID, CHANGELOG_ID]) {
			expect(html, id).toContain(`id="${id}"`);
		}
	});

	it('keeps the copy controls for the browser and drops them for the static page', () => {
		const interactive = guideArticleHTML(howWeBuild, { interactive: true, today });
		const fallback = guideArticleHTML(howWeBuild, { interactive: false, today });
		expect(interactive).toContain('data-action="copy-snippet"');
		expect(fallback).not.toContain('data-action="copy-snippet"');
		expect(fallback).not.toContain('data-action="goto-guide"');
		expect(fallback).toContain(`href="#${howWeBuild.practices[0].id}"`);
	});

	it('lists every part in the contents, in page order', () => {
		const html = guideContentsHTML(howWeBuild, { interactive: true, today });
		const targets = [...html.matchAll(/data-target="([^"]+)"/g)].map((match) => match[1]);
		expect(targets).toEqual([...sectionsOf(howWeBuild).map((section) => section.id), ROADMAP_ID, CHANGELOG_ID]);
	});

	it('shows a badge only on fresh sections', () => {
		const guide = { ...howWeBuild, pitfalls: [...howWeBuild.pitfalls, fixtureSection({ id: 'later', added: '2026-12-01', snippets: [] })] };
		const html = guideArticleHTML(guide, { interactive: true, today: '2026-12-02' });
		expect(html.match(/class="guide-badge"/g)).toHaveLength(1);
	});

	it('links the terminal card to every section of the guide page', () => {
		const html = guideCardHTML(howWeBuild);
		for (const section of sectionsOf(howWeBuild)) expect(html).toContain(`data-action="open-guide" data-target="${section.id}"`);
	});
});
