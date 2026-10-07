// Creamos un arreglo que contiene todos los libros de la biblioteca.
const libros = [
  { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", paginas: 417 },
  { id: 2, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", paginas: 863 },
  { id: 3, titulo: "1984", autor: "George Orwell", paginas: 328 },
  { id: 4, titulo: "El principito", autor: "Antoine de Saint-Exupéry", paginas: 96 },
  { id: 5, titulo: "Orgullo y prejuicio", autor: "Jane Austen", paginas: 432 },
  { id: 6, titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez", paginas: 128 },
  { id: 7, titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", paginas: 576 },
  { id: 8, titulo: "Fahrenheit 451", autor: "Ray Bradbury", paginas: 256 },
  { id: 9, titulo: "La Odisea", autor: "Homero", paginas: 384 },
  { id: 10, titulo: "El Hobbit", autor: "J. R. R. Tolkien", paginas: 310 }
];

// Función que recibe un libro y lo añade al arreglo.
export function agregarLibro(nuevoLibro) {
  libros.push(nuevoLibro);
}

// Función que devuelve todos los libros de la colección.
export function obtenerLibros() {
  return libros;
}

//Esta función busca un libro por su id y lo devuelve
export function buscarLibro(id) {
  return libros.find(libro => libro.id === id)
}

//Esta función busca la posición de un libro y lo elimina

export function eliminarLibro(id){

const indice = libros.findIndex(libro => libro.id === id)

if(indice !== -1){
  libros.splice(indice,1)
}
}

export function calcularTotalPaginas() {
  return libros.reduce((total,libro) => total + libro.paginas , 0)
}

