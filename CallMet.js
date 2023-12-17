 const person1 = {
    firstname : "shakti",
    lastname : "singh",

 fullname : function(){
    console.log(this.firstname +" and "+this.lastname)
}}


const person2 = {
    firstname : "shakt",
    lastname : "kumar"
}

const boundFunction = person1.fullname.bind(person2);
boundFunction(); 
//name.bind(person2)

/*const person = function() {
      console.log(this.firstName + " " + this.lastName);
    }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
person(person1); 

function sayHello(greeting) {
    console.log(`${greeting}, ${this.name}!`);
  }
  
  const person = { name: 'John' };
  
  sayHello.call(person, 'Hello'); // Output: Hello, John! */
  