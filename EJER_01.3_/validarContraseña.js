// Esta función comprueba si una contraseña es válida.
// Recibe una contraseña como parámetro y devuelve true si tiene
// 8 caracteres o más. La propiedad .length indica el número de
// caracteres que tiene el texto.
function esContrasenaValida(contrasena) {
    return contrasena.length >= 8;
}

// Creamos un array con varias contraseñas que queremos comprobar.
const contrasenas = ['1234', 'miClave2024', 'abc'];

// map() recorre todos los elementos del array y crea un NUEVO array
// con el resultado de la función aplicada a cada elemento.
//
// Aquí utilizamos una función anónima porque solo necesitamos esta
// función en este lugar concreto. La función recibe cada contraseña
// y llama a esContrasenaValida() para comprobar si es válida.
//
// Para cada contraseña:
// '1234'       → tiene 4 caracteres  → false
// 'miClave2024' → tiene 11 caracteres → true
// 'abc'        → tiene 3 caracteres  → false
//
// Por eso el resultado final es [false, true, false].
const resultado = contrasenas.map(function(contrasena) {
    return esContrasenaValida(contrasena);
});

// Mostramos el nuevo array por consola.
console.log(resultado); // [false, true, false]

// IDEA PARA EL EXAMEN:
//
// Una función con nombre se utiliza cuando queremos reutilizarla
// o cuando realiza una tarea que queremos identificar claramente.
//
// Una función anónima es útil cuando solo necesitamos una función
// pequeña y puntual, por ejemplo dentro de map(), filter() o forEach().
//
// map() NO modifica el array original, sino que crea y devuelve
// un nuevo array con los resultados.