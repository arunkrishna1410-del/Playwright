//import { ... } from '@playwright/test': Opens the Playwright engine toolbox on your computer.
//We are importing test and giving it another name: base.
//expect: It imports the assertion tool used to check things (like await expect().toBeVisible()).
import {test as base, expect,page} from '@playwright/test'

//export allows us to make something available to other JavaScript files.
                        //extend() is a Playwright Test method used to create custom fixtures by extending the existing test object.//page,browser,context,request
export const mytest = base.extend({
    //We are taking Playwright's existing test functionality and adding our own login functionality to it.
    //This is the name of your custom fixture.(loginPage)
    loginPage:async({page},use)=>{//use is a function provided by Playwright to pass the fixture value to the test.
        await page.goto("https://apps.uat.mspsandbox.com/appointment/#/login")
        await page.getByPlaceholder('Enter Email Address').fill("document@gmail.com");
        await page.getByPlaceholder('Enter Password').fill("Admin@123");
        await page.locator('//div[@class="row mt-4"]//button').click();
        //My fixture setup is ready. Give this page to the test that requested loginPage.
        await use(page);
         // 🔴 3. TEARDOWN PHASE (Runs AUTOMATICALLY after the test finishes)
        console.log("Test finished! Cleaning up session...");
        await page.getByText('Logout').click(); // Clean logout action
    }
})
//This exports the expect object so other files can import it from your fixture file.
export{expect}