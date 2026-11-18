import {test,expect} from '@playwright/test'

let users=[{username:"documentt@gmail.com",password:"Admin@1234"},
           {username:"documentl@gmail.com",password:"Admin@1234"},
           {username:"document@gmail.com",password:"Admin@123"}
]

for(let alluser of users){
    test(`This login is for${alluser.username}`,async({page})=>{
        await page.goto("https://apps.uat.mspsandbox.com/appointment/#/login")
        await page.getByPlaceholder("Enter Email Address").fill(alluser.username);
        await page.getByPlaceholder("Enter Password").fill(alluser.password);
        await page.click("button[type='submit']")
    })
}
//There are all the two way we can do the Data Driven Tesitng using multiple user credentials
users.forEach((output)=>{
    test(`This login is for ${output.username}`,async({page})=>{
        await page.goto("https://apps.uat.mspsandbox.com/appointment/#/login")
        await page.getByPlaceholder("Enter Email Address").fill(output.username);
        await page.getByPlaceholder("Enter Password").fill(output.password);
        await page.click("button[type='submit']")
        if(await page.getByText("ARN Number").isVisible()){
            console.log(`This is the correct username ${output.username}
                        and this is the correct password ${output.password}`)
        }
        
    })
})