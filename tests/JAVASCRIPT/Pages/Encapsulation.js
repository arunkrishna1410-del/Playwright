//JavaScript provides private properties using the # symbol.
//combines data and methods inside a class and restricts direct access to certain data to protect it from unwanted modification.
// class testing{
//     #name;
//     setname(name){
//         this.#name = name;
//     }
//     getname(){
//         return this.#name;
//     }
// }

const { resourceLimits } = require("node:worker_threads");

// let value = new testing()
// value.setname("arun");
// console.log(value.getname())

// class test{
//     #privatevalue;
//     constructor(name){
//         this.#privatevalue = name
//     }
//     methodtwo(){
//         console.log(this.#privatevalue)
//     }
// }
// let output = new test("arunkingdevil");
// output.methodtwo()


class bank{ //Creates a class called Bank
    #balance = 5000; //#balance is a private property.//It can only be accessed from inside the class.
    calculating(amount){//This method adds the given amount to the private balance.
        this.#balance = this.#balance+amount
    }
    returningit(){ //This method provides controlled access to the balance
        return this.#balance
    }
}

let result = new bank(); //Creates an object of the class.
result.calculating(2500);//Calls the calculating method and adds ₹2,000.
console.log(result.returningit())//Returns the current balance.
//console.log(result.#balance)