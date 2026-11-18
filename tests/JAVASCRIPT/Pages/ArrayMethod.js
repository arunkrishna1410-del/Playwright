let fruit = ["apple", "mango", "flower", "orange", "banana"]
let number = [25, 78, 98, 58, 1002]

// for (i=0; i<fruit.length; i++){
//     console.log(fruit[i])
// }

// for (const veg of fruit){
//     console.log(veg)
// }

//for each()
    // fruit.forEach((eat)=>{ // this one is also like for..of function. forEach goes to one by one element and store in the function eat
    //                         // here we are using arrow function to use access the function is short form.
    //     console.log(eat) 
    // })

//map() //To transform/convert data //all the data even the condition is for selective data
// number.map((num)=>{
//     console.log(num+25)
// })
// With arrow function shorthand (implicit return - no braces needed):
// let updatedNumbers = number.map(num => num + 25);
// console.log(updatedNumbers)

//filter() //select elements based on a condition // only prints the output based on the output, when the expected is true prints only true data
// let output = number.filter(num=>num%2===0) // it will print all the matching element
// console.log(output)

//find()// returns only the first matching element
//[25, 78, 98, 58, 1002]
let output = number.find(num=> num >=50)
console.log(output) //78 it will not go and check the 98 or 1002 once it find the first value it will print it.


// toString() imbuild method
// console.log(fruit.toString())//apple,mango,flower,orange,banana out put will like this

// join() imbuild method
// console.log(fruit.join())//apple,mango,flower,orange,banana out put will like this "but" 
// console.log(fruit.join("//"))//apple//mango//flower//orange//banana we can print our value like this

//pop() inbuild method 
// console.log(fruit.pop())//this will remove the last element and print the last element

//push() inbuild method
// console.log(fruit.push("arun"))// it will add the given value at the last and will retun the length of the array ex..length 6 after adding the given value
// console.log(fruit)

// Shift() inbuild method
// console.log(fruit.shift());// this will remove the 0th element in the array and it will print the removed 0th element

//unshift() inbuild method
// console.log(fruit.unshift("Lemon"))// this will add the given element in the 0th place and retun the length of the element

//Deleting elements from array
// delete fruit[2]
// console.log(fruit)

//concat() - join or merge two array
// let num = [1,2,3,10]
// let alpha =["a","b","c","d"]
// let alpha2 = ["v","g"]
// console.log(num.concat(alpha))//concat() combines two or more arrays and returns a new array.[1,2,3,10,'a','b','c','d']
// console.log(num.concat(alpha,alpha2))//like this we can connect multiple array

//slice() inbuild method
//  let fruit = ["apple", "mango", "flower", "orange", "banana"]
//  console.log(fruit.slice(3))// an array method used to extract a portion of an array. It does not modify the original array.[ 'flower', 'orange', 'banana' ]

//sort()
// console.log(fruit.sort())//sort() method is used to sort the elements of an array.//important: sort() changes the original array.[ 'apple', 'banana', 'flower', 'mango', 'orange' ]
// let number =[44,87,99,22,55]//[ 22, 44, 55, 87, 99 ] same for number's
// console.log(number.sort())

//reversing()
// console.log(fruit.reverse())//The reverse() method is used to reverse the order of elements in an array:reverse() changes the original array.