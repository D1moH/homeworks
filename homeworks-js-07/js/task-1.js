'use strict'

import users from "./users.js";

// const getUserNames = users => {
//   return users.map(user => user.name)
// };

const getUserNames = users => users.map(user => user.name);

console.table(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]