const { config } = require('./config')
const app = require('./app')
const http = require('http')
const Socketio = require('socket.io')
const sockets = require('./sockets')
const runDB = require('./database')



//create server
const server = http.createServer(app)

//init sockets
const io = Socketio(server)
sockets(io)

//server listening
server.listen(config.port, () => {
  console.log(`listening on port ${config.port}`)
  
  //database
  runDB()
})