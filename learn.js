const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});


const profileBtn = document.getElementById("profileBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

profileBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

window.addEventListener("click", (e) => {
  if (!profileBtn.contains(e.target)) {
    dropdownMenu.classList.remove("show");
  }
});