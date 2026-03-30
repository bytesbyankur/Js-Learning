class Vechicle{
    constructor(brand){
        this.brand = brand;
    }

    start(){
        console.log(`${this.brand} is starting!!!`);
    }
}

class Car extends Vechicle{
    constructor(brand,model){
        super(brand);
        this.model = model;
    }

    drive(){
        super.start();
        console.log(`Driving ${this.brand} ${this.model}`);
    }
}

const c1 = new Car("Aston Martin","Valkyrie");
c1.drive();