const request = require('supertest');
const mongoose = require('mongoose');
const mongoConnection = require('../src/db/mongoose');
const app = require('/Users/Aviv/Desktop/task-manager-REST_API/task-manager/src/index'); 

// Use the MongoDB connection for testing
beforeAll(async () => {
    await mongoConnection;
  });

// Close the MongoDB connection after testing
afterAll(async () => {
    await mongoose.connection.close();
  });  

// Test cases for tasks routes
describe('Tasks API', () => {
    let taskId;
  
    // Test case for creating a task
    it('should create a new task', async () => {
      const taskData = {
        description: 'Test task',
        completed: false
      };
      const response = await request(app)
        .post('/tasks')
        .send(taskData);
      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty('_id');
      taskId = response.body._id;
    });
  
    // Test case for getting all tasks
    it('should get all tasks', async () => {
      const response = await request(app).get('/tasks');
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
    });
  
    // Test case for updating a task
    it('should update a task', async () => {
      const updatedTaskData = {
        description: 'Updated task',
        completed: true
      };
      const response = await request(app)
        .patch(`/tasks/${taskId}`)
        .send(updatedTaskData);
      console.log(response.body)  
      expect(response.statusCode).toBe(200);
      expect(response.body.description).toBe('Updated task');
      expect(response.body.completed).toBe(true);
    });
  
    // Test case for deleting a task
    it('should delete a task', async () => {
      const response = await request(app).delete(`/tasks/${taskId}`);
      expect(response.statusCode).toBe(200);
      expect(response.body._id).toBe(taskId);
    });
  });
  
  // Test cases for users routes
  describe('Users API', () => {
    let userId;
  
    // Test case for creating a user
    it('should create a new user', async () => {
      const userData = {
        name: 'Test User',
        email: 'test@example.com',
        password: 'test123',
        age: 25
      };
      const response = await request(app)
        .post('/users')
        .send(userData);
      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty('_id');
      userId = response.body._id;
    });
  
    // Test case for getting all users
    it('should get all users', async () => {
      const response = await request(app).get('/users');
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
    });
  
    // Test case for updating a user
    it('should update a user', async () => {
      const updatedUserData = {
        name: 'Updated User'
      };
      const response = await request(app)
        .patch(`/users/${userId}`)
        .send(updatedUserData);
      expect(response.statusCode).toBe(200);
      expect(response.body.name).toBe('Updated User');
    });
  
    // Test case for deleting a user
    it('should delete a user', async () => {
      const response = await request(app).delete(`/users/${userId}`);
      expect(response.statusCode).toBe(200);
      expect(response.body._id).toBe(userId);
    });
  });
  