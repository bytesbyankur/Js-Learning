class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getDetails() {
        console.log(`${this.name} earns $${this.salary} per year.`);
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    getDetails() {
        super.getDetails();
        console.log(`${this.name} manages the ${this.department} department.`);
    }

    holdMeeting() {
        console.log(`${this.name} is holding a meeting with the ${this.department} team.`);
    }
}

const manager = new Manager('Priya', 95000, 'Engineering');
manager.getDetails();
manager.holdMeeting();
