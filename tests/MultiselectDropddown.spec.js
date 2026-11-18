import {test, expect} from '@playwright/test'

test('Multiselect', async({page})=>{
    await page.goto('https://demoqa.com/select-menu')
    //Select multipleoptions from multi select dropdown
    //await page.selectOption('#cars',['Volvo','Audi'])//we are storing the need to select values in array forms


    const dropdown = page.locator('div:nth-child(8) .css-b62m3t-container');
    await dropdown.click();

// 2. Locate all the dropdown options
    const optionsLocator = page.locator('[id^="react-select-"][id*="-option-"]');
    
// 3. Get an array of all option locators to use with the enhanced for loop
    const optionsArray = await optionsLocator.all();
    
    for(const opt of optionsArray){
        let text = await opt.innerText()
        if(text.includes('Blue')||text.includes('Red')){
            await opt.click()
            
        }
    }

    await page.waitForTimeout(5000);

})