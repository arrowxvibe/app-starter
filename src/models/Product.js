const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: { type: Number, unique: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);
