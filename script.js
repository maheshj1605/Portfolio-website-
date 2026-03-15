document.addEventListener("DOMContentLoaded", function () {

console.log("Portfolio Loaded");

const links = document.querySelectorAll("nav a");

/* Smooth Scroll */

links.forEach(function(link){

link.addEventListener("click", function(e){

e.preventDefault();

const sectionId = this.getAttribute("href");
const section = document.querySelector(sectionId);

if(section){
section.scrollIntoView({
behavior: "smooth"
});
}

});

});

/* Active Navigation Highlight */

window.addEventListener("scroll", function(){

let current = "";

document.querySelectorAll("section").forEach(function(section){

const sectionTop = section.offsetTop - 100;
const sectionHeight = section.clientHeight;

if(pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight){
current = section.getAttribute("id");
}

});

links.forEach(function(link){

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});

});