// 20. Localiza el segundo enlace del menú. Tu objetivo es, partiendo de él, llegar hasta el título `<h1>` principal de la cabecera y cambiar su color a naranja.

  const segundoEnlace = document.querySelector('.navegacion a:nth-child(2)');
  if (segundoEnlace && segundoEnlace.parentElement && segundoEnlace.parentElement.previousElementSibling) {
    segundoEnlace.parentElement.previousElementSibling.style.color = 'orange';
  }