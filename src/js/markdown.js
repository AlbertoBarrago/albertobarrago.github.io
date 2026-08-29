/**
 * @file Minimal markdown-to-HTML renderer for the articles section.
 * @description Deliberately covers only the subset needed for technical notes:
 * headings, paragraphs, bold/italic, inline code, fenced code blocks, links,
 * unordered lists and blockquotes. No external parser, to keep the project
 * dependency-free.
 */

import { escapeHTML } from './utils.js';

/** @param {string} text */
function renderInline(text) {
	let html = escapeHTML(text);
	html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
	html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
	html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
	html = html.replace(/\[([^\]]+)]\(([^)]+)\)/g, (_match, label, url) =>
		`<a class="terminal-link" href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`
	);
	return html;
}

/** @param {string} markdown @returns {string} */
export function renderMarkdown(markdown) {
	const lines = markdown.replace(/\r\n/g, '\n').split('\n');
	const blocks = [];
	/** @type {string[] | null} */
	let listItems = null;
	let inCodeBlock = false;
	/** @type {string[]} */
	let codeLines = [];

	const flushList = () => {
		if (listItems) {
			blocks.push(`<ul>${listItems.map((item) => `<li>${renderInline(item)}</li>`).join('')}</ul>`);
			listItems = null;
		}
	};

	for (const line of lines) {
		if (line.trimStart().startsWith('```')) {
			if (inCodeBlock) {
				blocks.push(`<pre><code>${escapeHTML(codeLines.join('\n'))}</code></pre>`);
				codeLines = [];
			} else {
				flushList();
			}
			inCodeBlock = !inCodeBlock;
			continue;
		}
		if (inCodeBlock) {
			codeLines.push(line);
			continue;
		}

		const heading = line.match(/^(#{1,3})\s+(.*)$/);
		if (heading) {
			flushList();
			const level = heading[1].length;
			blocks.push(`<h${level}>${renderInline(heading[2])}</h${level}>`);
			continue;
		}

		const listItem = line.match(/^[-*]\s+(.*)$/);
		if (listItem) {
			listItems = listItems ?? [];
			listItems.push(listItem[1]);
			continue;
		}
		flushList();

		const quote = line.match(/^>\s?(.*)$/);
		if (quote) {
			blocks.push(`<blockquote>${renderInline(quote[1])}</blockquote>`);
			continue;
		}

		if (line.trim() === '') continue;
		blocks.push(`<p>${renderInline(line)}</p>`);
	}
	flushList();

	return blocks.join('\n');
}
