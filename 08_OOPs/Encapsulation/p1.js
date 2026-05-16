class BankAccount {
    #balance;

    constructor(owner, initialAmount = 0) {
        this.owner = owner;
        this.#balance = initialAmount;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`${this.owner} deposited $${amount}. Balance: $${this.#balance}`);
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`${this.owner} withdrew $${amount}. Balance: $${this.#balance}`);
        } else {
            console.log(`Withdrawal failed.`);
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount('Ankur', 100);
account.deposit(50);
account.withdraw(30);
console.log(`Final balance: $${account.getBalance()}`);
