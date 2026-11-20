import {test,expect} from '@playwright/test'

test('Page Screenshot', async ({page})=>{
    await page.goto('https://apps.uat.mspsandbox.com/appointment/#/login')
    await page.screenshot({path:'tests/Screenshots/'+'LoginPage.png'})//the file path and screenshot name.
                            //specifies where to save the screenshot.
                //captures a screenshot of the current page.
})

test('Full Screen Screenshot', async ({page})=>{
    await page.goto('https://www.apple.com/')
    await page.screenshot({path:'tests/Screenshots/'+'FullPage.png',fullPage:true})
    //- fullPage: true — captures the entire scrollable page.
})

test('Single Element Screenshot', async ({page})=>{
    await page.goto('https://www.apple.com/')
    await page.locator('//a[@class="product-link chapternav-link"][@data-analytics-title="iphone 18 pro"]')
    .screenshot({path:'tests/Screenshots/'+'PerticularElement.png'})
    //captures only that element.
})

test('Compare Screenshot', async ({page})=>{
    await page.goto('https://apps.uat.mspsandbox.com/appointment/#/login')
   await expect(page).toHaveScreenshot('LoginPage.png')
   console.log("true")
   //npx playwright test Screenshot.spec.js --project=chromium --update-snapshots (use this command while running)
})