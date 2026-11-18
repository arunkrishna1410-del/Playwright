// let num = [1, 0, 0, 2, 3, 0, 3]; //output[1,2,3,3,0,0,0]

// // let result = [
// //     ...num.filter(n => n != 0),
// //     ...num.filter(n => n == 0)
// // ];

// //Duplicate finding  output --e,a
// let name = "keerthana";

// for (let i = 0; i < name.length; i++) {
//     for (let j = i +1; j < name.length; j++) {
//         if (name.charAt(i) === name.charAt(j)) {
//             console.log(name.charAt(i));
//         }
//     }
// }


// -----------------------------------------------------------------------------------------


/** //Reverse a String

let que = "arun"

    let output = [...que].reverse().join("") 
console.log(output)

//1. [...que] — The spread operator breaks the string into individual characters and puts them into an array. ["a", "r", "u", "n"]
//2. .reverse() - method reverses the order of array elements.[...que].reverse(). ["n", "u", "r", "a"]
//3. .join() - The join() method combines the array elements into a single string.["n", "u", "r", "a"].join(). n,u,r,a

*/
//----------------------------------------------------------------------



// // Type Coercion 
// // let b = "88"1
// // let a = 10;
// // console.log(b+a);
// //output - 8810

// //Trythy & Falsy - Truthy → Values treated as true in a condition
//                  //Falsy → Values treated as false.   

// // function  input (value){
   
// //     if(value){
// //         console.log("value is Truthy")
// //     }else{
// //         console.log("value is Falsy")
// //     }
// // }
// // input()


// //Template literal? =>Backticks ` ` + ${} = Template Literal.
// // let name = "arun";
// // let age = 25;
// // let address = "west street ariyur"
// // // console.log(`My name is ${name}and my age is${age} this is my address${address}`)
// // console.log(`My name is ${name} and my age is ${age} and my address is ${address}`)

// //difference between mutable and immutable values?
// //mutable - we can change a existing array or object
// // let value = "arun";
// // value="sanjay";
// // console.log(value) 

// //immutable values
// // let value = "arun";
// // value[0] = "g";
// // console.log(value)
// // this is not posible the 0th element of arun chanot be (a) be changed to (g)

// //Add/Remove 
// //There are more number of way we can do.
// //push() — Add to the end, unshift() — Add to the beginning, pop() — Remove from the end, shift() — Remove from the beginning,
// //(but) we have splice
// // let fruit = ["a","b","c","d","e","f"]
// // fruit.splice(4,0,"arun")//allows you to remove or add items at a particular position in an array.
// // console.log(fruit)
// //Removing an item, Adding an item, Replace an item

// //Difference between push() and pop()?
// //push - Add an element at the end of array
// // let value = ["arun","sanjay","suba","priya","kalidas"]
// // value.push("devil")
// // console.log(value) - [ 'arun', 'sanjay', 'suba', 'priya', 'kalidas', 'devil' ]

// //pop - Remove an element from end of array
// // console.log(value.pop()) - kalidas

// //slice - is an array method used to copy/extract a portion of an array without changing the original array.
// // console.log(value.slice(3,4))

// //map - Take every element from an array → perform some operation → store the results in a new array.
// // let number = [1,2,3,4,5,6]
// // let output = number.map(number=>number*2)
// // console.log(output)

// // let user = [{name:"arun",age:87},{name:"suba",age:87},{name:"sanjay",age:87}]
// // let out = user.map(user=>user.name)
// // console.log(out)

// //filter() - satisfy a specified condition.
// // let num = [1,5,7,0,58,0,47,0,5,0] //[1, 5, 7, 58, 47,5, 0, 0,  0,  0]

// // let output = [...num.filter(num=>num!=0),...num.filter(num=>num===0,)]
// // console.log(output)


// //find - is a JavaScript array method used to find the first element that satisfies a condition.
// // let numbers = [10, 20, 30, 40, 50];
// // let result = numbers.find(n => n > 25);
// // console.log(result);
// //output - 10>25(fail),20>25(fail),30>25(pass)--program stop's here
// //Even though  40, and 50 are greater than 25, find() returns only the first matching element, which is 30.


