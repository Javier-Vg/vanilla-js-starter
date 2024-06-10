import { getTask } from "./mostrarDatos";

let arrayIconos  = [];

//Estraigo desde el DOM a los contenedores de los elementos:
let check = document.querySelector(".contador");
let divTasks = document.querySelector(".grupo");

//Esta funcion "Recargar" hace que los elementos que estan en la API se agreguen cuando se refrezque la pagina
async function Recargar() {
    divTasks.innerHTML != ""
    //Hace que la pagina borre lo que tenia antes de ser actualizada, y agrega lo que ya tenia en el API
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
        checkBox.id= tasks[key].id;
        checkBox.className = "checkbox";
        if (tasks[key].status == true) {
            check.textContent++;
        }
        //Recupera los checkbox que estaban check y los cuenta cuando se refrezca la page.
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
        taskTexto.innerHTML = task+"<br><b>Area: "+area;
        taskTexto.id= tasks[key].id;

        let btn = document.createElement("img");
        btn.src = "https://i.pinimg.com/736x/dc/4b/0f/dc4b0fe20cd9ee99456325d04185bc9e.jpg"
        btn.className = "btnCambiar";
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

        //En caso que anteriormente estuvieron checkados, se busca por medio de la palabra clave del api: "status", y si estan true, los checkea.
        if (tasks[key].status == true) {

            checkBox.checked = true;
        };
    };  

    //En caso que no haber tareas, añade un texto.
    if (divTasks.textContent == "") {
        // Crea el mensaje que no hay tareas
        let h = document.createElement("h1");
        h.className = "noTaskH1";
        h.textContent = "No existen tareas."
        divTasks.appendChild(h); 
    };    
};

//En caso de haber algo dentro del div que contiene las tareas, el texto de "No existen tareas" desaparece:
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
                    alert("Error");
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
                    alert("Error");
                }
            }
        }
    }
}

//Se exportan las funciones:
export {Recargar}
export { putTask }