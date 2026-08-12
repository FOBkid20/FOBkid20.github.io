const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');

const timeline = require(path.join('..', '..', 'timeline.js'));

function withWindow(pathname, fn) {
    global.window = { location: { pathname: pathname } };
    try {
        return fn();
    } finally {
        delete global.window;
    }
}

test('monthIndex: orders months within and across years', () => {
    assert.ok(timeline.monthIndex(2020, 1) < timeline.monthIndex(2020, 12));
    assert.ok(timeline.monthIndex(2020, 12) < timeline.monthIndex(2021, 1));
});

test('monthIndex: is a pure linear function of year/month', () => {
    assert.equal(timeline.monthIndex(2021, 6) - timeline.monthIndex(2020, 6), 12);
});

test('currentPage: detects a hub page under /pages/', () => {
    withWindow('/pages/personal.html', () => {
        assert.equal(timeline.currentPage(), 'pages/personal.html');
    });
});

test('currentPage: falls back to index.html off /pages/', () => {
    withWindow('/index.html', () => {
        assert.equal(timeline.currentPage(), 'index.html');
    });
});

test('resolveHref: same-page link is just the anchor', () => {
    withWindow('/pages/professional.html', () => {
        assert.equal(timeline.resolveHref({ page: 'pages/professional.html', anchor: 'Bose' }), '#Bose');
    });
});

test('resolveHref: cross-page link from index.html keeps pages/ prefix', () => {
    withWindow('/index.html', () => {
        assert.equal(timeline.resolveHref({ page: 'pages/personal.html', anchor: 'AVMS' }), 'pages/personal.html#AVMS');
    });
});

test('resolveHref: cross-page link between two /pages/ pages strips the prefix', () => {
    withWindow('/pages/professional.html', () => {
        assert.equal(timeline.resolveHref({ page: 'pages/personal.html', anchor: 'AVMS' }), 'personal.html#AVMS');
    });
});

test('resolveHref: link with no anchor omits the #', () => {
    withWindow('/pages/professional.html', () => {
        assert.equal(timeline.resolveHref({ page: 'pages/Happiness.html' }), 'Happiness.html');
    });
});

test('parseCSV: splits a simple comma-separated row', () => {
    const rows = timeline.parseCSV('a,b,c\n1,2,3\n');
    assert.deepEqual(rows, [['a', 'b', 'c'], ['1', '2', '3']]);
});

test('parseCSV: handles quoted fields with embedded commas', () => {
    const rows = timeline.parseCSV('Show,Where\n"Hello, Dolly!",Broadway\n');
    assert.deepEqual(rows, [['Show', 'Where'], ['Hello, Dolly!', 'Broadway']]);
});

test('parseCSV: handles escaped double quotes inside a quoted field', () => {
    const rows = timeline.parseCSV('Title\n"She said ""hi"""\n');
    assert.deepEqual(rows, [['Title'], ['She said "hi"']]);
});

test('parseCSV: last row without a trailing newline is still included', () => {
    const rows = timeline.parseCSV('a,b\n1,2');
    assert.deepEqual(rows, [['a', 'b'], ['1', '2']]);
});

test('slugifyShowTitle: lowercases and dashes punctuation/spaces', () => {
    assert.equal(timeline.slugifyShowTitle('The Book of Mormon'), 'the-book-of-mormon');
});

test('slugifyShowTitle: strips apostrophes/colons/exclamations without leaving a dash', () => {
    assert.equal(timeline.slugifyShowTitle("Bob Fosse's Dancin'"), 'bob-fosses-dancin');
});

test('slugifyShowTitle: strips leading/trailing dashes from punctuation-heavy titles', () => {
    assert.equal(timeline.slugifyShowTitle('& Juliet'), 'juliet');
});

test('capitalizeTitle: capitalizes only the first letter of each word', () => {
    assert.equal(timeline.capitalizeTitle('wicked broadway'), 'Wicked Broadway');
});

test('capitalizeTitle: preserves already-stylized interior casing (e.g. ChatGPT)', () => {
    assert.equal(timeline.capitalizeTitle('chatGPT website'), 'ChatGPT Website');
});

test('capitalizeTitle: skips leading punctuation when capitalizing', () => {
    assert.equal(timeline.capitalizeTitle('"hamilton"'), '"Hamilton"');
});

test('buildShowsEvents: returns null for empty input', () => {
    assert.equal(timeline.buildShowsEvents(''), null);
});

test('buildShowsEvents: returns null when required columns are missing', () => {
    const csv = 'Title,Where\nWicked,Broadway\n';
    assert.equal(timeline.buildShowsEvents(csv), null);
});

test('buildShowsEvents: skips rows not marked seen or missing a date', () => {
    const csv = 'Show,Seen?,Date seen,Where\n' +
        'Wicked,Y,1/9/2022,Broadway\n' +
        'Hamilton,N,,Broadway\n' +
        'Chicago,Y,,Broadway\n';
    const events = timeline.buildShowsEvents(csv);
    assert.equal(events.length, 1);
    assert.equal(events[0].title, 'Wicked');
});

test('buildShowsEvents: sorts by date and produces expected shape', () => {
    const csv = 'Show,Seen?,Date seen,Where\n' +
        'Hadestown,Y,1/12/2022,Broadway\n' +
        'Wicked,Y,1/9/2022,Broadway\n';
    const events = timeline.buildShowsEvents(csv);
    assert.deepEqual(events.map(e => e.title), ['Wicked', 'Hadestown']);
    assert.equal(events[0].id, 'show-wicked');
    assert.equal(events[0].category, 'shows');
    assert.deepEqual(events[0].audience, ['personal']);
    assert.equal(events[0].displayDate, 'Jan 9, 2022');
    assert.equal(events[0].description, 'Saw Wicked on Broadway.');
});

test('buildShowsEvents: dedupes repeated show titles with numeric suffixes', () => {
    const csv = 'Show,Seen?,Date seen,Where\n' +
        'Into the Woods,Y,9/1/2022,Broadway\n' +
        'Into the Woods,Y,9/17/2022,Broadway\n';
    const events = timeline.buildShowsEvents(csv);
    assert.deepEqual(events.map(e => e.id), ['show-into-the-woods', 'show-into-the-woods-2']);
});

test('buildShowsEvents: Off-Broadway venue changes the description wording', () => {
    const csv = 'Show,Seen?,Date seen,Where\nViolet,Y,3/20/2026,Off-Broadway\n';
    const events = timeline.buildShowsEvents(csv);
    assert.equal(events[0].description, 'Saw Violet Off-Broadway.');
});

test('buildShowsEvents: missing Where column yields no venue clause', () => {
    const csv = 'Show,Seen?,Date seen\nWicked,Y,1/9/2022\n';
    const events = timeline.buildShowsEvents(csv);
    assert.equal(events[0].description, 'Saw Wicked.');
});
