// const arrangeDelivery = prompt("Доставку в какую страну Вы бы хотели оформить ?");
// const anyDelivery = arrangeDelivery.toLowerCase()

// let price = 0;

// switch (anyDelivery) {
//     case "китай":
//         price = "100 кредитов";
//         console.log(`Доставка в ${anyDelivery} будет стоить ${price} кредитов`)
//         break;

//     case "чили":
//         price = "250 кредитов";
//         console.log(`Доставка в ${anyDelivery} будет стоить ${price} кредитов`)
//         break;

//     case "австрия":
//         price = "170 кредитов";
//         console.log(`Доставка в ${anyDelivery} будет стоить ${price} кредитов`)
//         break;

//     case "индия":
//         price = "80 кредитов";
//         console.log(`Доставка в ${anyDelivery} будет стоить ${price} кредитов`)
//         break;

//     case "ямайка":
//         price = "120 кредитов";
//         console.log(`Доставка в ${anyDelivery} будет стоить ${price} кредитов`)
//         break;
    
//     default:
//         alert("В вашей стране доставка не доступна")
// }

let total = 0;

while(true) {
	let input = prompt("Введите число");
	
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