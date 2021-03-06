'use strict'

import users from "./users.js";

// const getUsersWithGender = (users, gender) => {
//   return users.filter(user => user.gender === gender)
// };

const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender);

console.table(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]