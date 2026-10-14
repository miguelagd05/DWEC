
//1. Necesitamos verificar que el script se está cargando correctamente. 
// Localiza el titular principal de la página, el que sirve de banner, 
// y envía su contenido de texto a la consola para confirmar que tienes acceso a él.

const titulo = document.querySelector("h1")

console.log("Ej 1: ", titulo.textContent)