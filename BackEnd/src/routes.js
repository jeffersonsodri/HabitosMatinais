const express = require('express');

const routes = express.Router();


routes.get('/', (req, res) => {
    return res.send(
    '<h1> Olá Jefferson </h1>'
    );
});

module.exports = routes;