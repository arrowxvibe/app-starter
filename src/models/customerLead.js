// customerLead.js

const mongoose = require('mongoose');

const customerLeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String, required: true },
  category: { type: String, required: true },
  source: { type: String, required: true },
  assignee: { type: String, required: false }, // Assignee is now optional
  createdDate: { type: Date, default: Date.now },
  leadStatus: { type: String, default: "Open", required: true },
});

const CustomerLead = mongoose.model('CustomerLead', customerLeadSchema);

module.exports = CustomerLead;
