const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { ROOT, loadPage, loadSearchIndex } = require('./helpers');

// Imports the real selectors from search.js (rather than a hand-copied
// duplicate) so this test can't silently drift from the checkIndexDrift()
// logic it's meant to mirror -- today that logic only warns via
// console.warn at runtime; this makes the same check a hard test failure.
const { PROJECT_SECTION_SELECTORS } = require(path.join(ROOT, 'search.js'));

const { SEARCH_INDEX } = loadSearchIndex();

test('DOM project-entry count matches SEARCH_INDEX count on each hub page', () => {
    for (const [pageKey, selector] of Object.entries(PROJECT_SECTION_SELECTORS)) {
        const $ = loadPage(pageKey);
        const domCount = $(selector).length;
        const indexedCount = SEARCH_INDEX.filter(e => e.section.indexOf('projects-') === 0 && e.page === pageKey).length;
        assert.equal(domCount, indexedCount, `${pageKey}: ${domCount} .project-entry in the DOM vs ${indexedCount} in SEARCH_INDEX`);
    }
});
