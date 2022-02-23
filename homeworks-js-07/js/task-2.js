'use strict'

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector("#ingredients");

const addedItems = ingredients.map((item) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = item;
  return itemRef;
});

ingredientsListRef.append(...addedItems);