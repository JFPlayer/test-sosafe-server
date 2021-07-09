const { config } = require('./config')
const mongoose = require('mongoose')

const URI = config.dbURI

const runDB = () => {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
    .then(db => console.log('DB connected'))
    .catch(error => console.log('Error: DB not connected ', error))
}

module.exports = runDB