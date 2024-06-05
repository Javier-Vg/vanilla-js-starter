import { getTask } from "./mostrarDatos";
import { deleteTask } from "./eliminarTask";
//import { reconocerIcono } from "./index";
let acum = 0;
let arrayIconos  = [];

async function Recargar() {
    let divTasks = document.querySelector(".grupo");

    if (divTasks.innerHTML != "") {
        divTasks.innerHTML = "";
    }else{

        let tasks = await getTask();
        
        for (const key in tasks) {
            let task = tasks[key].task;
            let area = tasks[key].area;
            
            // Crear el contenedor
            let container = document.createElement("div");
            container.id= tasks[key].id
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
            icono.id =tasks[key].id
            icono.className = "icono";
    
            icono.src = "https://thumbs.dreamstime.com/b/icono-rojo-de-la-l%C3%ADnea-papelera-reciclaje-en-fondo-blanco-ilustraci%C3%B3n-vectores-estilo-plano-171177844.jpg";
    
            // Añadir los elementos al contenedor
            container.appendChild(checkbox);
            container.appendChild(taskTexto);
            container.appendChild(icono);
    
            divTasks.appendChild(container);
            
            //Añade los elementos donde estan añadidos los iconos:
            arrayIconos.push(icono);
        };

    };

    //reconocerIcono()

    //Retorna los elementos de los iconos, que son las 
    //imagenes para que me lo reconzaca el for que los recorre.
    return arrayIconos;
};


export {Recargar}