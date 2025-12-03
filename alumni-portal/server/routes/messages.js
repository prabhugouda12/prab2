const express = require('express');
const { sendMessage, getMessages } = require('../controllers/messageController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

// Route to send a message
router.post('/', authenticate, sendMessage);

// Route to get messages between users
router.get('/:userId', authenticate, getMessages);

module.exports = router;