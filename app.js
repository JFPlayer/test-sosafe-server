const express = require('express')
const cors = require('cors')

// initializations
const app = express()

//middlewares
app.use(cors())
app.use(express.json())

//routers
const locationsRoutes = require('./routes/api/locations.routes')

//routes
app.use('/api/locations', locationsRoutes)

module.exports = app