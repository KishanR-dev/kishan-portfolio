import { test, expect } from '@playwright/test';

test('homepage loads and displays Machined Cinema aesthetic', async ({ page }) => {
  await page.goto('/');

  // Expect title
  await expect(page).toHaveTitle(/Kishan R | Engineering Professional/);

  // Expect the background to be strictly void #030303
  // Playwright tests computed style
  const body = page.locator('body');
  const bgColor = await body.evaluate((el) => window.getComputedStyle(el).backgroundColor);

  // Note: browsers return rgb(3, 3, 3) for #030303
  expect(bgColor).toBe('rgb(3, 3, 3)');
});
