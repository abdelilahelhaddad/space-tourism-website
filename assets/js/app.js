const hamburger = document.querySelector('.hamburger');
const closeNav = document.querySelector('.close');
let navbar = document.querySelector('.navbar');
const mobileModel = document.querySelector('.mobileModel');
const navbarLI = document.querySelectorAll('.navbar li');

let style = window.getComputedStyle(navbar, '::before');
let color = style.getPropertyValue('display');
console.log(color);

hamburger.addEventListener('click', () => {
  hamburger.style.display = "none";
  closeNav.style.display = "block";
  mobileModel.style.display = "block";
  navbarLI.forEach(li => {
    li.style.display = "block";
  })
  color = "block";
});

closeNav.addEventListener('click', () => {
  hamburger.style.display = "flex";
  closeNav.style.display = "none";
  mobileModel.style.display = "none";
  navbarLI.forEach(li => {
    li.style.display = "none";
  })
});