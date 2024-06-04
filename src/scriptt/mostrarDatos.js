//Funcion que extrae a la api (json), metodo get:
async function getTask() {
    try {
      const response = await fetch('http://localhost:3000/api/task');
      const data = await response.json();
     // divTasks.innerHTML = JSON.stringify(data)

      return data;
    } catch (error) { 
      console.error(error);
    }
};

//Muestra los datos llamando a la funcion "getTask":
async function foo() {
    let nueva = await getTask();
    console.log(nueva);
    //divTasks.innerHTML = JSON.stringify(nueva);

    
};

export {foo}