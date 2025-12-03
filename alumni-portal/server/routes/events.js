const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const authMiddleware = require('../middleware/authMiddleware');

// Create a new event
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { title, date, venue, description } = req.body;
        const newEvent = new Event({
            title,
            date,
            venue,
            description,
            organizer: req.user.id,
            attendees: []
        });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: 'Error creating event', error });
    }
});

// Get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find().populate('organizer', 'name');
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching events', error });
    }
});

// RSVP to an event
router.post('/:eventId/rsvp', authMiddleware, async (req, res) => {
    try {
        const { eventId } = req.params;
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        if (event.attendees.includes(req.user.id)) {
            return res.status(400).json({ message: 'Already RSVP\'d to this event' });
        }
        event.attendees.push(req.user.id);
        await event.save();
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Error RSVPing to event', error });
    }
});

module.exports = router;