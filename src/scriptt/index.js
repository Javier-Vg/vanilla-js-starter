import {  postUser} from "./register";
import { getUser } from "./getUser";
//import { elementos } from "./creacionElementos";


let btnEnvioRegister = document.querySelector(".EnviarR");
let btnEnvioLogin = document.querySelector(".EnviarL");

//Evento eviar formulario register
btnEnvioRegister.addEventListener("click", async function(e) {
  e.preventDefault();
  let inputUsuario = document.querySelector(".inputUsuario").value;
  let inputRegister = document.querySelector(".inputRegister").value;
  let ContraRegister = document.querySelector(".inputRegisterContra").value;
  let users = await getUser();
  let repetido = 0;

  if (inputRegister.trim() && ContraRegister.trim() != "") {

    users.forEach(user => {
      if (user.correo == inputRegister) {
        repetido++;
      }
    });

    if (repetido > 0) {
      alert("Ese correo ya esta registrado");
    }else{

      let pp = [inputRegister,ContraRegister,inputUsuario];
      postUser(pp);
      
    }

  }else{
    alert("Debe de llenar los espacios!");
  }
})

//Evento eviar formulario login
btnEnvioLogin.addEventListener("click", async function(e) {
  e.preventDefault()
  let inputLogin = document.querySelector(".inputLogin").value;
  let ContraLogin = document.querySelector(".inputLoginContra").value;
  let encontrado = 0;

  let users = await getUser();

  if (inputLogin.trim() && ContraLogin.trim() != "") {
    users.forEach(user => {
      if (user.correo == inputLogin && user.contra == ContraLogin) {
        alert("Se encontro su correo!");
        encontrado++;
        localStorage.setItem("registros", user.id);

        //elementos(user.user,user.correo, user.contra)
        window.location.href = "./sesion.html";
      }
    });

    if (encontrado === 0) {
      alert("No se encontro su correo...");
    }

  }else{
    alert("Debe de llenar los espacios!");
  }
})

let btnR = document.querySelector(".btnR");
let btnL = document.querySelector(".btnL");
let modal1 = document.querySelector(".dialogRegister");
let modal2 = document.querySelector(".dialogLogin");
let cerrarR = document.querySelector(".btnCerrarR");
let cerrarL = document.querySelector(".btnCerrarL");

btnR.addEventListener("click", function() {
  modal1.showModal();

});

btnL.addEventListener("click", function() {
  modal2.showModal()
});

cerrarR.addEventListener("click", function() {
  modal1.close();
});

cerrarL.addEventListener("click", function() {
  modal2.close();
});



let ModalOlvidoContra = document.querySelector(".olvidoContraModal");
let btnOlvidoContra = document.querySelector(".olvidoContra");
let btnCloseOlvidoContra = document.querySelector(".btnCerrarOM");


btnOlvidoContra.addEventListener("click", function() {
  ModalOlvidoContra.showModal();
})

btnCloseOlvidoContra.addEventListener("click", function() {
  ModalOlvidoContra.close();
})

let btnChangePaswor = document.querySelector(".changePasword");

btnChangePaswor.addEventListener("click", async function(e) {
  e.preventDefault()

  //Inputs del form de olvidar usuario
  let users = await getUser();
  let input = document.querySelector(".inputOlvido").value;
  let contra = document.querySelector(".inputOlvidoContra").value;
  let array = [];
  let find = false;
  
  if (input.trim() && contra.trim() != ""){
    users.forEach(user => {
      if (user.correo == input) {
        array.push(user.id)
        array.push(contra)
        console.log(array);
        putModificarUser(array);
        find = true;
      }
    });
    if(find == false){
      alert("Ese correo no existe...");
    }
  };

  //Proceso en el cual debe de cambiarse la contraseña segun su correo.
})


async function putModificarUser(elemento) {

  //En caso de que el input venga vacio, salta un mensaje alert, si no, hace el cambio basandose en los elementos del array.
  console.log(elemento);
  if (elemento[1] != "" ) {
    try {
      const response = await fetch('http://localhost:3000/api/task/'+ elemento[0], {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contra: elemento[1]
        })
      });
      
    }catch(error) {
      alert(error);
    }
  }else{
    alert("Tiene que escribir en la barra de texto para editar su tarea...");
  };
};



