import {test,expect} from '@playwright/test'

test('using testinfo', async({page},testInfo)=>{//testInfo is an object that provides information about the currently running test.
    await page.goto("https://apps.uat.mspsandbox.com/appointment/")
    console.log(testInfo.title);//	Gets the test case name
    console.log(testInfo.status);//Gets the current test status
    console.log(testInfo.retry);//	Gets the current retry number
})