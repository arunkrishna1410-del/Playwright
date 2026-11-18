import {test,expect} from '@playwright/test'

test('storageState',async ({page})=>{
    await page.goto("https://apps.uat.mspsandbox.com/appointment/")
    await page.getByPlaceholder('Enter Email Address').fill("document@gmail.com")
    await page.getByPlaceholder('Enter Password').fill("Admin@123")
    await page.click('//div[@class="row mt-4"]//button')

                //Gets the browser context containing the page.//Saves the authentication state
    await page.context().storageState({
                path: 'auth.json'//Saves login state
    })
})