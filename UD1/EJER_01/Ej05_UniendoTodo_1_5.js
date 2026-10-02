// 1. Crea un array de objetos llamado ‘estudiantes’. Cada objeto debe representar a un estudiante y tener las propiedades ‘nombre’ (string), ‘apellidos’ (string),‘calificacion’ (number) y ‘aprobado’ (boolean). Añade al menos 3 estudiantes.

const estudiantes = [
    {
        nombre : "Chema",
        apellidos: "Trabadelo Fernández",
        calificacion : 4,
        aprobado: true
},

    {
        nombre : "Adriana",
        apellidos: "Gutierrez",
        calificacion : 10,
        aprobado: true
    },

    {
        nombre: "Deva",
        apellido: "Pérez",
        calificacion : 10,
        aprobado: true
    }
]

// 2. Utiliza el método .map() para crear un nuevo array donde a cada estudiante se le añade una propiedad ‘id’ única (puede ser 1, 2, 3…).

const estudiantesId = estudiantes.map((estudiante, indice) => {
     return {
        ...estudiante,
        id: indice + 1
     }
})

// 3. Utiliza el método .filter() para obtener un array que contenga únicamente a los estudiantes que tienen una calificación mayor o igual a 5.

const estudiantesAprobados = estudiantes.filter (estudiante => estudiante.calificacion >= 5)

// 4. Para cada estudiante en el array filtrado (los aprobados), imprime un mensaje en consola usando Template Strings que diga: “¡Felicidades [nombre], has aprobado con [calificacion]!”.

estudiantesAprobados.forEach((estudiante) => {
console.log(
    `Felicidades ${estudiante.nombre}, has aprobado con ${estudiante.calificacion}!`
)
})

// 5. Recorre el array original y verifica si el valor de la propiedad aprobado es coherente con la calificacion (es decir, si calificacion >= 5 entonces aprobado debe ser true, y si es menor, debe ser false).

/*
Si hay incoherencias, imprime un mensaje como:
“⚠️ Incoherencia en el registro de [nombre]: calificación = [calificacion], aprobado = [aprobado]”
*/

estudiantes.forEach((estudiante) => {

    const esCoherente =
    (estudiante.calificacion >= 5  && estudiante.aprobado === true)||
    (estudiante.calificacion < 5 && estudiante.aprobado === false)

    if(! esCoherente) {
        console.log(
            `⚠️ Incoherencia en el registro de ${estudiante.nombre}: calificación = ${estudiante.calificacion}, aprobado = ${estudiante.aprobado}`
        )
    }
})