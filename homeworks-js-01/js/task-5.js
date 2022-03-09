'use strict'

let country;
let price;
let message = "Отменено пользователем";
let isValid = true;

let input = prompt("В какую страну Вы бы хотели бы осуществить доставку ?");
if (input === null) {
    console.log(message);
    alert(message);
}
switch (input.toLowerCase()) {
    case "китай":
      country = "Китай";
      price = 100;
      break;
    case "чили":
      country = "Чили";
      price = 250;
      break;
    case "австралия":
      country = "Австралию";
      price = 170;
      break;
    case "индия":
      country = "Индию";
      price = 80;
      break;
    case "ямайка":
      country = "Ямайку";
      price = 120;
      break;
      
    default:
        isValid = false;
        message = "В вашей стране доставка не доступна";
  }
if (isValid) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}
console.log(message);
alert(message);