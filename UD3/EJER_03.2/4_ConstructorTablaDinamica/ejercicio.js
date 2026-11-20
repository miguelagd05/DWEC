
// ================================================================
// 1. CREAR ARRAY DE OBJETOS
// ================================================================

// Cada objeto representa un usuario.
const usuarios = [
  { nombre: 'Ana', edad: 25 },
  { nombre: 'Luis', edad: 30 },
  { nombre: 'María', edad: 22 }
];


// ================================================================
// 2. CREAR TABLA DINÁMICAMENTE
// ================================================================

function crearTabla(usuarios) {

  // Seleccionamos el contenedor.
  const contenedor = document.getElementById('contenedor-tabla');

  // Creamos la tabla.
  const tabla = document.createElement('table');

  // Creamos un DocumentFragment para construir la tabla en memoria.
  const fragmento = document.createDocumentFragment();

  // Recorremos el array de usuarios.
  usuarios.forEach(function(usuario) {

    // Creamos una fila.
    const fila = document.createElement('tr');

    // Creamos la celda del nombre.
    const celdaNombre = document.createElement('td');
    celdaNombre.textContent = usuario.nombre;

    // Creamos la celda de la edad.
    const celdaEdad = document.createElement('td');
    celdaEdad.textContent = usuario.edad;

    // Añadimos las celdas a la fila.
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaEdad);

    // Añadimos la fila al fragmento.
    fragmento.appendChild(fila);

  });

  // Añadimos todas las filas a la tabla.
  tabla.appendChild(fragmento);

  // Añadimos la tabla al contenedor.
  contenedor.appendChild(tabla);

}

// Ejecutamos la función.
crearTabla(usuarios);
