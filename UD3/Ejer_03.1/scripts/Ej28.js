// 28. Necesitamos una lista limpia con los nombres de las categorías para nuestro sistema de analítica. Genera un array que contenga únicamente el texto de cada párrafo de categoría y muéstralo en la consola.

  const categorias = document.querySelectorAll('.categoria');
  const nombresCategorias = Array.prototype.map.call(categorias, function(categoria) {
    return categoria.textContent;
  });
  console.log('Ejercicio 28:', nombresCategorias);