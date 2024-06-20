const express = require('express');
const { createReview, getAllReviews, getReview, updateReview, deleteReview, getAllRatings } = require('../controllers/reviews');  // Import getAllRatings
const { stripToken, verifyToken } = require('../middleware');
const { isClient } = require('../middleware/role');

const router = express.Router();

router.get('/', getAllReviews);
router.get('/:id', getReview);
router.get('/coupons/:couponId', getAllRatings)
router.post('/:id', stripToken, verifyToken, isClient, createReview);
router.put('/:id', stripToken, verifyToken, updateReview);
router.delete('/:id', stripToken, verifyToken, deleteReview);


module.exports = router;