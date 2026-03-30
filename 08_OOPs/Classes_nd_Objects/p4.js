class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`Driving ${this.brand} ${this.model}`);
  }

  getAge(currentYear) {
    return currentYear - this.year;
  }
}

const c1 = new Car("Tesla", "Model Y", 2022);
c1.drive();
console.log("Car Age:", c1.getAge(2025));
