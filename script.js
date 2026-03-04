// Menu Mobile
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Animação Scroll
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if(position < screenHeight - 100){
      el.classList.add("visible");
    }
  });
});

// Form fake submit
document.querySelector(".contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
});