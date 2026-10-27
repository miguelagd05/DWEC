// 30. Limita tu búsqueda a la sección del formulario. Encuentra el área de texto (`textarea`) y cambia su texto de ejemplo (`placeholder`) a 'Escribe aquí tu consulta detallada'.

  const seccionFormulario = document.getElementById('formulario-seccion');
  if (seccionFormulario) {
    const textarea = seccionFormulario.querySelector('textarea');
    if (textarea) {
      textarea.placeholder = 'Escribe aquí tu consulta';
    }
  }