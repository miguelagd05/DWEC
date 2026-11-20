
function cambiarImagenPrincipal(indice) {

    // a. Seleccionar todas las miniaturas
    const miniaturas = document.querySelectorAll(".miniatura");

    // b. Acceder a la miniatura indicada
    const miniaturaSeleccionada = miniaturas[indice];

    // Comprobar que la miniatura existe
    if (!miniaturaSeleccionada) {
        return;
    }

    // c. Obtener el atributo src
    const rutaImagen = miniaturaSeleccionada.getAttribute("src");

    // d. Seleccionar la imagen principal
    const imagenPrincipal = document.querySelector("#imagen-principal");

    // Cambiar su atributo src
    imagenPrincipal.setAttribute("src", rutaImagen);
}


function resaltarMiniatura(indice) {

    // Seleccionar todas las miniaturas
    const miniaturas = document.querySelectorAll(".miniatura");

    // Quitar la clase activa de todas las miniaturas
    miniaturas.forEach(function(miniatura) {
        miniatura.classList.remove("activa");
    });

    // Añadir la clase activa a la miniatura seleccionada
    if (miniaturas[indice]) {
        miniaturas[indice].classList.add("activa");
    }
}
