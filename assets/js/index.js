'use strict'

const burgerBtn = document.querySelector('.burger');
const menu = document.querySelector('.navigation');
const menuItem = document.querySelector('.menu');

function toggleClass () {
    burgerBtn.classList.toggle('open');
    menu.classList.toggle('open');
    menuItem.classList.toggle('open');
}

burgerBtn.addEventListener('click', toggleClass);
menuItem.addEventListener('click', toggleClass);