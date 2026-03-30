class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        console.log(`Hi I am ${this.name} and I am ${this.age} years old`);
    }
}

class Student extends Person{
    constructor(name, age, grade){
        super(name,age);
        this.grade = grade;
    }

    introduce(){
        super.introduce();
        console.log(`Hi I am ${this.name}, a ${this.grade} Student`);        
    }

    study(){
        console.log(`${this.name} is studying`);
    }
}

const obj = new Student("Ankur", 18, "Graduation");
obj.introduce();
obj.study();