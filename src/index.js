'use strict'
const emailInput = document.querySelector('#email');
let errorElement;

function validateEmail() {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!reg.test(emailInput.value) && (!errorElement)) {
      errorElement = document.createElement('div');
      errorElement.style.color = 'red';
      errorElement.style.border = '2px solid red';
      emailInput.insertAdjacentElement('afterend', errorElement);
      errorElement.textContent = 'you entered wrong email';
  } else {
      errorElement.remove();
      errorElement = null;
  }
}

emailInput.addEventListener('change', validateEmail);


