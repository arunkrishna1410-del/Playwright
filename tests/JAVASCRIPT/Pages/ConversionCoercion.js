//TYPE CONVERSION – We converting a string in to a Number
let value = "100"; // this is a string

let output = Number(value); // converting string into number
console.log(typeof output); //number
console.log(typeof value) //string

//TYPE COERCION - JavaScript automatically converts a value when an operation requires it.
let value2 = "100" - 10;
console.log(value2) //90
//JavaScript automatically converts "100" from a string into a number for subtraction.

//Convertiong Number into String
let num = 25;

let number = String(num)
console.log(typeof number)

function name1(){ //string concatenation
    console.log("10"+4) //Why? The + operator can concatenate strings, so JavaScript converts 4 to "4" and joins the strings.
}
name1() //104

function name2(){
    console.log("10"- 4) //Why? Subtraction is a mathematical operation. JavaScript converts "10" to the number 10 and subtracts .
}
name2() //6