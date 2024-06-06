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
};

//Esto trae los elementos y para que sean globales
reconocerIcono();

//let inputs = document.querySelectorAll(".checkbox");
// async function devolverCheks() {
//   let checkss = await getTask();
//   console.log(checkss);
//   checkss.forEach(element => {
    
//     console.log(element.status);
//     if (checkss.status == true) {
//       //console.log(" khe?")
//       element.checked = true;
//     }
//   });
// }

// devolverCheks();

//Esto es para que el form no pueda agregar 2 veces un elemento:
let form = document.getElementById("formulario")
form.addEventListener("submit", function() {
  console.log("8");
})


// if (tasks[key].status == false) {
//   tasks[key].status = true;
//   checkBox.checked = true;

// }else{
//   // tasks[key].status = false;
//   // document.querySelector(".checkbox").checked = false;
//   console.log("esto es el else del check")
// };

async function jaja() {
  let kk = await getTask();
  console.log(kk)
  
}
jaja();


export {reconocerIcono}

