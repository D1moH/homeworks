'use strict'

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
const account = {
    balance: 0,

    transactions: [],

    createTransaction(amount, type) {
        this.transactions.push({
            id: this.transactions.length + 1,
            amount: amount, type: type,
        })
        return this.transactions;
    },

    deposit(amount) {
        this.createTransaction(amount, Transaction.DEPOSIT);
        this.balance += amount;
    },

    withdraw(amount) {
        this.createTransaction(amount, Transaction.WITHDRAW);
        this.balance -= amount;
        if (amount > this.balance) {
            return console.log("Недостаточно средств");
        }
    },
    getBalance() {
        return this.balance;
    },

    getTransactionDetails(id) {
        for (const item of this.transactions) {
            if (item.id === id)
                return item;
        }
    },

    getTransactionTotal(type) {
        let total = 0;
        for (const item of this.transactions) {
            if (item.type === type) {
                total += item.amount;
            }
        }
        return total;
    }
};
account.deposit(400);
account.deposit(200);
account.deposit(100);
account.withdraw(850);
console.log(account.getBalance());
console.log(account.getTransactionDetails(4));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
