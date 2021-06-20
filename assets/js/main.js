'use strict';

//TODO: Declare all required variables
const toogleOpen = document.querySelector('.toggle-open');
const toogleClose = document.querySelector('.toggle-close');
// const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('.menu');
const body = document.body;
const heroSection = document.querySelector('.hero');
const jumpTopBtn = document.querySelector('.jump-top');

//TODO: Dropdown menu (Header Section)

//* Deactivate toggle close button
toogleClose.classList.add('hidden');
//* Deactivate dropdown menu
menu.classList.add('menu-hidden');

//* Store Dropdown Actions in functions to avoid repetition
const openDropdown = function () {
    menu.classList.remove('menu-hidden');
    toogleOpen.classList.add('hidden');
    toogleClose.classList.remove('hidden');
    body.style.overflow = 'hidden';
}

const closeDropdown = function () {
    toogleClose.classList.add('hidden');
    toogleOpen.classList.remove('hidden');
    menu.classList.add('menu-hidden');
    body.style.overflow = 'auto';
}

//* Show Dropdown Menu (Add event listener to the toggle open button)
toogleOpen.addEventListener('click', openDropdown);

//* Hide Dropdown Menu (Add event listener to the toggle close button)
toogleClose.addEventListener('click', closeDropdown);

//* Hide Dropdown Menu when the ESCAPE key is pressed
document.addEventListener('keydown', e => {
    console.log(e.key);
    if (e.key == 'Escape') {
        closeDropdown();
    }
})


//TODO: Jump-to-top Smooth Scroll Functionality

//* Add event listener to jump-top button and perform a smooth scroll to the hero section

jumpTopBtn.addEventListener('click', e => {
    heroSection.scrollIntoView({behavior:"smooth"});
})


