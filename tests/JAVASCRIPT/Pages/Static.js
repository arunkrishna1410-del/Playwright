class TestProgram{
    static  a =  90;  //this one  is static variable we  can call this without creating object for this calss
    b = 88; //this is non static variable  we wants to create  a  object to  use this variable

    static method1(value){ //this one  is static method we can call this without creating object for this  calss
        console.log(value)
    }

    method2(){ //this is non static method  we wants to create  a  object to  use this method
        console.log("This one is non static method")
    }
}
console.log(TestProgram.a); //using class we can call static variable but
let solution = new TestProgram();
console.log(solution.b);

TestProgram.method1("this  is static method");
solution.method2();
