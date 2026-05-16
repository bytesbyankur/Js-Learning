class Employee {
    calculateBonus() {
        throw new Error('calculateBonus() must be implemented by a subclass');
    }
}

class FullTimeEmployee extends Employee {
    calculateBonus() {
        return 'Bonus: 10% of salary';
    }
}

class PartTimeEmployee extends Employee {
    calculateBonus() {
        return 'Bonus: 5% of salary';
    }
}

const workers = [new FullTimeEmployee(), new PartTimeEmployee()];
workers.forEach((worker) => console.log(worker.calculateBonus()));
