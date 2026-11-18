//Used to import modules,JSON,and local files.Go into the Playwright library, grab the(test) and the (expect), and let me use them in this file
// import { test, expect } from '@playwright/test';

// test('HomePage',async({page})=>{

//     await page.goto('https://demoblaze.com/')
//     const pagetitle = await page.title();
//     console.log('title',pagetitle);

//    await expect(page).toHaveTitle('STORE');
   
//    await page.close();
// })


import {test,expect} from '@playwright/test'

test('testing',async({page})=>{
    await page.goto('https://www.apple.com/in/iphone-18-pro/')
    console.log("page opened")
    let title = await page.title();
    console.log(title)
    await expect(page).toHaveTitle('iPhone 18 Pro and iPhone 18 Pro Max - Apple (IN)')
    await page.close();
    console.log("Page Closed")
})