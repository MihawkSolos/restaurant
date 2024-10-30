import './styles.css';
import { loadHomePage } from './loadHomePage';
import { loadMenuPage } from './loadMenuPage';
import { loadAboutPage } from './loadAboutPage';

//loadHomePage();


const homeBtn = document.querySelector('.btn1');
const menuBtn = document.querySelector('.btn2');
const aboutBtn = document.querySelector('.btn3');


homeBtn.addEventListener('click', () => {
    loadHomePage();
})

menuBtn.addEventListener('click', () => {
    loadMenuPage();
})

aboutBtn.addEventListener('click', () => {
    loadAboutPage();
})



