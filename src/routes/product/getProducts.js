const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');

router.get('/', async (req, res) => {
  const { name, description, price, category } = req.query;

  // Build filter object based on query parameters
  const filters = {};
  if (name) filters.name = { $regex: new RegExp(name, 'i') }; // regex search for name (case-insensitive)
  if (description) filters.description = { $regex: new RegExp(description, 'i') }; // regex search for description
  if (price) filters.price = { $eq: price }; // exact price match
  if (category) filters.category = { $eq: category }; // exact category match

  try {
    const products = await Product.find(filters);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching products' });
  }
});

module.exports = router;
