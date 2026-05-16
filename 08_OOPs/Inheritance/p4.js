class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} the ${this.breed} barks.`);
    }

    fetch() {
        console.log(`${this.name} is fetching the ball.`);
    }
}

const dog = new Dog('Buddy', 'Labrador');
dog.speak();
dog.fetch();
