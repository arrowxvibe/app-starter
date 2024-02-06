// events.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
  },
  className: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true, // or modify as per your requirement
  },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
