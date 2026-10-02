// 1. Declara una variable ‘nombre’ usando ‘const’ y asígnale tu nombre.

const nombre = "Miguel Ángel"

// 2. Declara una variable 'edad' usando 'let' y asignale tu e

let edad = 20

// 3. Declara una variable ‘tieneMascota’ usando ‘const’ y asígnale un valor booleano.

const tieneMascota = true

// 4. Reasigna un nuevo valor a la variable ‘edad’ y ‘tieneMascota’.

// En este caso, la variable tieneMascota no podría reasignar su valor al ser const

edad = 21
//tieneMascota = false
// 5. Imprime en consola el valor y el tipo de cada una de las tres variables

console.log(edad,typeof edad) 
console.log(nombre,typeof nombre)
console.log(tieneMascota, typeof tieneMascota)

// 6.Crea una frase que describa a la persona usando Template Strings, por ejemplo "Juan tiene 30 años y no tiene mascota". Imprimela en consola

let frase 

if(tieneMascota == true){

frase = nombre + " tiene " + edad + " años y tiene mascota "
}

else{

frase = nombre + " tiene " + edad + " años y no tiene mascota "

}

console.log(frase)
