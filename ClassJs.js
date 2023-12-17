class Car {
    constructor(name, year){
        this.name=name;
        this.year=year;
    }
}


const car1 = new Car("Audi", 2015);
const car2 = new Car("BMW", 2018);

console.log(car1.name + " " + car1.year);
console.log(car2.name + " " + car2.year);