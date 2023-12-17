/* class One{
    constructor(name){
        this.name=name;
    }

    present(){
        return "I have " + this.name;
    }
}
class Model extends Car {
    constructor(name, model){
        super(name);
        this.model=model;
    }
    show(){
        return 
    }
}*/

class Animal {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log("Hello, I'm " + this.name);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    bark() {
        console.log("Woof! Woof!");
    }
}

// Usage remains the same as in the previous example
var myAnimal = new Animal("Generic Animal");
var myDog = new Dog("Buddy", "Golden Retriever");

myAnimal.sayHello();
myDog.sayHello();
myDog.bark();
