'use strict'

const logItems = function (names, i) {
    for (const name of names) {
        console.table('значение элемента:', name);
    }
    for (let i = 1; i < names.length; i += 1) {
        console.table('номер элемента:', i);
    }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);