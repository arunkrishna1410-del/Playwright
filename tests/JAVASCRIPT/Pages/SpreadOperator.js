//Spread Operator (...)
//Without Spread
/**const fruits = ["Apple", "Mango", "Orange"];
let allfruit = fruits;
// i am adding arun in allfruit but it will add to the fruits also 
console.log(allfruit.push("arun"))//[ 'Apple', 'Mango', 'Orange', 'arun' ]
console.log(fruits)//[ 'Apple', 'Mango', 'Orange', 'arun' ]
//Both fruits and allfruit now point to the exact same array in memory.*/

//With Spread
/**const fruits = ["Apple", "Mango", "Orange"];
let allfruit = [...fruits] //means take all the values from fruits and put them into a new array.
allfruit.push("Mango")// i am adding Mango again to allfruit
console.log(allfruit)//[ 'Apple', 'Mango', 'Orange', 'Mango' ]
console.log(fruits)//[ 'Apple', 'Mango', 'Orange' ]
*/

//Combine two arrays
/**const fruits = ["Apple", "Mango", "Orange"];
const vegis = ["carrot","beatroot","beans"]
//Both are placed into one new array.
let all = [...fruits,...vegis]
console.log(all)//[ 'Apple', 'Mango', 'Orange', 'carrot', 'beatroot', 'beans' 
*/

//Spread with objects
/**let student = {
    name:"Arun",
    studing:"10th"
}
//Now create a new object using spread:
let single={...student,age:54}//It copies the existing properties of student into the new object single, //And also we can add a new value in a newly created object by
console.log(single)//{ name: 'Arun', studing: '10th', age: 54 }
console.log(student)//{ name: 'Arun', studing: '10th' }
*/

//Update an existing property using spread
let student = {
    name:"Arun",
    studing:"10th"
}//The original student object is still unchanged.

let single={...student,studing:"12th"}//we are updating only in the new object which we created
console.log(single)