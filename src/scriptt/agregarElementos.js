
import { getTask } from "./mostrarDatos";

function elementos() {

    //Esto hace que se actualize cuando integre otro dato, no me agrega el anterior 
    getTask();

    async function Esperar() {

        let divTasks = document.querySelector(".grupo");

        let TaskInfo = await getTask();

        //Esto es para extraer del json (api) la task y la area.
        let ultimoIndice = TaskInfo.pop();

        //Itera solo el ultimo elemtno del JSOn, y agrega el elemento:
        for (const key in ultimoIndice) {
            let task = ultimoIndice.task;
            let area = ultimoIndice.area;
            
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

            //  console.log(JSON.stringify(task));
            //  console.log(JSON.stringify(area));
            
            break;
        }
    }
    Esperar();
};

export {elementos}