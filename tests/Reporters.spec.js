import {test,expect,chromium} from '@playwright/test'

test('Test 1', async({page})=>{
    await page.goto('https://www.apple.com/')
    await expect.soft(page).toHaveTitle('Apple')
})

test ('Test 2', async({page})=>{
    await page.goto('https://apps.uat.mspsandbox.com/appointment/#/login')
    await expect(page).toHaveTitle('Appointment')
})

test ('Test 3', async({page})=>{
    test.slow()
    await page.goto('https://www.microsoft.com/en-in')
    await expect(page).toHaveTitle('Microsoft – AI, Cloud, Productivity, Computing, Gaming & Apps')
})

/*
- List – Displays test results line by line in the terminal.
- Line – Shows a live summary of test execution.
- Dot – Displays a dot for each test.
- HTML – Generates a detailed report that opens in a browser.
- JSON – Generates test results in JSON format.
- JUnit – Generates XML reports for CI/CD tools.

In config file
reporter: 'html'

In Terminal
npx playwright show-report*/
