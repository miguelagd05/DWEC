
// ================================================================
// 1. SELECCIONAR ELEMENTOS
// ================================================================

const input = document.getElementById('nueva-tarea');
const boton = document.getElementById('btn-anadir');
const lista = document.getElementById('lista-tareas');


// ================================================================
// 2. AÑADIR TAREAS
// ================================================================

boton.addEventListener('click', function() {

  // Obtenemos el texto y eliminamos espacios al principio y al final.
  const texto = input.value.trim();

  // Comprobamos que no esté vacío.
  if (texto !== '') {

    // Creamos un nuevo li.
    const tarea = document.createElement('li');

    // Introducimos el texto de la tarea.
    tarea.textContent = texto;

    // Creamos el botón eliminar.
    const botonEliminar = document.createElement('button');

    botonEliminar.textContent = 'Eliminar';

    // Añadimos el botón a la tarea.
    tarea.appendChild(botonEliminar);

    // Añadimos la tarea a la lista.
    lista.appendChild(tarea);

    // Vaciamos el input.
    input.value = '';

  }

});


// ================================================================
// 3. ELIMINAR TAREAS
// ================================================================

// Utilizamos delegación de eventos: escuchamos los clics
// en la lista, aunque los botones se creen después.
lista.addEventListener('click', function(event) {

  // Comprobamos si hemos pulsado un botón.
  if (event.target.tagName === 'BUTTON') {

    // Subimos desde el botón hasta su li.
    const tarea = event.target.parentNode;

    // Eliminamos el li.
    tarea.remove();

  }

});
