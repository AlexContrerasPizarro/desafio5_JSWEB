const tareas = [
    {
        id: 1,
        nombre: "Ver clase anterior",
        completado: false
    },

    {
        id: 2,
        nombre: "Repasar la materia ",
        completado: false
    },
    {
        id: 3,
        nombre: "Trabajar en el desafio",
        completado: false
    }
];

const botonAgregar = document.getElementById('botonAgregar');
const inputTarea = document.getElementById('nuevaTarea');
const listaTareas = document.getElementById('tablaTareas');
const totalTareas = document.getElementById('total');
const tareasRealizadas = document.getElementById('realizadas');
let identificador = tareas.length + 1;
let contadorRealizadas = 0;

const renderTareas = () => {
    let html = "";

    for (let tarea of tareas) {
        inputTarea.value = "";
        html += `
        <tr>
        <td>${tarea.id}</td> 
        <td>${tarea.nombre} </td>
        <td><input type="checkbox" onclick="check(${tarea.id})"> </td>
        <td><button class = "botonBorrar"
        onclick="borrar(${tarea.id})"> x </button> </td>
        </tr>`;
    }
    listaTareas.innerHTML = html;
    totalTareas.innerHTML = `${tareas.length}`;
};

botonAgregar.addEventListener('click', () => {
    const nuevaTarea = { id: identificador, nombre: inputTarea.value, completado: false }
    tareas.push(nuevaTarea)
    identificador++;

    if (inputTarea.value === "") {
        alert("NO ha ingresado una tarea");
        tareas.pop();
    } else {
        renderTareas();
    }
});

const borrar = (id) => {
    const index = tareas.findIndex((ele) => ele.id === id);
    tareas.splice(index, 1);
    renderTareas();
};

const check = (id) => {
    const indice = tareas.findIndex((e) => e.id === id)
    if (tareas[indice].completado === false) {
        tareas[indice].completado = true;
        contadorRealizadas += 1;
    } else {
        tareas[indice].completado = false;
        contadorRealizadas -= 1;
    }
    tareasRealizadas.innerHTML = `${contadorRealizadas}`;
};

window.onload = () => {
    renderTareas();
};



