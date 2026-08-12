const { test, expect } = require('@playwright/test');

test('professional page: See Additional Experience expands and collapses', async ({ page }) => {
    await page.goto('/pages/professional.html');
    const btn = page.locator('#resume-toggle-btn');
    const panel = page.locator('#resume-additional');

    await expect(panel).toBeHidden();
    await expect(btn).toHaveAttribute('aria-expanded', 'false');

    await btn.click();
    await expect(panel).toBeVisible();
    await expect(btn).toHaveAttribute('aria-expanded', 'true');

    await btn.click();
    await expect(panel).toBeHidden();
    await expect(btn).toHaveAttribute('aria-expanded', 'false');
});

test('professional page: See Additional Certifications expands and collapses', async ({ page }) => {
    await page.goto('/pages/professional.html');
    const btn = page.locator('#cert-toggle-btn');
    const panel = page.locator('#cert-additional');

    await expect(panel).toBeHidden();
    await btn.click();
    await expect(panel).toBeVisible();
    await expect(btn).toHaveAttribute('aria-expanded', 'true');
});

test('personal page: dance style toggle buttons expand their lists', async ({ page }) => {
    await page.goto('/pages/personal.html');
    const btn = page.locator('#dance-depth-btn');
    const list = page.locator('#dance-depth-list');

    await expect(list).toBeHidden();
    await btn.click();
    await expect(list).toBeVisible();
    await expect(btn).toHaveAttribute('aria-expanded', 'true');

    await btn.click();
    await expect(list).toBeHidden();
    await expect(btn).toHaveAttribute('aria-expanded', 'false');
});
