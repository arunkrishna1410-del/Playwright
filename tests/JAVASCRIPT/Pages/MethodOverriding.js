//Method overriding means a child class provides its own implementation of a method that already exists in its parent class.
class name{
    myname(){
        
    }
}
class personone extends name{
    myname(){
        console.log("sanjay")
    }
}
class personetwo extends name{
    myname(){
        console.log("arun")
    }
}

personetwo = new personetwo();
personetwo.myname()