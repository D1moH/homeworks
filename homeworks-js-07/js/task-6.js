'use strict';

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', () => {
  if (inputRef.value.length < inputRef.getAttribute("data-length")) {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  } else {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
});