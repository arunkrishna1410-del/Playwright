import {test,expect} from '@playwright/test'

test('testing',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.fill('#name','Arun')
    // await page.getByPlaceholder('Enter EMail').fill('arunkrishna1410@gmail.com')
    // await page.getByPlaceholder('Enter Phone').fill('6382644112')
    // await page.fill('#textarea','No9weststreetariyur')
    // await page.locator('#male').check()
    
    // let value = await page.$$('//*[@class="form-group"][4]')
    // for(let output of value){
    //     const end = await output.textContent()
    //     if(end.includes('Friday')||end.includes('Monday')){
    //         await output.click()
    //     }
    
    // }

//    await page.locator('#country').selectOption('France')
//    await page.locator('#colors').selectOption('Green')
//    await page.locator('#animals').selectOption('Rabbit')

    await page.on('dialog',async dialog=>{
        console.log(dialog.type())
        console.log(dialog.message())
        await dialog.dismiss()
    })
    await page.locator('#confirmBtn')

    await page.setDefaultTimeout(10000)
})