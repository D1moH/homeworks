'use strict'

// Задание 2

const inputWords = prompt("Какую надпись вы бы хотели выгравировать ?");
let price = 10;

const calculateEngravingPrice = function(message, pricePerWord) {
    const words = inputWords.split(' ').length;
    const total = words*price;
    console.log(total);
};

calculateEngravingPrice();

// // Задание 2 ( другое решение )

// const calculateEngravingPrice = function ( message, pricePerWord ) {
//     const word = message.split(' ').length;
//     const total = word*pricePerWord;
//     console.log(total);
// };

// calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10);
// calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 30);