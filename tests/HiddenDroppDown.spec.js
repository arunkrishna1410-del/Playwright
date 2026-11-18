import {test,expect} from '@playwright/test'

test('HiddenDropDown', async({page})=>{
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

     await page.fill("input[placeholder='username']",'Admin')
     await page.fill("input[placeholder='password']",'admin123')
     await page.locator("button[type='submit']").click();

     await page.locator("(//*[@class='oxd-main-menu-item-wrapper'])[2]").click();

     await page.locator("(//*[contains(@class,'oxd-select-text oxd-select-text--active')])[3]").click();

     await page.waitForTimeout(3000);
     
     const allvalue = await page.$$("//*[@role='option']//span")
     for(const value of allvalue){
        const textvalue = await value.textContent()

        if(textvalue.includes("Client Services")){
            await allvalue.click()
            break;
        }
     }
})