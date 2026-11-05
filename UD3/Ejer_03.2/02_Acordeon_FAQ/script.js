
function ocultarTodasLasRespuestas() {

    // Seleccionar todos los párrafos de respuesta
    const respuestas = document.querySelectorAll("li p");

    // Ocultar todas las respuestas
    respuestas.forEach(function(respuesta) {
        respuesta.classList.add("oculto");
    });
}

function revelarRespuesta(pregunta) {

    // Ocultar todas las respuestas primero
    ocultarTodasLasRespuestas();

    // Obtener el párrafo que está después del h2
    const respuesta = pregunta.nextElementSibling;

    // Mostrar la respuesta quitando la clase oculto
    respuesta.classList.remove("oculto");
}
