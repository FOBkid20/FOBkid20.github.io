const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { PAGE_FILES, ROOT } = require('./helpers');
const cheerio = require('cheerio');

function isExternal(url) {
    return /^([a-z][a-z0-9+.-]*:|\/\/)/i.test(url);
}

test('no HTML file has duplicate id attributes', () => {
    for (const [pageKey, file] of Object.entries(PAGE_FILES)) {
        const $ = cheerio.load(fs.readFileSync(file, 'utf8'));
        const seen = new Map();
        $('[id]').each((_, el) => {
            const id = $(el).attr('id');
            seen.set(id, (seen.get(id) || 0) + 1);
        });
        const dupes = [...seen.entries()].filter(([, count]) => count > 1).map(([id]) => id);
        assert.deepEqual(dupes, [], `${pageKey} has duplicate id(s): ${dupes.join(', ')}`);
    }
});

test('every relative href/src resolves to a file that exists on disk', () => {
    const broken = [];
    for (const [pageKey, file] of Object.entries(PAGE_FILES)) {
        const $ = cheerio.load(fs.readFileSync(file, 'utf8'));
        const fileDir = path.dirname(file);
        $('[href], [src]').each((_, el) => {
            const url = $(el).attr('href') || $(el).attr('src');
            if (!url || isExternal(url) || url.startsWith('#')) return;
            const withoutHash = url.split('#')[0];
            if (!withoutHash) return;
            const resolved = path.resolve(fileDir, withoutHash);
            if (!fs.existsSync(resolved)) {
                broken.push({ page: pageKey, url, resolved: path.relative(ROOT, resolved) });
            }
        });
    }
    assert.deepEqual(broken, []);
});
