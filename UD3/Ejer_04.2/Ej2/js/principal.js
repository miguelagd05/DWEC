
// ==========================================
// 1. SELECCIONAMOS LOS ELEMENTOS DEL HTML
// ==========================================

// Seleccionamos el formulario.
const formulario = document.querySelector("#formulario-notas");

// Seleccionamos el campo donde escribimos el alumno.
const campoAlumno = formulario.elements.alumno;

// Seleccionamos el campo donde escribimos la nota.
const campoNota = formulario.elements.nota;

// Seleccionamos el texto de la vista previa.
const vistaPrevia = document.querySelector("#vista-previa");

// Seleccionamos la tabla.
const tabla = document.querySelector("#tabla");

// Seleccionamos el cuerpo de la tabla.
const cuerpoTabla = document.querySelector("#tabla tbody");

// Seleccionamos el párrafo del resumen.
const resumen = document.querySelector("#resumen");


// ==========================================
// 2. CREAMOS EL ARRAY Y EL CONTADOR
// ==========================================

// Array vacío donde guardaremos todos los alumnos.
const alumnos = [];

// Contador para generar identificadores consecutivos.
let siguienteId = 1;


// ==========================================
// 3. VISTA PREVIA DE LA NOTA (INPUT)
// ==========================================

// Escuchamos el evento input del campo nota.
// Se ejecuta cada vez que escribimos o modificamos la nota.
campoNota.addEventListener("input", () => {

    // Obtenemos el valor escrito en el campo.
    const nota = campoNota.value;

    // Si el campo está vacío, no mostramos nada.
    if (nota === "") {

        vistaPrevia.textContent = "";

    } else {

        // Convertimos el valor en número.
        const valor = Number(nota);

        // Si la nota es 5 o superior, está aprobado.
        if (valor >= 5) {

            vistaPrevia.textContent = "Aprobado";

        } else {

            // Si es inferior a 5, está suspenso.
            vistaPrevia.textContent = "Suspenso";

        }
    }

});


// ==========================================
// 4. FUNCIÓN PARA PINTAR LA TABLA
// ==========================================

// Creamos una función para mostrar los alumnos.
const pintar = () => {

    // MAP recorre el array y crea una fila HTML por alumno.
    const filas = alumnos.map(alumno => `

        <tr>

            <!-- Mostramos el nombre del alumno -->
            <td>${alumno.alumno}</td>

            <!-- Mostramos la nota y ponemos una clase CSS -->
            <td class="${alumno.nota >= 5 ? "aprobado" : "suspenso"}">
                ${alumno.nota.toFixed(1)}
            </td>

            <!-- Botón para borrar al alumno -->
            <td>
                <button data-id="${alumno.id}">
                    Borrar
                </button>
            </td>

        </tr>

    `);

    // Introducimos todas las filas dentro del tbody.
    cuerpoTabla.innerHTML = filas.join("");


    // ==========================================
    // 5. RESUMEN DE LAS NOTAS
    // ==========================================

    // Si no hay alumnos, mostramos Sin alumnos.
    if (alumnos.length === 0) {

        resumen.textContent = "Sin alumnos";

        // Terminamos la función.
        return;
    }


    // ------------------------------------------
    // MEDIA CON REDUCE
    // ------------------------------------------

    // REDUCE suma todas las notas.
    const suma = alumnos.reduce(

        (acumulador, alumno) => {

            return acumulador + alumno.nota;

        },

        // El acumulador comienza en 0.
        0
    );

    // Calculamos la media dividiendo entre el número de alumnos.
    const media = suma / alumnos.length;


    // ------------------------------------------
    // MEJOR ALUMNO CON REDUCE
    // ------------------------------------------

    // REDUCE busca el alumno que tiene la nota más alta.
    const mejorAlumno = alumnos.reduce(

        (mejor, alumno) => {

            // Si el alumno actual tiene más nota,
            // lo convertimos en el nuevo mejor alumno.
            if (alumno.nota > mejor.nota) {

                return alumno;

            } else {

                // Si no, mantenemos el anterior.
                return mejor;

            }

        },

        // Empezamos comparando con el primer alumno.
        alumnos[0]
    );


    // ------------------------------------------
    // CONTAR APROBADOS CON FILTER
    // ------------------------------------------

    // FILTER crea un array con los alumnos aprobados.
    const aprobados = alumnos.filter(

        alumno => alumno.nota >= 5

    );

    // LENGTH nos dice cuántos alumnos hay en ese array.
    const cantidadAprobados = aprobados.length;


    // ------------------------------------------
    // COMPROBAR SI APRUEBAN TODOS CON EVERY
    // ------------------------------------------

    // EVERY comprueba si TODOS los alumnos tienen
    // una nota igual o superior a 5.
    const todosAprueban = alumnos.every(

        alumno => alumno.nota >= 5

    );


    // ------------------------------------------
    // MOSTRAR EL RESUMEN
    // ------------------------------------------

    // Escribimos toda la información en el párrafo.
    resumen.textContent =

        `Media: ${media.toFixed(2)} | ` +

        `Mejor alumno: ${mejorAlumno.alumno} ` +
        `(${mejorAlumno.nota.toFixed(1)}) | ` +

        `Aprobados: ${cantidadAprobados} | ` +

        `¿Aprueban todos?: ${todosAprueban ? "Sí" : "No"}`;

};


