const express = require('express');
const router = express.Router();

// @route   GET /api/services
// @desc    Get all services
// @access  Public
router.get('/', (req, res) => {
  res.json({
    message: 'Get all services - Coming soon'
  });
});

// @route   GET /api/services/:id
// @desc    Get service by ID
// @access  Public
router.get('/:id', (req, res) => {
  res.json({
    message: 'Get service by ID - Coming soon'
  });
});

// @route   POST /api/services
// @desc    Create new service (Admin only)
// @access  Private/Admin
router.post('/', (req, res) => {
  res.json({
    message: 'Create service - Coming soon'
  });
});

// @route   PUT /api/services/:id
// @desc    Update service (Admin only)
// @access  Private/Admin
router.put('/:id', (req, res) => {
  res.json({
    message: 'Update service - Coming soon'
  });
});

// @route   DELETE /api/services/:id
// @desc    Delete service (Admin only)
// @access  Private/Admin
router.delete('/:id', (req, res) => {
  res.json({
    message: 'Delete service - Coming soon'
  });
});

module.exports = router;
