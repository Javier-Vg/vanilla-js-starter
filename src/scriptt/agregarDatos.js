function extraerDatos() {
    //document.getElementById("NoTasksTitulo").style.display = "none";

    let input = (document.getElementById("inputAgregarTarea").value).trim();
    let area = (document.getElementById("inputAgregarArea").value).trim();
    //input
    if (input != "" && area != "") {
        let array = [input,area];
        return array;
    }else{
        console.log("espacios vacios")
        return false;
    }
};
export {extraerDatos}