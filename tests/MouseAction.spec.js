import {test,expect} from '@playwright/test'

test('MoustionHover',async({page})=>{

    await page.goto('https://www.apple.com/in/mac/')
    //locator the the element which we are going to use the mouse
    const element = await page.locator('//a[@class="ChapterNav_chapternav-link__mewmB"][@data-analytics-title="macbook pro"]')
    await element.hover()
    //mouse will be hovered on the element
    //hover() moves the mouse pointer over that element.
    

    // //RIGHTCLICK
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    const clickon = await page.locator('.context-menu-one.btn.btn-neutral')
    await clickon.click({ button: "right"} )//{ button: "middle"}//{ button: "left"}
    // Finds the element and right-clicks it to open a custom context menu

    //DOUBLE CLICK
    await page.goto('https://testautomationpractice.blogspot.com/')
    const clickingon = await page.locator('button[ondblclick="myFunction1()"]')
    await clickingon.dblclick()
    const tocheck = await page.locator('#field2')
    await expect.soft(tocheck).toHaveValue('Hello World!')
    //NOTE element.dblclick() dispatches two click events.
})