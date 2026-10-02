import { crearProducto } from "./inventario";
import { filtrarPorCategoria } from "./inventario";
import { listarProductosAgotados } from "./inventario";
import { calcularValorTotalInventario } from "./inventario";
import resumenInventario from "./inventario";

const inventario = [

crearProducto("Auriculares Bluetooth","Electronica",30,90),
crearProducto("Sofá","Mueble",100,0),
crearProducto("Camisa Vans","Ropa",90,15),
crearProducto("Pantalón Calvin Klein","Ropa",200,0),
crearProducto("El último deseo","Libro",50,2),
crearProducto("Persona 5 Royal", "Videojuegos",30,0)

]

console.log(filtrarPorCategoria(inventario,"Ropa")),
console.log(listarProductosAgotados(inventario)),
console.log(calcularValorTotalInventario(inventario)),
console.log(resumenInventario(inventario))