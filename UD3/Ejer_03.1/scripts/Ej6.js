// 6. Hay un párrafo en la página que contiene información sobre el precio en un atributo de datos. 
// Encuéntralo usando ese atributo y muestra su contenido.

const infoPrecio = document.querySelector('[data-precio]')
console.log("Ej 6: ", infoPrecio.textContent)