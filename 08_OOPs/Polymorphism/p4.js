class Vehicle {
    drive() {
        console.log('Driving a vehicle.');
    }
}

class Car extends Vehicle {
    drive() {
        console.log('Driving a car.');
    }
}

class Truck extends Vehicle {
    drive() {
        console.log('Driving a truck.');
    }
}

const fleet = [new Car(), new Truck()];
fleet.forEach((vehicle) => vehicle.drive());
