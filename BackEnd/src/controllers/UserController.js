const axios = require('axios');
const User = require('../models/User');

module.exports = {
    async store (req, res) {

        const { name } = req.body;

        const user = await User.create({
            name
        })
        console.log(user);

        return res.json(user);

    },

    async index (req, res) {
        console.log('Entrei para listar os Usuários')

        const { id } = req.headers;

        const response = await User.findById(id);


        return res.json({
            name: "Jefferson"
        });

    }


};