class Rectangle {
    #width;
    #height;

    constructor(width, height) {
        this.#width = width;
        this.#height = height;
    }

    getArea() {
        return this.#width * this.#height;
    }
}

const rect = new Rectangle(5, 4);
console.log(`Rectangle area: ${rect.getArea()}`);
