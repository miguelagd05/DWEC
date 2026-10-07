
//Importamos ambas funciones
import { hayLibrosLargos } from "./biblioteca.js";
import { todosSonLibrosCortos } from "./biblioteca.js";

//Comprueba que el número de páginas de un libro sea menor que el limite de páginas
console.log("Comprobación de libros largos")
console.log(hayLibrosLargos(900))
console.log(hayLibrosLargos(700))

//Comprueba que el número de páginas de un libro sea menor que el limite de páginas
console.log("Comprobación de libros cortos")
console.log(todosSonLibrosCortos(200)) 
console.log(todosSonLibrosCortos(500))  