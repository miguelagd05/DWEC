// 31. Hay una oferta especial para el curso de React. Localiza su tarjeta y, buscando solo dentro de ella, encuentra el párrafo oculto para añadirle el texto ' (¡Oferta especial!)' al final.

  const tarjetas = document.querySelectorAll('.card');
  tarjetas.forEach(function(tarjeta){
      const h2 = tarjeta.querySelector('h2');
      if(h2 && h2.textContent.includes('React')){
          const parrafoOculto = tarjeta.querySelector('.oculto');
          if(parrafoOculto){
              parrafoOculto.textContent += ' (¡Oferta especial!)';
          }
      }
  });