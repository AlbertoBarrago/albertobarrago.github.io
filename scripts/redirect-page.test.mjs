import { describe, expect, it } from 'vitest';
import { renderRedirectPage } from './redirect-page.mjs';

describe('renderRedirectPage', () => {
	const page = renderRedirectPage('/agent-playbook/', 'https://albz.it');

	it('redirects with the fragment preserved when JavaScript runs', () => {
		expect(page).toContain('location.replace("/agent-playbook/" + location.hash)');
	});

	it('falls back to a meta refresh and a plain link', () => {
		expect(page).toContain('<meta http-equiv="refresh" content="0; url=/agent-playbook/">');
		expect(page).toContain('<a href="/agent-playbook/">https://albz.it/agent-playbook/</a>');
	});

	it('keeps the old URL out of the index and points crawlers to the new one', () => {
		expect(page).toContain('<meta name="robots" content="noindex">');
		expect(page).toContain('<link rel="canonical" href="https://albz.it/agent-playbook/">');
	});

	it('escapes the target in HTML attributes', () => {
		expect(renderRedirectPage('/a?x=1&y="2"', 'https://albz.it')).toContain('href="/a?x=1&amp;y=&quot;2&quot;"');
	});
});
