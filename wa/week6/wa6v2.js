const navbar = document.querySelector('.nav-bar');
const navBurger = document.querySelector('#nav-expand-button');
const mainGrid = document.querySelector('.main-grid');

let displayed = true;

navBurger.addEventListener('click', (e) => {
    if (displayed == false) {
        navbar.style.display = 'flex';
        mainGrid.style.gridTemplateAreas = `
        " main-bar       main-bar"
        " nav-bar    contentinfo"`;
        displayed = true;
    }
    else {
        navbar.style.display = 'none';
        mainGrid.style.gridTemplateAreas = `
        " main-bar       main-bar"
        " contentinfo    contentinfo"`;
        displayed = false;
    }
} ) 