export function crearProducto(nombre, categoria, precio, stock){

return {nombre,categoria,precio,stock}

}

export function filtrarPorCategoria(inventario, categoria){

return inventario.filter(producto => producto.categoria == categoria)

}

export function listarProductosAgotados(inventario){

return inventario.filter(producto => producto.stock === 0)

}

export function calcularValorTotalInventario(inventario){

return inventario.reduce((total,producto) => {

return total += (producto.precio * producto.stock)

}, 0)

}

export default function resumenInventario(inventario){

    const totalProductos = inventario.length

    const categoriasDistintas = new Set(

        inventario.map(producto => producto.categoria)

    ).size

    const ValorTotal = calcularValorTotalInventario(inventario)

    console.log("Numero total de productos:" , totalProductos)
    console.log("Número de categorías distintas:" , categoriasDistintas)
    console.log("Valor Total: " , ValorTotal)

}