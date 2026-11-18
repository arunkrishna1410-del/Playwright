export class LoginPage{
    
    constructor(page){
        this.page = page;
        this.emaillocator = 'input[placeholder="Enter Email Address"]'
        this.passwordlocator = 'input[placeholder="Enter Password"]'
        this.eyelocator = 'mat-icon[role="img"]'
        this.signinlocator = 'button[type="submit"]'
    }

    async openurl(){
        await this.page.goto('https://apps.uat.mspsandbox.com/appointment/#/login')
    }

    async loginfunction(username,password){
        await this.page.locator(this.emaillocator).fill(username);
        await this.page.locator(this.passwordlocator).fill(password);
        await this.page.click(this.eyelocator);
        await this.page.click(this.signinlocator);
        await this.page.close();
        
     }
}