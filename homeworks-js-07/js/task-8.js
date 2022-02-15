'use strict'

import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName))
};

console.table(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]
console.table(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]