// memberType.model.js
const mongoose = require('mongoose');

const memberTypeSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const MemberType = mongoose.model('MemberType', memberTypeSchema);

module.exports = MemberType;
