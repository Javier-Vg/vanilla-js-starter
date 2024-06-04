function elementos() {
    let divTasks = document.querySelector(".grupo");

    // Crear el contenedor
    let container = document.createElement("div");
    container.className = "containerTarea";

    // Crear el checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";

    // Crear el texto
    let taskTexto = document.createElement("p");
    taskTexto.className = "taskTexto";
    taskTexto.innerText = "Esto deberian ser las tareas pero bueeeeenoooo";

    // Crear el icono
    let icono = document.createElement("img");
    icono.className = "icono";
    icono.src = "/iconos/basura.png";

    // Añadir los elementos al contenedor
    container.appendChild(checkbox);
    container.appendChild(taskTexto);
    container.appendChild(icono);
    divTasks.appendChild(container);
};

export {elementos}