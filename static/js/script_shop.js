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

// Remplace l'id "more-invisible" par "more-visible" pour afficher le contenu quand le bouton .load-more est cliqué
function loadMore() {
  document.getElementById("more-invisible").id = "more-visible";
}

document.querySelector(".load-more").addEventListener("click", function() {
  loadMore();
  loadMore();
  loadMore();
});

// Clear filter mais je les ai pas implémentés donc imaginez fort
document.querySelector(".clear-filter").addEventListener("click", function() {
  alert("Filter cleared");
  document.getElementById("filter").value = "";
  document.getElementById("filter").focus();
});

// Récupère la liste des produits
const productList = document.getElementById('product-list');
const products = Array.from(productList.getElementsByClassName('product'));

// Fonction pour trier les produits par prix
function sortProductsByPrice() {
    products.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.product-price').textContent);
        const priceB = parseFloat(b.querySelector('.product-price').textContent);
        console.log(priceA, priceB);
        return priceA - priceB;
    });

    products.forEach(product => productList.removeChild(product));

    products.forEach(product => productList.appendChild(product));
}
// Bon ba pas implémenté ça maraboute mon responsive :(


const pastillePanier = document.getElementById('pastille-panier');
let nombreArticlesDansLePanier = 0;

function ajouterAuPanier() {
    nombreArticlesDansLePanier++;
    pastillePanier.textContent = nombreArticlesDansLePanier;
}

// Fait ça en boucle pour chaque bouton add-to-cart
document.querySelectorAll('.add-to-cart').forEach(button => button.addEventListener('click', ajouterAuPanier));