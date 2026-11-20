// 25. Para mejorar la legibilidad, se ha decidido agrupar visualmente los cursos por temática. Tu objetivo es encontrar todas las tarjetas de cursos que pertenezcan a la categoría 'Desarrollo Web'. Una vez identificadas, debes aplicarles un ligero fondo de color (#f0f0f0) para que se distingan del resto.

  const tarjetas = document.querySelectorAll('.card');
  tarjetas.forEach(function(tarjeta) {
    const categoria = tarjeta.querySelector('.categoria');
    if (categoria && categoria.textContent === 'Desarrollo Web') {
      tarjeta.style.backgroundColor = '#f0f0f0';
    }
  });