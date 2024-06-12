// Declaro la variable tareas como un array de objetos
let tareas = [];

// Función para agregar una tarea
const agregarTarea = () => {
    let nombreTarea;
    let estadoTarea;

    do {
        nombreTarea = prompt("Ingrese el nombre de la tarea:");
        if (nombreTarea === null) return; // Si el usuario cancela, salir de la función
        if (nombreTarea.trim() === "") {
            alert("Por favor, ingrese un nombre válido para la tarea.");
        } else if (tareas.find(task => task.nombre.toLowerCase() === nombreTarea.toLowerCase())) {
            alert("Esta tarea ya existe. Por favor, ingrese una tarea diferente.");
            nombreTarea = ""; // Limpiar el nombre para que el bucle se repita y vuelva a solicitar una tarea
        }
    } while (nombreTarea.trim() === "");

    // Convertir la primera letra a mayúscula y el resto a minúscula
    nombreTarea = nombreTarea.charAt(0).toUpperCase() + nombreTarea.slice(1).toLowerCase();

    // Solicitar el estado de la tarea
    do {
        estadoTarea = prompt("¿La tarea está completada? (si/no):").toLowerCase();
        if (estadoTarea === null) return; // Si el usuario cancela, salir de la función
        if (estadoTarea !== "si" && estadoTarea !== "no") {
            alert("Por favor, ingrese 'si' o 'no'.");
        }
    } while (estadoTarea !== "si" && estadoTarea !== "no");

    const completada = (estadoTarea === "si");

    // Crear el objeto tarea
    const nuevaTarea = {
        nombre: nombreTarea,
        completada: completada
    };

    tareas.push(nuevaTarea);
    alert(`Tarea "${nombreTarea}" agregada correctamente.`);
}

// Función para listar las tareas
const listarTareas = () => {
    if (tareas.length === 0) {
        alert('No hay tareas para mostrar.');
    } else {
        let lista = 'Lista de tareas:\n';
        tareas.forEach((tarea, index) => {
            lista += `${index + 1}. ${tarea.nombre} - ${tarea.completada ? "Completada" : "Pendiente"}\n`;
        });
        alert(lista);
    }
}

// Función para eliminar una tarea
const eliminarTarea = () => {
    if (tareas.length === 0) {
        alert('No hay tareas para eliminar.');
        return; // Salir de la función si no hay tareas
    }

    listarTareas();
    const index = parseInt(prompt('Ingrese el número de la tarea a eliminar (según la lista mostrada):'));

    if (isNaN(index) || index < 1 || index > tareas.length) {
        alert('Debe ingresar un número válido de tarea a eliminar.');
    } else {
        const deletedTask = tareas.splice(index - 1, 1);
        alert(`Tarea "${deletedTask[0].nombre}" eliminada correctamente.`);
        listarTareas(); // Mostrar la lista actualizada de tareas después de eliminar una tarea
    }
}

// Función para modificar el estado de una tarea
const modificarEstadoTarea = () => {
    if (tareas.length === 0) {
        alert('No hay tareas para modificar.');
        return; // Salir de la función si no hay tareas
    }

    listarTareas();
    const index = parseInt(prompt('Ingrese el número de la tarea a modificar (según la lista mostrada):'));

    if (isNaN(index) || index < 1 || index > tareas.length) {
        alert('Debe ingresar un número válido de tarea a modificar.');
    } else {
        let nuevoEstado;
        do {
            nuevoEstado = prompt("¿La tarea está completada? (si/no):").toLowerCase();
            if (nuevoEstado === null) return; // Si el usuario cancela, salir de la función
            if (nuevoEstado !== "si" && nuevoEstado !== "no") {
                alert("Por favor, ingrese 'si' o 'no'.");
            }
        } while (nuevoEstado !== "si" && nuevoEstado !== "no");

        tareas[index - 1].completada = (nuevoEstado === "si");
        alert(`Tarea "${tareas[index - 1].nombre}" actualizada correctamente.`);
        listarTareas(); // Mostrar la lista actualizada de tareas después de modificar el estado
    }
}

// Función principal para organizar las tareas
const organizador = () => {
    let opcion;
    while (opcion !== 'e') {
        opcion = prompt('Vamos a organizar tus tareas diarias.\nIngresa la letra de lo que quieras hacer:\na. Agregar tarea\nb. Listar tareas\nc. Eliminar tarea\nd. Modificar estado de tarea\ne. Salir').toLowerCase(); // Convertir la entrada del usuario a minúsculas

        switch(opcion) {
            case 'a':
                agregarTarea(); // Llamamos directamente a agregarTarea sin pasar parámetros
                break;
            case 'b':
                listarTareas();
                break;
            case 'c':
                eliminarTarea(); // No es necesario pasar un parámetro
                break;
            case 'd':
                modificarEstadoTarea(); // No es necesario pasar un parámetro
                break;
            case 'e':
                alert('Saliendo del programa... ¡Que tengas un buen día!');
                break;
            default:
                alert('Opción inválida. Por favor, selecciona una opción válida.');
        }
    }
}

// Ejecutar la función principal
organizador();
