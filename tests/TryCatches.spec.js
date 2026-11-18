import {test,expect} from '@playwright/test'

test("TryCatch",async({page})=>{
    try{
    await page.goto("https://apps.uat.mspsandbox.com/appointment/#/login")

    await page.getByPlaceholder("Enter Email Address").fill("document@gmail.com")
    

    await page.getByPlaceholder("Enter Password").fill("Admin@12345")
    

    await page.click("button[type='submit']")

    throw new Error("Login failed") //To manually generate an error when a particular condition occurs.

    }catch(error){
        console.log(error.message);//This error.message is used to catch the message from the throw new Error("Login failed") and print it
    }finally{ //Yes. Finally executes whether an error occurs or not, under normal execution.
        console.log(`Applicaiton login failed`)
    }
})