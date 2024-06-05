// Inserte el código aquí
import { extraerDatos } from "./agregarDatos";
import { elementos } from "./agregarElementos";
import { Recargar } from "./ElementosRecargaPage";

let agregarBtn = document.getElementById("agregar");
//Evento para llamar a la funciones:
agregarBtn.addEventListener("click", function () {

  let taskFuncion = extraerDatos();

  async function postTask() {
    try {
        const response = await fetch('http://localhost:3000/api/task', {

          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            task: taskFuncion[0],
            area: taskFuncion[1]
          })
        });
        
    }catch(error) {
      console.log(error);
    } 
  }

  postTask();

  elementos();

  
  
});



//Recupera los elementos de la pagina
Recargar();





