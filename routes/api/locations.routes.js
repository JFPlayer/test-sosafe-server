const router = require('express').Router()
const controller = require('../../controllers/locations.controller')

router.route('/')
  .get(controller.getLocations)
  .post(controller.createLocation)

module.exports = router