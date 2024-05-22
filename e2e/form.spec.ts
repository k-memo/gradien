import { test, expect } from '@playwright/test';
import Rado from '../public/rado.png';

test('complete form submission process', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.click('text=Get Started');
  await page.waitForSelector('[data-testid="upload-section"]');

  // Upload an image.
  const input = await page.$('input[type="file"]');
  await input.setInputFiles({ Rado });

  await page.waitForSelector('[data-testid="color-picker-section"]');

  // Pick a color
  const colors = ['#000000', '#000000', '#000000'];
  for (const color of colors) {
    await page.click(`text=${color}`);
  }
  await page.waitForSelector('[data-testid="palette-section"]');

  //submit
  await expect(page.locator('input[type="button"]').last()).not.toBeDisabled();
  await page.click('input[type="button"]');
});
