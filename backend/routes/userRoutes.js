const express = require('express');
const router = express.Router();

// @route   GET /api/users/:id
// @desc    Get user details
// @access  Private
router.get('/:id', (req, res) => {
  res.json({
    message: 'Get user details - Coming soon'
  });
});

// @route   PUT /api/users/:id
// @desc    Update user profile
// @access  Private
router.put('/:id', (req, res) => {
  res.json({
    message: 'Update user profile - Coming soon'
  });
});

// @route   POST /api/users/wallet/add-balance
// @desc    Add balance to wallet
// @access  Private
router.post('/wallet/add-balance', (req, res) => {
  res.json({
    message: 'Add wallet balance - Coming soon'
  });
});

module.exports = router;
