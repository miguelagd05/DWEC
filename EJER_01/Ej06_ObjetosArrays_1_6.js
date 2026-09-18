
/* 1. Crea un array llamado `cursos`, donde cada elemento sea un objeto que represente un curso. Cada curso debe tener las siguientes propiedades:
- `nombre` (string)
- `profesor` (string)
- `estudiantes` (array de objetos), donde cada objeto represente a un estudiante con:
- nombre (string)
- `calificacion` (number)
Crea al menos 4 cursos, y cada uno con al menos 3 estudiantes.
*/

const cursos =  [
    {
    nombre: 'DAW',
    profesor : 'Marco',
estudiantes: [
  {nombre: 'Pedro', calificacion: 9},
  {nombre: 'Juan' , calificacion: 6},
  {nombre: 'Leo', calificacion: 7}
]
    },

{
    nombre: 'Desarollo Web en Entorno Cliente',
    profesor: 'Pablo',
    estudiantes: [
        {nombre: 'Marco', calificacion: 7},
        {nombre: 'Pablo' , calificacion: 8},
        {nombre : 'Gabriel' , calificacion: 10}
    ]
},

{

nombre: 'Desarrollo web en Entorno Servidor',
profesor: 'Natalia',
estudiantes : [
    {nombre : 'Nel' , calificacion: 10},
    {nombre: 'Liam' , calificacion : 0},
    {nombre: 'Alberto', calificacion: 3},

]
},

{

    nombre: 'Diseño de Interfaces Web',
    profesor: 'Dani',

    estudiantes:[

       {nombre: 'Dani', calificacion : 2} ,
       {nombre : 'Fran', calificacion: 10},
       {nombre : 'Saul', calificacion: 5}

    ]

},

]

/* 2. Utiliza `.map()` para crear un nuevo array `resumenCursos` que contenga objetos con:
- `nombreCurso`
- `promedioCalificaciones` (promedio de las calificaciones de los estudiantes)
*/

const resumenCursos = cursos.map(curso => {
    const suma = curso.estudiantes.reduce((total,estudiante) => total + estudiante.calificacion,0
    )

const promedio = suma / curso.estudiantes.length

return {
    nombreCurso: curso.nombre,
    promedioCalificaciones: promedio

}
})


// 3. Utiliza `.filter()` para obtener un array `cursosDestacados` que contenga solo los cursos cuyo promedio de calificaciones sea mayor o igual a 7.

const cursosDestacados = resumenCursos.filter(curso => curso.promedioCalificaciones >= 7 )

/* 4. Recorre los cursos destacados e imprime en consola un mensaje como:

`"📘 El curso [nombreCurso] tiene un promedio de [promedio] y es considerado destacado."`

*/

cursosDestacados.forEach(curso => {
    console.log(`📘 El curso ${curso.nombreCurso} tiene un promedio de ${curso.promedioCalificaciones} y es considerado destacado.`)
})

/* 5. Verifica si hay algún estudiante con calificación menor a 4 en cada curso. Si lo hay, imprime:

`"⚠️ Atención: En el curso [nombreCurso] hay estudiantes con calificaciones muy bajas."`

*/

cursosDestacados.forEach(curso => {

    const hayNotasBajas = curso.estudiantes.some(
        estudiante => estudiante.calificacion < 4
    )

    if(hayNotasBajas){
        console.log(
            `⚠️ Atención: En el curso ${curso.nombreCurso} hay estudiantes con calificaciones muy bajas."
        )
    }
})