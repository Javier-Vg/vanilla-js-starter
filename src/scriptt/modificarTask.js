
async function putModificarTask(elemento) {
  console.log(elemento)
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
    //window.location.reload()
  }else{
    console.log("espacios vacios");
  };
};

export {putModificarTask}