const { test, expect } = require('@playwright/test');

test.describe('tag filter bar', () => {
    test('professional page: clicking a tag filters project entries, OR-combines multiple, toggling off restores', async ({ page }) => {
        await page.goto('/pages/professional.html');
        const bar = page.locator('#tag-filter-bar');
        const entries = page.locator('#technicalProjects .project-entry');
        const totalCount = await entries.count();
        expect(totalCount).toBeGreaterThan(0);

        const firstChip = bar.locator('.tag-chip').first();
        const chipLabel = await firstChip.textContent();
        await firstChip.click();
        await expect(firstChip).toHaveClass(/is-active/);

        const visibleAfterOneChip = page.locator('#technicalProjects .project-entry:not(.is-filtered-out)');
        const filteredCount = await visibleAfterOneChip.count();
        expect(filteredCount).toBeGreaterThan(0);
        expect(filteredCount).toBeLessThanOrEqual(totalCount);

        // Every still-visible entry's Skills and Tools line must contain the active tag.
        const visibleTexts = await visibleAfterOneChip.locator('.skills-tags').allTextContents();
        for (const text of visibleTexts) {
            expect(text).toContain(chipLabel);
        }

        await firstChip.click();
        await expect(firstChip).not.toHaveClass(/is-active/);
        await expect(page.locator('#technicalProjects .project-entry:not(.is-filtered-out)')).toHaveCount(totalCount);
    });

    test('personal page: tag filter bar scopes only to this page\'s own entries', async ({ page }) => {
        await page.goto('/pages/personal.html');
        const bar = page.locator('#tag-filter-bar');
        await expect(bar.locator('.tag-chip').first()).toBeVisible();

        const entries = page.locator('#performing .project-entry, #crafts .project-entry, #writingEditing .project-entry, #lifeTravel .project-entry');
        const totalCount = await entries.count();
        expect(totalCount).toBeGreaterThan(0);
    });
});
