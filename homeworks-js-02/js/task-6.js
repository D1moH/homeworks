'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  if (input) {
    if (!isNaN(input)) {
      numbers.push(Number(input));
    } else {
		alert('Было введено не число, попробуйте еще раз');
        console.log('Было введено не число, попробуйте еще раз');
    }
  }
} while (input !== null);

if (numbers.length) {
  for (const number of numbers) {
    total += number;
  }
  alert(`Общая сумма чисел равна ${total}`);
  console.log(`Общая сумма чисел равна ${total}`);
} else {
  alert('Отмена пользователем');
};