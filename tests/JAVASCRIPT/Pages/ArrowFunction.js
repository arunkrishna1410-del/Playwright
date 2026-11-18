//normal function:
/**function greet(){
    console.log("hellow arun")
}
greet() //hellow arun*/

//An arrow function is simply another way to write a JavaScript function.
//Stores the function in a variable named greet
/**const greet = () => {
    console.log("hellow arun")
}
//// Calling the function
greet();*/

//Arrow functions with parameters
//Normal function:
/**function add(a, b) {
    console.log(a + b);
}
add(10, 20);//30*/

//Arrow function
/**let add = (a,b)=>{
    console.log(a+b)
}
add(25,87)//122*/

//You can remove the parentheses around a single parameter.

/**let detials = name => console.log(name)
detials("ARUN") //ARUN
//OR
let adding = (a,b) => console.log(a+b)
adding(47,87)//134*/

//What is implicit return?
//normal return. Using arrow function
/**let adding = (a,b)=>{
    return a+b //Here, we explicitly use the return keyword.
}
let result = adding(54,87)
console.log(result) // 141*/

//But arrow functions have a shorter way to return a value.
//When you write an arrow function without {}, JavaScript automatically returns the expression.
/***let adding = (a,b) => a+b//This is called implicit return.
let output = adding(87,87)
console.log(output)//174*/

//Arrow function in arraw
const numbers = [10, 20, 30, 40];
//Using forEach()
/**numbers.forEach((numbers=>{
    console.log(numbers)
}))*/

//using map  -- Here, map() collects the returned values into a new array.
/**let values = numbers.map(output=>output*2)
console.log(values)//[ 20, 40, 60, 80 ]*/

//using filter -- Suppose you want only numbers greater than or equal to 20.
/**let value = numbers.filter(less=>less>=20)
console.log(value)//[ 20, 30, 40 ]*/

//using find -- find's the first true value 
let value = numbers.find(first=>first%2===0)
console.log(value)//10
