import {test,expect} from '@playwright/test'

export class appointmentlogin{
/**@param{import("@playwright/test").Page} page */
    constructor(page){
        this.page = page;
        this.username = page.getByPlaceholder("Enter Email Address");
        this.password = page.getByPlaceholder("Enter Password");
        this.eyeicon = page.getByText("visibility");
        this.submitbutton = page.locator("button[type='submit']");
        this.viewarnnumber = page.getByText("ARN Number");
        this.nullpassword = page.getByText("Please enter password");
        this.nullemail = page.getByText("Please enter email");
        this.bothwrong = page.getByText("Invalid email or password");
        this.bothmissing = page.getByText("Please enter email and password");

    }
    async loginUser(email,password){
        await this.username.fill(email);
        await this.password.fill(password);
        await this.submitbutton.click();
    }
    async togglePasswordVisibility(){
        await this.eyeicon.click();
    }
    async verifimessage(expected_output){
      
        if(expected_output=='Dashboard'){
            await expect(this.viewarnnumber).toBeVisible();
        }else if(expected_output=='Please enter password'){
             await expect(this.nullpassword).toBeVisible();
        }else if(expected_output=='Please enter email'){
             await expect(this.nullemail).toBeVisible();
        }else if(expected_output=='Invalid email or password'){
             await expect(this.bothwrong).toBeVisible();
        }else if(expected_output=='Please enter email and password'){
             await expect(this.bothmissing).toBeVisible();
        }
    }
}