// leadsApi.js

const express = require('express');
const router = express.Router();
const Lead = require('../models/leads');

// Get list of leads items
router.get('/', async (req, res) => {
  try {
    const leads = await Lead.find();
    res.json(leads.map(lead => ({
        id: lead._id.toString(),
        name: lead.name,
        location: lead.location,
        category: lead.category,
        date: lead.date,
        status: lead.status,
      })));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a lead
router.post('/', async (req, res) => {
  const lead = new Lead(req.body);
  try {
    const newLead = await lead.save();
    res.status(201).json(newLead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a lead
router.put('/:id', async (req, res) => {
  try {
    const updatedLead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedLead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a lead
router.delete('/:id', async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ message: 'Lead deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
