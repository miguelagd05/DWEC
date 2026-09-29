
//Importamos ambas funciones
import { agregarLibro } from "./biblioteca.js";
import { obtenerLibros } from "./biblioteca.js";

// Miramos que se imprima bien la colección inicial
console.log("Colección inicial")
console.log(obtenerLibros())

//Declaramos un nuevo objeto que contenga un libro
const nuevolibro = {

    id:11,
    titulo: "El último deseo",
    autor: "Andzrej Sapkowski",
    paginas:254

}

agregarLibro(nuevolibro)

console.log("Colección tras añadir el último libro")
console.log(obtenerLibros())