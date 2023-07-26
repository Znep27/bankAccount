class BankAccount {
    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = [];
    }
    balance = () => {
        let total = 0;
        for (let i = 0; i < this.transactions.length; i++) {
            total += this.transactions[i].amount;
        }
        return total;
    }
    deposit = (amt) => {
        this.amt = amt;
        let transaction = new Transaction(this.amt)
        if (amt > 0) {
            this.transactions.push(transaction)
        }
    }
    charge = (payee, amt) => {
        this.payee = payee;
        this.amt = amt;
        let transaction = new Transaction(this.amt, this.payee)
        if (this.balance() + transaction.amount >= 0) {
            this.transactions.push(transaction)
        }
    }
}
class Transaction {
    constructor(amount, payee) {
        this.date = new Date();
        this.amount = amount;
        this.payee = payee;
    }
}

const bankaccount1 = new BankAccount(12345, 'John Smith')
bankaccount1.charge('Bob Bobson', 100)
console.log(`${bankaccount1.owner} ${bankaccount1.accountNumber} has a balance of ${bankaccount1.balance()}`)
bankaccount1.charge('Mary Sue', 150)
console.log(`${bankaccount1.owner} ${bankaccount1.accountNumber} has a balance of ${bankaccount1.balance()}`)
bankaccount1.deposit(333)
console.log(`${bankaccount1.owner} ${bankaccount1.accountNumber} has a balance of ${bankaccount1.balance()}`)
bankaccount1.charge('Guy Smiley', -234)
console.log(`${bankaccount1.owner} ${bankaccount1.accountNumber} has a balance of ${bankaccount1.balance()}`)
bankaccount1.charge('Sally May', -400)
console.log(`${bankaccount1.owner} ${bankaccount1.accountNumber} has a balance of ${bankaccount1.balance()}`)
console.log(bankaccount1.transactions)