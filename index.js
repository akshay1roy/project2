// javascript code 
const container=document.querySelector('.container');

const form_login=document.querySelector('.form_login');

const sign_up=document.querySelector('.sign_up');

const sign_in=document.querySelector('.Sign_in');

sign_up.addEventListener("click",()=>{
    container.classList.add("active")
})

sign_in.addEventListener("click",()=>{
    container.classList.remove("active")
})