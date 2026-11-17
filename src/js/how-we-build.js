/**
 * @file Types and pure helpers for the "How we build" guide (command
 * `howwebuild`): practices for working with coding agents, each with the
 * why, the how and blocks to copy. The content is data in index.js and the
 * copyable blocks are raw files in src/content/how-we-build/, so updating the
 * guide never needs a template change.
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
 * One practice or pitfall: why it matters (2-3 lines), how to do it, and what
 * to copy.
 * @typedef {{
 *   id: string,
 *   title: string,
 *   why: string,
 *   steps: string[],
 *   snippets: GuideSnippet[],
 *   diagrams?: GuideDiagram[],
 * }} GuideSection
 */

/** @typedef {{ title: string, summary: string }} GuideRoadmapItem */

/**
 * @typedef {{
 *   updated: string,
 *   inspiration: { label: string, url?: string },
 *   practices: GuideSection[],
 *   pitfalls: GuideSection[],
 *   roadmap: GuideRoadmapItem[],
 * }} HowWeBuildGuide
 */

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
 * Every diagram of the guide, in page order (practices, then pitfalls): the
 * slides of the diagram viewer.
 * @param {HowWeBuildGuide} guide
 * @returns {GuideDiagram[]}
 */
export function guideDiagrams(guide) {
	return [...guide.practices, ...guide.pitfalls].flatMap((section) => section.diagrams ?? []);
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
