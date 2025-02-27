const menu  =document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.click=()=>{
    menu.classList.toggle('bx-x');
    nav.classList.toogle('active');
}