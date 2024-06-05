
async function deleteTask(evento) {
    console.log("llega");

    //Extraigo el ID desde el evento del la funcion, para despues agregarlo en el getElementId,
    //para luego tomarlos como referencia al agregarlo al HTML con el appendChild

    let idString = evento.currentTarget.getAttribute("id");
    //let IdDelDom = document.querySelector("."+idString)
    
    try {
        console.log("try");
        const response = await fetch('http://localhost:3000/api/task/'+idString, {
          method: 'DELETE',
        });
        window.location.reload();
        
    }catch(error) {
        console.log("error");
      console.log(error);
    }
}

export { deleteTask }