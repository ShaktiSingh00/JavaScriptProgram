function Person(firstname, lastname, age, eye){
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.eye=eye;
}

Person.prototype.nationality = "Indian"

const shakti = new Person("Shakti", "Singh", 23, "white");
// shakti.nationality = "Indian"

console.log(shakti.nationality)