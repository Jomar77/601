"use strict"

function toggleMenu() {
    let menuBox = document.getElementsByClassName('options')[0];
    if (menuBox.style.display == "block") { 
        menuBox.style.display = "none";
    }
    else { 
        menuBox.style.display = "block";
    }
}

