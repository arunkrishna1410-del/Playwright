import {test,expect} from '@playwright/test'

test('ifrma',async({page})=>{
    await page.goto('https://www.news18.com/')
    //it will find total number of frames present in the page
    var howmuchframe = await page.frames()
    console.log(howmuchframe.length)

    //approch 1:using namr or url
    await page.frmae('name')//if name is present we can use the name of the frame
    await page.frame({url:'url for the frame'})  
    
    //approch 2: using frame locator
        //here we need to enter the locator of the frame
                                            //here we are giving the locator of the element which is present inside the frame
    page.frameLocator('#vidgyor_iframe').locator('//iframe[@id="vidgyor_iframe"]').click()

    //approch 3: if there is a frame inside a frame we are going to use this one
    await page.goto('https://ui.vision/demo/webtest/frames/')
    var mainframe = await page.frame('https://ui.vision/demo/webtest/frames/frame_3.html')
    let childone = await mainframe.childFrames()//gets all the iframes inside that iframe.
    await childone[0].locator('//*[@id="i6"]/div[3]/div').check()
})