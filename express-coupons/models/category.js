const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, required: true },
  coupons: [{ type: Schema.Types.ObjectId, ref: 'Coupon' }],
  img : {type : String }
},

{
  timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);
