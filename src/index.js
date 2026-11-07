import "./style.css";
import logoImg from './images/logo.svg';
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js"
import { renderContact } from "./contact.js"

const logo = document.querySelector('.logo');
logo.src = logoImg;

renderHome()
;
const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const contactBtn = document.querySelector('.contact-btn');
const divContent = document.getElementById('content');

homeBtn.addEventListener("click", () => {
    divContent.replaceChildren();
    renderHome();
});

menuBtn.addEventListener("click", () => {
    divContent.replaceChildren();
    renderMenu();
});

contactBtn.addEventListener("click", () => {
    divContent.replaceChildren();
    renderContact();
});