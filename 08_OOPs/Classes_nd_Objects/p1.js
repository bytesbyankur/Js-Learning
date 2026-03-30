class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        console.log(`Hi I am ${this.name} and I am ${this.age} years old!`)
    }
}

const p1 = new person("Ankur",18)
p1.introduce();