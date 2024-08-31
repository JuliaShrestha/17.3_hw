/*
Створіть клас BankAccount, який буде представляти банківський рахунок. Додайте властивість балансу та методи для внесення та зняття грошей.

class BankAccount {

// Ваш код тут

}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300
*/

class BankAccount {
    
    constructor(initialBalance) {
      this.balance = initialBalance;
    }
  
    getBalance() {
      return this.balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log('Insufficient funds or invalid amount');
      }
    }
  }
  
  const account1 = new BankAccount(1000);
  
  console.log(account1.getBalance());
  
  account1.deposit(500);
  
  console.log(account1.getBalance());
  
  account1.withdraw(200);
  
  console.log(account1.getBalance());
  