//Funcion que extrae a la api (json), metodo get:
async function getTask() {
    try {
      const response = await fetch('http://localhost:3000/api/task');
      const data = await response.json();
      return data;

    } catch (error) {
      console.error(error);
    }
};

export {getTask}