/**
 * @file Shared helpers used across the terminal shell and content renderers.
 */

/** @param {string} value */
export function escapeHTML(value) {
	return value.replace(/[&<>"']/g, (character) => ({
		'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;',
	})[character] ?? character);
}
