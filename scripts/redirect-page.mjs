/**
 * @file A static redirect page for GitHub Pages, which has no server-side
 * redirects. Used to keep links to a moved page working (the guide moved
 * from /how-we-build/ to /agent-playbook/).
 */

/**
 * Builds a page that sends the visitor to `to`, keeping the URL fragment so
 * deep links like `#review-md` still land on their section. The script runs
 * first and preserves the fragment; the meta refresh covers visitors without
 * JavaScript (fragment lost, page still right). Crawlers get a canonical link
 * and `noindex`, so only the new URL is indexed.
 * The redirect itself is root-relative, so it also works on a local preview;
 * the canonical link is absolute, as crawlers expect.
 * @param {string} to root-relative path of the new page, without a fragment
 * @param {string} siteUrl origin used for the canonical link
 * @returns {string}
 */
export function renderRedirectPage(to, siteUrl) {
	const escape = (/** @type {string} */ value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
	const href = escape(to);
	const canonical = escape(`${siteUrl}${to}`);
	return `<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Moved</title>
	<meta name="robots" content="noindex">
	<link rel="canonical" href="${canonical}">
	<script>location.replace(${JSON.stringify(to)} + location.hash);</script>
	<meta http-equiv="refresh" content="0; url=${href}">
</head>
<body>
	<p>This page has moved to <a href="${href}">${canonical}</a>.</p>
</body>
</html>
`;
}
