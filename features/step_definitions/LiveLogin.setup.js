import { Given,When,Then,setDefaultTimeout } from "@cucumber/cucumber";
import{test,expect} from "@playwright/test";
import { appointmentlogin } from "../pages/appointmentlogin.js";
import { BASE_URL } from "../../environment.js";

setDefaultTimeout(60000);
/** @this {import("../support/world.js").CustomWorld} */
Given('opening the application',async function(){
    this.loginpage = new appointmentlogin(this.page);
    await this.page.goto(BASE_URL)
})
When('user logs in with {string} and {string}',async function(email,password){
    await this.loginpage.loginUser(email,password);
})
Then('appointment message {string} should be displayed', async function(expected_output){
    await this.loginpage.verifimessage(expected_output);
})
