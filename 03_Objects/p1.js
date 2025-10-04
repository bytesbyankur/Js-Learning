//Q. Create an object car with properties brand, model, year, and a method drive() that logs "Driving <brand> <model>"

const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2025,
  drive: function() {
    console.log(`Driving ${this.brand} ${this.model}`);
  }
};

// Test it
car.drive(); // Output: Driving Tesla Model 3
