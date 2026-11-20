import { test, expect, chromium } from '@playwright/test' //to launch a Chromium browser manually.

test ('Window Handle', async ()=>{
    test.slow();
    let launchbrowser = await chromium.launch() //This launches a new Chromium browser process. //Starts the browser
    let context = await launchbrowser.newContext() //This creates a new browser context. //Creates a separate browser session
    let page1 = await context.newPage();//Creates a new browser page (normally a new tab) inside that context.
    await page1.goto('https://apps.uat.mspsandbox.com/appointment/')
})

test('Handle Multiple Window0', async ()=>{
    test.slow();
    let launchbrowser = await chromium.launch()
    let context = await launchbrowser.newContext()
    let page1 = await context.newPage();
    
    await page1.goto('https://apps.uat.mspsandbox.com/appointment/')
 
    //const popupPromise = page1.waitForEvent('popup'); Use this when clicking a link on the current page opens a new tab or popup.

    let opensSecondPage  = context.waitForEvent('page') // is used in Playwright to wait for a new page or tab to open
    //  inside the same browser context.

    //Interview tip: Always register the event listener before clicking the button or link. Otherwise, the new tab might 
    //open before Playwright starts waiting for it.

    // Click a link that opens a new tab

    // Get the newly opened page //Resolve the promise to gain control of the second tab
    let page2 = await opensSecondPage;

    //Here the Home page is stored in page1 if we need to do any thing in page1 we directly use this one (OR)
    //If we need to do any action in the second page which is opend from the Home page we need to call the page 2
    //Because the second page is stored in the page2.

})