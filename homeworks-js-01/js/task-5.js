'use strict'

let country;
let price;
let message = "Отменено пользователем";
let isValid = true;

let userInput = prompt("В какую страну Вы бы хотели осуществить доставку?");
if (userInput !== null) {
  switch (userInput.toLowerCase()) {
    case "китай":
      country = "Китай";
      price = 100;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case "чили":
      country = "Чили";
      price = 250;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case "австралия":
      country = "Австралию";
      price = 170;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case "индия":
      country = "Индию";
      price = 80;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case "ямайка":
      country = "Ямайку";
      price = 120;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    default:
      isValid = false;
      message = "В вашей стране доставка не доступна";
  }
} else {
  isValid = false;
}

if (isValid) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

alert(message);
