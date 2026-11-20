

const usuarios = [
    {nombre: Alvaro , edad: 76},
    {nombre: Carlos, edad: 15},
    {nombre: Berto, edad: 24},
    {nombre: Claudio, edad: 46}
]

function crearTablaArray(usuarios){

const tabla = document.createElement("table")

const fragmento = document.createDocumentFragment()

usuarios.foreach(function(usuario){

    const fila = document.createElement("tr")

    const celdaNombre = document.createElement("td")
    celdaNombre.textContent = usuario.nombre

    const celdaEdad = document.createElement("td")

        celdaEdad.textContent = usuario.edad

        fila.appendChild(celdaNombre)
        fila.appendChild(celdaEdad)

    fragmento.appendChild(fila)

})

tabla.appendChild(fragmento)

const contenedor = document.querySelector("#contenedor-tabla")

contenedor.appendChild(tabla)

}

crearTablaArray(usuarios)

