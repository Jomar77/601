"use strict"

// create a function that when is clicked, it disables the div

function toggleMenu() {
    console.log("toggleMenu");
    let menuBox1 = document.getElementById('top-frame-15');
    menuBox1.classList.toggle('hide');
    let menuBox2 = document.getElementById('bottom-frame-15');
    menuBox2.classList.toggle('hide');
}

function Gotop() {
    window.scrollTo({top:0,behavior:'smooth'});
}

function toggleburger() {
    let menuBox = document.getElementById('menubox');
    menuBox.classList.toggle('active');
}


document.querySelectorAll('.increase-btn').forEach(button => {
    button.addEventListener('click', function() {
        let input = this.parentElement.querySelector('.quantity-input');
        input.value = parseInt(input.value) + 1;
    });
});

document.querySelectorAll('.decrease-btn').forEach(button => {
    button.addEventListener('click', function() {
        let input = this.parentElement.querySelector('.quantity-input');
        if (parseInt(input.value) > parseInt(input.min)) {
            input.value = parseInt(input.value) - 1;
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animation for sections
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('fade-in');
    });
  
    // Hover animation for buttons
    document.querySelectorAll('.view').forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.classList.add('scale-up');
      });
      button.addEventListener('mouseleave', () => {
        button.classList.remove('scale-up');
      });
    });
  
    // Slide-in animation for navigation menu
    const navMenu = document.querySelector('.nav-menu');
    const burgerMenu = document.querySelector('.burger-menu');
    burgerMenu.addEventListener('click', () => {
      navMenu.classList.toggle('slide-in');
    });
  
    // Bounce animation for icons
    document.querySelectorAll('i[class*="fi"]').forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        icon.classList.add('bounce');
      });
      icon.addEventListener('mouseleave', () => {
        icon.classList.remove('bounce');
      });
    });
  
    // Smooth scroll for "Go to Top" button
    document.querySelector('.fill-with-up-arrow-wrapper').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    // Fade-in animation for text elements
    document.querySelectorAll('.text-wrapper-28, .text-wrapper-31').forEach(text => {
      text.classList.add('fade-in');
    });
  });
  