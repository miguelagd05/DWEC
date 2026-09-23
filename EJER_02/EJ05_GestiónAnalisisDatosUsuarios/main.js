import mostrarPerfil, { crearPerfil } from "./gestorUsuarios";

const usuario1 = crearPerfil("Chema", "chema12345@gmail.com",21)
const usuario2 = crearPerfil("Pedro","pedro985@gmail.com",30)

const usuarios = [
    
crearPerfil("Chema", "chema12345@gmail.com",21),
crearPerfil("Pedro","pedro985@gmail.com",30),
crearPerfil("Nel", "nel945@gmail.com",29)    

]

usuarios.forEach(usuario => {

    usuarios.forEach(usuario => {
        console.log(mostrarPerfil(usuario))
    })
})

import { esMayorDeEdad } from "./gestorUsuarios";

import { obtenerMayoresDeEdad } from "./gestorUsuarios";

import { calcularPromedioEdad } from "./gestorUsuarios";