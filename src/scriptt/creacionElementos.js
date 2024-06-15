import { deleteUser } from "./eliminarUser";

let almacen = JSON.parse(localStorage.getItem("registros"));
function elementoss() {
    
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



let eliminar = document.getElementById("borrar");
let cerrar = document.getElementById("cerrar");

eliminar.addEventListener("click", async () => {
    let confirm = prompt("¿Seguro que quieres borrar el correo?");
    if (confirm.toLocaleLowerCase() == "si") {
        alert("Borrando su correo...");
        deleteUser(almacen[3]);
        salida();
        window.location.href = "./index.html";

    }else if (confirm.toLocaleLowerCase() == "no"){
        alert("Se cancelo borrar su cuenta :)");
    }else{
        alert("Eso es invalido...")
    }
})

cerrar.addEventListener("click", () => {
    alert("Cerrando sesion..")
    salida();
    window.location.href = "./index.html";

})

let salida = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("registros");
}


console.log("jajajaj");
  




  