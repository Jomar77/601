"use strict"

function toggleMenu() {
    let menuBox = document.getElementById('menubox');
    menuBox.classList.toggle('active');
}

const images = [
    "img/image (1).jpg",
    "img/image (2).jpg",
    "img/image (3).jpg",
    "img/image (4).jpg",
    "img/image (5).jpg",
    "img/image (6).jpg",
    "img/image (7).jpg",
    "img/image (8).jpg",
    "img/image (9).jpg",
    "img/image (10).jpg",
    "img/image (11).jpg"
];
let i = 0;

function imageChangeNext() {
    i++;
    if (i >= images.length) {
        i = 0; 
    }
    console.log(i);
}

function imageChangeBack() {
    let image = document.getElementById("image");
    if (i <= 0) {
        i = images.length;
    }
    i--;
    image.src = images[i];
    console.log(i);
}