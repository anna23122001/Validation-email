'use strict'
const emailInput = document.querySelector('#email');

function validateEmail(){
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!reg.test(emailInput.value)){
        emailInput.style.border = "2px, solid, red";
        const newElement = document.createElement('div');
        newElement.id = 'email-error';
        newElement.style.color = "red";
        newElement.textContent = "wrong email address";
        
        emailInput.insertAdjacentElement('afterend', newElement);
    }  
  
}

emailInput.addEventListener("change", validateEmail)

