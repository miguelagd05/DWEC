// Array donde vamos a guardar todos los empleados
// Cada empleado tendrá: id, nombre, departamento y salario
const empleados = [];

// Función para añadir un nuevo empleado al array
function agregarEmpleado(empleado) {
    empleados.push(empleado);
}

// Función para eliminar un empleado utilizando su id
function eliminarEmpleado(id) {

    // Buscamos la posición (índice) del empleado cuyo id coincida
    const indice = empleados.findIndex(
        empleado => empleado.id === id
    );

    // Si el empleado existe, lo eliminamos del array
    // splice(posición, cantidad)
    if (indice !== -1) {
        empleados.splice(indice, 1);
    }
}

// Función para buscar empleados de un departamento concreto
function buscarPorDepartamento(departamento) {

    // filter() crea un nuevo array con los empleados
    // cuyo departamento coincide con el indicado
    return empleados.filter(
        empleado => empleado.departamento === departamento
    );
}

// Función para calcular el salario medio de todos los empleados
function calcularSalarioPromedio() {

    // Si no hay empleados, devolvemos 0
    // para evitar dividir entre cero
    if (empleados.length === 0) {
        return 0;
    }

    // reduce() suma todos los salarios
    const totalSalarios = empleados.reduce(
        (total, empleado) => {
            return total + empleado.salario;
        },
        0 // Valor inicial del acumulador
    );

    // Dividimos la suma de los salarios
    // entre el número total de empleados
    return totalSalarios / empleados.length;
}

// Función para obtener los empleados ordenados
// de mayor a menor salario
function obtenerEmpleadosOrdenadosPorSalario() {

    // [...empleados] crea una copia del array original
    // para no modificar el array empleados
    return [...empleados].sort((a, b) => {

        // Si b tiene un salario mayor, aparecerá primero
        return b.salario - a.salario;
    });
}

export {
    agregarEmpleado,
    eliminarEmpleado,
    buscarPorDepartamento,
    calcularSalarioPromedio,
    obtenerEmpleadosOrdenadosPorSalario
}