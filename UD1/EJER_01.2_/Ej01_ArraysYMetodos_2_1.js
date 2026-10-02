//1. Crea un array `numeros` con al menos 6 números.

const numeros = [1,7,20,4,15,28] 

console.log(numeros)

//2. Usa el método `.map()` para crear un nuevo array `dobles` que contenga el doble de cada número del array original.

const dobles = numeros.map(numero => numero * 2)

console.log(dobles)

//3. Usa el método `.filter()` para crear un nuevo array `pares` que contenga solo los números pares del array `numeros`.

const pares = numeros.filter(numero => numero % 2 === 0)

console.log(pares)

//4. Usa un bucle `for...of` para imprimir cada número del array `pares` en la consola.

for(const par of pares){
    console.log(par)
}