// 26. Es necesario añadir la duración a todos los cursos. Para cada tarjeta, debes crear dinámicamente un nuevo párrafo, asignarle la clase 'duracion' y el texto 'Duración: 20 horas', y añadirlo al final de la sección de información.

  const infos = document.querySelectorAll('.card .info');
  infos.forEach(function(info) {
    const pDuracion = document.createElement('p');
    pDuracion.textContent = 'Duración: 20 horas';
    pDuracion.classList.add('duracion');
    info.appendChild(pDuracion);
  });