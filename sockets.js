const locationService = require('./services/location')


const sockets = (io) => {
  io.on('connection', (socket) => {

    socket.on('visitedLocation', (locationId) => {
      
      locationService.incrementVisits(locationId)
    })

  })
}

module.exports = sockets