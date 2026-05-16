class Employee {
    #salary;

    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;
    }

    giveRaise(amount) {
        if (amount > 0) {
            this.#salary += amount;
            console.log(`${this.name} got a raise of $${amount}. New salary: $${this.#salary}`);
        }
    }

    getSalary() {
        return this.#salary;
    }
}

const employee = new Employee('Rahul', 50000);
console.log(`${employee.name} earns $${employee.getSalary()}`);
employee.giveRaise(5000);
