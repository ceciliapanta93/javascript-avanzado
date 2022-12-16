const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
    'nomb_client': {
        type: String,
        required: true
    },
    'telefono': {
        type: Number,
        required: true,
    },
    'ciudad': {
        type: String,
        required: true
    },
    'calle': {
        type: String,
        required: true
    },
    'numero': {
        type: Number,
        required: true,
    },
    'fecha_nacimiento': {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Clientes', clientSchema)