const navbar = document.querySelector('.nav-bar');
const navBurger = document.querySelector('#nav-expand-button');
const mainGrid = document.querySelector('.main-grid');
const font_dropdown = document.querySelector("#font-selector");
const joinBtn = document.querySelector('#join-button');
const modal = document.querySelector(".modal")
const modal_button = document.querySelector("#modalButton")

localStorage.setItem('font-size', "small");
let displayed = true;


window.onload = function() {
    modal.style.display = "block";
    this.localStorage.setItem("email", "nothing")
}

modal_button.addEventListener("click", (e) => {
    localStorage.setItem("privacyAccepted", true)
    modal.style.display = "none"
})



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

function applyFontSize() {
    let fontSize = localStorage.getItem('font-size');
    let sizeList = document.getElementsByClassName("normal-text")

    //sizeList needs to be converted into an array which is Array.from does
    //forEach is a special forloop that lets you skip the conditionals and make a variable for every element in the list
    Array.from(sizeList).forEach(element => {
        element.className = fontSize + " normal-text";
    });
}

font_dropdown.addEventListener('change', (e) => {
    let dropdownSelected = font_dropdown.value;
    localStorage.setItem('font-size', dropdownSelected);

    applyFontSize();
})

joinBtn.addEventListener("click", (e) => {
    if (localStorage.getItem("email") == "nothing") {
        email = prompt("Enter Email to Sign Up to Our Newsletter:", "example@gmail.com")
        localStorage.setItem('email', email)
    }
    else {
        alert("Already Signed Up")
    }
} )


