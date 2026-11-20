
// ================================================================
// 1. CAMBIAR IMAGEN PRINCIPAL
// ================================================================

// Recibe la posición de la miniatura que queremos seleccionar.
function cambiarImagenPrincipal(indice) {

  // Seleccionamos todas las miniaturas.
  const miniaturas = document.querySelectorAll('.miniatura');

  // Seleccionamos la miniatura correspondiente al índice.
  const miniaturaSeleccionada = miniaturas[indice];

  // Obtenemos su atributo src (ruta de la imagen).
  const nuevaImagen = miniaturaSeleccionada.src;

  // Seleccionamos la imagen grande y cambiamos su src.
  const imagenPrincipal = document.getElementById('imagen-principal');

  imagenPrincipal.src = nuevaImagen;

  // También resaltamos la miniatura seleccionada.
  resaltarMiniatura(indice);
}


// ================================================================
// 2. RESALTAR MINIATURA
// ================================================================

// Recibe la posición de la miniatura que queremos resaltar.
function resaltarMiniatura(indice) {

  // Seleccionamos todas las miniaturas.
  const miniaturas = document.querySelectorAll('.miniatura');

  // Recorremos todas las miniaturas.
  miniaturas.forEach((miniatura, i) => {

    // Quitamos la clase activa de todas.
    miniatura.classList.remove('activa');

    // Añadimos la clase activa solamente a la seleccionada.
    if (i === indice) {
      miniatura.classList.add('activa');
    }

  });

}
