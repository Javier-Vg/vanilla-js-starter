import { getTask } from "./mostrarDatos";

async function Recargar() {

    let divTasks = document.querySelector(".grupo");
    let tasks = await getTask();
    
    for (const key in tasks) {
        let task = tasks[key].task;
        let area = tasks[key].area;
        
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
        taskTexto.innerHTML = task+"<br>"+area;

        // Crear el iconoo
        let icono = document.createElement("img");
        icono.className = "icono";
        icono.src = "https://thumbs.dreamstime.com/b/icono-rojo-de-la-l%C3%ADnea-papelera-reciclaje-en-fondo-blanco-ilustraci%C3%B3n-vectores-estilo-plano-171177844.jpg";

        // Añadir los elementos al contenedor
        container.appendChild(checkbox);
        container.appendChild(taskTexto);
        container.appendChild(icono);

        divTasks.appendChild(container);
        console.log("aaAAA")
    };
};

export {Recargar}