//Without destructuring:
/**let student = {
    name: "arun",
    class: "9th",
    mark: 87
}
// we can print the value in 2 type without destructuring 
let studentname = student.name;
console.log(studentname) //(or)
console.log(student.name)*/

//With destructuring:
/**let student = {
    name: "arun",
    classs: "9th",
    mark: 87
};
//JavaScript extracts the matching properties from the student object and creates variables with those names.
let{name, classs, mark} = student;

console.log(name)*/


//Rename variables while destructuring
/**let student = {
    name: "arun",
    classs: "9th",
    mark: 87
};
//name is the original object property and studentname is the new variable name
let{name: studentname,classs: studentclass} = student
console.log(studentname)
console.log(studentclass) */

//Array destructuring - We can also destructure arrays.
//Without Destructure
/**let fruit = ["apple", "banana", "watermellon", "pineapple"]

let fruit1 = fruit[0]
console.log(fruit1)//apple
//(or)
console.log(fruit[1])//banana*/

//With Destructure
/**let fruit = ["apple", "banana", "watermellon", "pineapple"]

// let[first,second,third] = fruit
// console.log(second)//banana
// console.log(third)//watermellon

//Skip array values

let[first, ,third] = fruit
console.log(first)//banana
console.log(third)//watermellon*/

//Nested object destructuring

let student = {
    detials1:{
        name:"arun",
        age: 25,
        location: "Pondy"
    },
    detials2:{
        name:"Sanjay",
        age: 22,
        location: "Pondy"
    }
}
//Here, we are extracting name and age from the nested detials1 and detials2 object.
let{detials1:{name},detials2:{age}} = student

console.log(name)//arun
console.log(age)//22