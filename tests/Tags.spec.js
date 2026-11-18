import {test,expect} from '@playwright/test'

/**test('Tag 1@sanity',async({page})=>{
    console.log('This is Tag 1')
})

test('Tag 2@sanity',async({page})=>{
    console.log('This is Tag 2')
})

test('Tag 3@sanity',async({page})=>{
    console.log('This is Tag 3')
})

test('Tag 4@regression',async({page})=>{
    console.log('This is Tag 4')
})

test('Tag 5@regression@sanity',async({page})=>{
    console.log('This is Tag 5')
})

//need to run in the Terminal npx playwright test Tags.spec.js --project=chromium --headed --grep "@sanity"
*/

test('teststep', async ({page})=>{
    test.slow();
    await page.goto('https://apps.uat.mspsandbox.com/appointment/#/login')
    
    await test.step('Enter Username',async ()=>{
        await page.getByPlaceholder('Enter Email Address').fill("Arunking")
    })

    await test.step('Enter Password',async ()=>{
       let value =  await page.getByPlaceholder('Enter Password');
       await value.fill("Admin@123");
       await expect(value).toHaveValue("Admin@321");
    })

    await test.step('Submit',async ()=>{
        await page.locator('//div[@class="row mt-4"]//button').click()
    })
})