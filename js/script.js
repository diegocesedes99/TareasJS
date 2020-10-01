let tareas =[];
const datosLocalStorage = localStorage.getItem('tareas');
if(datosLocalStorage !== null){
    tareas = JSON.parse(datosLocalStorage);
}
let contadorTareas = 0;
function addTask(nombre,fecha,completo){
    const miTarea = {
        id: contadorTareas,
        nombre: nombre,
        completo: completo,
        fecha: fecha,
    };
    tareas.push(miTarea);
    contadorTareas++;
    appendTaskDOM(tareas);
    localStorage.setItem('tarea', JSON.stringify(tareas));
    console.log(tareas);
}
const lista = document.getElementById('task-list');
function appendTaskDOM(tarea){
    const item = document.createElement('li');
    item.className = 'task-list_item';
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    checkbox.setAttribute('id',`tarea-${tarea.id}`);
    const label = document.createElement('label');
    label.setAttribute('for', `tarea-${tarea.id}`);
    label.innerHTML = `${tarea.nombre}-${tarea.fecha}`;
    item.appendChild(checkbox);
    item.appendChild(label);
    lista.appendChild(item);
}
for(let i = 0; i < tareas.length; i++){
    appendTaskDOM(tareas[i]);
}
const formulario = document.getElementById('new-task-form');
formulario.addEventListener('submit',(event) => {
    event.preventDefault();
    addTask(formulario.elements[0].value, formulario.elements[1].value, false);
    formulario.elements[0].value = '';
    formulario.elements[1].value = '';
})