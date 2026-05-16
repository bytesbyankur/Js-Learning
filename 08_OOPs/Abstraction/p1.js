class Vehicle {
    start() {
        throw new Error('start() must be implemented by a subclass');
    }
}

class Car extends Vehicle {
    start() {
        console.log('Car engine started.');
    }
}

class Bike extends Vehicle {
    start() {
        console.log('Bike engine started.');
    }
}

const vehicles = [new Car(), new Bike()];
vehicles.forEach((vehicle) => vehicle.start());
