// import {test,expect} from '@playwright/test'

// test('AutoSuggest',async({page})=>{

//     await page.goto('https://www.htmlelements.com/demos/dropdownlist/auto-complete/')

//     await page.locator("input[placeholder='Search demos..']").fill('a')
//                 // Playwright automatically waits for element to be ready before performing an action.
//     await page.waitForSelector("(//li//a[@class='ripple'])[17]")

//     const value = await page.$$("//li//a[@class='ripple']")

//     for (let values of value){
//         const all = await values.innerText()
//         if(all.includes('Item Template')){
//             await values.click()
//             break;
//         }
//     }

// })


import {test,expect} from '@playwright/test'
test('testing',async({page})=>{
    await page.goto('https://www.makemytrip.com/flights/')
    await page.click('//span[@class="commonModal__close"]')
    await page.locator('.flt_fsw_inputBox.searchCity.inactiveWidget').click()
    await page.getByPlaceholder('From').fill('chenn')
    await page.waitForSelector('//ul[@role="listbox"]//li//div//span[@class="revampedCityName"]')
    console.log("Entered successfully")

    let allvalue = await page.$$('//ul[@role="listbox"]//li//div//span[@class="revampedCityName"]')

    for(let totalvalue of allvalue){
        
        let output = await totalvalue.textContent()
        if(await output.includes('Chennai, India')){
            await output.click()
        }
    }
})