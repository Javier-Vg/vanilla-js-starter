
async function putModificarTask(elemento) {
    
    try {
        console.log("puttt f");
        const response = await fetch('http://localhost:3000/api/task/'+ idString, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            status: false
          })
        });
        
    }catch(error) {
        console.log("error");
    }
}

export {putModificarTask}