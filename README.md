# In-Memory Task CRUD API
This project is a simple **CRUD (Create, Read, Update, Delete)** API built using **Node.js** and **Express.js** for managing tasks.

# Features
- In-memory task management
- RESTful endpoints for all CRUD operations
- Input validation
- Error handling with proper status codes

# Setup Instructions
- use npm install in the terminal before serving the app first time.
- run `node index.js` in the project directory to serve the app.
- server will start at `http://localhost:3000`

# API Endpoints
1. GET Endpoints :- 
    1.1 http://localhost:3000/  ---> Returns a simple welcome message.
    1.2 http://localhost:3000/tasks ---> Retrieve list of all tasks.
    1.3 http://localhost:3000/tasks/:id ---> replace id with the actual task id to get the specified task.

2. POST Endpoint :-
    2.1 POST http://localhost:3000/tasks ---> Creates a new task and adds it in task list 
    Example body :- 
    {"title": "Write documentation", "description": "Create a README file", "completed": false}
    - title and description are required, if there is completion status it should be boolean.

3. PUT Endpoint :- 
   3.1 PUT http://localhost:3000/tasks/1 ---> Update an existing task by ID
   Example body :-
   {"title": "New title", "completed": true}

4. DELETE Endpoint :-
    4.1 DELETE http://localhost:3000/tasks/3 ---> Deletes a task by ID.





