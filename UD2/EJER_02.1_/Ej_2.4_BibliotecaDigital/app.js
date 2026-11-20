
//Importamos ambas funciones
import { obtenerLibros } from "./biblioteca.js";
import { buscarLibro } from "./biblioteca.js";
import { eliminarLibro } from "./biblioteca.js";


const libroEncontrado = buscarLibro(9)

console.log("Libro encontrado")
console.log(libroEncontrado)

// Miramos que se imprima bien la colección inicial
console.log("Colección inicial")
console.log(obtenerLibros())

eliminarLibro(3)

console.log("Colección tras añadir el último libro")
console.log(obtenerLibros())