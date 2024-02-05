const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  try {
    const product = await Product.findByIdAndUpdate(id, updatedProduct, { new: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product updated successfully!', product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating product' });
  }
});

module.exports = router;
