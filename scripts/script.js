// JavaScript Document

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});


console.log("hi");

let menuButton = document.querySelector("main > button");
let filterMenu = document.querySelector("main > section");
let closeFilterMenu = document.querySelector("main > section > div > svg")

menuButton.addEventListener("click",toggleMenu)
closeFilterMenu.addEventListener("click",closeFilterMenuMenu)

function toggleMenu() {
    menuButton.classList.toggle("active");
    filterMenu.classList.toggle("active");
    closeFilterMenu.classList.toggle("active");
} 

function closeFilterMenuMenu() {
    menuButton.classList.toggle("de-active");
    filterMenu.classList.toggle("de-active");
    closeFilterMenu.classList.toggle("de-active")
} 

