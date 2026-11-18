
//JSON.parse
/**let value = '{"name":"ARUN","location":"Pondy"}'//// This is just text
console.log(value)//{name:"ARUN",location:"Pondy"}// Prints the string totaly (but)
//You cannot do value.name because it is just text. You must parse it first:
let output = JSON.parse(value) //To convert it into a JavaScript object, use JSON.parse().
console.log(output.name); //ARUN
console.log(output.location); //Pondy

//JSON.parse() = JSON string → JavaScript object.
//JSON.parse() = {"name":"ARUN","location":"Pondy"} -> {name:"ARUN",location:"Pondy"}*/

//JSON.stringify()
let javaObject = {
    name: "arun",
    locaiton: "pondy",
    brother: "sanjay"
}
let convertJSON = JSON.stringify(javaObject);
//JSON.stringify() converts a JavaScript value into a JSON-formatted string.
console.log(convertJSON)//{"name":"arun","locaiton":"pondy","brother":"sanjay"}