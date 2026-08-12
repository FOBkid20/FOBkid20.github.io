const { test, expect } = require('@playwright/test');

test('markers render and clicking one shows its detail', async ({ page }) => {
    await page.goto('/pages/professional.html');
    const markers = page.locator('#timeline-root .timeline-marker');
    await expect(markers.first()).toBeVisible();

    const boseMarker = page.locator('.timeline-marker[aria-label^="NLP Intern, Bose Corporation"]');
    await boseMarker.click();

    const detail = page.locator('.timeline-detail');
    await expect(detail.locator('.timeline-detail-title')).toHaveText('NLP Intern, Bose Corporation');
    await expect(detail.locator('.timeline-detail-link')).toHaveAttribute('href', '#Bose');
});

test('professional page timeline is audience-filtered (no personal-only shows)', async ({ page }) => {
    await page.goto('/pages/professional.html');
    await expect(page.locator('#timeline-root [aria-label^="Wicked"]')).toHaveCount(0);
    await expect(page.locator('#timeline-root [aria-label^="NLP Intern, Bose Corporation"]')).toHaveCount(1);
});

test('personal page timeline is audience-filtered (no professional-only jobs)', async ({ page }) => {
    await page.goto('/pages/personal.html');
    await expect(page.locator('#timeline-root [aria-label^="NLP Intern, Bose Corporation"]')).toHaveCount(0);
});

test('home timeline (unfiltered) shows events from both audiences', async ({ page }) => {
    await page.goto('/index.html');
    await expect(page.locator('#timeline-root [aria-label^="NLP Intern, Bose Corporation"]')).toHaveCount(1);
});
