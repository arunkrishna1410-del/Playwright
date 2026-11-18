/**class arun{
    a = 100;
    display(){
        console.log(this.a)
    }
}
class sanjay  extends arun{
    b=200;
    view(){
        console.log(this.b)
    }
}

let final =  new sanjay();
final.display();
*/

class animal{ //parent class
    dog(){
        console.log("dog Barks")
    }
    cat(){
        console.log("cat")
    }
    elepant(){
        console.log("elepant in zoo")
    }
}

class bird extends animal{ //childclass
    hen(){
        console.log("hen in home")
    }
}

let printing = new bird();
printing.cat();
printing.elepant();
printing.hen();
printing.dog()