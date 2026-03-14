document.addEventListener("DOMContentLoaded", function(){

console.log("Portfolio Loaded");

const links = document.querySelectorAll("nav a");

links.forEach(function(link){
link.addEventListener("click", function(e){

e.preventDefault();

const sectionId = this.getAttribute("href");
const section = document.querySelector(sectionId);

section.scrollIntoView({
behavior: "smooth"
});

});
});

});
