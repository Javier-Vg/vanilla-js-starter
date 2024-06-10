//Funcion asincronica que utiliza el metodo PUT para hacer un cambio en la descripcion de la tarea:
async function putModificarTask(elemento) {
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
      console.log("error");
    }
  }else{
    alert("Tiene que escribir en la barra de texto para editar su tarea...");
    
  };
};

export {putModificarTask}