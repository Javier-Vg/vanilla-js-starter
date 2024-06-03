// Inserte el código aquí

import {extraerDatos} from "./agregarDatos"

let divTasks = document.querySelector(".grupo")


async function getTask() {
    try { 
      const response = await fetch('http://localhost:3000/api/task');
      const data = await response.json();
    
    } catch (error) { 
      console.error(error);
    }
}

getTask();

let agregar = document.getElementById("agregar")


agregar.addEventListener("click", function () {

  
  
  const postTask= async () => {
    try {
        const response = await fetch('http://localhost:3000/api/task', {

          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            task: inputAgregarTarea.value,
            status: "Realizada"
          })
        });
        const data = await response.json();
        console.log(data);
    }catch(error) {
      console.log(error)
    } 
  }
  postTask();
});

export {getTask}








