// ================================================================
// RETO 3 · MÉTODOS DE ARRAY                         (escribir funciones)
// ================================================================

// 3.1 nombresCaros
export const nombresCaros = (productos, minimo) => {
  productos
  .filter((producto) => producto.precio >= minimo)
  .map((producto => producto.nombre))
  .sort((a,b) => a.localeCompare(b,'es'))
};

// 3.2 totalInventario
export const totalInventario = (productos) => {

  productos.reduce((total, { precio,unidades}) => total + precio * unidades,0)

};

// 3.3 agruparPorCategoria
export const agruparPorCategoria = (productos) => {

productos.reduce((grupos, { categoria,nombre } ) => ({...grupos, [categoria]??), []}))

};

// 3.4 productoMasBarato
export const productoMasBarato = (productos) => {
  
  productos.reduce((barato,producto) => barato === undefined || producto.precio < barato.precio ? producto: barato,undefined)
};

// 3.5 hayAgotados
export const hayAgotados = (productos) => productos.some((producto) => producto.unidades === 0){

};
