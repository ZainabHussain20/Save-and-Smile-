const Review = require('../models/review');

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate('user').populate('coupon');
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching reviews', error: err });
  }
};

const getReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate('user').populate('coupon');
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching review', error: err });
  }
};

const createReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: 'Error creating review', error: err });
  }
};

const updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ message: 'Error updating review', error: err });
  }
};

const deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Review deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting review', error: err });
  }
};

module.exports={
  deleteReview, 
  updateReview,
  createReview,
  getReview,
  getAllReviews
}