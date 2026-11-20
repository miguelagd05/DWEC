
// ==========================================
// 1. SELECCIONAMOS LOS ELEMENTOS DEL HTML
// ==========================================

// Seleccionamos el formulario por su id.
const formulario = document.querySelector("#formulario-compra");

// Seleccionamos el buscador por su id.
const buscador = document.querySelector("#buscador");

// Seleccionamos la lista donde aparecerán los productos.
const lista = document.querySelector("#lista");

// Seleccionamos el párrafo donde aparecerá el total.
const total = document.querySelector("#total");


// ==========================================
// 2. CREAMOS EL ARRAY Y EL CONTADOR
// ==========================================

// Creamos un array vacío donde guardaremos los productos.
const productos = [];

// Creamos un contador para generar identificadores consecutivos.
let siguienteId = 1;


// ==========================================
// 3. CREAMOS EL OBJETO DE ACCIONES
// ==========================================

// Creamos un objeto que contiene las tres acciones
// posibles de los botones: sumar, restar y borrar.

const acciones = {

    // Si pulsamos el botón +, sumamos una unidad.
    sumar: (producto) => {
        producto.unidades++;
    },

    // Si pulsamos el botón -, restamos una unidad.
    restar: (producto) => {

        // Comprobamos que las unidades sean mayores que 1.
        // Así evitamos que el producto llegue a 0.
        if (producto.unidades > 1) {

            // Restamos una unidad.
            producto.unidades--;
        }
    },

    // Si pulsamos Borrar, eliminamos el producto.
    borrar: (producto) => {

        // FILTER crea un nuevo array con todos los productos
        // cuyo id sea diferente al producto que queremos borrar.
        const nuevosProductos = productos.filter(
            elemento => elemento.id !== producto.id
        );

        // Actualizamos el array original con los productos restantes.
        productos.splice(0, productos.length, ...nuevosProductos);
    }
};


// ==========================================
// 4. FUNCIÓN PARA PINTAR LOS PRODUCTOS
// ==========================================

// Creamos una función llamada pintar.
// Recibe los productos que queremos mostrar.
// Si no recibe ninguno, muestra todos los productos.
const pintar = (productosMostrar = productos) => {

    // MAP recorre el array y transforma cada producto
    // en un elemento HTML <li>.
    const productosHTML = productosMostrar.map(producto => `

        <li>

            ${producto.nombre} -

            ${producto.precio.toFixed(2)} € x

            ${producto.unidades}

            <!-- Botón para restar una unidad -->
            <button data-accion="restar" data-id="${producto.id}">
                -
            </button>

            <!-- Botón para sumar una unidad -->
            <button data-accion="sumar" data-id="${producto.id}">
                +
            </button>

            <!-- Botón para borrar el producto -->
            <button data-accion="borrar" data-id="${producto.id}">
                Borrar
            </button>

        </li>

    `);

    // JOIN convierte el array de elementos HTML
    // en una única cadena de texto.
    // INNERHTML introduce ese HTML dentro del UL.
    lista.innerHTML = productosHTML.join("");


    // ==========================================
    // 5. CALCULAMOS EL TOTAL CON REDUCE
    // ==========================================

    // REDUCE recorre todos los productos y acumula
    // el precio multiplicado por sus unidades.
    const suma = productos.reduce(

        // acumulador guarda el resultado acumulado.
        // producto representa el elemento actual.
        (acumulador, producto) => {

            // Sumamos el precio por las unidades
            // al resultado que llevamos acumulado.
            return acumulador + producto.precio * producto.unidades;

        },

        // El acumulador comienza en 0.
        0
    );

    // Mostramos el total con dos decimales y el símbolo €.
    total.textContent = `Total: ${suma.toFixed(2)} €`;

};


// ==========================================
// 6. AÑADIR PRODUCTOS (EVENTO SUBMIT)
// ==========================================

