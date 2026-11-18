// function program(){
//     this.name = "john";
//     this.age =87;
// }
// //prototype allows all objects created from program to share the same properties or methods.
// program.prototype.gender="Male" //adds gender to the prototype, which is shared.

// let out = new program();
// out.gender = "Male";
// console.log(out.name,out.age,out.gender)

// out2 = new program();
// console.log(out2.name,out2.age,out2.gender)

//----------------------------------------------------------------

class pro{

     val(name,age){
        this.name = name;
        this.age =age;
    }
}
pro.prototype.gender="male"
prod = new pro();
prod.val("arun",887)

console.log(prod.name,prod.age,prod.gender)

prod2 = new pro();
prod2.val("arun",887)
console.log(prod2.name,prod2.age,prod2.gender)

//-----------------------------------------------------------------------------

class value{
    constructor(name,age){
        this.age = age;
        this.name= name;
    }
    display(){
        console.log(this.age,this.age,this.gender);
    }
}

value.prototype.greet=function()
{
this.gender = "male";
}

process = new value("arun",87,);
process.display();