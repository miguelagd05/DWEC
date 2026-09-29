
//Importamos ambas funciones
import { obtenerLibros } from "./biblioteca.js";
import { ordenarPorPaginas } from "./biblioteca.js";


const libroEncontrado = buscarLibro(9)

console.log("Libro encontrado")
console.log(libroEncontrado)

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

eliminarLibro(3)

const totalPaginas = calcularTotalPaginas()

console.log("Número total de páginas:" , totalPaginas)

console.log("Colección tras añadir el último libro")
console.log(obtenerLibros())

console.log("Colección ordenada por páginas")
ordenarPorPaginas()