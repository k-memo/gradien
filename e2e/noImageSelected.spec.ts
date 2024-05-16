import { test, expect } from '@playwright/test';

test('try to proceed without uploading image', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get Started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('button', { name: 'next' })).toBeDisabled();
});
