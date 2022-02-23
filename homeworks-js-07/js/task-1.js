'use strict'

const listRef = document.querySelector('#categories');
const itemsRef = listRef.querySelectorAll('.item');

console.log(`В списке ${itemsRef.length} категории.`);

itemsRef.forEach((item) => {
    const title = item.querySelector('h2');
    const elements = item.querySelectorAll('li');

    console.log(
        `Категория: ${title.textContent} 
Количество элементов: ${elements.length}`);
});

