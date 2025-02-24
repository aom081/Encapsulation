export class BankAccount {
    private balance: number;
    protected ownerName: string;
    readonly accountNumber: string;

    constructor(accountNumber: string, ownerName: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
        return
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

export class SavingAccount extends BankAccount {
    private interestRate: number;

    constructor(accountNumber: string, ownerName: string, initialBalance: number, interestRate: number) {
        super(accountNumber, ownerName, initialBalance);
        this.interestRate = interestRate;
    }

    addInterest(): void {
        this.deposit(this.getBalance() * this.interestRate / 100);
    }
}