//Elimina objetos del API
async function deleteUser(id) {
    
    try {
        console.log("try");
        const response = await fetch('http://localhost:3000/api/task/'+id, {
          method: 'DELETE',
        });
        
    }catch(error) {
        alert("error");
      
    }
}

export {deleteUser}

