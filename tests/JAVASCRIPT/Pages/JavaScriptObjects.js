//Accessing Object Properties
let person = {
    firstname : "Arun",
    lastname : "Kalidas",

}

// console.log(person.lastname) 

//Add new property to the existing object 
// person.gender="Male"
// console.log(person.gender)

//Update Existing property
// person.height="777"
// console.log(person.height)

//Remove the property from the object
// delete person.weight
// console.log(person.weight)

//for in loop for read all the property name and value in Object


for(let x in person){
    console.log(x); //her this only print's property name alone not the value's.
    console.log(person[x])//her this will print only the property value
    console.log(x+" "+person[x])
}

// let Personone = {
//     name : "Arun",
//     value :function(){  // if a function created inside the object then it will converted to a method
//         return this.name
//     }
// }
// let ggg = Personone.value()
// console.log(ggg)


/**Nested Object Multiple object can be created inside
EX..
let detials = {
    Male:{
        name:"ARUN",
        born:"Pondy"
    },
    Femail:{
        name:"Priya",
        born:"Tamil Nadu"
    }
}
console.log(detials.Male.name)
console.log(detials.Femail.name)*/

//An object can also contain an array.
/**let person = {
    name : "Arun",
    skills : ["javascript","Playwright","Git"]
}
console.log(person.skills[1])*/