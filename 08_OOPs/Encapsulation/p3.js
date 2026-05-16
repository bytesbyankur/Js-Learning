class Product {
    #price;

    constructor(name, price) {
        this.name = name;
        this.#price = price;
    }

    setPrice(newPrice) {
        if (newPrice >= 0) {
            this.#price = newPrice;
            console.log(`Price of ${this.name} set to $${this.#price}`);
        }
    }

    getPrice() {
        return this.#price;
    }
}

const product = new Product('Headphones', 120);
console.log(`${product.name} costs $${product.getPrice()}`);
product.setPrice(99);
