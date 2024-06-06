// Inserte el código aquí
import { extraerDatos } from "./agregarDatos";
import { elementos } from "./agregarElementos";
import { Recargar } from "./ElementosRecargaPage";
import { deleteTask } from "./eliminarTask";

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
              area: taskFuncion[1]
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
};

//Esto trae los elementos y para que sean globales
reconocerIcono();


//let inputs = document.querySelectorAll(".checkbox");
async function inputsCheckss() {
  let inputsGrupo = await Recargar();
  inputsGrupo.forEach(element => {
    if (element.checked = true) {
      console.log("ssssssssssss")
      
    }

  });
}


let form = document.getElementById("formulario")
form.addEventListener("submit", function() {
  console.log("salvatierra pura mierda")
})


inputsCheckss();

export {reconocerIcono}

