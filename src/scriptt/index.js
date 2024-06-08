// Inserte el código aquí
import { extraerDatos } from "./agregarDatos";
import { elementos } from "./agregarElementos";
import { Recargar } from "./ElementosRecargaPage";
import { deleteTask } from "./eliminarTask";
import { getTask } from "./mostrarDatos";
import { putTask } from "./ElementosRecargaPage";

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
      let PostTest = [];
      
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

//Recupera los elementos de la pagina

Recargar();


async function reconocerIcono() {

  //Esto es para extraer el array que retorna la funcion "Recargar"
  let array = await Recargar();
  let get = await getTask();

  console.log(array)

  //Recorre los iconos clickeados  ( img - icono ) del HTML y escoge el clickeado desde la pagina
   let elementoClick = document.querySelectorAll(".icono");
   console.log(elementoClick);

   for (let index = 0; index < elementoClick.length; index++) {
    
     console.log("hay mi madre");

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
    for (let index = 0; index < elementoCambioTask.length; index++) {

      console.log("dialog");
      elementoCambioTask[index].addEventListener("click", () => {

          let change = document.createElement("input");
          change.type = "text";
          change.className = "change";
          change.id = elementoCambioTask[index].id;
          Modal.appendChild(change);

          console.log(elementoCambioTask[index].id);

          Modal.showModal();

          let k = document.getElementById(elementoCambioTask[index].id)
          
          k.oninput = function() {
            result.innerHTML = input.value;
          };
          
      });



      cerrarModal.addEventListener("click", ()=>{
        console.log("cerrando modal");
        //Modal.remove(change);
        Modal.close();
        window.location.reload()
        
      });
    };
};









//Esto trae los elementos y para que sean globales
reconocerIcono();



export {reconocerIcono}

