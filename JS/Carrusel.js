/* carrusel.js · Carrusel de la portada (index.html)
   Mueve solo las imágenes dentro del carrusel, sin que la página salte ni se desplace. */
(function () {
  var slides = document.querySelector(".slides");
  var links = document.querySelectorAll(".carousel-links a");
  if (!slides || !links.length) return;

  function marcarActivo(indice) {
    links.forEach(function (link, i) {
      if (i === indice) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  links.forEach(function (link, indice) {
    link.addEventListener("click", function (evento) {
      evento.preventDefault(); // evita que el navegador salte al ancla
      slides.scrollTo({ left: indice * slides.clientWidth });
      marcarActivo(indice);
    });
  });

  // Mantiene el botón activo al deslizar con el dedo, el mouse o el teclado
  slides.addEventListener("scroll", function () {
    var indice = Math.round(slides.scrollLeft / slides.clientWidth);
    marcarActivo(indice);
  }, { passive: true });

  marcarActivo(0);
})();