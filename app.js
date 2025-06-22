const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const tasks = [
    {
      id: 1,
      title: "Create a new project",
      description: "Create a new project using Magic",
      completed: false
    },
    {
      id: 2,
      title: "Set up database schema",
      description: "Design and implement the initial database schema for users and tasks",
      completed: false
    },
    {
      id: 3,
      title: "Implement authentication",
      description: "Add user authentication with JWT and bcrypt",
      completed: true
    },
    {
      id: 4,
      title: "Build task CRUD API",
      description: "Create routes and controllers for creating, reading, updating, and deleting tasks",
      completed: false
    }
  ];
  
// A utility function to check if value exists for input
function hasValue(item){
    if((typeof item === "string" && item.trim() === "")
         || item === undefined || item === null){
        return false
    }
    return true
}


// Demo home route
app.get('/',(req,res) => {
    res.send("In Memory CRUD working try different routes to get desired response")
})

// Retrieve all tasks
app.get('/tasks',(req,res) => {
    res.status(200).send(tasks)
})

// Retrieve a specific task by ID
app.get('/tasks/:id',(req,res) => {
    const id = req.params.id;
    const task = tasks.find((task) => task.id === parseInt(id))
    if(!task){
        return res.status(404).send({message: `Task with id ${id} not found`})
    }
    res.status(200).send(task)
})

// Create new task
app.post('/tasks', (req,res) => {
    const newTask = req.body
    if(!hasValue(newTask.title) || !hasValue(newTask.description)){
       return res.status(400).
        send({message: "For  a task Title and description are required"})
    }
    if(newTask.completed && typeof(newTask.completed) !== Boolean){
        return res.status(400).
        send({message: "For a task completion status should be a boolean"})
    }
    newTask.id = tasks.length + 1
    tasks.push(newTask)
    res.status(200).send(newTask)
})

// Update an existing task
app.put('/tasks/:id',(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    const taskToUpdate = tasks.find((task) => task.id === parseInt(id))

    if(!taskToUpdate){
        return res.status(404).send({message: `Task with id ${id} not found`})
    }

    
    if(body.title){
        taskToUpdate.title = body.title
    }
    if(body.description){
        taskToUpdate.description = body.description
    }
    if(body.completed){
        taskToUpdate.completed = body.completed
    }

    if(!hasValue(taskToUpdate.title) || !hasValue(taskToUpdate.description)){
        return res.status(400).
         send({message: "For a task Title and description are required"})
     }


    if(taskToUpdate.completed && typeof(taskToUpdate.completed) !== Boolean){
        return res.status(400).
        send({message: "For a task completion status should be a boolean"})
    }
    res.status(200).send(taskToUpdate)
})

// Delete an existing task
app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex((task) => task.id === id);

    if (index === -1) {
        return res.status(404).send({ message: `Task with id ${id} not found` });
    }

    const deletedTask = tasks.splice(index, 1);
    res.status(200).send(deletedTask[0]); 
});


app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;