'use strict';
const emailInput  = document.querySelector('.email-input input');
const submitBtn = document.querySelector('.subscribe-btn button');
const errorFeedback = document.querySelector('.invalid-feedback');
const REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

submitBtn.addEventListener('click',()=>{
    const conditions = (!emailInput.value || !emailInput.value.match(REGEX));
    errorFeedback.classList.toggle('d-block', conditions);
     emailInput.classList.toggle('border-danger',conditions);
    
     })
