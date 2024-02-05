// eventApi.js
const express = require('express');
const router = express.Router();
const Event = require('../models/events');

// 1. Load all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events.map(x => ({id: x._id, title: x.title, start : x?.start?.getTime(), end : x?.end?.getTime(), className: x.className })));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 2. Update an event by id
router.put('/:id', async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
    
// 3. Find an event by id
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.json(event);
  } catch (error) {
    res.status(404).json({ message: 'Event not found' });
  }
});

// 4. Create an event
router.post('/', async (req, res) => {
  try {
    const event = new Event(req.body);
    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 5. Delete an event   
router.delete('/:id', async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: 'Event not found' });
  }
});

router.get('/upcoming/all', async (req, res) => {
  try {
    const currentDate = new Date();
    const upcomingEvents = await Event.find({ start: { $gte: currentDate.toDateString() } }).sort('start');
    console.log(upcomingEvents)
    const formattedEvents = upcomingEvents.map(event => {
      return {
        id: event._id.toString(), // Convert ObjectId to string
        title: event.title,
        start: event.start instanceof Date ? event.start.getTime() : new Date(event.start.$date).getTime(),
        end: event.end instanceof Date ? event.end.getTime() : (event.end ? new Date(event.end.$date).getTime() : null),
        className: event.className,
      };
    });
    res.json(formattedEvents);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
