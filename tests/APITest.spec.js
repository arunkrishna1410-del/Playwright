import {test,expect} from '@playwright/test'

test('Get Method', async({request})=>{ //Playwright provides the API request fixture

    //Sends an HTTP GET request directly to the server.
    let output = await request.get('https://www.epassport.gov.mw/MalawiIMSService/mis/findTheApplicantSummary?refId=N8000030000119440')

    console.log(JSON.stringify(await output.json(),null,1));
                //(/Converts that object into a JSON string(Reads the API response as a JavaScript object,No custom conversion,2 spaces per level))             
                
                                                    
    await expect(output.status()).toBe(200) //Checks whether the actual result matches the expected result.
})

test('Post Method', async ({request})=>{
   let output =  await request.post('https://www.epassport.gov.mw/card-malawi-service/api/generate/passportNo',
        {
            data:{"rids": ["A008622","A008623","A008624","A008627","A008628","A008629","A008630"]},//This is the data you are sending to the server.
            headers:{'Accept': 'application/json'}, //This tells the server that your client prefers to receive JSON. 
            
        });
     
    console.log(JSON.stringify(await output.text(),null,2))

    await expect.soft(output.status()).toBe(200)
})


test('Put Method', async ({request})=>{
   let output =  await request.put('https://www.epassport.gov.mw/card-malawi-service/api/generate/passportNo',
        {
            data:{"rids": ["A008622","A008623","A008688","A008688","A008628","A008629","A008630"]},
            headers:{'Accept': 'application/json'},
            
        });
     
    console.log(JSON.stringify(await output.text(),null,2))

    await expect.soft(output.status()).toBe(200)
})