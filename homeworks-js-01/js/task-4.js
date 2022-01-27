'use strict'

const credits = 23580;
const pricePerDroid = 3000;
const howMatchByeDroids = prompt("Сколько дроидов желаете приобрести?");
let totalPrice;

if (howMatchByeDroids === null) {
    console.log('Отменено пользователем!');
}else if(howMatchByeDroids) {
    totalPrice = howMatchByeDroids*pricePerDroid;
    console.log(totalPrice);
};
if(totalPrice > credits) {
    console.log("Недостаточно средст на счету!");
}else if (totalPrice < credits) {
    amount = credits-totalPrice;
    console.log(`Вы купили ${howMatchByeDroids} дроида(ов), на счету осталось ${amount} кредитов.`);
};