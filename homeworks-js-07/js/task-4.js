'use strict'
 
let counterValue = 0;
const addRef = document.querySelector('#counter button[data-action="increment"]');
const removeRef = document.querySelector('#counter button[data-action="decrement"]');
const valueRef = document.querySelector('#value');

const increment = () => {
    counterValue += 1;
    return (valueRef.textContent = counterValue);
};

const decrement = () => {
    counterValue -= 1;
    return (valueRef.textContent = counterValue);
};

addRef.addEventListener('click', increment);
removeRef.addEventListener('click', decrement);