const { test, expect } = require('@playwright/test');

test.describe('desktop nav dropdowns', () => {
    test('Professional dropdown links land on the right anchor', async ({ page }) => {
        await page.goto('/index.html');
        await page.locator('.nav-dropdown', { hasText: 'Professional' }).hover();
        await page.getByRole('link', { name: 'Technical Projects' }).click();
        await expect(page).toHaveURL(/professional\.html#technicalProjects$/);
        await expect(page.locator('#technicalProjects')).toBeVisible();
    });

    test('Personal dropdown links land on the right anchor', async ({ page }) => {
        await page.goto('/index.html');
        await page.locator('.nav-dropdown', { hasText: 'Personal' }).hover();
        await page.getByRole('link', { name: 'Crafts' }).click();
        await expect(page).toHaveURL(/personal\.html#crafts$/);
        await expect(page.locator('#crafts')).toBeVisible();
    });

    test('Home link returns to index.html from a hub page', async ({ page }) => {
        await page.goto('/pages/professional.html');
        await page.getByRole('link', { name: 'Home' }).click();
        await expect(page).toHaveURL(/\/index\.html$/);
    });
});

test.describe('mobile nav toggle', () => {
    test.use({ viewport: { width: 375, height: 800 } });

    test('hamburger opens and closes the nav', async ({ page }) => {
        await page.goto('/index.html');
        const nav = page.locator('.main-nav');
        const toggle = page.locator('#nav-toggle');

        await expect(nav).not.toHaveClass(/nav-open/);
        await toggle.click();
        await expect(nav).toHaveClass(/nav-open/);
        await expect(toggle).toHaveAttribute('aria-expanded', 'true');

        await toggle.click();
        await expect(nav).not.toHaveClass(/nav-open/);
        await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    });

    test('clicking a nav link closes the open menu', async ({ page }) => {
        await page.goto('/index.html');
        await page.locator('#nav-toggle').click();
        await expect(page.locator('.main-nav')).toHaveClass(/nav-open/);

        await page.getByRole('link', { name: 'Professional', exact: true }).click();
        await expect(page).toHaveURL(/professional\.html$/);
    });
});
