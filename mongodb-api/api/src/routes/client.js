const express = require('express')
const clientSchema = require('../models/client')
const router = express.Router()

router.post('/clientes', (req,res) => {
    const client = clientSchema(req.body)
    client
        .save()
        .then((data) => res.json(data))
        .catch(error => res.json({ message: error }))

})

router.get('/clientes', (req,res) => {
    clientSchema
        .find()
        .then((data) => res.json(data))
        .catch(error => res.json({ message: error }))

})

router.get('/clientes/:id', (req,res) => {
    const { id } = req.params
    clientSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch(error => res.json({ message: error }))

})

router.put('/clientes/:id', (req,res) => {
    const { id } = req.params
    const { nomb_client, telefono, ciudad, calle, numero, fecha_nacimiento } = req.body

    clientSchema
        .updateOne({ _id: id }, {
            $set: {
                nomb_client, telefono, ciudad, calle, numero, fecha_nacimiento
            }
        })
        .then((data) => res.json(data))
        .catch(error => res.json({ message: error }))

})

router.delete('/clientes/:id', (req,res) => {
    const { id } = req.params

    clientSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch(error => res.json({ message: error }))

})

module.exports = router