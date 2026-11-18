import {test,expect} from '@playwright/test'

test('DatePicker', async({page})=>{
    // //await page.goto('https://testautomationpractice.blogspot.com/')

    // //1) Method
    // // await page.fill('#datepicker','10/08/2026')
    // // console.log("done")

    // await page.goto('https://apps.uat.mspsandbox.com/appointment/#/login')
    //  //enter email
    // await page.locator('input[placeholder="Enter Email Address"]').fill("document@gmail.com");
    // //enter password
    // await page.fill('input[placeholder="Enter Password"]','Admin@123');
    // //click on submit button
    // await page.click('button[type="submit"]')
    // //enter arn number
    // await page.getByPlaceholder('Enter ARN Number').fill('N8000010000000043')
    // await page.click('button[type="submit"]')
    // // if the record already in db
    // let dialog = await page.locator('#swal2-html-container')
    // let clickit = dialog.filter({
    //     hasText:'This ARN already processed in document stage.'
    // })
    // if(await clickit.isVisible()){
    //    await page.getByRole('button', { name: 'OK' }).click();
    // }
    // // enter name on the application name
    // await page.fill('input[placeholder="Enter Applicant Name"]','Arun')

    // //cliking on the dropdown
    // await page.locator('select[name="applicationType"]').selectOption('RENEWAL/DAMAGE')

    // //select the service type
    // await page.locator('select[name="serviceType"]').selectOption('NORMAL')

    // //click on the Created option
    // await page.click('button[type="submit"]')

    // //click on the ok button(once success)
    // let dialog2 = await page.locator('div[role="dialog"]')
    // let clickit2 =  dialog2.filter({
    //     hasNotText:'Created Successfully'
    // })
    // if(clickit2.isVisible()){
    //     await page.getByRole('button',{name:'OK'}).click()
    // }

    // //click on the calender
    // let year = "OCT 2005"
    // let date = "11"
    // //clicking on the calender
    // await page.click('mat-datepicker-toggle[class="mat-datepicker-toggle ng-tns-c1205077789-151"] span[class="mat-mdc-button-touch-target"]')
    
    // //taking location of the year and month
    // let currentyearmonth = await page.locator('span[class="mdc-button__label"] span[aria-hidden="true"]').textContent()

  await page.goto('https://testautomationpractice.blogspot.com/')
    let year = "January"//want this year
    let month = "2001"//want this month
    let date = "14"//want this data
    await page.click('#datepicker')//clicking on the calend to open
    while (true) {//condition is true
        const oldyear = await page.locator('.ui-datepicker-month').textContent()//taking the text inside the location 
        const oldmonth = await page.locator('.ui-datepicker-year').textContent()//taking the text inside the location 
        if(oldyear == year && oldmonth == month){//checking with expected and actual one
            break;//once pass it will end
        }
        await page.locator('a[title="Prev"]').click()//untill that we are clicking on the icon to move to next 
    }
    //method for date selection using loop
    const olddate = await page.$$('//a[@class="ui-state-default"]') //taking all the date and storing in a olddate as array
    for(const alldate of olddate){
        if(await alldate.textContent()==date){ //chekcing one by one once it is true
           await alldate.click()// we clicking on it
            break;
        }
    }


    //another method for date selection without loop
    await page.click(`//a[@class="ui-state-default"][text()='${date}']`)
    //Backticks allow you to insert JavaScript variables directly into a string using template literals. ``


})
