

function generarInformeDeValidacion() {

    // a. Obtener los valores de los inputs
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;

    // Seleccionar el div del informe
    const informe = document.querySelector("#informe-errores");

    // b. Vaciar el informe anterior
    informe.innerHTML = "";

    // Variable para saber si hay errores
    let hayErrores = false;

    // c. Comprobar el nombre
    if (nombre.trim().length <= 3) {
        const errorNombre = document.createElement("p");
        errorNombre.textContent = "El nombre es incorrecto";
        informe.appendChild(errorNombre);
        hayErrores = true;
    }

    // d. Comprobar el email
    if (!email.includes("@")) {
        const errorEmail = document.createElement("p");
        errorEmail.textContent = "El email es incorrecto";
        informe.appendChild(errorEmail);
        hayErrores = true;
    }

    // e. Si no hay errores, mostrar mensaje de éxito
    if (!hayErrores) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "Formulario válido";
        informe.appendChild(mensaje);
    }
}
