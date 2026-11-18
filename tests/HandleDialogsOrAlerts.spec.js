import {test, expect} from '@playwright/test'
//By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them.
//However, you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it.

test('DialogOrAlerts',async({page})=>{
    await page.goto('https://www.selenium.dev/selenium/web/alerts.html#')
    //Then perform the action that triggers the alert:
    page.on('dialog',async dialog =>{ //dialog is a event
        console.log(dialog.type())//It can return:alert,confirm,prompt
        console.log(dialog.message())//Get message
        dialog.accept()//OK / Accept
        dialog.dismiss()//Cancel
        dialog.accept('Arun');//Enter text in prompt
    })
    await page.click('#prompt');
})