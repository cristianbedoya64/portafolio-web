import { test, expect } from '@playwright/test';

test('home page smoke', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Cristian/i);
  // check that hero title exists
  const hero = page.locator('h1.hero-title');
  await expect(hero).toHaveText(/Hola, soy/i);
});
