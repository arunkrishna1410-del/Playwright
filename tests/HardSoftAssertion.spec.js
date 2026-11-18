import {test,expect} from '@playwright/test'

test('Hard&Soft',async({page})=>{
    await page.goto("https://demoblaze.com/index.html")
  
    //Hard assertion - here the line will execute one by one, if it is faild at anypoint then the program 
    //                 will be terminated even the next line is correct.
    /*const ele = await page.locator("//div[@id='contcont']//a[2]")
    await expect(ele).toBeVisible()

    const elem = await page.locator("(//*[contains(@class,'nav-link')])[3]")
    await expect(elem).toHaveClass('nav-link')*/

    //Soft Assertionhere - the line will execute one by one, if it is faild at anypoint then the program will 
    //                  be not be terminated even the next line is not correct.
    const elemy = await page.locator("(//*[contains(@class,'nav-link')])[3]")
    await expect.soft.locator(elemy).toHaveClass('nav-linkh')

    const ele = await page.locator("//div[@id='contcont']//a[2]")
    await expect.soft(ele).toBeVisible()
})

