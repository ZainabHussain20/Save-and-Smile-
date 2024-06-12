const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const couponSchema = new Schema({
  code: { type: String, required: true },
  discount: { type: Number, required: true },
  description: { type: String, required: false },
  expirationDate: { type: Date, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  vendor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  img : {type : String }

}, {
  timestamps: true
});

module.exports = mongoose.model('Coupon', couponSchema);
