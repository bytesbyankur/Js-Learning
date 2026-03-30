class BankAccount{
    constructor(owner,balance){
        this.owner = owner;
        this.balance = balance;
    }
    deopsit(amount){
        this.balance+=amount;
        console.log(`Amount deposited = Rs ${amount}`);
    }
    
    withdraw(amount){
        this.balance-=amount;
        console.log(`Amount Withdrawn = Rs ${amount}`);
    }

    getBalance(){
        console.log(`Account Owner = ${this.owner} \nBalance = Rs ${this.balance}`);
    }
}

const obj = new BankAccount("Ankur",500);
obj.getBalance();
console.log("\n");
obj.deopsit(500);
console.log("\n");
obj.getBalance();
console.log("\n");
obj.withdraw(200);
console.log("\n");
obj.getBalance();