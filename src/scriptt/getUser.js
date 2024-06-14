async function getUser() {

    try {
      const response = await fetch('http://localhost:3000/api/task');
      const data = await response.json();
      
      return data;
      
    } catch (error) {
      alert("Error");
    }
};

export {getUser}