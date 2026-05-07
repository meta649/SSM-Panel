const express = require('express');
const router = express.Router();

// @route   GET /api/admin/dashboard
// @desc    Get admin dashboard stats
// @access  Private/Admin
router.get('/dashboard', (req, res) => {
  res.json({
    message: 'Admin dashboard - Coming soon'
  });
});

// @route   GET /api/admin/users
// @desc    Get all users
// @access  Private/Admin
router.get('/users', (req, res) => {
  res.json({
    message: 'Get all users - Coming soon'
  });
});

// @route   GET /api/admin/orders
// @desc    Get all orders
// @access  Private/Admin
router.get('/orders', (req, res) => {
  res.json({
    message: 'Get all orders - Coming soon'
  });
});

// @route   POST /api/admin/services
// @desc    Create service
// @access  Private/Admin
router.post('/services', (req, res) => {
  res.json({
    message: 'Create service - Coming soon'
  });
});

module.exports = router;
