const { config } = require('./config')
const app = require('./app')
const http = require('http')
const Socketio = require('socket.io')
const sockets = require('./sockets')
const runDB = require('./database')

app.set('port', config.port || 3000)
const PORT = app.get('port')

//create server
const server = http.createServer(app)

//init sockets
const io = Socketio(server)
sockets(io)

//server listening
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
  
  //database
  runDB()
})