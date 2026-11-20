  
  // 23. Hay información oculta en la tarjeta del curso de React. Implementa una funcionalidad para que, al hacer clic en el título de ESE curso, el párrafo oculto se vuelva visible.
  
  const cards = document.querySelectorAll('.card');
  const tercerCard = cards[2]; 
  if(tercerCard){
    const h2React = tercerCard.querySelector('h2');
    const parrafoOculto = tercerCard.querySelector('.oculto');
    if (h2React && parrafoOculto) {
      h2React.addEventListener('click', function() {
        parrafoOculto.classList.remove('oculto');
      });
    }
  }