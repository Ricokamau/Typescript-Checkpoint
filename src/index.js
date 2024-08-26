"use strict";
// index.ts
// 2. Implement the Car class that implements the Vehicle interface
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
// 3. Create an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2022);
// 4. Call the start method on the instance of the Car class
myCar.start(); // This will log "Car engine started" to the console
