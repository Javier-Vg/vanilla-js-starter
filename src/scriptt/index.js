// Inserte el código aquí
import { extraerDatos } from "./agregarDatos";
import { elementos } from "./agregarElementos";
import { Recargar } from "./ElementosRecargaPage";
import { deleteTask } from "./eliminarTask";
import { putTask } from "./ElementosRecargaPage";
import { putModificarTask } from "./modificarTask";
import { filtrar } from "./filtrarTasks";

//FILTRAR POR AREAS DE TAREAS 
let btnFilter = document.querySelector(".btnFilter");
btnFilter.addEventListener("click", function(e) {
  
  let inputFilter = document.querySelector(".inputFilter").value;

  filtrar(inputFilter)
  e.preventDefault();
})

//let verificadorAñadirElementos = false;

let agregarBtn = document.getElementById("agregar");
//Evento para llamar a la funciones:
agregarBtn.addEventListener("click", function () {

  let taskFuncion = extraerDatos();

  if (taskFuncion == false) {

    console.log("sigue......");

  }else{
    console.log("kakakaka");
    async function postTask() {
      
      try {
          const response = await fetch('http://localhost:3000/api/task', {
  
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              task: taskFuncion[0],
              area: taskFuncion[1],
              status: false
            })
          });
          
      }catch(error) {
        console.log(error);
      }
      //return PostTest.push(task);
    };
    postTask();
  };
  elementos();
});


async function reconocerIcono() {

  //Esto es para extraer los elementos al refrezcar la pagina
  let array = await Recargar();
  funcionalidad();

};

  
function funcionalidad() {
  //Recorre los iconos clickeados  ( img - icono ) del HTML y escoge el clickeado desde la pagina
  let elementoClick = document.querySelectorAll(".icono");
  console.log(elementoClick);
  
  for (let index = 0; index < elementoClick.length; index++) {
  
    elementoClick[index].addEventListener("click", deleteTask);
  };
  
  //Recorre los inputs clickeados del HTML y escoge el clickeado desde la pagina
  let elementoInput = document.querySelectorAll(".checkbox");
  console.log(elementoInput);
   
  for (let index = 0; index < elementoInput.length; index++) {
   
    elementoInput[index].addEventListener("click", putTask);
  };
  
  //Recorre los botones clickeados y salta un modal, muestra lo que esta en el dialog.
  let elementoCambioTask = document.querySelectorAll(".btnCambiar");
  let cerrarModal = document.getElementById("cerrarModal");
  let Modal = document.querySelector(".dialog");
  //Esto es el elemento p donde se muestra la task
  let TextoP = document.querySelectorAll(".taskTexto");
  let ValoresDelInputt = [];
  
  for (let index = 0; index < elementoCambioTask.length; index++) {
  
    console.log("dialog");
    elementoCambioTask[index].addEventListener("click", () => {
  
      let change = document.createElement("input");
      change.type = "text";
      change.className = "change";
      change.placeholder ="Modifique su tarea"
      change.id = elementoCambioTask[index].id;
      TextoP.id = elementoCambioTask[index].id
  
      Modal.appendChild(change);
  
      ValoresDelInputt.splice(0,2,elementoCambioTask[index].id)
      Modal.showModal();
          
    });
        
    cerrarModal.addEventListener("click", ()=>{
      let Inputt = document.getElementById(TextoP[index].id).value;
      ValoresDelInputt.splice(1,0,Inputt);
      Modal.close();
          
      cambioTask(ValoresDelInputt);
      window.location.reload();
    });
  };
  
    function cambioTask(params) {
      let elementoInput = document.querySelectorAll(".checkbox");
    
      for (let index = 0; index < elementoInput.length; index++) {
    
        elementoInput[index].addEventListener("click", putModificarTask(params));
      }
    }
}
  
//Esto trae los elementos y para que sean globales
reconocerIcono();

document.getElementById("resetear").addEventListener("click", function () {
  window.location.reload();
});

export {reconocerIcono}
export {funcionalidad}

