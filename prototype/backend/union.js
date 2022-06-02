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
  member_count: Number,
  industry: String,
  year_founded: Number,
  website: String,
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
