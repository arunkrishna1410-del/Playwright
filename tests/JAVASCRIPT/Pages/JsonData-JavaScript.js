//JSON.parse
//JSON String
const jsonString = '{"name": "Alice", "age": 30, "isAdmin": true}';
const userObject = JSON.parse(jsonString); //JSON.parse() is a built-in method that converts a JSON string into a JavaScript object.

console.log(typeof userObject) //output => object
console.log(userObject.name); 
console.log(userObject.age);

//console.log(jsonData.name); output => undefined


//JSON.stringify
//Object → String
let user = {
    name: "arun",
    age: 87,
    date: 5744
};
let out = JSON.stringify(user)
console.log(out) //output => {"name":"arun","age":87,"date":5744}