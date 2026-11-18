import { Given, When, Then, setDefaultTimeout  } from '@cucumber/cucumber'; //These are used to connect your Gherkin steps with JavaScript functions.
import { chromium, expect } from '@playwright/test';
//You can import chromium and expect from @playwright/test, but when using Cucumber, you are not using the Playwright Test runner
//or its fixtures.
setDefaultTimeout(60000); 
/** @type {import('@playwright/test').Browser} */
let browser;// Global variable
/** @type {import('@playwright/test').Page} */
let page;//This means you created two variables that can be accessed throughout that JavaScript module.

Given('user opens the application',async function () {
    let stepone = await chromium.launch({headless:false});//Opens the browser application.
    let steptwo = await stepone.newContext({ignoreHTTPSErrors: true});//Creates an isolated browser session with its own cookies and storage.
    page = await steptwo.newPage();//Creates a browser tab where you can interact with the application.
    await page.goto("https://apps.uat.mspsandbox.com/appointment/#/login")
}) 

When('user enters username', async function () {
    await page.getByPlaceholder("Enter Email Address").fill("document@gmail.com");
});

When('user enters password', async function () {
        await page.getByPlaceholder("Enter Password").fill("Admin@123");
});

When('user clicks login', async function () {
    await page.locator("button[type='submit']").click();
});

Then('dashboard should be displayed', async function () {
    await expect(page.getByPlaceholder("Enter ARN Number")).toBeEnabled();
    await page.close();
});