import { setWorldConstructor } from "@cucumber/cucumber"; //tells Cucumber to use our custom World class.

export class customworld{ //here we creating a class and exporting it to access it
    
    constructor(){
//We are creating these three variables to store the Playwright browser objects inside the Cucumber World object,
//so we can access them from different hooks and step definitions.        
            this.browser = null; //	Stores the browser instance
            this.context=null;  //	Stores the browser context
            this.page = null;   //	Stores the browser tab/page
    }
}
//You normally create an object like this:
//const obj = new CustomWorld(); (but)
setWorldConstructor(customworld) //Instead of creating the object ourselves, we register the class:
//You don't need to write this yourself. //const obj = new CustomWorld()