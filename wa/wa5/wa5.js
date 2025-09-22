// sets variables to document selectors - finds elements with the class
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navBurger = document.querySelector('.nav-burger-menu');

// sets a "displayed" variable initially to false (boolean) 
let displayed = false;

// adds event listener to navToggle variable- and looks for when there is a click
navToggle.addEventListener("click", (e) => {
    // when it's clicked and "displayed" is false, then it'll be switched to true and then the hamburger menu will be displayed
    if (displayed == false) {
        navBurger.style.display = "flex";
        // navBurger.ariaLabel = "nav bar";
        displayed = true;

    }
    else {
        navBurger.style.display = "none";
        displayed = false;
    }
})

if (screen.width > "768px") {
    navBurger.style.display = "none"
}