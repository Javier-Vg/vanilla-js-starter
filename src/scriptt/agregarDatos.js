//Extrae el contenido de los input, despues de eso los importo en otro archivo para recepsionar las task y agregarlas al api
function extraerDatos() {

    let input = (document.getElementById("inputAgregarTarea").value).trim();
    let area = (document.getElementById("inputAgregarArea").value).trim();
    //Validaciones de que no vaya vacio, en caso de que no, retorna los 2 valores en un array, la task y la area
    if (input != "" && area != "") {
        let array = [input,area];
        return array;
        // if (input.lenght > 70) {
        //     alert("La descripcion es demasiado extensa.");
        // }else{
        //     l
        // }
        
    }else{
        return false;
    }
};
export {extraerDatos}