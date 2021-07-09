const { Schema, model } = require('mongoose')

const locationSchema = new Schema({
  description: {
    type: String,
  },
  latlng: {
    lat: { type: String },
    lng: { type: String }
  },
  visits: {
    type: Number,
    default: 0,
  }
}, {
  timestamps: true,
  versionKey: false,
})

module.exports = model('Location', locationSchema)