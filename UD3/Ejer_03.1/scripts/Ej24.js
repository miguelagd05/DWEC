// 24. Para estandarizar los títulos de los cursos, recorre todos los `h2` que están dentro de las tarjetas y añade el prefijo "[CURSO]" al principio de su texto.

  const titulosCursos = document.querySelectorAll('.card h2');
  titulosCursos.forEach(function(titulo) {
    titulo.textContent = `[CURSO] ${titulo.textContent}`;
  });