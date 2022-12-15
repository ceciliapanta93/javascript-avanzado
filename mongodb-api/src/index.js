const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 9000

// routes
app.get('/', (req, res) => {
    res.send('welcome to my APIs')
})

//mongodb connection
mongoose.connect('mongodb+srv://root:<1234>@cluster0.otiy5de.mongodb.net/?retryWrites=true&w=majority')

app.listen(9000, () => {
    console.log(`server listening on port: ${PORT}`)
})

