import { test, expect } from "@playwright/test"

 test.use({storageState: 'auth.json' }); //Loads saved login state
 
test('storageState',async ({page})=>{
   
    await page.goto("https://apps.uat.mspsandbox.com/appointment/#/search-arn")
    await expect(page).toHaveURL("https://apps.uat.mspsandbox.com/appointment/#/search-arn")
    console.log("pass")
  
})