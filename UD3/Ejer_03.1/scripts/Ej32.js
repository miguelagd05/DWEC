// 32. Se necesita una clase específica para las imágenes de los cursos. Recorre todas las tarjetas y, para cada una, encuentra su imagen y aplícale la clase 'imagen-curso'.

  const tarjetas = document.querySelectorAll('.card');
  tarjetas.forEach(function(tarjeta) {
    const img = tarjeta.querySelector('img');
    if (img) {
      img.classList.add('imagen-curso');
    }
  });