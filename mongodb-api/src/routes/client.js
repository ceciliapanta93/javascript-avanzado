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

module.exports = router