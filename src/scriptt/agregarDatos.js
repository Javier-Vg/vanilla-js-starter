function extraerDatos() {
    //document.getElementById("NoTasksTitulo").style.display = "none";

    let input = document.getElementById("inputAgregarTarea").value;
    let area = document.getElementById("inputAgregarArea").value;
    let array = [input,area];
    return array;
};

export {extraerDatos}