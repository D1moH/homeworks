'use strict'

const controlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

controlRef.addEventListener('input', () => {
    textRef.style.fontSize = `${controlRef.value}px`;
})