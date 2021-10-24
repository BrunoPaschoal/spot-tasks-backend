const express = require('express');
const route = express.Router();

//Controllers
const taskControllers = require('../controllers/taskController');

//Middlewares
const authMiddleware = require('../middlewares/auth');

route.use(authMiddleware);

route.post('/', taskControllers.addNewTask);
route.get('/:id', taskControllers.getTasksByUserId);
route.get('/unique/:id', taskControllers.getTaskById);
route.put('/:id', taskControllers.updateTaskById);
route.delete('/:id', taskControllers.deleteTaskById);

module.exports = route;