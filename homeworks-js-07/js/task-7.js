'use strict'

import users from "./users.js";

const calculateTotalBalance = users => {
    return users.reduce((sum, user) => sum + user.balance, null)
};

console.log(calculateTotalBalance(users)); // 20916