'use strict'

const arrangeDelivery = prompt("В какую страну Вы бы хотели осуществить доставку?")
const anyDelivery = arrangeDelivery.toLowerCase();
const country = ["китай","чили","австралия","индия","ямайка"];
const price = [100,250,170,80,120];

switch (anyDelivery) {
    case "китай":
        console.log(`Доставка в ${anyDelivery} будет стоить ${price} кредитов`);
        break;
    case "чили":
        console.log(`Доставка в ${anyDelivery} будет стоить ${price} кредитов`);
        break;
    case "австралия":
        console.log(`Доставка в ${anyDelivery} будет стоить ${price} кредитов`);
        break;
    case "индия":
        console.log(`Доставка в ${anyDelivery} будет стоить ${price} кредитов`);
        break;
    case "ямайка":
        console.log(`Доставка в ${anyDelivery} будет стоить ${price} кредитов`);
        break;
    default:
        alert('В вашей стране доставка не доступна')
};