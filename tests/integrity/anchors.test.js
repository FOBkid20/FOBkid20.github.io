const test = require('node:test');
const assert = require('node:assert/strict');
const { pageExists, loadPage, loadSearchIndex, loadEvents } = require('./helpers');

const { SEARCH_INDEX } = loadSearchIndex();
const EVENTS = loadEvents();

test('every SEARCH_INDEX entry targets a page that exists', () => {
    const bad = SEARCH_INDEX.filter(e => !pageExists(e.page));
    assert.deepEqual(bad.map(e => ({ id: e.id, page: e.page })), []);
});

test('every SEARCH_INDEX entry\'s anchor id exists in the DOM of its target page', () => {
    const missing = SEARCH_INDEX.filter(e => {
        const $ = loadPage(e.page);
        return $('#' + CSS_escape(e.anchor)).length === 0;
    });
    assert.deepEqual(missing.map(e => ({ id: e.id, page: e.page, anchor: e.anchor })), []);
});

test('every EVENTS[].link targets a page that exists', () => {
    const withLink = EVENTS.filter(e => e.link);
    const bad = withLink.filter(e => !pageExists(e.link.page));
    assert.deepEqual(bad.map(e => ({ id: e.id, page: e.link.page })), []);
});

test('every EVENTS[].link.anchor exists in the DOM of its target page', () => {
    const withAnchor = EVENTS.filter(e => e.link && e.link.anchor);
    const missing = withAnchor.filter(e => {
        const $ = loadPage(e.link.page);
        return $('#' + CSS_escape(e.link.anchor)).length === 0;
    });
    assert.deepEqual(missing.map(e => ({ id: e.id, page: e.link.page, anchor: e.link.anchor })), []);
});

// Minimal CSS.escape shim (anchors here are always plain [A-Za-z0-9-]).
function CSS_escape(id) {
    return id.replace(/[^a-zA-Z0-9_-]/g, '\\$&');
}
