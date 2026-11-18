// CLASS
/**class student{ //this is how we are going to create the class by using class and class name
//here we are creating  two method  one  will store the  value  and another method for display the stored value

 StudentDetials(name, role, grade){
        this.name  =  name;
        this.role  = role;
        this.grade = grade;
    } //insted of this method we can also use constructor like 

    constructor(name,role,grade){
         this.name  =  name;
         this.role  = role;
         this.grade = grade;
    }

    display(){
        console.log(this.name,this.role,this.grade);
        
    }
}

let student1 = new student("Arun", 14, 87)
// student1.StudentDetials("Arun", 14, 87); -//this one we need when we create a method to store value but for constructor it will called by default when we create a object for the class
let student2 = new student("Sanjay",18,25);
student2.StudentDetials("Sanjay",18,25);

student1.display();
// student2.display();
*/


/**class detials {
    // Rule 1: No let, const, or var keywords here
    username = "arun"; //here we have hard coded the values
    password = "Admin@123";

    login(){
         // Rule 2: Use 'this.' to tell JavaScript to look inside the object
        console.log(`hi this is arun${username} and my password is${password}`)
    }
}

let print = new detials()
console.log(print.username) //arun
console.log(print.password) //Admin@123
print.login() //login successfully
*/

class usingconstructor{

    constructor(name,age,location){//automatically called when an object is created using the new keyword
        this.name = name;//this.name – Property belonging to the current object.
                    //name – Value received through the constructor parameter.
        this.age = age;
        this.location = location;
    }
    print(){
        console.log(`Hi this is ${this.name} this is my age ${this.age} and this is my locaiton ${this.location}`)
    }
}

let output = new usingconstructor("arun",87,"Pondy")
let outputt = new usingconstructor("sanjay",21,"Pondy")
output.print();//Hi this is arun this is my age 87 and this is my locaiton Pondy
outputt.print();//Hi this is sanjay this is my age 21 and this is my locaiton Pondy