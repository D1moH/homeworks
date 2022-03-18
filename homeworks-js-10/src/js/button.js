const buttonRef = document.querySelectorAll('.card__button');
const valueRef = document.querySelector('#value');
const addPrice = document.getElementById('add-price')
let counterValue = 0;

buttonRef.forEach(btn => {
    btn.addEventListener('click', add )
})

function add() {
    counterValue += 1;
    addPrice.innerHTML = `Добавлено ${counterValue} товара`;
    valueRef.textContent = counterValue;
}

