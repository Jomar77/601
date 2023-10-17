"use strict"

function toggleMenu() {
    let menuBox = document.getElementsByClassName('options')[0];
    if (menuBox.style.display == "block") { // if is menuBox displayed, hide it
        menuBox.style.display = "none";
    }
    else { // if is menuBox hidden, display it
        menuBox.style.display = "block";
    }
}

