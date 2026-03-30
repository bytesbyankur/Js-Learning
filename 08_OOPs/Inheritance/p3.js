// Parent class
class Shape {
    getArea() {
        return 0; // default implementation
    }
}

// Child class Circle
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

// Child class Rectangle
class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }
}

// Create an array of shapes
const shapes = [
    new Circle(5),
    new Rectangle(4, 6),
    new Circle(2),
    new Rectangle(3, 7)
];

// Loop through and call getArea()
shapes.forEach((shape, index) => {
    console.log(`Shape ${index + 1} Area: ${shape.getArea()}`);
});
