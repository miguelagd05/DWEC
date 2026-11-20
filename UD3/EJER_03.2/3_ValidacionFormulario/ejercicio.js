
// ================================================================
// 1. GENERAR INFORME DE VALIDACIÓN
// ================================================================

function generarInformeDeValidacion() {

  // Seleccionamos los inputs y obtenemos sus valores.
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;

  // Seleccionamos el div donde aparecerán los errores.
  const informe = document.getElementById('informe-errores');

  // Vaciamos el contenido anterior.
  informe.innerHTML = '';

  // Variable para saber si hay errores.
  let errores = false;


  // ==============================================================
  // 2. COMPROBAR EL NOMBRE
  // ==============================================================

  // Si el nombre tiene 3 caracteres o menos, es incorrecto.
  if (nombre.length <= 3) {

    // Creamos un párrafo nuevo.
    const p = document.createElement('p');

    // Escribimos el mensaje de error.
    p.textContent = 'El nombre es incorrecto';

    // Añadimos el párrafo al div de errores.
    informe.appendChild(p);

    errores = true;
  }


  // ==============================================================
  // 3. COMPROBAR EL EMAIL
  // ==============================================================

  // includes() comprueba si el texto contiene una @.
  if (!email.includes('@')) {

    const p = document.createElement('p');

    p.textContent = 'El email es incorrecto';

    informe.appendChild(p);

    errores = true;
  }


  // ==============================================================
  // 4. MOSTRAR EL RESULTADO FINAL
  // ==============================================================

  // Si no hay errores, el formulario es válido.
  if (!errores) {

    const p = document.createElement('p');

    p.textContent = 'Formulario válido';

    p.classList.add('valido');

    informe.appendChild(p);

  }

}
