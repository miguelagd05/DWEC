
// 13. El departamento de marketing ha notado que la imagen del primer curso, el de JavaScript Moderno, tiene una tasa de clics muy baja. Han proporcionado una nueva imagen en la ruta 'img/hacer4.jpg' que debemos usar como reemplazo. Actualiza la imagen de ese curso en específico.
const primeraImagen = document.querySelector('.card img');
if (primeraImagen) {
  primeraImagen.src = 'img/hacer4.jpg';
}