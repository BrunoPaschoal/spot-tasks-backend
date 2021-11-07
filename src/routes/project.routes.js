const express = require('express');
const route = express.Router();

//Controllers
const projectController = require('../controllers/projectController');

//Middlewares
const authMiddleware = require('../middlewares/auth');
route.use(authMiddleware);

route.post('/', projectController.createProject);
route.get('/:id', projectController.getProjectsByUserId);
route.put('/:id', projectController.updateProjectById);
route.delete('/:id', projectController.deleteProjectById);

module.exports = route;