const mongoose = require('mongoose')

const UnionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  address: {
    addressLocality: String,
    addressRegion: String,
    streetAddress: String,
    postalCode: String
  },
  longitude: mongoose.Schema.Types.Decimal128,
  latitude: mongoose.Schema.Types.Decimal128,
  description: String,
  numberOfEmployees: Number,
  telephone: String,
  industry: String,
  foundingDate: Number,
  sameAs: [String],
  Issues: String,
  ProgramAreas: String,
  comment_id: [mongoose.ObjectId],
  specific_id: mongoose.ObjectId
}, { collection: 'unions_list' })

const SpecificSchema = new mongoose.Schema({
  information_query: String,
  spending: Number,
  salary: Number,
  assets: Number,
  benefits: [String],
  strikes_and_events: [String],
  crime_and_corruption: [String],
  links: [String]
}, { collection: 'specifics_list' })

module.exports = { UnionSchema, SpecificSchema }
