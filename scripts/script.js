// JavaScript Document

// filer menu

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});


console.log("hi");

let menuButton = document.querySelector("main > button");
let filterMenu = document.querySelector("main > section, div");
let closeFilterMenu = document.querySelector("button[aria-label='sluit filters']");


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

//
// FILTERS OPENEN
let filtersButton = document.querySelector(".filterButton");
let filtersForm = document.querySelector("form");

filtersButton.addEventListener("click", openFilters);

function openFilters() {
	filtersForm.classList.add("is-open");
}

const filtersSluitButton = document.querySelector("button[aria-label='sluit filters']");
const filtersSubmitButton = document.querySelector("form > div:last-of-type > button");

filtersSluitButton.addEventListener("click", sluitFilters);

filtersSubmitButton.addEventListener("click", sluitFilters);

function sluitFilters() {
	filtersForm.classList.remove("is-open");
}

// filter menu index pagina

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});


console.log("hi");

let menuButton2 = document.querySelector("header > article > button");
let filterMenu2 = document.querySelector("main > div");
let closeFilterMenu2 = document.querySelector("button[aria-label='sluit filters']");


menuButton2.addEventListener("click",toggleMenu2)
closeFilterMenu2.addEventListener("click",closeFilterMenuMenu2)

function toggleMenu2() {
    menuButton2.classList.toggle("active");
    filterMenu2.classList.toggle("active");
    closeFilterMenu2.classList.toggle("active");
} 

function closeFilterMenuMenu2() {
    menuButton2.classList.toggle("de-active");
    filterMenu2.classList.toggle("de-active");
    closeFilterMenu2.classList.toggle("de-active")
} 

//
// FILTERS OPENEN
let filtersButton2 = document.querySelector(".filterButton2");
let filtersForm2 = document.querySelector("form");

filtersButton2.addEventListener("click", openFilters2);

function openFilters2() {
	filtersForm2.classList.add("is-open");
}

const filtersSluitButton2 = document.querySelector("button[aria-label='sluit filters']");
const filtersSubmitButton2 = document.querySelector("form > div:last-of-type > button");

filtersSluitButton2.addEventListener("click", sluitFilters2);

filtersSubmitButton2.addEventListener("click", sluitFilters2);

function sluitFilters2() {
	filtersForm2.classList.remove("is-open");
}