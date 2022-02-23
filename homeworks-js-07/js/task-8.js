'use strict'

const btnCreate = document.querySelector('[data-action="render"]');
const btnClear = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');
const controlsRef = document.querySelector('#controls input');

const destroyBoxes = () => boxesRef.innerHTML = '';
const random = () => Math.floor(Math.random() * 256);

const getAmount = amount => {
    amount = controlsRef.value;
    createBoxes(amount);
};

const createBoxes = (amount) => {
    let basicSize = 30;
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
        let size = basicSize + i * 10;
        const createBox = document.createElement('div')
        createBox.className = 'color';
        createBox.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
        fragment.appendChild(createBox);
    }
    boxesRef.appendChild(fragment);
};

btnCreate.addEventListener('click', getAmount);
btnClear.addEventListener('click', destroyBoxes);