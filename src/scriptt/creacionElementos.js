
function elementoss() {
    let almacen = JSON.parse(localStorage.getItem("registros"));
    console.log(almacen);

    let container = document.querySelector(".contenedor");
    console.log(container);

    let div = document.createElement("div");
    div.className = "divCont";
    
    let user = document.createElement("h1");
    user.textContent = "Usuario: "+almacen[2];
    
    let correoE = document.createElement("h2");
    correoE.textContent = "Correo: "+almacen[0];
    
    let contraE = document.createElement("h3");
    contraE.textContent = "Contraseña: "+ almacen[1];

    div.appendChild(user,correoE,contraE);
    div.appendChild(correoE);
    div.appendChild(contraE);
    container.appendChild(div);

}

elementoss()

console.log("jajajaj");
  




  