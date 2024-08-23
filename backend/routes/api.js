const express = require('express');
const router = express.Router();
const { getUserData, postData } = require('../controllers/apiController');

// Route to get user-specific data
router.get('/user/:id', getUserData);

// Route to post data (e.g., new transaction)
router.post('/transaction', postData);

module.exports = router;
