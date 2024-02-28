const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


//Create a new User
router.post('/', userController.createUser);

//Get all Users
router.get('/', userController.getAllUsers);

//Get User by ID
router.get('/:id', userController.getUserById);

//find and update User
router.put('/:id', userController.findAndUpdate);

module.exports = router