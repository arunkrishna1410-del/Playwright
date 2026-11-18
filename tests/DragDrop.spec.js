

import {test,expect} from '@playwright/test'

test('DragDrop', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //element should be draged
    const drag = await page.locator('#draggable')
    //element should be droped
    const drop = await page.locator('#droppable')

    //Approach 1
    await drag.hover()//Hover over the matching element.
    await page.mouse.down()//Clicked and holded the drag element 

    await drop.hover()//The element moved to the drop area
    await page.mouse.up()//The mouse action is released 

    //Approach 2
    await drag.dragTo(drop)//Drag the source element towards the target element and drop it.
})