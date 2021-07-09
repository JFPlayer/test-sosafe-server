const locationService = require('../services/location')

exports.getLocations = async (req, res) => {
  const { search } = req.query
  
  try {
    const locationsFound = await locationService.getLocations(search)
    res.json({
      body: locationsFound
    })
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error'
    })
  }
}

exports.createLocation = async (req, res) => {
  const { description, latlng } = req.body

  try {
    const locationCreated =  await locationService.newLocation({ description, latlng })
    res.json({
      message: 'location created successfully',
      body: locationCreated
    })
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error'
    })
  }
}
