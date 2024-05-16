import { test, expect } from '@playwright/test';

test('try to proceed without selecting colors', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.click('button[name="get-started"]');

  await expect(page.locator('section[name="color-selection"]')).toBeVisible();

  await page.click('button[name="submit"]');

  await expect(page.locator('section[name="color-selection"]')).toBeVisible();
});
