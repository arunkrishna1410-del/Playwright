import {test, expect} from '@playwright/test'

test('multiplelink', async ({page})=>{

    await page.goto('https://demoblaze.com/')

    const Links = await page.$$('a') //$$-The method finds all elements matching  like  find elements

    for(const Link of Links){
        const alllink= await Link.textContent()//in Playwright is used to get the text inside an element.
        console.log(alllink);
    }

})
