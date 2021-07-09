const Location = require('../models/Location')

exports.newLocation = ({ description, latlng }) => {
  const location = new Location({
    description,
    latlng,
  })

  return location.save()
    .then(doc => doc)
    .catch(error => {
      throw new Error(error)
    })
}

exports.getLocations = (search) => {
  const query = {}

  if(search) {
    query.description = new RegExp(search, 'i')
  }
  return Location.find(query)
    .then(docs => docs)
    .catch(error => {
      throw new Error(error)
    })
}

exports.incrementVisits = async (locationId, quantity = 1) => {
  await Location.findByIdAndUpdate(locationId, {
    $inc: {
      visits: quantity
    }
  })
}