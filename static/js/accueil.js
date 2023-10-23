
let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 5000); 
}







/* active l'animation seulement lorsque l'utilisateur peut voir les éléments */
(function () {
    // vérifie la visibilité des éléments
    function checkVisibility() {
      const elements = document.querySelectorAll('.marquestyle1, .marquestyle2, .marquestyle3');
      // parcours chaque élément
      elements.forEach((element) => {
        // obtient les dimensions de l'élément par rapport à la fenêtre
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          element.classList.add('active');
        } else {
        }
      });
    }

    function init() {
      checkVisibility(); // appelle la fonction de vérification de la visibilité
  
      window.addEventListener('scroll', checkVisibility);       // ajoute des "écouteurs" d'événements pour déclencher la vérification
      window.addEventListener('resize', checkVisibility);       // ajoute des "écouteurs" d'événements pour déclencher la vérification
      window.addEventListener('load', checkVisibility);       // ajoute des "écouteurs" d'événements pour déclencher la vérification
    }
  
    // appelle la fonction d'initialisation au chargement de la page
    init();
})();

