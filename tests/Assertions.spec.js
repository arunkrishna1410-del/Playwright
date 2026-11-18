import {test,expect} from '@playwright/test'

test('Assertions',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register')
    
    //1) expect(page).toHaveURL()   -   Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
    //2) expect(page).toHaveTitle    -   Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')
    //3) expect(locator).toBeVisible()  -   Element is visible
    const element = await page.getByRole('img',{alt:'nopCommerce demo store'})
    await expect(element).toBeVisible()
    //4) expect(locator).toBeEnabled()  -   Control is enabled
    const element1 = await page.locator('#small-searchterms')
    await expect(element1).toBeEnabled()
    //5) expect(locator).toBeDisabled() -   Control is disabled
    //6) expect(locator).toBeChecked()  -   
    //this will work in radiobutton & checkbox
    const femailradiobutton = await page.locator('#gender-female')
    await femailradiobutton.click()
    await expect(femailradiobutton).toBeChecked()
    const checkbox = await page.locator('#NewsLetterSubscriptions_0__IsActive')
    await expect(checkbox).toBeChecked()
    //7) expect(locator).toHaveAttribute()  Wether the Element has the perticular attribute or not
    const element3  = await page.locator('#register-button')
    await expect(element3).toHaveAttribute('name','register-button')
    //8 expect(locator).toHaveText('Text') here we are going to check this perticular element is having this text or not and we need to give the full text
    await expect(await page.locator("(//*[contains(@class, 'title')])[2]")).toHaveText('Your Personal Details')
    //9 expect(locator).toContainText('Text') here we are going to check this perticular element is having this text or not and he we can give the partial text to find it
    await expect(await page.locator("(//*[contains(@class, 'title')])[2]")).toContainText('Your Pers')
    //10 expect(locator).toHaveValue('value') here we are going to check whether the field is having the expected value or not
    const value = await page.locator("(//*[contains(@name,'Password')])[1]")
    await value.fill('arun@123')
    await expect(value).toHaveValue('arun@123')

    

})

