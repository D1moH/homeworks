import makeMarkup from '../templates/menu-items.hbs';
import menu from '../menu.json';

const refs = {
    menu: document.querySelector('.js-menu'),
}
const markup = makeMarkup(menu);
refs.menu.insertAdjacentHTML('beforeend', markup);

// refs.button.addEventListener('click', buy);
// function buy(e) {
//     e.preventDefault()
//     console.log("купить!");
// }

