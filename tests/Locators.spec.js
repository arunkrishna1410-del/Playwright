// import {test,expect} from '@playwright/test'

// test('locators',async({page})=>{

//     page.goto('https://demoblaze.com/');
//     //click on login button
//     //await page.locator('id=login2').click
//     await page.click('id=login2')

//     //await page.fill('#loginusername', 'pavanol')
//     //await page.locator('#loginusername').fill("pavanol");
//     await page.type('#loginusername','pavanol')

//     await page.fill("input[id='loginpassword']", 'test@123')

//     await page.click("//button[@class='btn btn-primary' and @onclick='logIn()']")

//     const logout = await page.locator("//a[@id='logout2']")
//     await expect(logout).toBeVisible()
//     await page.close()
// })


import {test,expect} from '@playwright/test'

test('locatorstest',async({page})=>{
    await page.goto('https://apps.uat.mspsandbox.com/appointment/#/login')
    await page.locator('input[placeholder="Enter Email Address"]').fill("document@gmail.com");
    await page.fill('input[placeholder="Enter Password"]','Admin@123');
    await page.click('button[type="submit"]')
    let valuestored = await page.locator('//span[@class="mat-mdc-button-touch-target"]')
    await expect(valuestored).toBeVisible();
    await page.close();
    
})
test("detial locators",async({page})=>{
    await page.goto('https://apps.uat.mspsandbox.com/appointment/#/login')
    await page.getByPlaceholder('Enter Email Address').click()//Used to find input boxes "placeholder tag must be there"
    //await page.getByPlaceholder('button',{'class':'mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color'}).click()
    await page.getByText(' Sign In ').click() //using their exact or partial visible text,
    await page.locator('input[placeholder="Enter Email Address"]').fill("document@gmail.com");//(like IDs #, classes ., or structural paths) and XPath expressions

})

test("detial locatorss",async({page})=>{
    await page.goto('https://apps.uat.mspsandbox.com/appointment/#/login')
    await page.getByPlaceholder('Enter Email Address').fill("Arun123");//It will paste instantly on the field
    await page.getByPlaceholder('Enter Password').pressSequentially("Admin@123")//that types text into an input box character-by-character

})

test.only("detial locatorsss",async({page})=>{
    
    await page.locator('mat-icon').filter({hasText:'visibility_off'}).click();
    

})