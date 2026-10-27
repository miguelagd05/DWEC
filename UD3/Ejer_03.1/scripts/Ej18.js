// 18. Partiendo desde el pie de página (footer), localiza el contenedor principal que está justo antes y aplícale un borde de 2px de color rojo para destacarlo.

  const footer = document.getElementById('footer-principal');
  if (footer && footer.previousElementSibling) {
    footer.previousElementSibling.style.border = '2px solid red';
  }