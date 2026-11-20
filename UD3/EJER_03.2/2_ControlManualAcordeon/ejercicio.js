
// ================================================================
// 1. OCULTAR TODAS LAS RESPUESTAS
// ================================================================

// Seleccionamos todos los párrafos y les añadimos la clase oculto.
function ocultarTodasLasRespuestas() {

  // Seleccionamos todos los párrafos de las preguntas.
  const respuestas = document.querySelectorAll('.faq p');

  // Recorremos todos los párrafos.
  respuestas.forEach((respuesta) => {

    // Añadimos la clase oculto a cada respuesta.
    respuesta.classList.add('oculto');

  });

}


// ================================================================
// 2. REVELAR UNA RESPUESTA
// ================================================================

// Recibimos el h2 sobre el que hemos hecho clic.
function revelarRespuesta(pregunta) {

  // Primero ocultamos todas las respuestas.
  ocultarTodasLasRespuestas();

  // Desde el h2 buscamos su siguiente hermano (el p).
  const respuesta = pregunta.nextElementSibling;

  // Quitamos la clase oculto para mostrar la respuesta.
  respuesta.classList.remove('oculto');

}
