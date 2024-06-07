import { getTask } from "./mostrarDatos";
import { deleteTask } from "./eliminarTask";
import { elementos } from "./agregarElementos";

//import { reconocerIcono } from "./index";
let arrayIconos  = [];
let check = document.querySelector(".contador");

var boleano = "";

async function Recargar() {

    //Hace que la pagina borre lo que tenia antes de ser actualizada, y agrega los que ya 
    let divTasks = document.querySelector(".grupo");
    if (divTasks.innerHTML != "") {
        console.log("xdddd");
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
    
            //Crear el checkbox
            let checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.id= tasks[key].id
            checkBox.className = "checkbox";
            
            // checkBox.checked = tasks[key].status;
            // console.log(task[key].status)
            

            checkBox.addEventListener("click",()=>{
                if (checkBox.checked) {
                     check.textContent++;

                }else{
                    check.textContent--;
                   
                };
            });
            

            // Crear el texto
            let taskTexto = document.createElement("p");
            taskTexto.className = "taskTexto";
            taskTexto.innerHTML = task+"<br>"+area;
    
            // Crear el iconoo
            let icono = document.createElement("img");
            icono.id =tasks[key].id
            icono.className = "icono";
    
            icono.src = "https://thumbs.dreamstime.com/b/icono-rojo-de-la-l%C3%ADnea-papelera-reciclaje-en-fondo-blanco-ilustraci%C3%B3n-vectores-estilo-plano-171177844.jpg";
    
            //Añadir los elementos al contenedor
            container.appendChild(checkBox);
            container.appendChild(taskTexto);
            container.appendChild(icono);
    
            divTasks.appendChild(container);
            
            //Añade los elementos donde estan añadidos los iconos:
            arrayIconos.push(icono);


            if (tasks[key].status == true) {
                console.log("jaja no")
                checkBox.checked = true;
            };
        };
    };
    
    //Retorna los elementos de los iconos, que son las 
    //imagenes para que me lo reconzaca el for que los recorre.
    return arrayIconos;
};


async function putTask(evento) {
    
    //Extraigo el ID desde el evento del la funcion, para despues agregarlo en el getElementId,
    //para luego tomarlos como referencia al agregarlo al HTML con el appendChild
    
    let idString = evento.currentTarget.getAttribute("id");

    let tasks = await getTask();

    //Esto hace que verifique si el elemento ya estaba checkeado, se recorren con un for  
    //y capta el elemento desde la api y lo cambia segun su status. 
    
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
};


export {Recargar}
export { putTask }