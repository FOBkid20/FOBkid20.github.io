const { test, expect } = require('@playwright/test');

const PAGES = ['/index.html', '/pages/professional.html', '/pages/personal.html', '/pages/Happiness.html'];

for (const url of PAGES) {
    test(`no console errors or warnings on ${url}`, async ({ page }) => {
        const messages = [];
        page.on('console', msg => {
            if (msg.type() === 'error' || msg.type() === 'warning') messages.push(`[${msg.type()}] ${msg.text()}`);
        });
        page.on('pageerror', err => messages.push(`[pageerror] ${err.message}`));

        await page.goto(url);
        await page.waitForLoadState('networkidle');

        expect(messages).toEqual([]);
    });
}
