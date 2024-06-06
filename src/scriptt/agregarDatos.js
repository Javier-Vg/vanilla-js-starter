function extraerDatos() {
    //document.getElementById("NoTasksTitulo").style.display = "none";

    let input = document.getElementById("inputAgregarTarea").value;
    let area = document.getElementById("inputAgregarArea").value;
    if (input != "") {
        let array = [input,area];
        return array;
    }else{
        alert("Llene los espacios.")
        return false;
    }
    
};

export {extraerDatos}