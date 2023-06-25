'use strict'
const emailInput = document.querySelector('#email');

function validateEmail(){
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!reg.test(email.value)){
        emailInput.style.border = "2px, solid, red";
        emailInput.style.color = "red";
        email.value = "wrong email address";
    }  
}

emailInput.addEventListener("change", validateEmail)