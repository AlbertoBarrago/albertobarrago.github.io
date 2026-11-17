/**
 * @file Types and pure helpers for the "How we build" guide (command
 * `howwebuild`, page /how-we-build/): practices for working with coding
 * agents, each with the why, the how and blocks to copy. The content is data
 * in index.js and the copyable blocks are raw files in
 * src/content/how-we-build/, so updating the guide never needs a template
 * change. The HTML lives in how-we-build-view.js.
 */

import { escapeHTML } from './utils.js';

/**
 * A block the reader can copy as is. `code` is the raw file content; `origin`
 * says where it comes from. `collapsed` renders long examples folded.
 * @typedef {{
 *   id: string,
 *   title: string,
 *   language: string,
 *   code: string,
 *   origin?: { label: string, url?: string },
 *   collapsed?: boolean,
 * }} GuideSnippet
 */

/** `src` is a path under static/; `source` is the Markasso file it was exported from. */
/** @typedef {{ src: string, source: string, alt: string, caption: string }} GuideDiagram */

/**
 * How far a practice is in my own workflow: `adopted` runs everywhere,
 * `trial` is being tried and may still change or go. Pitfalls have no status.
 * @typedef {'adopted' | 'trial'} GuideStatus
 */

/**
 * One practice or pitfall: why it matters (2-3 lines), how to do it, and what
 * to copy. `added` and `updated` are ISO dates (YYYY-MM-DD): bump `updated`
 * whenever the advice changes, so readers coming back see what moved.
 * @typedef {{
 *   id: string,
 *   title: string,
 *   added: string,
 *   updated?: string,
 *   status?: GuideStatus,
 *   why: string,
 *   steps: string[],
 *   snippets: GuideSnippet[],
 *   diagrams?: GuideDiagram[],
 * }} GuideSection
 */

/** `sectionId` points at the section the item became once it was done. */
/** @typedef {{ title: string, summary: string, sectionId?: string }} GuideRoadmapItem */

/** One entry of the guide's changelog; `sections` are the ids it touched. */
/** @typedef {{ date: string, summary: string, sections?: string[] }} GuideChangelogEntry */

/**
 * `published` is the date of the first edition; the "last updated" date is
 * derived from the sections and the changelog (see guideLastModified).
 * `changelog` is newest first.
 * @typedef {{
 *   published: string,
 *   inspiration: { label: string, url?: string },
 *   practices: GuideSection[],
 *   pitfalls: GuideSection[],
 *   roadmap: GuideRoadmapItem[],
 *   changelog: GuideChangelogEntry[],
 * }} HowWeBuildGuide
 */

/** @typedef {'new' | 'updated'} GuideFreshness */

/** Days a section keeps its "new" or "recently updated" badge. */
export const FRESH_DAYS = 30;

/**
 * Escapes text and turns `backtick` spans into <code>, the only inline markup
 * the guide prose supports. Escaping first keeps data strings from injecting
 * HTML.
 * @param {string} text
 * @returns {string}
 */
export function inlineMarkup(text) {
	return escapeHTML(text).replace(/`([^`]+)`/g, '<code>$1</code>');
}

/**
 * Practices then pitfalls: every section, in page order.
 * @param {HowWeBuildGuide} guide
 * @returns {GuideSection[]}
 */
export function guideSections(guide) {
	return [...guide.practices, ...guide.pitfalls];
}

/**
 * Today's date as YYYY-MM-DD in local time, the format of the guide dates.
 * @param {Date} [now]
 * @returns {string}
 */
export function isoDay(now = new Date()) {
	const pad = (/** @type {number} */ value) => String(value).padStart(2, '0');
	return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

/**
 * Whole days from `from` to `to`, both YYYY-MM-DD. Parsed as UTC so daylight
 * saving never turns a day into 23 or 25 hours.
 * @param {string} from
 * @param {string} to
 * @returns {number}
 */
export function daysBetween(from, to) {
	return Math.round((Date.parse(`${to}T00:00:00Z`) - Date.parse(`${from}T00:00:00Z`)) / 86_400_000);
}

/**
 * Badge for a section a returning reader has not seen yet: `new` when it was
 * added in the last FRESH_DAYS, `updated` when its advice changed in that
 * window. Sections of the first edition are not "new": the whole guide was.
 * @param {GuideSection} section
 * @param {string} published the guide's first edition date
 * @param {string} today YYYY-MM-DD
 * @returns {GuideFreshness | null}
 */
export function sectionFreshness(section, published, today) {
	const recent = (/** @type {string} */ date) => {
		const age = daysBetween(date, today);
		return age >= 0 && age <= FRESH_DAYS;
	};
	if (section.added !== published && recent(section.added)) return 'new';
	if (section.updated && recent(section.updated)) return 'updated';
	return null;
}

/**
 * The guide's "last updated" date: the latest of its first edition, every
 * section's added/updated date and every changelog entry, so it never needs
 * a manual bump.
 * @param {HowWeBuildGuide} guide
 * @returns {string}
 */
export function guideLastModified(guide) {
	const dates = [
		guide.published,
		...guideSections(guide).flatMap((section) => [section.added, section.updated ?? section.added]),
		...guide.changelog.map((entry) => entry.date),
	];
	return dates.reduce((latest, date) => (date > latest ? date : latest));
}

/**
 * Every diagram of the guide, in page order (practices, then pitfalls): the
 * slides of the diagram viewer.
 * @param {HowWeBuildGuide} guide
 * @returns {GuideDiagram[]}
 */
export function guideDiagrams(guide) {
	return guideSections(guide).flatMap((section) => section.diagrams ?? []);
}

/**
 * Wraps a slide index so prev/next loop around: -1 becomes the last slide,
 * `length` becomes the first.
 * @param {number} index
 * @param {number} length
 * @returns {number}
 */
export function wrapIndex(index, length) {
	if (length <= 0) return 0;
	return ((index % length) + length) % length;
}
