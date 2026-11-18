//Polymorphism = "one method name, many forms/behaviors."
/**class firstname{
    myname(){
        console.log("My name is arun")
    }
}
class secondname extends firstname{
    myname(){
        console.log("My name is sanjay")
    }
}
class thirdclass extends secondname{
    myname(){
        console.log("My name is suba")
    }
}

out = new firstname();
out.myname();

outp = new secondname();
outp.myname();

output = new thirdclass();
output.myname();
//That's polymorphism: one interface/method, multiple behaviors.
*/

/**Method overriding (Runtime polymorphism)
class one{
    click(){
        console.log("i am one")
    }
}
class two extends one{
    click(){
        console.log("i am two")
    }
}
class three extends two{
    click(){
        console.log("i am three")
    }
}

let print1 = new two()
print1.click(); //i am two

let print2 = new three()
print2.click(); //i am three
*/


//Method overloading (Compile-time polymorphism)

class adding{
   add(a,b,c){
    return a+b+c;
   }
   
   add(a,b,c,d){
    return a+b+c+d;
   }
}
let output = new adding();  //Here, one method handles different numbers of arguments.
console.log(output.add(54,87,54))
console.log(output.add(54,87,54,999))