const express = require('express');
const router = express.Router();
const contact = require('../models/contact');

// Get all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await contact.find();
    res.json(contacts.map(x => ({ id: x._id,  name: x.name,
    phone: x.phone,
    email: x.email,
    company: x.company,
    created_date: x.created_date})));
  } catch (err) {   
    console.error(err);
    res.status(500).json({ error: 'Error fetching contacts' });
  }
});

// Add a new contact
router.post('/', async (req, res) => {
  try {
    const newContact = new contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Error creating contact' });
  }
});

// Get a specific contact by id
router.get('/:id', async (req, res) => {
  try {
    const contact = await contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching contact' });
  }
});

// Update a contact
router.put('/:id', async (req, res) => {
  try {
    const updatedContact = await contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return the updated document
    );
    if (!updatedContact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json(updatedContact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error updating contact' });
  }
});

// Delete a contact
router.delete('/:id', async (req, res) => {
  try {
    const deletedContact = await contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json({ message: 'Contact deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error deleting contact' });
  }
});

module.exports = router;
