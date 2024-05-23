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

function initializeButtons() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        //when a button is clicked
        button.addEventListener('click', function() {
            //it will remove the 'active' class from all other buttons,
            buttons.forEach(btn => btn.classList.remove('active'));
            //and add the 'active' class to itself ensuring that only the
            //clicked button stays dark until another button is clicked. 
            this.classList.add('active');
        });
    });

    //Add 'active' class to the initial button
    document.getElementById('home').classList.add('active');
}

initializeButtons();
