//Without Rest Operator
/**function process(a,b,c,d,e){
    return a+b+c+d+e
   
}
console.log(process(1,2,3,4,5)) //15*/

//With Rest Operator
//Gathers Items //Use it when you want to take multiple standalone variables and bundle them up together.
/**function process (...numbers){
    let total = 0;
    for (let takevalue of numbers){
        total=total+takevalue;
    }
    return total
}
console.log(process(87,98,58,74,58,996,100000)) //101371*/

//Rest with array destructuring
/**const numbers = [1,2,3,4,5,6,7,8]
//JavaScript extracts the matching properties from the student object and creates variables with those names.
let [one,two,three,...remaining] = numbers

console.log(one)
console.log(two)
console.log(remaining)*/


//Rest with object destructuring
let detials={
    name : "arun",
    age: 87,
    location : "Pondy",
    status: "waiting"
}
//JavaScript extracts the matching properties from the student object and creates variables with those names.
let {name,age,...remaining} = detials;
console.log(name)
console.log(age)
console.log(remaining)
