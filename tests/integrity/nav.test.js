const test = require('node:test');
const assert = require('node:assert/strict');
const { PAGE_FILES } = require('./helpers');
const fs = require('node:fs');
const cheerio = require('cheerio');

// Regression net for the pages/projects.html -> Professional/Personal
// restructure: nothing should still point at the deleted page.
test('no nav dropdown link references the deleted pages/projects.html', () => {
    for (const [pageKey, file] of Object.entries(PAGE_FILES)) {
        const $ = cheerio.load(fs.readFileSync(file, 'utf8'));
        const offenders = $('.nav-dropdown-menu a')
            .map((_, el) => $(el).attr('href'))
            .get()
            .filter(href => /projects\.html/.test(href));
        assert.deepEqual(offenders, [], `${pageKey} still links to projects.html`);
    }
});

test('every nav dropdown link resolves to a real anchor on its target page', () => {
    const path = require('node:path');
    for (const [pageKey, file] of Object.entries(PAGE_FILES)) {
        const $ = cheerio.load(fs.readFileSync(file, 'utf8'));
        const fileDir = path.dirname(file);
        $('.nav-dropdown-menu a').each((_, el) => {
            const href = $(el).attr('href');
            const [urlPart, anchor] = href.split('#');
            if (urlPart) {
                const resolved = path.resolve(fileDir, urlPart);
                assert.ok(fs.existsSync(resolved), `${pageKey}: nav link "${href}" -> missing file ${resolved}`);
                if (anchor) {
                    const target = cheerio.load(fs.readFileSync(resolved, 'utf8'));
                    assert.ok(target('#' + anchor.replace(/[^a-zA-Z0-9_-]/g, '\\$&')).length > 0,
                        `${pageKey}: nav link "${href}" -> missing anchor #${anchor} in ${path.relative(process.cwd(), resolved)}`);
                }
            } else if (anchor) {
                assert.ok($('#' + anchor.replace(/[^a-zA-Z0-9_-]/g, '\\$&')).length > 0,
                    `${pageKey}: nav link "${href}" -> missing anchor #${anchor} on same page`);
            }
        });
    }
});
