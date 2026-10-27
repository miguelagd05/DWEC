// 22. El formulario de contacto debe ser funcional. Evita que la página se recargue al enviarlo y, en su lugar, captura los valores de los campos de nombre y mensaje y muéstralos en la consola.

  const formulario = document.getElementById('formulario-contacto');
  if (formulario) {
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const mensaje = document.getElementById('mensaje').value;
      console.log('Ejercicio 22: Nombre:', nombre, 'Mensaje:', mensaje);
    });
  }