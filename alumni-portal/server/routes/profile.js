const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/profileController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

// Get user profile
router.get('/', authenticate, getUserProfile);

// Update user profile
router.put('/', authenticate, updateUserProfile);

module.exports = router;