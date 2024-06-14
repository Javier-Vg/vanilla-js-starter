
async function postUser(pp) {
      
    try {
        const response = await fetch('http://localhost:3000/api/task', {
  
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            correo: pp[0],
            contra: pp[1],
            user: pp[2]
          })
        });
        
    }catch(error) {
      alert(error);
    }
  };
  
  
export {postUser}