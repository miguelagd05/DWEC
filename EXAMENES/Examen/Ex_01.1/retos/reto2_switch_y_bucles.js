// ================================================================
// RETO 2 · switch Y BUCLES                          (escribir funciones)
// ================================================================


// 2.1 descuentoPorCategoria
export const descuentoPorCategoria = (categoria) => {
  switch(categoria){

    case 'estudiante':
    case 'jubilado':
      return 0.2;
      break;
    case 'familiaNumerosa':
      return 0.3;
      break;
      case 'socio':
        return 0.1;
        break;
        default:
          return 0;
  }
};

// 2.2 sumarHastaLimite
export const sumarHastaLimite = (numeros, limite) => {
  let suma = 0;

  for(let i = 0; i < numeros.length; i++){
    const numero = numeros[i];
    if(typeof numero != 'number' || Number.isNaN(numero) || numero < 0)
      continue
    if(suma + numero > limite )
      break;
    suma += numero;
  }
  return suma;
};

// 2.3 contarVocales
export const contarVocales = (texto) => {
  let total = 0;
  for(const letra of texto.toLowerCase()){
    
  }
};
