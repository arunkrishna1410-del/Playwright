import {test,expect} from '@playwright/test'

test('Playwright.config.js', async ({page})=>{
    await page.goto('https://apps.uat.mspsandbox.com/appointment/#/login')
         await page.getByPlaceholder('Enter Email Address').fill('document@gmail.com');

        await page.getByPlaceholder('Enter Password').fill('Admin@123');

        await page.locator('button[type="submit"]').click();

        await expect(
            page.getByRole('heading', { name: 'ARN Number' })).toBeEditable();

        console.log('Login test passed');
})
