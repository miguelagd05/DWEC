// ================================================================
// RETO 4 · PILA Y COLA CON ARRAYS                   (escribir funciones)
// ================================================================

// 4.1 atenderTurnos
export const atenderTurnos = (cola, cantidad) => {

  const atendidos = []

  while(atendidos.length < cantidad && cola.length > 0 ){
    atendidos.push(cola.shift())
    return atendidos
  }

};

// 4.2 deshacerUltimas
export const deshacerUltimas = (historial, cantidad) => {
 
const deshechas = []

 while(deshechas.length < cantidad && historial.length > 0 ){
    deshechas.push(historial.pop())
    return deshechas
  }
};
