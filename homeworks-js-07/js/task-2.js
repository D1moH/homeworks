'use strict'

import users from "./users.js";

// const getUsersWithEyeColor = (users, color) => {
//     return users.filter(user => user.eyeColor === color)
// };

const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color)

console.table(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]