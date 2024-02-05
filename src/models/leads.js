// leads.js

const mongoose = require('mongoose');

const leadsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: String, required: true },
  status: { type: String, required: true },
});

const Lead = mongoose.model('Lead', leadsSchema);

module.exports = Lead;
