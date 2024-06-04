// Inserte el código aquí

import { extraerDatos } from "./agregarDatos";
import { elementos } from "./agregarElementos";

let agregarBtn = document.getElementById("agregar");
//Evento para llamar a la funciones:
agregarBtn.addEventListener("click", function () {

  let taskFuncion = extraerDatos();
  console.log(taskFuncion);

  const postTask= async () => {
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
        const data = await response.json();

    }catch(error) {
      console.log(error)
    } 
  }
  postTask();

  elementos();

});




