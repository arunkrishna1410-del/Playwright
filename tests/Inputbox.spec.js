/*import { test,expect} from '@playwright/test'

test('inputbox',async({page})=>{

    await page.goto('https://demoqa.com/checkbox')
    //fullname
    /*await expect(await page.locator("(//*[contains(@id,'userName')])[3]")).toBeVisible //A specific element is visible.
    await expect(await page.locator("(//*[contains(@id,'userName')])[3]")).toBeEmpty //Ensures the Locator points to an empty editable element or to a DOM node that has no text.
    await expect(await page.locator("(//*[contains(@id,'userName')])[3]")).toBeEditable //Ensures the Locator points to an editable element.
    await expect(await page.locator("(//*[contains(@id,'userName')])[3]")).toBeEnabled //Ensures the Locator points to an enabled element.
    //await page.locator("(//*[contains(@id,'userName')])[3]").fill('Arun') //or
    await page.fill("(//*[contains(@id,'userName')])[3]", 'Arun')

    await page.waitForTimeout(5000) //Waits for the given timeout in milliseconds.
  */
    /*
        //check box
        //await page.locator("#impressiveRadio").check() //or
        await page.check("#impressiveRadio")

        await expect.soft(await page.locator("#yesRadio").isChecked()).toBeTruthy()//Ensures that value is true
                                                    //Returns whether the element is checked. Throws if the element is not a checkbox or radio input.    
        await expect.soft(await page.locator("#impressiveRadio")).toBeChecked()//Ensures the Locator points to a checked input.                                                    
    */
   
      /* await page.locator("//*[contains(@class,'rc-tree-switcher rc-tree-switcher_close')]").click()
       await page.getByRole('span',{class:'rc-tree-checkbox'}).check
       await expect(await page.locator("//*[contains(@class,'rc-tree-checkbox')]")).toBeChecked

        const checkboxlocation = ["(//*[contains(@class,'rc-tree-checkbox')])[2]","(//*[contains(@class,'rc-tree-checkbox')])[4]"];

        for(const locatorr of checkboxlocation){
            await page.locator(locatorr).check()

        }

        for(const locatorr of checkboxlocation){
            if(await page.locator(locatorr).isChecked())
                {
                        await page.locator(locatorr).uncheck()
            }

        }
})                 */




import { test,expect} from '@playwright/test'

test('inputbox',async({page})=>{

    await page.goto('https://designsystem.digital.gov/components/checkbox/')
    let checkbox = ['label[for="check-historical-washington"]','label[for="check-historical-douglass"]','label[for="check-historical-truth"]']

    for(let convertion of checkbox){
        if(await page.locator(convertion).isChecked()){
            await page.locator(convertion).uncheck()
            console.log("Checked boxes are unchecked")
            break;
    }
}
    for (let convertion of checkbox){
        await page.locator(convertion).check();
        console.log("UnChecked boxes are Checked")
        break;
    }
 
    })