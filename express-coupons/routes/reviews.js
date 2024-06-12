const express = require('express');
const { getAllReviews, getReview, createReview, updateReview, deleteReview } = require('../controllers/reviews');

const router = express.Router();

router.get('/', getAllReviews);
router.get('/:id', getReview);
router.post('/', createReview);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

module.exports = router;
