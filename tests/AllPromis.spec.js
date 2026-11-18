import {test,expect,chromium} from '@playwright/test'

test("All Promise",async ()=>{
    let stepone = await chromium.launch();
    let steptwo = await stepone.newContext();
    let page1 = await steptwo.newPage();
    let page2 = await steptwo.newPage();
    let page3 = await steptwo.newPage();

    /**insted of giving 
    //await page1.goto("https://apps.uat.mspsandbox.com/appointment/#/login");
    //await page2.goto("https://www.apple.com/");
    Here we are giving await for one by one so our code will run page1 next page2 and page3 one by one but we need to run all three at
    the same time*/

  /**Promise.all() -- it will exicute all three page in same time if any one failes all 3 will be failed
    await Promise.all([
        page1.goto("https://apps.uat.mspsandbox.com/appointment/#/login"),
        page2.goto("https://www.apple.com/"),
        page3.goto("https://www.postman.com/downloads/")
    ]);
    console.log(page1.title());
    console.log(page2.title());
    console.log(page3.title());

    await page1.close();
    await page2.close();
    await page3.close();*/


    //Promise.allSettled() - Get the result of every operation
   let result = await Promise.allSettled([
        page1.goto("https://apps.uat.mspsandbox.com/appointment/#/login"),
        page2.goto("https://www.apple."),
        page3.goto("https://www.postman.com/downloads/")
    ]);

    console.log(result)

    await page1.close();
    await page2.close();
    await page3.close();

})