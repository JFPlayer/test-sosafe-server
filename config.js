require('dotenv').config()

const config = {
  port: process.env.PORT,
  dbURI: process.env.DB_URI,
}

module.exports = { config }