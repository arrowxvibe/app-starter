// memberTypesApi.js
const express = require('express');
const router = express.Router();
const MemberType = require('../models/teamMember');

// Create a member type
router.post('/', async (req, res) => {
  try {
    const memberType = await MemberType.create(req.body);
    res.json(memberType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all member types
router.get('/', async (req, res) => {
  try {
    const memberTypes = await MemberType.find();
    res.json(memberTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific member type
router.get('/:id', async (req, res) => {
  try {
    const memberType = await MemberType.findById(req.params.id);
    res.json(memberType);
  } catch (error) {
    res.status(404).json({ error: 'Member type not found' });
  }
});

// Update a member type
router.put('/:id', async (req, res) => {
  try {
    const memberType = await MemberType.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(memberType);
  } catch (error) {
    res.status(404).json({ error: 'Member type not found' });
  }
});

// Delete a member type
router.delete('/:id', async (req, res) => {
  try {
    await MemberType.findByIdAndDelete(req.params.id);
    res.json({ message: 'Member type deleted successfully' });
  } catch (error) {
    res.status(404).json({ error: 'Member type not found' });
  }
});

module.exports = router;
