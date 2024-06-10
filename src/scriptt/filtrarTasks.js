import { getTask } from "./mostrarDatos";
import { funcionalidad } from "./index";


async function filtrar(input) {
    let divTasks = document.querySelector(".grupo");

    //Se borra el contenedor de los elementos para dejar solo a los que fueron filtrado, en este caso a los que tienen misma area.
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
            taskTexto.innerHTML = task+"<br><b>Area: "+area;
            taskTexto.id= areaTask.id;
            
            let btn = document.createElement("img");
            btn.src = "https://i.pinimg.com/736x/dc/4b/0f/dc4b0fe20cd9ee99456325d04185bc9e.jpg"
            btn.className = "btnCambiar";
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

    //Se llama a la funcion que contiene los procesos de seleccioamiento de elementos.
    funcionalidad()
}



//Depende del parametro enviado, se ejecutara ese filtrado de tareas ( terminadas y no terminadas ).
async function FiltradoAlternado(boleano) {
    let divTasks = document.querySelector(".grupo");
    let tasks = await getTask();
    if (boleano == true) {

        //Se borra el contenedor entero para solo dejar a las tareas completadas.
        divTasks.innerHTML = "";

        let check = document.querySelector(".contador");
        //input.toLowerCase();

        tasks.forEach(estado => {
            console.log(estado);
            //let areaaa = areaTask.area;
            //areaaa.toLowerCase();
            if (estado.status == true) {

                let task = estado.task;
                let area = estado.area;
                
                // Crear el contenedor
                let container = document.createElement("div");
                container.id= estado.id
                container.className = "containerTarea";
        
                //Crear el checkbox
                let checkBox = document.createElement("input");
                checkBox.type = "checkbox";
                checkBox.id= estado.id
                checkBox.className = "checkbox";
                if (estado.status == true) {
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
                taskTexto.innerHTML = task+"<br><b>Area: "+area;
                taskTexto.id= estado.id;
                
                let btn = document.createElement("img");
                btn.src = "https://i.pinimg.com/736x/dc/4b/0f/dc4b0fe20cd9ee99456325d04185bc9e.jpg"
                btn.className = "btnCambiar";
                btn.id= estado.id;

                // Crear el iconoo
                let icono = document.createElement("img");
                icono.id =estado.id;
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
            alert("No hubieron tareas completadas.")
            window.location.reload();
        }
    }else{

        //Se borra para solo dejar a los 
        divTasks.innerHTML = "";

        let check = document.querySelector(".contador");
        //input.toLowerCase();

        tasks.forEach(estado => {
            console.log(estado);
            //let areaaa = areaTask.area;
            //areaaa.toLowerCase();
            if (estado.status == false) {

                let task = estado.task;
                let area = estado.area;
                
                // Crear el contenedor
                let container = document.createElement("div");
                container.id= estado.id
                container.className = "containerTarea";
        
                //Crear el checkbox
                let checkBox = document.createElement("input");
                checkBox.type = "checkbox";
                checkBox.id= estado.id
                checkBox.className = "checkbox";
                if (estado.status == true) {
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
                taskTexto.innerHTML = task+"<br><b>Area: "+area;
                taskTexto.id= estado.id;
                
                let btn = document.createElement("img");
                btn.src = "https://i.pinimg.com/736x/dc/4b/0f/dc4b0fe20cd9ee99456325d04185bc9e.jpg"
                btn.className = "btnCambiar";
                btn.id= estado.id;

                // Crear el iconoo
                let icono = document.createElement("img");
                icono.id =estado.id;
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
        //En caso de que no haya integrado algo al conetendor, se entiende que no hubieron tareas sin completar
        if (divTasks.textContent == "") {
            alert("Todas tus tareas estan completas .")
            window.location.reload();
        }
    }
    //Se llama a la funcion que contiene 
    funcionalidad()
}

//se exportan funciones:
export {filtrar}
export {FiltradoAlternado}