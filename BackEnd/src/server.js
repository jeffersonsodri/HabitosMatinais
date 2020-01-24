const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();

mongoose.connect('mongodb+srv://habits:123@cluster0-7uu3i.mongodb.net/morningHabits?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());

server.use(cors());
server.use(express.json());
server.use(routes);


server.listen(3535,() => {
    console.log("Server conectado!");
});
