
//Importamos ambas funciones
import { obtenerLibros } from "./biblioteca.js";
import { ordenarPorPaginas } from "./biblioteca.js";


// Miramos que se imprima bien la colección inicial
console.log("Colección inicial")
console.log(obtenerLibros())

ordenarPorPaginas()

console.log("Colección tras añadir el último libro")
console.log(obtenerLibros())

