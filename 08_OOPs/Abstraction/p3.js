class Account {
    login() {
        throw new Error('login() must be implemented by a subclass');
    }
}

class UserAccount extends Account {
    login() {
        console.log('User successfully logged in.');
    }
}

class AdminAccount extends Account {
    login() {
        console.log('Admin successfully logged in.');
    }
}

const accounts = [new UserAccount(), new AdminAccount()];
accounts.forEach((account) => account.login());
