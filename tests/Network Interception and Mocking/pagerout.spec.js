import {test,expect} from '@playwright/test'

test('pageroute',async({page})=>{
    await page.route('**/api/user', async (route) => {
        // Fulfill the request immediately with fake local data
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({ name: "Arun", role: "QA Lead" })
        });
    });
    await page.goto("https://apps.uat.mspsandbox.com/appointment/#/search-arn")
    
})