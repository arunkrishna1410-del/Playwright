import { Before,After,BeforeAll,AfterAll } from "@cucumber/cucumber";
//Before	    Before each scenario
//After	        After each scenario
//BeforeAll	    Once before the test run
//AfterAll	    Once after the test run
//BeforeStep	Before every step
//AfterStep	    After every step

import { chromium } from "@playwright/test";
/**@type{import('@playwright/test').Page}*/
/**@type{import('@playwright/test').Browser}*/
let browser;

// Runs once before all scenarios
BeforeAll(async function(){
   browser = await chromium.launch({headless:false})//Opens the browser application
})

// Runs before every scenario
Before(async function(){
    this.context = await browser.newContext({ignoreHTTPSErrors:true});//Creates an isolated browser session with its own cookies and storage.
    this.page = await this.context.newPage();//Creates a browser tab where you can interact with the application.
    this.pageerror=[];
    await this.page.on('pageerror',(error)=>{
        this.pageerror.push(error.message);
    })
})

// Runs after every scenario
After(async function () {
    if(this.pageerror.length>0){
        this.attach(`Browser Page Errors:\n${this.pageErrors.join('\n')}`, 'text/plain');
    }
    await this.context?.close();
});

// Runs once after all scenarios
AfterAll(async function () {
    await browser?.close();
});