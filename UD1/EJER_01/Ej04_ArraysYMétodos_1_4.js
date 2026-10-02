// 1. Crea un array llamado `ciudades` con los siguientes strings: `"Madrid"`, `"Buenos Aires"`, `"Tokio"`, `"Nueva York"`, `"París"`.

let ciudades = ['Madrid','Buenos Aires','Tokio','Nueva York','París']

// 2. Añade con otra sentencia `"Roma"` al final del array.

ciudades.push("Roma")

// 3. Crea un nuevo array `ciudadesMayusculas` utilizando el método `.map()` que contenga todos los elementos del array original pero en mayúsculas.

let ciudadesMayusculas = ciudades.map(ciudad => ciudad.toUpperCase()) 

// 4. Crea un nuevo array `ciudadesFiltradas` utilizando el método `.filter()` que contenga solo los elementos que tienen más de 6 caracteres.

let ciudadesFiltradas = ciudades.filter (ciudad => ciudad.length > 6) 

// 5. Imprime los tres arrays en consola (`ciudades`, `ciudadesMayusculas`, `ciudadesFiltradas`).

console.log(ciudades)
console.log(ciudadesMayusculas)
console.log(ciudadesFiltradas)