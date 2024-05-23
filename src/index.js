import './style.css';
import loadContent from "./load";
import menuContent from "./menu";
import aboutContent from "./about";

loadContent();

const navigationBtn = document.querySelectorAll('button');
let content = document.getElementById('content');
//for each button add a click event listener that clears the contents of the page
navigationBtn.forEach(btn => btn.addEventListener('click', () => content.innerHTML = ''));

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => loadContent());

const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', () => menuContent());

const aboutBtn = document.getElementById('about');
aboutBtn.addEventListener('click', () => aboutContent());