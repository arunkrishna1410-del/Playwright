import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.epassport.gov.mw/appointment/#/login');
  await page.getByRole('textbox', { name: 'Enter Email Address' }).click();
  await page.getByRole('textbox', { name: 'Enter Email Address' }).fill('Arun123');
  await page.getByRole('textbox', { name: 'Enter Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('Arun@123');
  await page.getByText('visibility_off').click();
  await page.getByRole('button', { name: ' Sign In' }).click();
  const text = await page.getByText('Invalid email or password')
  await expect(page.locator(text)).toBeVisible
});