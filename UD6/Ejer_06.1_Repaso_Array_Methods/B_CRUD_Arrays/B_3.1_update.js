const tareas = [
  { id: 1, descripcion: "Comprar suministros de oficina", completada: false },
  { id: 2, descripcion: "Revisar código del proyecto Beta", completada: true },
  { id: 3, descripcion: "Planificar reunión semanal", completada: false },
  { id: 4, descripcion: "Responder correos urgentes", completada: false }
];

//========== Ejercicio ========== 

consttareaActualizadas = tareas.map(tarea =>{

    if (tarea.id === 4){
        return{
            ...tarea,
            completada: true
        };
    } 

return tarea;

});

console.log(tareasActualizadas);
