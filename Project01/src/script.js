const toggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  showcase.classList.toggle("active");
  toggle.classList.toggle("active");
  menu.classList.toggle("active");
});
