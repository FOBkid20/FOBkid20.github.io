const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const cheerio = require('cheerio');

const ROOT = path.join(__dirname, '..', '..');

const PAGE_FILES = {
    'index.html': path.join(ROOT, 'index.html'),
    'pages/professional.html': path.join(ROOT, 'pages', 'professional.html'),
    'pages/personal.html': path.join(ROOT, 'pages', 'personal.html'),
    'pages/Happiness.html': path.join(ROOT, 'pages', 'Happiness.html')
};

function pageExists(pageKey) {
    return Object.prototype.hasOwnProperty.call(PAGE_FILES, pageKey);
}

const htmlCache = {};
function loadPage(pageKey) {
    if (!htmlCache[pageKey]) {
        const html = fs.readFileSync(PAGE_FILES[pageKey], 'utf8');
        htmlCache[pageKey] = cheerio.load(html);
    }
    return htmlCache[pageKey];
}

// search-index.js declares `var SEARCH_INDEX` / `var SEARCH_SECTION_LABELS`
// as bare globals (loaded via <script> in the browser, no module wrapper),
// so it's evaluated in a throwaway vm context and read back off the sandbox.
function loadSearchIndex() {
    const code = fs.readFileSync(path.join(ROOT, 'search-index.js'), 'utf8');
    const sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(code, sandbox, { filename: 'search-index.js' });
    // Round-trip through JSON so arrays/objects belong to this realm's
    // Array/Object constructors, not the throwaway vm context's -- otherwise
    // assert.deepEqual sees "same structure but not reference-equal" when
    // comparing them against plain literals here.
    return JSON.parse(JSON.stringify({ SEARCH_INDEX: sandbox.SEARCH_INDEX, SEARCH_SECTION_LABELS: sandbox.SEARCH_SECTION_LABELS }));
}

function loadEvents() {
    return require(path.join(ROOT, 'timeline.js')).EVENTS;
}

module.exports = { ROOT, PAGE_FILES, pageExists, loadPage, loadSearchIndex, loadEvents };
