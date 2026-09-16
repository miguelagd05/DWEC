// 1. Crea un objeto ‘producto’ con las propiedades: ‘nombre’ (string), ‘precio’ (number).

const producto = {

nombre: "Monitor",
precio: 90

}

// 2. Crea un objeto ‘cliente’ con las propiedades: ‘nombreCliente’ (string), ‘esPremium’ (boolean).

const cliente = {

nombreCliente: "Jose María",
esPremium: "No"

}

// 3. Combina ambos objetos en un nuevo objeto llamado ‘pedido’ utilizando el Spread Operator (…).

const pedido = {

...producto,
...cliente

}

// 4. Muestra el objeto ‘pedido’ en consola.

console.log("Pedido:")
console.table(pedido)

// 5. ¿Qué sucede si las propiedades de los objetos originales tienen el mismo nombre? Crea un nuevo objeto ‘cliente2’ con la propiedad ‘nombre’ y combínalo con el objeto ‘producto’ para ver el resultado.

const cliente2 = {

nombre: "Adriana"

}

const pedido2 = {

    ...producto,
    ...cliente2

}

console.table(pedido2)

// No sale error al ser objetos distintos