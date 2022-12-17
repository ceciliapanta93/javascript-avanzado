const express = require('express')
const mongoose = require('mongoose')
const clientRoutes = require('./src/routes/client')
const cors = require('cors')
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 9000

//middlewares
app.use(cors())
app.use(express.json())
app.use('/api', clientRoutes)
console.log(cors, 'cors')
// routes
app.get('/', (req, res) => {
    res.send('welcome to my APIs')
})

mongoose.set('strictQuery', true);

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB Atlas')
    })
    .catch((error) => console.log(error))

app.listen(9000, () => {
    console.log(`server listening on port: ${PORT}`)
})

