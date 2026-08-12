const test = require('node:test');
const assert = require('node:assert/strict');
const { loadPage, loadSearchIndex } = require('./helpers');

// Mirrors search.js's PROJECT_SECTION_SELECTORS + checkIndexDrift(), which
// today only warns via console.warn at runtime. This makes the same check
// a hard test failure instead of something that can silently go unnoticed.
const PROJECT_SECTION_SELECTORS = {
    'pages/professional.html': '#technicalProjects .project-entry, #leadership .project-entry:not(.leadership-highlight)',
    'pages/personal.html': '#performing .project-entry, #crafts .project-entry, #writingEditing .project-entry, #lifeTravel .project-entry'
};

const { SEARCH_INDEX } = loadSearchIndex();

test('DOM project-entry count matches SEARCH_INDEX count on each hub page', () => {
    for (const [pageKey, selector] of Object.entries(PROJECT_SECTION_SELECTORS)) {
        const $ = loadPage(pageKey);
        const domCount = $(selector).length;
        const indexedCount = SEARCH_INDEX.filter(e => e.section.indexOf('projects-') === 0 && e.page === pageKey).length;
        assert.equal(domCount, indexedCount, `${pageKey}: ${domCount} .project-entry in the DOM vs ${indexedCount} in SEARCH_INDEX`);
    }
});