// Escuchamos el evento submit del formulario.
// Se ejecuta cuando pulsamos el botón Añadir.
formulario.addEventListener("submit", (evento) => {

    // Evitamos que el formulario recargue la página.
    evento.preventDefault();

    // Leemos el nombre del producto.
    // VALUE obtiene el texto del input.
    // TRIM elimina los espacios al principio y al final.
    const nombre = formulario.elements.producto.value.trim();

    // Leemos el precio y lo convertimos directamente en número.
    const precio = formulario.elements.precio.valueAsNumber;

    // Leemos las unidades y las convertimos en número.
    const unidades = formulario.elements.unidades.valueAsNumber;


    // ==========================================
    // 7. COMPROBAR SI EL PRODUCTO YA EXISTE
    // ==========================================

    // FIND busca si existe un producto con el mismo nombre.
    // TOLOWERCASE permite comparar sin distinguir mayúsculas.
    const existente = productos.find(

        producto => producto.nombre.toLowerCase() === nombre.toLowerCase()

    );


    // Si el producto ya existe...
    if (existente) {

        // Sumamos las nuevas unidades a las existentes.
        // Conservamos el precio original.

        existente.unidades += unidades;

    } else {

        // Si no existe, añadimos un producto nuevo al array.
        productos.push({

            // Le asignamos el identificador actual.
            id: siguienteId,

            // Guardamos el nombre.
            nombre: nombre,

            // Guardamos el precio.
            precio: precio,

            // Guardamos las unidades.
            unidades: unidades

        });

        // Aumentamos el contador para el siguiente producto.
        siguienteId++;

    }


    // Limpiamos los campos del formulario.
    formulario.reset();

    // Colocamos el cursor de nuevo en el campo producto.
    formulario.elements.producto.focus();

    // Actualizamos la lista y el total.
    pintar();

});


// ==========================================
// 8. DELEGACIÓN DE EVENTOS (CLICK)
// ==========================================

// Ponemos UN SOLO EVENTO CLICK en el UL.
// Este evento controla todos los botones de los productos.
lista.addEventListener("click", (evento) => {

    // TARGET indica dónde hemos hecho clic.
    // CLOSEST busca el botón más cercano.
    const boton = evento.target.closest("button");

    // Si no hemos pulsado un botón, terminamos la función.
    if (!boton) return;

    // DATASET.ACCION obtiene la acción del botón:
    // sumar, restar o borrar.
    const accion = boton.dataset.accion;

    // DATASET.ID obtiene el identificador del producto.
    // NUMBER convierte ese identificador en número.
    const id = Number(boton.dataset.id);


    // FIND busca el producto que tiene ese identificador.
    const producto = productos.find(

        elemento => elemento.id === id

    );

    // Si no encontramos el producto, terminamos.
    if (!producto) return;

    // Ejecutamos la acción correspondiente al botón pulsado.
    // Por ejemplo: acciones["sumar"](producto).
    acciones[accion](producto);


    // Obtenemos el texto que hay escrito en el buscador.
    const texto = buscador.value.toLowerCase();

    // FILTER obtiene los productos que coinciden
    // con el texto del buscador.
    const filtrados = productos.filter(

        elemento => elemento.nombre.toLowerCase().includes(texto)

    );

    // Volvemos a pintar la lista manteniendo la búsqueda.
    pintar(filtrados);

});


// ==========================================
// 9. BUSCADOR (EVENTO INPUT)
// ==========================================

// INPUT se ejecuta cada vez que escribimos o modificamos el texto.
buscador.addEventListener("input", () => {

    // Obtenemos el texto escrito y lo pasamos a minúsculas.
    const texto = buscador.value.toLowerCase();

    // FILTER selecciona los productos cuyo nombre
    // contiene el texto que hemos escrito.
    const filtrados = productos.filter(

        producto => producto.nombre.toLowerCase().includes(texto)

    );

    // Pintamos solamente los productos encontrados.
    // El total sigue calculándose con el array completo.
    pintar(filtrados);

});


// ==========================================
// 10. CONTROL DEL FOCO (FOCUSIN Y FOCUSOUT)
// ==========================================

// FOCUSIN se ejecuta cuando entramos en un campo del formulario.
formulario.addEventListener("focusin", (evento) => {

    // Añadimos la clase CSS activo al campo seleccionado.
    evento.target.classList.add("activo");

});


// FOCUSOUT se ejecuta cuando salimos de un campo.
formulario.addEventListener("focusout", (evento) => {

    // Quitamos la clase CSS activo del campo.
    evento.target.classList.remove("activo");

});
