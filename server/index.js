var express = require("express");
var cors = require("cors");
const { uuid } = require("uuidv4");

var app = express();
app.use(express.json());

app.use(cors());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

var taskRouter = express.Router();

var tasks = [];

taskRouter
  .route("/")//http://localhost/api/todo/ || http://localhost/api/task/
  .get(function (req, res) { //Extrae todas las task
    return res.json(tasks);
  })
  .post(function (req, res) {//crea una nueva task
    tasks.push({
      ...req.body,
      id: uuid(),
    });
    return res.json(tasks);
  });
taskRouter.route("/:task_id")//http://localhost/api/todo/:id || http://localhost/api/task/:id
  .get(function (req, res) {//Extraer task en especifico
    const id = req.params.task_id
    return res.json(tasks.find((t) => t.id === id) ?? {});
  })
  .delete(function (req, res) {// Eliminar task 
    const id = req.params.task_id
    tasks = tasks.filter((t) => t.id !== id)
    return res.json({});
  })
  .put(function (req, res) {//Actalizar task
    const id = req.params.task_id
    for (let index in tasks) {
      const task = tasks[index]
      if (task.id === id) {
        tasks[index] = {
          ...task,
          ...req.body
        }
        return res.json(tasks[index])
      }
    }
    return res.json({})
  });

app.use("/api/task/", taskRouter);
