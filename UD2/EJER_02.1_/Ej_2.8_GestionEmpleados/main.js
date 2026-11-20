import {
    agregarEmpleado,
    eliminarEmpleado,
    buscarPorDepartamento,
    calcularSalarioPromedio,
    obtenerEmpleadosOrdenadosPorSalario
} from "./empleados.js"

    agregarEmpleado({
        id: 1,
        nombre: "Ana García",
        departamento: "Informática",
        salario: 28000
    })
    
    agregarEmpleado({
        id: 2,
        nombre: "Carlos López",
        departamento: "Recursos Humanos",
        salario: 25000
    })
    agregarEmpleado({
        id: 3,
        nombre: "María Fernández",
        departamento: "Informática",
        salario: 32000
    }),
    agregarEmpleado({
        id: 4,
        nombre: "Javier Martín",
        departamento: "Ventas",
        salario: 27000
    }),
    agregarEmpleado({
        id: 5,
        nombre: "Laura Sánchez",
        departamento: "Marketing",
        salario: 30000
    }),
    agregarEmpleado({
        id: 6,
        nombre: "Pablo Rodríguez",
        departamento: "Ventas",
        salario: 29000
    }),
    agregarEmpleado({
        id: 7,
        nombre: "Lucía Gómez",
        departamento: "Recursos Humanos",
        salario: 26000
    }),
    agregarEmpleado({
        id: 8,
        nombre: "Daniel Torres",
        departamento: "Informática",
        salario: 35000
    })

    console.log(buscarPorDepartamento("Recursos Humanos"))

    console.log("Salario promedio: " , calcularSalarioPromedio())

    console.log("Empleados por orden salarial: " , obtenerEmpleadosOrdenadosPorSalario())