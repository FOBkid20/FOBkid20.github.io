const { test, expect } = require('@playwright/test');

test('toggle button flips dark mode and its own icon/label', async ({ page }) => {
    await page.goto('/index.html');
    const html = page.locator('html');
    const btn = page.locator('#theme-toggle');

    await expect(html).not.toHaveClass(/dark-mode/);
    await expect(btn).toHaveText('🌙');

    await btn.click();
    await expect(html).toHaveClass(/dark-mode/);
    await expect(btn).toHaveText('☀️');
    await expect(btn).toHaveAttribute('aria-label', 'Switch to light mode');

    await btn.click();
    await expect(html).not.toHaveClass(/dark-mode/);
    await expect(btn).toHaveText('🌙');
});

test('preference persists across reload via localStorage', async ({ page }) => {
    await page.goto('/index.html');
    await page.locator('#theme-toggle').click();
    await expect(page.locator('html')).toHaveClass(/dark-mode/);

    await page.reload();
    await expect(page.locator('html')).toHaveClass(/dark-mode/);
    expect(await page.evaluate(() => localStorage.getItem('theme'))).toBe('dark');
});

test('honors prefers-color-scheme when no stored preference exists', async ({ browser }) => {
    const context = await browser.newContext({ colorScheme: 'dark' });
    const page = await context.newPage();
    await page.goto('/index.html');
    await expect(page.locator('html')).toHaveClass(/dark-mode/);
    await context.close();
});
