// 8. El segundo enlace del menú de navegación es importante. 
// Selecciónalo directamente (sin iterar una lista) 
// y muestra su texto en la consola.

const enlace2 = document.querySelector(".navegacion a:nth-child(2)")
if(enlace2){
    console.log("Ejercicio 8: " , enlace2.textContent)
}