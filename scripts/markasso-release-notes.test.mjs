import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
	OUTPUT_FILE, downloadFile, generate, parseAppcast, parseNotes, pubDateToISO, renderInline,
} from './markasso-release-notes.mjs';

describe('pubDateToISO', () => {
	it('keeps the day of the pubDate in its own time zone', () => {
		expect(pubDateToISO('Fri, 06 Nov 2026 00:30:00 +0100')).toBe('2026-11-06');
		expect(pubDateToISO('Tue, 3 Nov 2026 17:39:27 +0000')).toBe('2026-11-03');
	});

	it('throws on an unknown format', () => {
		expect(() => pubDateToISO('2026-11-06')).toThrow();
	});
});

describe('parseAppcast', () => {
	it('reads version, build and date, newest build first', () => {
		const xml = `<rss><channel>
			<item><pubDate>Tue, 03 Nov 2026 17:39:27 +0000</pubDate><sparkle:version>1</sparkle:version><sparkle:shortVersionString>0.9.0</sparkle:shortVersionString></item>
			<item><pubDate>Wed, 04 Nov 2026 21:03:59 +0100</pubDate><sparkle:version>10</sparkle:version><sparkle:shortVersionString>0.9.9</sparkle:shortVersionString></item>
		</channel></rss>`;
		expect(parseAppcast(xml)).toEqual([
			{ version: '0.9.9', build: '10', date: '2026-11-04', notesFile: 'Markasso-0.9.9-10.md' },
			{ version: '0.9.0', build: '1', date: '2026-11-03', notesFile: 'Markasso-0.9.0-1.md' },
		]);
	});
});

describe('parseNotes', () => {
	it('splits English and Italian at the end of the first list', () => {
		const notes = parseNotes('# Markasso 0.9.0\n\nIntro.\n\n- One\n- Two\n\nIntroduzione.\n\n- Uno\n- Due\n');
		expect(notes.en).toEqual([{ kind: 'p', text: 'Intro.' }, { kind: 'ul', items: ['One', 'Two'] }]);
		expect(notes.it).toEqual([{ kind: 'p', text: 'Introduzione.' }, { kind: 'ul', items: ['Uno', 'Due'] }]);
	});

	it('treats a single section as English only', () => {
		expect(parseNotes('# Markasso 1.0\n\n- Only\n').it).toEqual([]);
	});
});

describe('renderInline', () => {
	it('escapes HTML and renders bold and code', () => {
		expect(renderInline('**New** `<a>` & <b>x</b>')).toBe('<strong>New</strong> <code>&lt;a&gt;</code> &amp; &lt;b&gt;x&lt;/b&gt;');
	});

	it('leaves asterisks inside code alone', () => {
		expect(renderInline('`**x**`')).toBe('<code>**x**</code>');
	});
});

describe('downloadFile', () => {
	const release = { version: '1.0', build: '5', date: '', notesFile: '' };
	it('prefers the full package, then the update archive', () => {
		expect(downloadFile(release, () => true)).toBe('Markasso-1.0.zip');
		expect(downloadFile(release, (file) => file === 'Markasso-1.0-5.zip')).toBe('Markasso-1.0-5.zip');
		expect(downloadFile(release, () => false)).toBeNull();
	});
});

describe('static/updates/markasso/index.html', () => {
	it('is up to date: run node scripts/markasso-release-notes.mjs after publishing an update', () => {
		expect(readFileSync(OUTPUT_FILE, 'utf8')).toBe(generate());
	});
});
