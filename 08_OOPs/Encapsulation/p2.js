class Person {
    #age;

    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }

    getAge() {
        return this.#age;
    }

    setAge(newAge) {
        if (newAge >= 0) {
            this.#age = newAge;
            console.log(`${this.name}'s age updated to ${this.#age}`);
        }
    }
}

const person = new Person('Priya', 22);
console.log(`${person.name} is ${person.getAge()} years old.`);
person.setAge(23);
