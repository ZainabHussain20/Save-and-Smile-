const express = require('express');
const router = express.Router();
const Business = require('../models/Business');

router.get('/', async (req, res) => {
  const { category } = req.query; 
  try {
    const businesses = await Business.find({ category: category });
    res.status(200).json(businesses);
  } catch (error) {
    console.error("Error fetching businesses:", error);
    res.status(500).json({ message: 'Error fetching businesses', error: error });
  }
});

module.exports = router;