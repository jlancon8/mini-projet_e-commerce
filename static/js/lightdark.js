const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";

var theme = "light"; // Commence par le mode clair
const body = document.body;
const container = document.querySelector(".theme-container");
const themeIcon = document.getElementById("theme-icon");

container.addEventListener("click", toggleTheme);

setTheme();

function toggleTheme() {
  theme = theme === "light" ? "dark" : "light";
  setTheme();
}

function setTheme() {
  body.style.backgroundColor = theme === "light" ? 'white' : 'black'; // Si theme = light, applique dark et inversement
  container.classList.remove(theme === "light" ? "shadow-dark" : "shadow-light");
  container.classList.add(theme === "light" ? "shadow-light" : "shadow-dark");
  themeIcon.src = theme === "light" ? sun : moon;
  toggleDarkMode(theme === "dark");
}

function toggleDarkMode(enable) {
  if (enable) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
}
