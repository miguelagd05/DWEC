
// ================================================================
// 1. SELECCIONAR ELEMENTOS
// ================================================================

const lista = document.getElementById('lista');
const botonOrdenar = document.getElementById('btn-ordenar');


// ================================================================
// 2. ORDENAR LA LISTA
// ================================================================

botonOrdenar.addEventListener('click', function() {

  // Seleccionamos todos los li de la lista.
  const elementos = lista.querySelectorAll('li');

  // Convertimos la NodeList en un Array.
  const array = Array.from(elementos);

  // Ordenamos alfabéticamente según el texto de cada li.
  array.sort(function(a, b) {
    return a.textContent.localeCompare(b.textContent, 'es');
  });

  // Vaciamos la lista original.
  lista.innerHTML = '';

  // Añadimos los elementos ya ordenados.
  array.forEach(function(elemento) {

    lista.appendChild(elemento);

  });

});
