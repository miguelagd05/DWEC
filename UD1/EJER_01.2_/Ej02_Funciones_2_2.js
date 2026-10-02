// 1. Escribe una **Function Declaration** llamada `calcularAreaRectangulo` que acepte `base` y `altura` y devuelva el área.

function calcularAreaRectangulo(base,altura){
    return base * altura
}

const area = calcularAreaRectangulo(5,10)


//2. Escribe la misma lógica usando una **Function Expression** y guárdala en una constante `calcularAreaTriangulo`.

const calcularAreaTriangulo = function(base,altura){
    return (base * altura)/2
}

const areaTriangulo = calcularAreaTriangulo(9,8)



//3. Convierte la función anterior en una **Arrow Function**.
 
const calcularAreaTrianguloArrow = (base,altura) => {
    return (base * altura) / 2
}
const areaTrianguloArrow = calcularAreaTriangulo(9,6)



//4. Añade valores por defecto a los parámetros de cualquiera de las funciones anteriores.

const calcularAreaTrianguloDefecto = function(base = 6, altura =  7) {
    return (base * altura) / 2
}


//5. Llama a cada función con valores de prueba y muestra el resultado en la consola.

console.log(calcularAreaRectangulo(7,4))
console.log(calcularAreaTriangulo(9,6))
console.log(calcularAreaTrianguloArrow(6,10))
console.log(calcularAreaTrianguloDefecto())