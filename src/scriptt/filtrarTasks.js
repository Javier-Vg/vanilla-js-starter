import { getTask } from "./mostrarDatos";
import { funcionalidad } from "./index";


async function filtrar(input) {
    let divTasks = document.querySelector(".grupo");

    //Se borra para solo dejar a los 
    divTasks.innerHTML = "";

    let tasks = await getTask();
    

    let check = document.querySelector(".contador");
    //input.toLowerCase();

    tasks.forEach(areaTask => {
        console.log(areaTask);
        //let areaaa = areaTask.area;
        //areaaa.toLowerCase();
        if (areaTask.area.toLowerCase() == input.toLowerCase()) {

            let task = areaTask.task;
            let area = areaTask.area;
            
            // Crear el contenedor
            let container = document.createElement("div");
            container.id= areaTask.id
            container.className = "containerTarea";
    
            //Crear el checkbox
            let checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.id= areaTask.id
            checkBox.className = "checkbox";
            if (areaTask.status == true) {
                checkBox.checked = true;
            }
        
            checkBox.addEventListener("click",()=>{
                if (checkBox.checked) {
                     check.textContent++;

                }else{
                    if (check.textContent != 0) {
                        check.textContent--;
                    }
                };
            });
            
            // Crear el texto
            let taskTexto = document.createElement("p");
            taskTexto.className = "taskTexto";
            taskTexto.innerHTML = task+"<br>"+area;
            taskTexto.id= areaTask.id;

            // Crear el boton para mostar el input y cambiarlor
            let btn = document.createElement("button");
            btn.type = "text";
            btn.className = "btnCambiar";
            btn.textContent = "Change"
            btn.id= areaTask.id;
    
            // Crear el iconoo
            let icono = document.createElement("img");
            icono.id =areaTask.id;
            icono.className = "icono";
            icono.src = "https://thumbs.dreamstime.com/b/icono-rojo-de-la-l%C3%ADnea-papelera-reciclaje-en-fondo-blanco-ilustraci%C3%B3n-vectores-estilo-plano-171177844.jpg";
    
            //Añadir los elementos al contenedor
            container.appendChild(checkBox);
            container.appendChild(taskTexto);
            container.appendChild(btn);
            container.appendChild(icono);
           
            divTasks.appendChild(container);
        }
    });
    
    if (divTasks.textContent == "") {
        alert("No hubieron tareas con esa area.")
        window.location.reload();
    }

    //Se llama a la funcion que contiene 
    funcionalidad()
}

//Depende del parametro enviado, se ejecutara ese filtrado de tareas ( terminadas y no terminadas ).
function FiltradoAlternado(boleano) {
    if (boleano = true) {
        
    }else{
        
    }
}


export {filtrar}