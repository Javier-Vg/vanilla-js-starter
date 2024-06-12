let inputRegister = document.querySelector(".inputRegister");
let btnEnvioRegister = document.querySelector(".EnviarR");
let btnEnvioLogin = document.querySelector(".EnviarL");

registros = JSON.parse(localStorage.getItem("registros")) || [];

//Evento eviar formulario register
btnEnvioRegister.addEventListener("click", async function() {
  let inputRegister = document.querySelector(".inputRegister").value;
  let ContraRegister = document.querySelector(".inputRegisterContra").value;
  let users = await getTask();
  let repetido = 0;

  if (inputRegister.trim() && ContraRegister.trim() != "") {

    users.forEach(user => {
      if (user.usuario == inputRegister) {
        repetido++;
      }
    });

    if (repetido > 0) {
      alert("Ese correo ya esta registrado");
    }else{

      let pp = [inputRegister,ContraRegister];
      postTask(pp);
      //registros.push(pp);
      //localStorage.setItem("registros", JSON.stringify(registros));
    }

  }else{
    alert("Debe de llenar los espacios!");
  }
})

//Evento eviar formulario login
btnEnvioLogin.addEventListener("click", async function() {
  let inputLogin = document.querySelector(".inputLogin").value;
  let ContraLogin = document.querySelector(".inputLoginContra").value;
  let encontrado = 0;

  let users = await getTask();

  if (inputLogin.trim() && ContraLogin.trim() != "") {
    users.forEach(user => {
      if (user.usuario == inputLogin && user.contra == ContraLogin) {
        alert("Se encontro su correo!");
        //window.location.href = "/src/sesion.html"
        encontrado++;
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

async function getTask() {

  try {
    const response = await fetch('http://localhost:3000/api/task');
    const data = await response.json();
    
    return data;
    
  } catch (error) {
    alert("Error");
  }
};


async function postTask(pp) {
      
  try {
      const response = await fetch('http://localhost:3000/api/task', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          usuario: pp[0],
          contra: pp[1]
        })
      });
      
  }catch(error) {
    alert(error);
  }
};

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

btnChangePaswor.addEventListener("click", async function() {

  //Inputs del form de olvidar usuario
  let users = await getTask();
  let input = document.querySelector(".inputOlvido").value;
  let contra = document.querySelector(".inputOlvidoContra").value;
  let array = [];
  let find = false;

  if (input.trim() && contra.trim() != ""){
    users.forEach(user => {
      if (user.usuario == input) {
        array[user.id,contra]
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
  if ((elemento[1]).trim() != "" ) {
    try {
      console.log("puttt f");
      const response = await fetch('http://localhost:3000/api/task/'+ elemento[0], {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          task: elemento[1]
        })
      });
      
    }catch(error) {
      alert("error");
    }
  }else{
    alert("Tiene que escribir en la barra de texto para editar su tarea...");
    
  };
};



