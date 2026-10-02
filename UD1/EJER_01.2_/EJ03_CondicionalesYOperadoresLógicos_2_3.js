//1. Crea una función que reciba un `saldo` y una cantidad a `retirar`.

function retirarDinero(saldo,dineroRetirar,tieneTarjetaCredito){

//2. Dentro de la función, comprueba si el `saldo` es mayor o igual a la cantidad a `retirar`.   
if(saldo >= dineroRetirar){ 
//3. Si se puede retirar, muestra “Retiro exitoso. Saldo restante: [nuevo saldo]”.
    const nuevoSaldo = saldo - dineroRetirar

    console.log(`Retiro exitoso. Saldo Restante: ${nuevoSaldo}`)
}
//**Extra:** Añade una variable booleana `tieneTarjetaCredito`. Modifica la lógica para que, si el saldo no es suficiente PERO `tieneTarjetaCredito` es `true`, muestre “Saldo insuficiente, pagando con tarjeta de crédito”.
else if (tieneTarjetaCredito){
    console.log(`Saldo insuficiente: Pagando con tarjeta de crédito`)
}
//4. Si no, muestra “Saldo insuficiente”.
else {
    console.log(`Saldo insuficiente`)
}
}
// Aquí se introducen los datos por consola y se imprime el resultado
console.log(retirarDinero(1000,200,false))








