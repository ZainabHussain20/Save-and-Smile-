const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['client', 'vendor', 'admin'],
    required: true,
  },
  savedCoupons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Coupon',
    },
  ],
});

module.exports = mongoose.model('User', UserSchema);
