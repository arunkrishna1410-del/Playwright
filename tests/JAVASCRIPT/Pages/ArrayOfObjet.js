//Instead of creating three separate variables, you can store all three objects inside one array.
const student = [
    {
        username : "Arun",
        Location : "Pondy"
    },
    {
        username : "Sanjay",
        Location : "Chennai"
    },
    {
        username : "Mani",
        Location : "Saidapet"
    },
    {
        username : "Manikandan",
        Location : "Pondy"
    }]

    // console.log(student[0].Location)
    // console.log(student[1].username)
    // console.log(student[2].Location)

//using forEach() to print all the username:
let output = student.forEach((value)=>{
    console.log(value.username)})


//using filter() suppose if you need to find all values which is matching with the expected result
/**let output = student.filter((value=>value.Location==="Pondy"))
console.log(output)*/

//using find() Suppose you want to find the Location named Pondy.
/**let output = student.find(value=>value.Location==="Pondy")
console.log(output)*/

//using map() we can Extract or transform values 
/**let output = student.map(value=>value.username)
console.log(output)*/