import extraerDatos  from "./agregarDatos";

//Esto hace que agregue un nuevo elemento a la pagina

async function Esperar() {
    //Exporta los inputs
    let datoRecientes = extraerDatos();
    //Valida de que los inputs no vengan vacios, en ese caso no deja integrar un nuevo elemento.
    if (datoRecientes == false) {
        alert("Escriba los datos en los input");
    }else{
        let divTasks = document.querySelector(".grupo");

        let task = datoRecientes[0];
        let area = datoRecientes[1];
        
        // Crear el contenedor
        let container = document.createElement("div"); 
        container.className = "containerTarea";

        // Crear el checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";

        let btn = document.createElement("img");
        btn.src = "https://i.pinimg.com/736x/dc/4b/0f/dc4b0fe20cd9ee99456325d04185bc9e.jpg"
        btn.className = "btnCambiar";

        // Crear el texto
        let taskTexto = document.createElement("p");
        taskTexto.className = "taskTexto";
        taskTexto.innerHTML = task+"<br><b>Area: "+area;

        // Crear el iconoo
        let icono = document.createElement("img");
        icono.className = "icono";
        icono.src = "https://thumbs.dreamstime.com/b/icono-rojo-de-la-l%C3%ADnea-papelera-reciclaje-en-fondo-blanco-ilustraci%C3%B3n-vectores-estilo-plano-171177844.jpg";

        // Añadir los elementos al contenedor
        container.appendChild(checkbox);
        container.appendChild(taskTexto);
        container.appendChild(btn);
        container.appendChild(icono);
        
        divTasks.appendChild(container);
    }

    //Recarga la pagina en auto
    window.location.reload();
}
//Llama a la funcion principal de esta funcion.
Esperar();

// export {elementos}