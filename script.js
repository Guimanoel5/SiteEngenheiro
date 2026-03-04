// =============================
// MENU MOBILE
// =============================
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fecha menu ao clicar em link (melhora UX)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// =============================
// HEADER INTELIGENTE AO ROLAR
// =============================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// =============================
// SCROLL REVEAL PROFISSIONAL
// =============================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});

// =============================
// FORM COM FEEDBACK MODERNO
// =============================
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const button = form.querySelector("button");
  button.innerText = "Enviando...";
  button.disabled = true;

  setTimeout(() => {
    button.innerText = "Mensagem Enviada ✓";
    button.style.background = "#16a34a";

    setTimeout(() => {
      button.innerText = "Solicitar Orçamento";
      button.disabled = false;
      button.style.background = "";
      form.reset();
    }, 2500);

  }, 1200);
});
