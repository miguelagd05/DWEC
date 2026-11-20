// 15. Partiendo de la primera tarjeta de curso, localiza y trabaja sobre su tarjeta vecina, la que le sigue inmediatamente.
  const numCursos = document.querySelectorAll('.card').length;
  const enlaceContacto = document.querySelector('.navegacion a:last-child');
  if (enlaceContacto) {
    enlaceContacto.textContent = `Contacto (${numCursos} Cursos)`;
  }