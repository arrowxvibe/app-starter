const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  company: String,
  created_date: {
    type: Date,
    default: Date.now
  },
});

contactSchema.pre('save', async function (next) {
  if (!this.created_date) {
    this.created_date = Date.now();
  }
  next();
});

module.exports = mongoose.model('contact', contactSchema);
