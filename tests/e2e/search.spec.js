const { test, expect } = require('@playwright/test');

test.describe('site search', () => {
    test('typing shows scored, titled results', async ({ page }) => {
        await page.goto('/index.html');
        await page.locator('#site-search').fill('bose');
        const results = page.locator('.search-result-item');
        await expect(results.first()).toBeVisible();
        await expect(results.first().locator('.search-result-title')).toHaveText(/Bose/);
    });

    test('clicking a result navigates to the right page and anchor', async ({ page }) => {
        await page.goto('/index.html');
        await page.locator('#site-search').fill('bose');
        // "bose" scores the resume entry (job-bose) and the projects entry
        // (Bose) equally (both titles start with "bose"); scoreEntry's stable
        // sort keeps SEARCH_INDEX's original order, so job-bose (resume,
        // listed first) wins the top slot.
        await page.locator('.search-result-item').first().click();
        await expect(page).toHaveURL(/professional\.html#job-bose$/);
    });

    test('Escape clears the results panel', async ({ page }) => {
        await page.goto('/index.html');
        const input = page.locator('#site-search');
        await input.fill('bose');
        await expect(page.locator('#search-results')).toBeVisible();
        await input.press('Escape');
        await expect(page.locator('#search-results')).toBeHidden();
    });

    test('Enter selects the first result', async ({ page }) => {
        await page.goto('/index.html');
        await page.locator('#site-search').fill('bose');
        await page.locator('#site-search').press('Enter');
        await expect(page).toHaveURL(/professional\.html#job-bose$/);
    });

    test('empty query hides the results panel', async ({ page }) => {
        await page.goto('/index.html');
        const input = page.locator('#site-search');
        await input.fill('bose');
        await expect(page.locator('#search-results')).toBeVisible();
        await input.fill('');
        await expect(page.locator('#search-results')).toBeHidden();
    });

    test('a query with no matches shows "No matches"', async ({ page }) => {
        await page.goto('/index.html');
        await page.locator('#site-search').fill('zzzzznomatch');
        await expect(page.locator('.search-result-empty')).toHaveText('No matches');
    });

    test('clicking outside the search box hides the results', async ({ page }) => {
        await page.goto('/index.html');
        await page.locator('#site-search').fill('bose');
        await expect(page.locator('#search-results')).toBeVisible();
        await page.locator('#home').click({ position: { x: 10, y: 10 } });
        await expect(page.locator('#search-results')).toBeHidden();
    });
});
