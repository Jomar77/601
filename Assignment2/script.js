"use strict"

// create a function that when is clicked, it disables the div

function toggleMenu() {
    let menuBox1 = document.getElementById('top-frame-15');
    menuBox1.classList.toggle('hide');
    let menuBox2 = document.getElementById('bottom-frame-15');
    menuBox2.classList.toggle('hide');
}

function Gotop() {
    // with transition
    window.scrollTo({top:0,behavior:'smooth'});
    
}