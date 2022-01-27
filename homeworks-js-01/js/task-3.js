'use strict'

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userInput = prompt("Введите пароль");
// const normalizedInput = userInput.toLowerCase();

if (userInput === null) {
    let message = "Отменено пользователем!";
    alert(message);
} else if (userInput === ADMIN_PASSWORD) {
    let message = "Добро пожаловать";
    alert(message);
} else if (userInput != ADMIN_PASSWORD) {
    let message = 'Доступ запрещен, неверный пароль!';
    alert(message);
};