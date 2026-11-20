// 16. El botón en la tarjeta premium es nuestro punto de partida. Desde él, navega por el DOM hacia arriba hasta encontrar el contenedor que agrupa toda su información (un div con la clase 'info').

  const botonPremium = document.getElementById('btn-info-premium');
  if (botonPremium) {
    console.log('Ejercicio 16:', botonPremium.parentElement);
  }