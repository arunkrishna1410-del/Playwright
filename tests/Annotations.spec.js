import {test,expect} from '@playwright/test'

//only -- test.only() is used to run only a specific test case, while skipping the other tests in the same test run.
/*test.only('Test 1',async({page})=>{
    console.log('Thie is first');
     
})*/

//skip --//Skip the selected test
/*test.skip('Test 2',async({page})=>{
    console.log('Thie is second');
    
})*/

//Fixme -- is used to mark a test as not ready or known to be broken. Playwright skips its execution and reports it as a fixme test.
            //It is similar to test.skip()
/*test.fixme('Test 3',async({page})=>{
    console.log('Thie is 3');
})*/

//fail -- Execute a test that is expected to fail
/*let a=0;
test('Test 4',async({page})=>{
    test.fail();//is used to tell Playwright that a test is expected to fail.
    if(a===0){
        console.log("true")
    }
})*/

//slow -- If your configured test timeout is 30 seconds, test.slow() increases it to 90 seconds.
test('Test 2',async({page})=>{
    test.slow();//increases the allowed time for the test. 30*3
    console.log('Thie is second');  
})