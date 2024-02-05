const express = require('express');
const router = express.Router();
const Service = require('../../models/Service'); // Assuming your model is in a models folder

// 1. Get all services filtered by attributes
router.get('/', async (req, res) => {
  try {
    const services = await Service.find(req.query); // Use query parameters for filtering
    res.json(services);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching services' });
  }
});

// 2. Find service by ID
router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      res.status(404).json({ message: 'Service not found' });
    } else {
      res.json(service);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching service' });
  }
});

// 3. Update service by ID and payload
router.put('/:id', async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true // Return the updated document
    });
    if (!updatedService) {
      res.status(404).json({ message: 'Service not found' });
    } else {
      res.json(updatedService);
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error updating service' });
  }
});

// 4. Create service by payload
router.post('/', async (req, res) => {
  try {
    const newService = new Service(req.body);
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error creating service' });
  }
});

// 5. Delete service by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) {
      res.status(404).json({ message: 'Service not found' });
    } else {
      res.json({ message: 'Service deleted successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting service' });
  }
});

module.exports = router;
