// 1. Crea un objeto `usuario` con `nombre` y `email`.

const usuario = {

    nombre: "Pedro",
    email: "pedro99@gmail.com",

}
// 2. Crea un objeto `perfil` con `puesto` y `empresa`.

const perfil = [
{

puesto: "Desarrollador Web",
empresa:"Inetum",

}

]


// 3. Combina ambos objetos en un nuevo objeto `empleado` usando el “spread operator” (`...`).

const empleado = {

    ...usuario,
    ...perfil,

}

// 4. Supongamos que el objeto `empleado` podría tener o no una propiedad anidada `perfil.direccion.ciudad`. Intenta acceder a `empleado.perfil.direccion.ciudad` usando “Optional Chaining” (`?.`) para evitar errores.


const empleado2 = empleado.perfil?.direccion.ciudad

console.log(empleado2)

// 5. Usa el “Nullish Coalescing Operator” (`??`) para asignar un valor por defecto (“Ciudad no especificada”) si el resultado del paso anterior es `null` o `undefined`.

 const empleadoDefecto = empleado.perfil?.direccion.ciudad ?? "Ciudad no especificada";

 console.log(empleadoDefecto)