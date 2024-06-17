const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: true,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
}, {
  timestamps: true
});

module.exports = mongoose.model('Coupon', CouponSchema);
