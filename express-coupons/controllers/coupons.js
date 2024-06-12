const Coupon = require('../models/coupon');

exports.getAllCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find().populate('reviews');
    res.status(200).json(coupons);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching coupons', error: err });
  }
};

exports.getCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id).populate('reviews');
    res.status(200).json(coupon);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching coupon', error: err });
  }
};

exports.createCoupon = async (req, res) => {
  try {
    const coupon = new Coupon(req.body);
    await coupon.save();
    res.status(201).json(coupon);
  } catch (err) {
    res.status(500).json({ message: 'Error creating coupon', error: err });
  }
};

exports.updateCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(coupon);
  } catch (err) {
    res.status(500).json({ message: 'Error updating coupon', error: err });
  }
};

exports.deleteCoupon = async (req, res) => {
  try {
    await Coupon.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Coupon deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting coupon', error: err });
  }
};