// ==========================================
// 6. AÑADIR ALUMNOS (SUBMIT)
// ==========================================

// Escuchamos el envío del formulario.
formulario.addEventListener("submit", (evento) => {

    // Evitamos que se recargue la página.
    evento.preventDefault();

    // Leemos el nombre del alumno.
    const nombre = campoAlumno.value.trim();

    // Leemos la nota y la convertimos en número.
    const nota = campoNota.valueAsNumber;


    // Creamos un objeto con los datos del alumno.
    const nuevoAlumno = {

        // Le asignamos un identificador.
        id: siguienteId,

        // Guardamos el nombre.
        alumno: nombre,

        // Guardamos la nota.
        nota: nota

    };

    // Añadimos el objeto al array.
    alumnos.push(nuevoAlumno);

    // Aumentamos el contador para el siguiente alumno.
    siguienteId++;

    // Limpiamos los campos del formulario.
    formulario.reset();

    // Limpiamos también la vista previa.
    vistaPrevia.textContent = "";

    // Devolvemos el foco al campo del nombre.
    campoAlumno.focus();

    // Actualizamos la tabla y el resumen.
    pintar();

});


// ==========================================
// 7. BORRAR ALUMNOS (DELEGACIÓN DE EVENTOS)
// ==========================================

// Colocamos UN SOLO evento click en el tbody.
// Así controlamos todos los botones Borrar.
cuerpoTabla.addEventListener("click", (evento) => {

    // Buscamos el botón más cercano al elemento pulsado.
    const boton = evento.target.closest("button");

    // Si no hemos pulsado un botón, terminamos.
    if (!boton) return;

    // Obtenemos el identificador del alumno.
    const id = Number(boton.dataset.id);

    // FILTER crea un nuevo array sin el alumno seleccionado.
    const nuevosAlumnos = alumnos.filter(

        alumno => alumno.id !== id

    );

    // Actualizamos el array original.
    alumnos.splice(0, alumnos.length, ...nuevosAlumnos);

    // Volvemos a pintar la tabla y el resumen.
    pintar();

});


// ==========================================
// 8. ORDENAR LA TABLA (OPCIONAL)
// ==========================================

// Guardamos la columna que hemos ordenado.
let columnaOrdenada = "";

// Guardamos la dirección del orden.
// 1 significa ascendente.
// -1 significa descendente.
let direccion = 1;


// Ponemos UN SOLO evento click en el thead.
tabla.querySelector("thead").addEventListener("click", (evento) => {

    // Buscamos la cabecera que tiene el atributo data-orden.
    const cabecera = evento.target.closest("th[data-orden]");

    // Si no hemos pulsado una cabecera válida, terminamos.
    if (!cabecera) return;

    // Obtenemos el nombre de la columna: alumno o nota.
    const columna = cabecera.dataset.orden;

    // Si pulsamos otra columna, empezamos en orden ascendente.
    // Si pulsamos la misma columna, invertimos el orden.
    if (columna === columnaOrdenada) {

        direccion *= -1;

    } else {

        columnaOrdenada = columna;
        direccion = 1;

    }


    // SORT ordena los alumnos según la columna seleccionada.
    alumnos.sort((a, b) => {

        // Variable donde guardaremos la comparación.
        let resultado;

        // Si ordenamos por alumno, comparamos textos.
        if (columna === "alumno") {

            resultado = a.alumno.localeCompare(b.alumno);

        } else {

            // Si ordenamos por nota, restamos los números.
            resultado = a.nota - b.nota;

        }

        // Multiplicamos por la dirección para invertir el orden.
        return resultado * direccion;

    });

    // Actualizamos la tabla después de ordenar.
    pintar();

});
