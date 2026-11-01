import { test, expect } from '@playwright/test';

test('Garante que a aplicação renderiza sem quebrar', async ({ page }) => {
  await page.goto('/');
  // Valida apenas se a tag <body> ou <header> existe na tela
  await expect(page.locator('header')).toBeVisible();
});
