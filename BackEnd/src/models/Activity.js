const {
    Schema,
    model
} = require('mongoose');

const ActivictySchema = new Schema({

    nome: {
        type: String,
        require: true
    },
    alarm: {
        type: Date,
        require: true
    },
    status: {
        type: String,
        require: false,
        uppercase: true,
        enum: ['FEITO', 'EM ANDAMENTO', 'PENDENTE']
    }

});



module.exports = model('Activity', ActivictySchema);