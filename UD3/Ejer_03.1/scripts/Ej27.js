// 27. Queremos aplicar un estilo especial a los cursos estándar. Filtra la lista de tarjetas para obtener solo aquellas que NO son 'premium'. A las tarjetas resultantes, aplícales un borde punteado de 2px de color negro.

  const todasLasTarjetas = document.querySelectorAll('.card');
  const tarjetasNoPremium = Array.prototype.filter.call(todasLasTarjetas, function(tarjeta) {
    return !tarjeta.classList.contains('premium');
  });
  tarjetasNoPremium.forEach(function(tarjeta) {
    tarjeta.style.border = '2px dotted black';
  });