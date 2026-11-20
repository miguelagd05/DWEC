  //21. El botón de la tarjeta premium debe tener una funcionalidad. Haz que, al pulsarlo, se dispare una alerta del navegador con el mensaje: 'Accediendo a información exclusiva para miembros premium'.
  
  const botonPremium = document.getElementById('btn-info-premium');
  if (botonPremium) {
    botonPremium.addEventListener('click', function() {
      alert('Información exclusiva para miembros premium');
    });
  }