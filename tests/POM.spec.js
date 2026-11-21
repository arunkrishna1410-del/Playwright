import {test,expect} from '@playwright/test'
import { LoginPage } from './JAVASCRIPT/Pages/LoginPOM' //here we are importing our js file

/////////////////////// WITHOT POM ////////////////////////////////////////////////
/*test('Checks login Page', async ({ page }) => {
        await page.goto('https://apps.uat.mspsandbox.com/appointment/#/login');
        await page.waitForTimeout(3000)
        await page.getByPlaceholder('Enter Email Address').fill('document@gmail.com');

        await page.getByPlaceholder('Enter Password').fill('Admin@123');

        await page.locator('button[type="submit"]').click();

        await page.close();

        console.log('Login test passed');
    });
*/

//////////////////////////////////// USING POM //////////////////////////////////

//Login Page
test ('Using POM',async({page})=>{
let login = new LoginPage(page); //need to create a object to access the methods created inside the class
await login.openurl();
await login.loginfunction('document@gmail.com','Admin@123');
})


//Page Object Model is a design pattern used in automation testing to separate page locators and actions from test scripts.
//It improves code reusability, maintainability, and readability. If a locator changes, we can update it in one place instead
//of modifying multiple test cases.