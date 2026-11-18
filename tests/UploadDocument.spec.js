import {test,expect} from '@playwright/test'

test('uploadDoc', async({page})=>{
    // await page.goto('https://www.ilovepdf.com/pdf_to_word')

    // //Playwright, be ready. A file window is about to open."
    // const event = page.waitForEvent('filechooser');

    // //how to upload single file.
    // //setInputFiles() is for selecting files programmatically, not for automating the Windows dialog itself.
    // //here we have created a folder inside the folder we are having the pdf file and there we have taken the Relative Path.
    //await page.locator('#fileInput').setInputFiles('tests\UploadFiles\test1.pdf')
    
    // await page.locator('#pickfiles').click();
    // //You need this object to tell Playwright which file to select.
    // //"The file window is ready. Give me access to it."
    // const fileChooser = await event;

    // await fileChooser.setFiles('tests/UploadFiles/test1.pdf')

    
   /** await page.goto('https://practice.expandtesting.com/upload')
    const waiting = page.waitForEvent('filechooser')
    await page.click('#fileInput')

    const fileChooser = await waiting;
    await fileChooser.setFiles('tests/UploadFiles/A2410255031 -Loan-Booklet.pdf')
    */

    //Keep your eyes open for a file download that is about to start in the near future
    let downloading = page.waitForEvent('download')
    //This click triggers the browser action that causes the file download 
     await page.click('#fileInput')
     // JavaScript will stop here and wait until the browser completely confirms that the download stream has started
     let download = await downloading;
     //This saves the file locally to your machine.
     await download.saveAs('')
})