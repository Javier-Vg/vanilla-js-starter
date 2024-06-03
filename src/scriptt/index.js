// Inserte el código aquí

import {extraerDatos} from "./agregarDatos"

let divTasks = document.querySelector(".grupo");

async function getTask() {

    try { 
      const response = await fetch('http://localhost:3000/api/task');
      const data = await response.json();
     // divTasks.innerHTML = JSON.stringify(data)
    
      return data
    } catch (error) { 
      console.error(error);
    }


}


getTask()

async function foo() {
  let nueva = await getTask();
  console.log(nueva);
}

foo();




let agregarBtn = document.getElementById("agregar")
//Evento para llamar a la funciones:
agregarBtn.addEventListener("click", function () {

  let taskFuncion = extraerDatos();
  console.log(taskFuncion)

  const postTask= async () => {
    try {
        const response = await fetch('http://localhost:3000/api/task', {

          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            task: taskFuncion,
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








