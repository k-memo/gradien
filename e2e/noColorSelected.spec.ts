import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto('http://localhost:3000');
});

test('try to proceed without selecting colors', async ({
  page,
  browserName,
}) => {
  await page.getByTestId('get-started').click();
  await page.getByTestId('upload-image').click();

  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.getByTestId('upload-image').click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles('public/rado.png');

  await page.getByTestId('crop-button').click();
  await page.getByTestId('generate-next').click();
  await page.getByTestId('color-submit').click();

  await expect(page.getByTestId('label-error')).toBeVisible();
});
