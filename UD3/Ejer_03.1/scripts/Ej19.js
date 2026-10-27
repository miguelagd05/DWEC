//19. Comienza en el primer `div` de información (`.info`). Desde ahí, sube a su elemento padre (la tarjeta) y, una vez ahí, desciende para encontrar el primer elemento hijo de esa tarjeta, que debería ser la imagen

 const primerInfo = document.querySelector('.info');
  if (primerInfo && primerInfo.parentElement) {
    const imagen = primerInfo.parentElement.firstElementChild;
    console.log('Ejercicio 19:', imagen);
  }