// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});
});
});

// Typing Effect
const text = ["Software Developer", "Full Stack Developer", "Problem Solver"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
if (count === text.length) {
count = 0;
}
currentText = text[count];
letter = currentText.slice(0, ++index);

document.querySelector(".typing").textContent = letter;

if (letter.length === currentText.length) {
count++;
index = 0;
setTimeout(type, 1500);
} else {
setTimeout(type, 100);
}
})();

// Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
for (let i = 0; i < reveals.length; i++) {
let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
let elementVisible = 100;

if (elementTop < windowHeight - elementVisible) {
reveals[i].classList.add("active");
}
}
});