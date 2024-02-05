const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  estimated_time: {
    type: Number,
    required: true
  },
  additional_attributes: {
    type: Object,
    required: false
  }
});

module.exports = mongoose.model('Service', serviceSchema);
