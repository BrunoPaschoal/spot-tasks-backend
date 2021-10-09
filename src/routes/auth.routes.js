const express = require('express');
const route = express.Router();

//Controllers
const authController = require('../controllers/authController');

route.post('/register', authController.registerUser);
route.post('/singin', authController.login);

module.exports = route;