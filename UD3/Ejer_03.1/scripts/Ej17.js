// 17. Encuentra el título `h2` que se encuentra dentro de la tarjeta del curso premium.

 const premiumCard = document.querySelector('.premium');
  if (premiumCard) {
    const h2 = premiumCard.querySelector('h2');
    console.log('Ejercicio 17:', h2);
  }