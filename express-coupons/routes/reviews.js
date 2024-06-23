const express = require('express');
const { createReview, getAllReviews, getReview, updateReview, deleteReview, getAllRatings } = require('../controllers/reviews');  // Import getAllRatings
const { stripToken, verifyToken } = require('../middleware');

// const { isClient } = require('../middleware/role');

const router = express.Router();
router.get('/', getAllReviews);
router.get('/:id', getReview);
router.get('/coupons/:id', getAllRatings)
router.post('/', createReview);
router.put('/:id', stripToken, verifyToken, updateReview);
router.delete('/:id', deleteReview);

module.exports = router;