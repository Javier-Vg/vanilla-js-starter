// Inserte el código aquí
import { extraerDatos } from "./agregarDatos";
import { Recargar } from "./ElementosRecargaPage";
import { deleteTask } from "./eliminarTask";
import { putTask } from "./ElementosRecargaPage";
import { putModificarTask } from "./modificarTask";
import { filtrar } from "./filtrarTasks";
import { FiltradoAlternado } from "./filtrarTasks";

//FILTRAR POR AREAS DE LAS TAREAS 
let btnFilter = document.querySelector(".btnFilter");
btnFilter.addEventListener("click", function(e) {

  //Se envia el valor del input por parametro a la funcion "filtrar"
  let inputFilter = document.querySelector(".inputFilter").value;
  filtrar(inputFilter)
  e.preventDefault();
})


let agregarBtn = document.getElementById("agregar");
//Evento para llamar a la funcion que contiene el metodo POST:
agregarBtn.addEventListener("click", function () {

  let taskFuncion = extraerDatos();

  //En caso de que la funcion "extraerDatos" retorne false, significa que 
  //los inputs estaban sin contenido por lo tanto no agrega nada
  if (taskFuncion == false) {
    console.log("sigue......");
  }else{
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
    //Llama a la funcion dentro del flujo del evento listener
    postTask();
  };
});

async function reconocerIcono() {
  //Esto es para extraer los elementos al refrezcar la pagina
  let array = await Recargar();
  //Ejecuta la funcion que contiene los eventos click
  funcionalidad();

};

//Esta funcion contiene todos los eventos que activan el cambio de los elementos y filtrar por tareas:
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
   
    //Selecciona el elemento y activa un evento click:
    elementoInput[index].addEventListener("click", putTask);
  };
  
  //Recorre los botones clickeados y salta un modal, muestra lo que esta en el dialog.
  let elementoCambioTask = document.querySelectorAll(".btnCambiar");
  let cerrarModal = document.getElementById("cerrarModal");
  let Modal = document.querySelector(".dialog");
  //Esto es el elemento p donde se muestra la task
  let TextoP = document.querySelectorAll(".taskTexto");

  //Se crea un array donde se van a añadir el contenido del input 
  let ValoresDelInputt = [];

  //Recorre los botones y capta el elemento con el objetivo de obtener el id, para asignarlo a al nuevo input y a al texto que va a ser modificado.
  for (let index = 0; index < elementoCambioTask.length; index++) {
  
    elementoCambioTask[index].addEventListener("click", () => {
  
      //Se crea el input donde se va a modificar la tarea.
      let change = document.createElement("input");
      change.type = "text";
      change.className = "change";
      change.placeholder ="Modifique su tarea"
      change.id = elementoCambioTask[index].id;
      TextoP.id = elementoCambioTask[index].id;
  
      Modal.appendChild(change);
  
      //se inserta el valor del id en el indice 0 del array
      ValoresDelInputt.splice(0,2,elementoCambioTask[index].id)
      Modal.showModal();
          
    });
        
    cerrarModal.addEventListener("click", ()=>{
      let Inputt = document.getElementById(TextoP[index].id).value;
      //se inserta el valor del input en el indice 1 del array.
      ValoresDelInputt.splice(1,0,Inputt);
      Modal.close();
          
      //Se envia el array como ´parametro a la funcion que contiene el metodo PUT
      cambioTask(ValoresDelInputt);
      window.location.reload();
    });
  };
  
  //Funcion que modifica las tareas
  function cambioTask(params) {
    let elementoInput = document.querySelectorAll(".checkbox");
    
    for (let index = 0; index < elementoInput.length; index++) {
    
      elementoInput[index].addEventListener("click", putModificarTask(params));
    }
  }
}
  
//Esto trae los elementos y para que sean globales
reconocerIcono();

//Solo actualiza la pagina:
document.getElementById("resetear").addEventListener("click", function () {
  window.location.reload();
});

//Eventos que llaman a una funcion que verifica su parametro, en caso de ser true, 
//imprime las tareas que estan completas y false para las que no. 
let BtnTerminadas = document.querySelector(".btnTT");
let BtnNoTerminadas = document.querySelector(".btnTNT");

BtnNoTerminadas.addEventListener("click" , () => {
  FiltradoAlternado(false)
});

BtnTerminadas.addEventListener("click" , () => {
  FiltradoAlternado(true)
});


export {reconocerIcono}
export {funcionalidad}

