import {test,expect} from '@playwright/test'

test('ParallelExecution1',async({page})=>{
    await page.goto('https://apps.uat.mspsandbox.com/appointment/#/login')
})

test('ParallelExecution2',async({page})=>{
    await page.goto('https://apps.uat.mspsandbox.com/INTERVIEWER/')
})

test('ParallelExecution3',async({page})=>{
    await page.goto('https://apps.uat.mspsandbox.com/MAS/')
    await expect(page.getByPlaceholder("Enter Email Address")).toBeVisible();
})