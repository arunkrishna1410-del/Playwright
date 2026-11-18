import { Given, Then, When, setDefaultTimeout } from '@cucumber/cucumber';
import {expect,chromium} from '@playwright/test'


setDefaultTimeout(60000);
/** @type {import('@playwright/test').Page} */
let page;
/** @type{import('@playwright/test').Browser} */
let browser;

Given('user opens the application',async function(){
    let stepone = await chromium.launch({headless:false});
    let steptwo = await stepone.newContext({ignoreHTTPSErrors:true});
    page = await steptwo.newPage();
    await page.goto('https://apps.uat.mspsandbox.com/appointment/#/login')
})

When('user enters username {string}',async function(username){
    await page.getByPlaceholder("Enter Email Address").fill(username);
})

When('user enters password {string}',async function(password){
    await page.getByPlaceholder("Enter Password").fill(password);
})

When('user clicks login',async function(){
    await page.locator("button[type='submit']").click();
})

Then('{string} should be displayed',async function(expectedResult){
        if (expectedResult=='Dashboard') {
            await expect(page.getByPlaceholder("Enter ARN Number")).toBeVisible();
            console.log("home page is displayed")
        }else if(expectedResult=='Password wrong'){
            await expect(page.getByText("Invalid email or password")).toHaveText("Invalid email or password");
            console.log("password is wrong")
        }else if(expectedResult=='username wrong'){
            await expect(page.getByText("Invalid email or password")).toHaveText("Invalid email or password");
             console.log("username is wrong")
        }else if(expectedResult=='Both wrong'){
            await expect(page.getByText("Invalid email or password")).toHaveText("Invalid email or password");
            console.log("bot are wrong")
        }else if(expectedResult=='Need credentials'){
            await expect(page.getByText("Please enter email and password")).toHaveText("Please enter email and password");
            console.log("inputs are null")
        }

        await page.close();
})