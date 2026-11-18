import {test,expect} from '@playwright/test'

test('kebord', async({page})=>{
    await page.goto('https://text-compare.com/')
    const needtofill = await page.getByPlaceholder('Paste one version of a text here.')
    await expect.soft(needtofill).toBeEmpty();
    //this is the mornal method to enter a word in a field
    //await needtofill.fill('My name is arun');

    //using keyboard we can also enter the value into the field
    await needtofill.type('My name is arun')
    
    //this one will type as a human one by one
    await needtofill.pressSequentially('My name is arun')

    //need to select all the text using ctrl+A & after that we need to copy ctrl+c
    //is used to select all the text in the currently focused element.
    await page.keyboard.press('Control+A')

    //presses Ctrl and C together to copy the selection.
    await page.keyboard.press('Control+C')

    //is used to press and hold the Tab key.
    await page.keyboard.down('Tab')
    //is used to release the holded Tab key.
    await page.keyboard.up('Tab')

    //means press Ctrl + V to paste copied content into the currently focused element.
    await page.keyboard.press('Control+V')

})