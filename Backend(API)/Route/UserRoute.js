const express = require('express');

const UserController = require('../Controller/UserController');

const route = express.Router();

route.post('/User', UserController.addUser);

// route.get('/findData',UserController.getAllUsers);

// route.delete('/deleteUser/:id',UserController.DeleteUsers);

// route.put('/updateUser/:id',UserController.UpdateUsers);

module.exports = route;

