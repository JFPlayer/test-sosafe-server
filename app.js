const express = require('express')
const cors = require('cors')
const path = require('path')

// initializations
const app = express()

//middlewares
app.use(cors())
app.use(express.json())

//routers
const locationsRoutes = require('./routes/api/locations.routes')

//routes
app.use('/api/locations', locationsRoutes)


app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname,'dist', 'index.html'));
});

module.exports = app