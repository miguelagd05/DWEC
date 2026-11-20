
// ================================================================
// 1. SELECCIONAR ELEMENTOS
// ================================================================

const productos = document.getElementById('productos');
const carrito = document.getElementById('carrito');
const total = document.getElementById('total');


// ================================================================
// 2. CALCULAR EL TOTAL
// ================================================================

function calcularTotal() {

  // Seleccionamos todos los li del carrito.
  const elementos = carrito.querySelectorAll('li');

  // Variable para acumular los precios.
  let suma = 0;

  // Recorremos todos los productos del carrito.
  elementos.forEach(function(elemento) {

    // Obtenemos el precio del atributo data-price.
    const precio = Number(elemento.dataset.price);

    // Sumamos el precio.
    suma += precio;

  });

  // Actualizamos el total que aparece en pantalla.
  total.textContent = suma;
}


// ================================================================
// 3. AÑADIR PRODUCTOS AL CARRITO
// ================================================================

productos.addEventListener('click', function(event) {

  // Comprobamos si hemos pulsado el botón Añadir.
  if (event.target.classList.contains('anadir')) {

    // Obtenemos el li del producto pulsado.
    const producto = event.target.parentNode;

    // Clonamos el li completo, incluyendo sus hijos.
    const copia = producto.cloneNode(true);

    // Creamos el botón Quitar.
    const botonQuitar = document.createElement('button');
    botonQuitar.textContent = 'Quitar';
    botonQuitar.classList.add('quitar');

    // Añadimos el botón a la copia.
    copia.appendChild(botonQuitar);

    // Añadimos el producto al carrito.
    carrito.appendChild(copia);

    // Actualizamos el total.
    calcularTotal();

  }

});


// ================================================================
// 4. QUITAR PRODUCTOS DEL CARRITO
// ================================================================

carrito.addEventListener('click', function(event) {

  // Comprobamos si hemos pulsado Quitar.
  if (event.target.classList.contains('quitar')) {

    // Subimos hasta el li y lo eliminamos.
    event.target.parentNode.remove();

    // Volvemos a calcular el total.
    calcularTotal();

  }

});
