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

  //Recorre los iconos clickeados  ( img - icono ) del HTML y escoge el clickeado desde la pagina
   let elementoCambioTask = document.querySelectorAll(".btnCambiar");

   for (let index = 0; index < elementoCambioTask.length; index++) {
     console.log("hay mi madre");
     //Cambia el evento YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
     elementoCambioTask[index].addEventListener("click", deleteTask);
   };
};

//Esto trae los elementos y para que sean globales

reconocerIcono();

//Esto es para que el form no pueda agregar 2 veces un elemento:

//ESTO NO SE SI HACE ALGO, PERO PUEDE BORRALO
// let form = document.getElementById("formulario")
// form.addEventListener("submit", function() {
//   console.log("8");
// })

//let noTaskTitulo = document.getElementById("NoTasksTitulo");

export {reconocerIcono}

