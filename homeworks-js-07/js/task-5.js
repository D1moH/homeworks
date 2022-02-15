'use strict'

import users from "./users.js";

// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email)
// };

const getUserWithEmail = (users, email) => users.find(user => user.email === email);

console.table(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.table(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}