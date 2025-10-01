const navbar = document.querySelector('.nav-bar');
const navBurger = document.querySelector('#nav-expand-button');
const fontSize = localStorage.getItem('fontSize') || 'medium';


let displayed = false;

navBurger.addEventListener('click', (e) => {
    if (displayed == false) {
        navbar.style.display = flex;
        displayed = true;
    }
    else {
        navbar.style.display = none;
        displayed = false;
    }
} ) 

function saveAccessSettings(settings) {
    localStorage.setItem('AccessPref', JSON.stringify(settings));
    applyAccessSettings(settings)
}