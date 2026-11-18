
import {Given, When,Then,setDefaultTimeout} from '@cucumber/cucumber'
import { expect,chromium } from '@playwright/test'

setDefaultTimeout(6000)
/**@type{import('@playwright/test').Page}*/
//let page;
/**@type{import('@playwright/test').Browser}*/
//let browser;

Given('user opens the testingpage',async function () {
    await this.page.goto("https://testautomationpractice.blogspot.com/")
}) 

// When('user enters the field',async function(dataTable){
//     let converting = dataTable.hashes();//dataTable.hashes() converts the table rows into an array of objects ([ { ... }, { ... } ])
//     //this hashes is used when we have multiple values.
//     for(let output of converting){//inside opbject we are having the object so we need to use the loop 
//         await page.getByPlaceholder("Enter Name").fill(output.name);
//         await page.getByPlaceholder("Enter EMail").fill(output.email);
//         await page.getByPlaceholder("phone").fill(output.phone);
//         console.log(output)
//     }
// })


// When('user enters the field',async function(dataTable){
//     let converting = dataTable.rowsHash();//-->Single Object (No Array)
// //If you only have one record written as key-value pairs (2 columns) and want one direct object without an array or a loop,
//         await page.getByPlaceholder("Enter Name").fill(converting.name);
//         await page.getByPlaceholder("Enter EMail").fill(converting.email);
//         await page.getByPlaceholder("phone").fill(converting.phone);
//         console.log(converting)
// })

When('Enter Address in the field',async function(Address){
    await this.page.locator("#textarea").fill(Address)

})

Then('page should close',async function(){
        await this.page.close();
})