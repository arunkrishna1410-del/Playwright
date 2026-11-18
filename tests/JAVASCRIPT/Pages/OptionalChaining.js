//without optional chaining
let uers ={
    userone:"Arun",
    usertwo:"sanjay",
    userthwree:"jayapriya"
}
console.log(uers.userone)//Arun
console.log(uers.userfour)//undefined
console.log(uers.userfour.city)//Cannot read properties of undefined (reading 'city')
console.log(uers.userfour?.city)//undefined