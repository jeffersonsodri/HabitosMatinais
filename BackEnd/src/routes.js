const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController')
const ActivityController = require('./controllers/ActivityController')



routes.get('/', (req, res) => {
    return res.send(
    '<h1> Olá Jefferson </h1>'
    );
});

routes.post('/user/registerUser', UserController.store);
routes.get('/user', UserController.index);


routes.post('/act/register', ActivityController.store );
routes.get('/act', ActivityController.index);

module.exports = routes;