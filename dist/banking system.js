"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingAccount = exports.BankAccount = void 0;
class BankAccount {
    constructor(accountNumber, ownerName, initialBalance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
    }
    getBalance() {
        return this.balance;
    }
}
exports.BankAccount = BankAccount;
class SavingAccount extends BankAccount {
    constructor(accountNumber, ownerName, initialBalance, interestRate) {
        super(accountNumber, ownerName, initialBalance);
        this.interestRate = interestRate;
    }
    addInterest() {
        this.deposit(this.getBalance() * this.interestRate / 100);
    }
}
exports.SavingAccount = SavingAccount;
