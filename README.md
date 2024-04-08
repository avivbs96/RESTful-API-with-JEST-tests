Sure, here's the updated README file with the Jest script added:

---

# Task Manager API

The Task Manager API is a RESTful web service built using Node.js, Express, and MongoDB. It provides endpoints to manage tasks and users in a task management application.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Testing](#testing)
- [Environment Variables](#environment-variables)
- [Postman](#postman)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-manager-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd task-manager-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
Start the server:
```bash
npm start
```
The server will start running at http://localhost:3000.

## Endpoints
### Tasks
- POST /tasks: Create a new task
- GET /tasks: Get all tasks
- GET /tasks/:id: Get a task by ID
- PATCH /tasks/:id: Update a task by ID
- DELETE /tasks/:id: Delete a task by ID

### Users
- POST /users: Create a new user
- GET /users: Get all users
- GET /users/:id: Get a user by ID
- PATCH /users/:id: Update a user by ID
- DELETE /users/:id: Delete a user by ID

## Testing
To run the tests, use the following command:
```bash
npm test
```

## Environment Variables
The following environment variables can be configured in a `.env` file:
- `MONGO_URL`: MongoDB connection URL
- `PORT`: Port number for the server

Example `.env` file:
```
MONGO_URL=mongodb://127.0.0.1:27017/task-manager-api
PORT=3000
```

## Postman
You can import the provided Postman collection to test the API endpoints. Download the collection file [here](#) and import it into Postman.

--- 

This README provides a brief overview of how to use, test, and configure the Task Manager API.
