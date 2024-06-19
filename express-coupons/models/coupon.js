const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  discount: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: false,
  },
  img: {
    type : String , 
    required: false 
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
