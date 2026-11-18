import {test,expect} from '@playwright/test'
test('bootstrap', async({page})=>{
    await page.goto('https://www.jqueryscript.net/demo/Bootstrap-4-Select-Dropdown/')
    await page.click('//button[@id="bsd1-button"]')
    let allvalue = await page.$$('//div[@class="dropdown-menu dropdown-menu-right show"]//div//a')
    console.log(await allvalue.textContent())
})