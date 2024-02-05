// leadsApi.js

const express = require('express');
const router = express.Router();
const CustomerLead = require('../models/customerLead');

// Get list of leads items
router.get('/', async (req, res) => {
  try {
    const leads = await CustomerLead.find();
    res.json(leads.map(lead => ({
        id: lead._id.toString(),
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        company: lead.company,
        category: lead.category,
        source: lead.source,
        assignee: lead.assignee,
        createdDate: lead.createdDate,
        leadStatus: lead.leadStatus,
      })));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
    try {
      const lead = await CustomerLead.findById(req.params.id);
      res.json({
          id: lead._id.toString(),
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          company: lead.company,
          category: lead.category,
          source: lead.source,
          assignee: lead.assignee,
          createdDate: lead.createdDate,
          status: lead.status,
        });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

// Create a lead
router.post('/', async (req, res) => {
  const lead = new CustomerLead(req.body);
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
    const updatedLead = await CustomerLead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedLead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a lead
router.delete('/:id', async (req, res) => {
  try {
    await CustomerLead.findByIdAndDelete(req.params.id);
    res.json({ message: 'Lead deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
