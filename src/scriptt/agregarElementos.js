import { extraerDatos } from "./agregarDatos";

//Esto hace que se actualize cuando integre otro dato, no me agrega el anterior
//getTask();
let inputsChecks = [];
function elementos() {
    //ESPORTA LOS INPUTSSS
    async function Esperar() {

        console.log("entro a funcion")

        let datoRecientes = extraerDatos();
        if (datoRecientes == false) {
            alert("Escriba los datos en los input");
        }else{
            let divTasks = document.querySelector(".grupo");

            let task = datoRecientes[0];
            let area = datoRecientes[1];

            console.log(task)
            
            // Crear el contenedor
            let container = document.createElement("div");     
            container.className = "containerTarea";

            // Crear el checkbox
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "checkbox";

            // Crear el input para cambiar tassk
            let change = document.createElement("input");
            change.type = "text";
            change.className = "change";
            change.style.display = "none";

            // Crear el boton para mostar el input y cambiarlor
            let btn = document.createElement("button");
            btn.type = "text";
            btn.className = "btnCambiar";
            btn.textContent = "Change";

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
            container.appendChild(change);
            container.appendChild(icono);
            
            divTasks.appendChild(container);

            //inputsChecks.push(checkbox)
        }

        window.location.reload();
    }
    Esperar();
    return inputsChecks;
};

export {elementos}