'use strict'

let total = 0;
const numbers = [];

while(true) {
	let input = prompt("Введите число");
	
    if (numbers.length) {
        for (const number of numbers) {
          total += number;
        }
    }
	if ( input === null) {
		alert(`Общая сумма чисел равна ${total}`);
		break;
	}
	input = Number(input);

	const notANumber = Number.isNaN(input);

	if(notANumber) {
		continue;
	}
	total += input;
};

console.log(`Общая сумма чисел равна ${total}`);