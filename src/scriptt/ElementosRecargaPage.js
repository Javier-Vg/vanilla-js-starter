import { getTask } from "./mostrarDatos";
import { deleteTask } from "./eliminarTask";
import { elementos } from "./agregarElementos";

//import { reconocerIcono } from "./index";
let arrayIconos  = [];
let check = document.querySelector(".contador");
//let contenedores = document.querySelector(".containerTarea");
let divTasks = document.querySelector(".grupo");

async function Recargar() {
    let divTasks = document.querySelector(".grupo");
    //Hace que la pagina borre lo que tenia antes de ser actualizada, y agrega los que ya 
    if (divTasks.innerHTML != "") {
        divTasks.innerHTML = "";
    }else {
        //noTaskTitulo.style.display = "none";
        let tasks = await getTask();
        
        for (const key in tasks) {
            let task = tasks[key].task;
            let area = tasks[key].area;
            
            // Crear el contenedor
            let container = document.createElement("div");
            container.id= tasks[key].id
            container.className = "containerTarea";
    
            //Crear el checkbox
            let checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.id= tasks[key].id
            checkBox.className = "checkbox";
            if (tasks[key].status == true) {
                check.textContent++;
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
            taskTexto.id= tasks[key].id;

            // Crear el boton para mostar el input y cambiarlor
            let btn = document.createElement("button");
            btn.type = "text";
            btn.className = "btnCambiar";
            btn.textContent = "Change"
            btn.id= tasks[key].id;
    
            // Crear el iconoo
            let icono = document.createElement("img");
            icono.id =tasks[key].id;
            icono.className = "icono";
            icono.src = "https://thumbs.dreamstime.com/b/icono-rojo-de-la-l%C3%ADnea-papelera-reciclaje-en-fondo-blanco-ilustraci%C3%B3n-vectores-estilo-plano-171177844.jpg";
    
            //Añadir los elementos al contenedor
            container.appendChild(checkBox);
            container.appendChild(taskTexto);
            container.appendChild(btn);
            container.appendChild(icono);
           
    
            divTasks.appendChild(container);
            
            //Añade los elementos donde estan añadidos los iconos:
            arrayIconos.push(icono);

            if (tasks[key].status == true) {

                console.log("jaja no")
                checkBox.checked = true;
            };
        };  

        if (divTasks.textContent == "") {
            // Crea el mensaje que no hay tareas
            let h = document.createElement("h1");
            h.className = "noTaskH1";
            h.textContent = "No existen tareas."
            divTasks.appendChild(h); 
        };    
    };
};

//En caso de haber algo dentro del div que contiene las tareas, el mensaje desaparece:
if(divTasks.textContent != ""){
    let p =document.querySelector(".noTaskH1");
    p.remove();
}

async function putTask(evento) {
    
    //Extraigo el ID desde el evento del la funcion, para despues agregarlo en el getElementId,
    //para luego tomarlos como referencia al agregarlo al HTML con el appendChild
    
    let idString = evento.currentTarget.getAttribute("id");

    let tasks = await getTask();

    //Esto hace que verifique si el elemento ya estaba checkeado, se recorren con un for  
    //y capta el elemento desde la api y lo cambia segun su status. El status es lo unico que cambia en la estructura PUT
    
    for (const key in tasks) {
        if (tasks[key].id == idString) {
            
            if (tasks[key].status == true) {
                try {
                    console.log("puttt f");
                    const response = await fetch('http://localhost:3000/api/task/'+ idString, {
                      method: 'PUT',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        status: false
                      })
                    });
                    
                }catch(error) {
                    console.log("error");
                }
                
            }else{
                try {
                    console.log("puttt t");
                    const response = await fetch('http://localhost:3000/api/task/'+ idString, {
                      method: 'PUT',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        status: true
                      })
                    });
                    
                }catch(error) {
                    console.log("error");
                }
            }
        }
    }
}

export {Recargar}
export { putTask }