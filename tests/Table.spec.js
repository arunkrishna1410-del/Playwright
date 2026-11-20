import {test,expect} from '@playwright/test'

test('Table',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //storing the locator of the tabel in a variable
    const table = await page.locator('#productTable')
    //inside the table location we are having the columns & row here we are only taking the column
    const columns = table.locator('thead tr th')
    //printing the count of the column
    console.log(await columns.count())
    //inside the table location we are having the columns & row here we are only taking the row
    const row = table.locator('tbody tr')
    //printing the count of the row
    console.log(await row.count())

//    2,Select check box inside the table.
//   From all the rows, give me the row that contains a <td> and contains the text Smartwatch. after taking the value we are storing that into a variable
  //const table = await page.locator('#productTable')
  //const row = table.locator('tbody tr')  
  const allrow = row.filter({
     has:page.locator('td'),// here we are taking all the <td></td> td means table cell.The <tr> has <td> inside it.
        hasText:'Smartwatch'//Keep only the row that contains the text Smartwatch.
    })
   await allrow.locator('input').check()//Inside the Smartwatch row, find the checkbox and click
//    Find the checkbox inside the Smartwatch row and check it.

   //3 Select multiple check box using javascript function
//      await multipleselection('Laptop', row, page);
//         await multipleselection('Tablet', row, page);
//     async function multipleselection(product, row, page) {

//     const allrow = row.filter({
//         has: page.locator('td'),
//         hasText: product
//     });

//     await allrow.locator('input').check();
// }
  
    // //4 
    // const value = await page.locator('#pagination li a')
    // console.log(await value.count())

    // for(let i=0;i<await value.count();i++){
    //     if(i>1){
    //         await value.nth(i).click()
    //     }
    // }

})

test('testing',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    let fulltable = await page.locator("#taskTable");
    let column = await fulltable.locator('thead tr th')
    let row = fulltable.locator('tbody tr')
    console.log(`number of column is ${await column.count()}`);
    console.log(`number of row is ${await row.count()}`);


    let value = row.filter({
        has: page.locator('td'),
        hasText:'0.11 MB/s'
    })
    await expect(value).toHaveCount(1,{timeout:50000})
    console.log("true")
    await page.waitForLoadState
})


