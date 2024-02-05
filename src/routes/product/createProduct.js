const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');

router.post('/', async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.json({ message: 'Product created successfully!', product: savedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating product' });
  }
});

module.exports = router;
