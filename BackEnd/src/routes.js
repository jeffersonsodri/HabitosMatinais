const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController')



routes.get('/', (req, res) => {
    return res.send(
    '<h1> Olá Jefferson </h1>'
    );
});

routes.post('/user/registerUser', UserController.store);
routes.get('/user', UserController.index);

module.exports = routes;