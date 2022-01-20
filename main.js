// Задание 1

// const name = "Генератор защитного поля";
// let price = 1000;

// console.log(`Выбран ${name},цена за штуку ${price} кредитов`);

// price = 2000;

// console.log(`Выбран ${name},цена за штуку ${price} кредитов`);

// Задание 2

// const total = 100;
// let ordered = 50;

// if(total<ordered) {
//     console.log("На складе недостаточно товаров!");
// } else {
//     console.log("Заказ оформлен, с вами свяжется менеджер");
// };

// ordered = 20;

// if(total<ordered) {
//     console.log("На складе недостаточно товаров!");
// } else {
//     console.log("Заказ оформлен, с вами свяжется менеджер");
// };

// ordered = 200;

// if(total<ordered) {
//     console.log("На складе недостаточно товаров!");
// } else {
//     console.log("Заказ оформлен, с вами свяжется менеджер");
// };

// Задание 3

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// const userInput = prompt("Введите пароль");
// // const normalizedInput = userInput.toLowerCase();

// if (userInput === null) {
//     let message = "Отменено пользователем!";
//     alert(message);
// } else if (userInput === ADMIN_PASSWORD) {
//     let message = "Добро пожаловать";
//     alert(message);
// } else if (userInput != ADMIN_PASSWORD) {
//     let message = 'Доступ запрещен, неверный пароль!';
//     alert(message);
// };

// Задание 4

// const credits = 23580;
// const pricePerDroid = 3000;
// const howMatchByeDroids = prompt("Сколько дроидов желаете приобрести?");
// let totalPrice;

// if (howMatchByeDroids === null) {
//     console.log('Отменено пользователем!');
// }else if(howMatchByeDroids) {
//     totalPrice = howMatchByeDroids*pricePerDroid;
//     console.log(totalPrice);
// };
// if(totalPrice > credits) {
//     console.log("Недостаточно средст на счету!");
// }else if (totalPrice < credits) {
//     amount = credits-totalPrice;
//     console.log(`Вы купили ${howMatchByeDroids} дроида(ов), на счету осталось ${amount} кредитов.`);
// };

// Задание 5

const arrangeDelivery = prompt("В какую страну Вы бы хотели осуществить доставку?")
const anyDelivery = arrangeDelivery.toLowerCase();
const country = ["китай","чили","австралия","индия","ямайка"];
const price = [100,250,170,80,120];

switch (anyDelivery) {
    case "китай":
        console.log(`Доставка в ${anyDelivery} будет стоить ${price} кредитов`);
        break;
    case "чили":
        console.log("250 кредитов");
        break;
    case "австралия":
        console.log("170 кредитов");
        break;
    case "индия":
        console.log("80 кредитов");
        break;
    case "ямайка":
        console.log("120 кредитов");
        break;
    default:
        alert('В вашей стране доставка не доступна')
};