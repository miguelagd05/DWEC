
// ================================================================
// 1. SELECCIONAR ELEMENTOS
// ================================================================

const input = document.getElementById('cantidad');
const boton = document.getElementById('btn-generar');
const resultado = document.getElementById('resultado');


// ================================================================
// 2. GENERAR PÁRRAFOS
// ================================================================

boton.addEventListener('click', function() {

  // Obtenemos el número introducido.
  const cantidad = Number(input.value);

  // Vaciamos los resultados anteriores.
  resultado.innerHTML = '';

  // Creamos un DocumentFragment.
  const fragmento = document.createDocumentFragment();

  // Repetimos el proceso tantas veces como indique el usuario.
  for (let i = 0; i < cantidad; i++) {

    // Creamos un nuevo párrafo.
    const parrafo = document.createElement('p');

    // Introducimos el texto.
    parrafo.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    // Añadimos el párrafo al fragmento.
    fragmento.appendChild(parrafo);

  }

  // Añadimos todos los párrafos al contenedor de una sola vez.
  resultado.appendChild(fragmento);

});
