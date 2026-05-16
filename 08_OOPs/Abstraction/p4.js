class Animal {
    getSound() {
        throw new Error('getSound() must be implemented by a subclass');
    }

    speak() {
        console.log(this.getSound());
    }
}

class Lion extends Animal {
    getSound() {
        return 'Roar!';
    }
}

class Cow extends Animal {
    getSound() {
        return 'Moo!';
    }
}

const farm = [new Lion(), new Cow()];
farm.forEach((animal) => animal.speak());
