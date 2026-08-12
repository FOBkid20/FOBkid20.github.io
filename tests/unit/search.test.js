const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');

const search = require(path.join('..', '..', 'search.js'));

function withWindow(pathname, fn) {
    global.window = { location: { pathname: pathname } };
    try {
        return fn();
    } finally {
        delete global.window;
    }
}

test('scoreEntry: title starting with query scores highest', () => {
    const entry = { title: 'Bathroom App', tags: [], excerpt: 'ranks bathrooms' };
    assert.equal(search.scoreEntry(entry, 'bath'), 3);
});

test('scoreEntry: title containing (not starting with) query scores lower', () => {
    const entry = { title: 'Amazon Hackathon', tags: [], excerpt: 'irrelevant' };
    assert.equal(search.scoreEntry(entry, 'hack'), 2);
});

test('scoreEntry: tag match scores below title match', () => {
    const entry = { title: 'Bose', tags: ['Python', 'NLP'], excerpt: 'text categorization' };
    assert.equal(search.scoreEntry(entry, 'nlp'), 1.5);
});

test('scoreEntry: excerpt-only match scores lowest nonzero', () => {
    const entry = { title: 'Bose', tags: ['Python'], excerpt: 'built a rule-based categorization service' };
    assert.equal(search.scoreEntry(entry, 'categorization'), 1);
});

test('scoreEntry: no match anywhere scores 0', () => {
    const entry = { title: 'Bose', tags: ['Python'], excerpt: 'text categorization' };
    assert.equal(search.scoreEntry(entry, 'zzz'), 0);
});

test('scoreEntry: entry without tags does not throw', () => {
    const entry = { title: 'About Me', excerpt: 'Technologist in NYC' };
    assert.equal(search.scoreEntry(entry, 'nyc'), 1);
});

test('buildSnippet: short excerpt returned verbatim when no match', () => {
    const entry = { excerpt: 'A short excerpt.' };
    assert.equal(search.buildSnippet(entry, 'zzz'), 'A short excerpt.');
});

test('buildSnippet: long excerpt with no match is truncated with ellipsis', () => {
    const entry = { excerpt: 'x'.repeat(150) };
    const snippet = search.buildSnippet(entry, 'zzz');
    assert.ok(snippet.endsWith('…'));
    assert.equal(snippet.length, 101);
});

test('buildSnippet: match near start has no leading ellipsis', () => {
    const entry = { excerpt: 'Bose text categorization tools built during an internship focused on NLP work in Boston that summer.' };
    const snippet = search.buildSnippet(entry, 'bose');
    assert.ok(!snippet.startsWith('…'));
});

test('buildSnippet: match in the middle gets both ellipses', () => {
    const entry = { excerpt: 'x'.repeat(60) + 'NEEDLE' + 'y'.repeat(60) };
    const snippet = search.buildSnippet(entry, 'needle');
    assert.ok(snippet.startsWith('…'));
    assert.ok(snippet.endsWith('…'));
    assert.ok(snippet.toLowerCase().includes('needle'));
});

test('cleanPart: collapses newlines/tabs into ". " and strips only trailing periods', () => {
    assert.equal(search.cleanPart('Line one.\nLine two...'), 'Line one.. Line two');
});

test('cleanPart: trims surrounding whitespace', () => {
    assert.equal(search.cleanPart('  padded text  '), 'padded text');
});

test('buildResultLabel: joins title, section, snippet with trailing period', () => {
    const label = search.buildResultLabel('Bose', 'Resume', 'NLP intern');
    assert.equal(label, 'Bose. Resume. NLP intern.');
});

test('buildResultLabel: does not double up trailing punctuation', () => {
    const label = search.buildResultLabel('Bose', 'Resume', 'Already ends in a match…');
    assert.equal(label, 'Bose. Resume. Already ends in a match…');
});

test('currentPage: detects professional.html from a /pages/ path', () => {
    withWindow('/pages/professional.html', () => {
        assert.equal(search.currentPage(), 'pages/professional.html');
    });
});

test('currentPage: detects personal.html from a /pages/ path', () => {
    withWindow('/pages/personal.html', () => {
        assert.equal(search.currentPage(), 'pages/personal.html');
    });
});

test('currentPage: detects Happiness.html from a /pages/ path', () => {
    withWindow('/pages/Happiness.html', () => {
        assert.equal(search.currentPage(), 'pages/Happiness.html');
    });
});

test('currentPage: falls back to index.html for the root path', () => {
    withWindow('/', () => {
        assert.equal(search.currentPage(), 'index.html');
    });
});

test('resolveEntryHref: index.html entry from a /pages/ page goes up a directory', () => {
    const entry = { page: 'index.html', anchor: 'aboutMe' };
    assert.equal(search.resolveEntryHref(entry, 'pages/professional.html'), '../index.html#aboutMe');
});

test('resolveEntryHref: index.html entry from index.html itself stays relative', () => {
    const entry = { page: 'index.html', anchor: 'aboutMe' };
    assert.equal(search.resolveEntryHref(entry, 'index.html'), 'index.html#aboutMe');
});

test('resolveEntryHref: pages/* entry from index.html keeps the pages/ prefix', () => {
    const entry = { page: 'pages/professional.html', anchor: 'Bose' };
    assert.equal(search.resolveEntryHref(entry, 'index.html'), 'pages/professional.html#Bose');
});

test('resolveEntryHref: pages/* entry from another pages/* page strips the pages/ prefix', () => {
    const entry = { page: 'pages/personal.html', anchor: 'AVMS' };
    assert.equal(search.resolveEntryHref(entry, 'pages/professional.html'), 'personal.html#AVMS');
});
