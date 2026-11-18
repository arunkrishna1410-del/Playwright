import {test, expect} from '@playwright/test'

/* test('Dropdown', async({page})=>{
   await page.goto('https://demoqa.com/select-menu')/*

    await page.locator("#oldSelectMenu").selectOption({ label: 'Green' }) //or using visible text
    await page.locator("#oldSelectMenu").selectOption('Green') we can do like this to select value from the dropdown (or)
    await page.locator("#oldSelectMenu").selectOption({ value: 3 }) //using value
    await page.locator("#oldSelectMenu").selectOption({ index: 2 }) //usingindex
    await page.selectOption('#oldSelectMenu', 'Green');

    //1)Checking the number of value is present but we know the value
    /*const options =  await page.locator("#oldSelectMenu")
    await expect(options).toHaveCount(11);*/



    //2)we are going to print the number of option's present
   /* const options =  await page.$$("#oldSelectMenu option")
    console.log(options.length)*/

    //3) Going to check either the given value is present are not - Approach 1
    /*const value = await page.locator("#oldSelectMenu").textContent()//Returns the textContent of the dropdown in the form of String
    await expect(value.includes('Green')).toBeTruthy() //includes will check that given value is ther are not
        //if inclues('green') is there then that will be true now toBeTruthy will work like true=toBeTruthy(True)=>true*/

    //3) Going to check either the given value is present are not - Approach 2
   /*  const alloptions =  await page.$$("#oldSelectMenu option") //we are taking all the dropdownvalues
     var status = false; //for the final conclution if the need value is there it will change to true not it will be false

    console.log(await alloptions.textContent())//printing all the text content
     for(let alltextoptions of alloptions){//alloptions in array we care conveting it
       
        let valueo = await alltextoptions.textContent() //for using if condition we are storing in to a variable
        if(valueo.includes('Green')){//if "valueo" has the value "green" then
            status=true; // the false status will be change as true
            break; // once the value we finded out then the if conditon stops working and comes out from the loop
        }
     }
     await expect(status).toBeTruthy(); // when the loop brakes then we are going to check the status is still remains "true" or not
                                        //if yes then toBeTruthy will confirm it like
                                        //expect(true).toBeTruthy(true) = true
                                        //expect(false).toBeTruthy(true) = false
    await page.waitForTimeout(5000);

})*/

// import {test,expect} from '@playwright/test'

// test('builtin',async({page})=>{
// //appointment page will open
//      await page.goto('https://apps.uat.mspsandbox.com/appointment/#/login')
//      //enter email
//     await page.locator('input[placeholder="Enter Email Address"]').fill("document@gmail.com");
//     //enter password
//     await page.fill('input[placeholder="Enter Password"]','Admin@123');
//     //click on submit button
//     await page.click('button[type="submit"]')
//     //Takes the logout location and stored in a variable
//     let valuestored = await page.locator('//span[@class="mat-mdc-button-touch-target"]')
//     //Checks wether logout is visible or not
//     await expect(valuestored).toBeVisible();
//     console.log("Log Out is visible")
//     //if we want to check a image we can use this "page.getByAltText" but in this case we need to have this "alt="Logo" attribute in the locator
//     //takes the location of the image and store in variable
//     var image = await page.getByAltText('Logo')
//     //checks the image is visible or not
//     await expect(image).toBeVisible();
//     console.log("Malawi Image is visible")
//     //is a Playwright locator used to find an input element using its placeholder attribute.("mostle we can find in Input boxes")
//     await page.getByPlaceholder('Enter ARN Number').fill('N8000010000000057')
//     //using get by text we are taking the text value only text and stored in a variable
//     let ARNnumber = await page.getByText('ARN Number')
//     //here we validating wether the text is visible or not.
//     await expect(ARNnumber).toBeVisible();
//     console.log("ARN number image is visible")
//     //clicking submit button 
//     await page.click('button[type="submit"]')
//     //cliking on the dropdown
//     await page.locator('select[name="applicationType"]').selectOption('RENEWAL/DAMAGE')
// })


test('dropdown',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#country").selectOption("Japan")
})