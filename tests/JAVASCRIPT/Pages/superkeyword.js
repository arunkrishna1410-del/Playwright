//super is used in a child class to access members of its parent class.
//super means "go to the parent class."
/**class a {
    constructor (name){
        this.name= name;
    }
}

class b extends a {
    constructor(name,age){
        super(name); //calls parent constructor
        this.age= age;
    }

    display(){
        console.log(this.name);
        console.log(this.age)
    }
}

let person = new b("arun","25")

person.display();
//super() → calls the parent constructor.
*/

class Animal {

    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating");
    }
}

class Dog extends Animal {

    constructor(name, breed) {
        super(name);

        this.breed = breed;
    }

    bark() {
        console.log("Dog is barking");
    }
}

const dog = new Dog("Tommy", "Labrador");

dog.eat();
dog.bark();

console.log(dog.breed);