
// ================================================================
// 1. SELECCIONAR ELEMENTOS
// ================================================================

const botones = document.getElementById('botones-tabs');
const contenidos = document.querySelectorAll('.contenido');


// ================================================================
// 2. DELEGACIÓN DE EVENTOS
// ================================================================

// Escuchamos los clics en el contenedor de botones.
botones.addEventListener('click', function(event) {

  // Comprobamos que hemos pulsado un botón.
  if (event.target.tagName === 'BUTTON') {

    // Primero ocultamos todos los contenidos.
    contenidos.forEach(function(contenido) {

      contenido.classList.add('oculto');

    });

    // Obtenemos el valor del atributo data-id del botón.
    const id = event.target.dataset.id;

    // Buscamos el contenido cuyo ID coincide con el data-id.
    const contenidoSeleccionado = document.getElementById(id);

    // Mostramos únicamente el contenido seleccionado.
    contenidoSeleccionado.classList.remove('oculto');

  }

});
