import {test,expect} from '@playwright/test'

// test('Home Page Test', async ({page})=>{
//     //Login
//     await page.goto('https://apps.uat.mspsandbox.com/appointment/#/login')
//     await page.fill('//*[@name="username"]','document@gmail.com')
//     await page.getByPlaceholder('Enter Password').fill('Admin@123')
//     await page.click('//*[@type="submit"]')
//     //Some Function
//     await expect(page.locator('//div[@class="username-container"]')).toHaveText('DAISY KAMOTO');
//     //LogOut
//     await page.click('button[aria-label="Logout"]')
// })


// test('Add ARN number', async ({page})=>{
//     //Login
//     await page.goto('https://apps.uat.mspsandbox.com/appointment/#/login')
//     await page.fill('//*[@name="username"]','document@gmail.com')
//     await page.getByPlaceholder('Enter Password').fill('Admin@123')
//     await page.click('//*[@type="submit"]')
//     //Some Function
//     await expect(page.locator('//div[@class="username-container"]')).toHaveText('DAISY KAMOTO');
//     await page.getByPlaceholder('Enter ARN Number').fill('N8000010000000054')
//     //LogOut
//     await page.click('button[aria-label="Logout"]')



//In Playwright, beforeEach and afterEach are used to run code before and after every test.
    //Before every test -- Use it for common steps like opening a webpage or logging in.
    // test.beforeEach('Only Login', async({page})=>{
    // await page.goto('https://apps.uat.mspsandbox.com/appointment/#/login')
    // await page.fill('//*[@name="username"]','document@gmail.com')
    // await page.getByPlaceholder('Enter Password').fill('Admin@123')
    // await page.click('//*[@type="submit"]')
    // })
    //     //After every test -- Use it for cleanup steps, like logging out or closing a page.
    // test.afterEach('Only Logout', async({page})=>{
    //     await page.click('button[aria-label="Logout"]')
    // })

    // test('Home Page Testing', async ({page})=>{
    //     //first time we are only checking the given name is present or not
    // await expect(page.locator('//div[@class="username-container"]')).toHaveText('DAISY KAMOTO');
    // })
    // test('Add ARN number', async ({page})=>{
    //     //here we are checking both name and entering the ARN number
    //     await expect(page.locator('//div[@class="username-container"]')).toHaveText('DAISY KAMOTO');
    //     await page.getByPlaceholder('Enter ARN Number').fill('N8000010000000054')
    // })


//In Playwright, beforeAll() and afterAll() are hooks used to run code once before all tests and once after all tests.
    //beforeAll() → Runs once before all tests runs.
    var page;
    test.beforeAll('Only once will run before all test start', async ({browser})=>{
        page = await browser.newPage();
    await page.goto('https://apps.uat.mspsandbox.com/appointment/#/login')
    await page.fill('//*[@name="username"]','document@gmail.com')
    await page.getByPlaceholder('Enter Password').fill('Admin@123')
    await page.click('//*[@type="submit"]')
    })
    //afterAll() → Runs once after all tests runs.
    test.afterAll('Only once it will run after all test complete', async ()=>{
     await page.click('button[aria-label="Logout"]')
    })

    test('Home Page Testing', async ()=>{
        //first time we are only checking the given name is present or not
    await expect(page.locator('//div[@class="username-container"]')).toHaveText('DAISY KAMOTO');
    })
    test('Add ARN number', async ()=>{
        //here we are checking both name and entering the ARN number
    await expect(page.locator('//div[@class="username-container"]')).toHaveText('DAISY KAMOTO');
    await page.getByPlaceholder('Enter ARN Number').fill('N8000010000000054')
    })  