import {test,expect} from '@playwright/test'
let page;

test.beforeEach('Open login page', async ({ page }) => {
    await page.goto('https://apps.uat.mspsandbox.com/appointment/#/login');
});

test.describe('Valid Password', () => { //Here, test.describe() creates a group of related tests.//To organize related test cases.

    test('Checks login Page', async ({ page }) => {
        await page.getByPlaceholder('Enter Email Address').fill('document@gmail.com');

        await page.getByPlaceholder('Enter Password').fill('Admin@123');

        await page.locator('button[type="submit"]').click();

        await expect(
            page.getByRole('heading', { name: 'ARN Number' })).toBeVisible();

        console.log('Login test passed');
    });
});

test.describe('Invalid Password', () => { //- To organize tests by module, such as Login, etc..

    test('Email Incorrect', async ({ page }) => {
        await page.getByPlaceholder('Enter Email Address').fill('dacument@gmail.com');

        await page.getByPlaceholder('Enter Password').fill('Admin@123');

        await page.locator('button[type="submit"]').click();

        let checking = await page.locator('div[class="row mt-4"] div span')

        await checking.waitFor();

        await expect(checking).toBeVisible();

        console.log('Invalid email test passed');
    });

    test('Password Incorrect', async ({ page }) => {
        await page.getByPlaceholder('Enter Email Address').fill('document@gmail.com');

        await page.getByPlaceholder('Enter Password').fill('Admin@124');

        await page.locator('button[type="submit"]').click();

        await checking.waitFor();

        await expect(checking).toBeVisible();

        console.log('Invalid password test passed');
    });
});