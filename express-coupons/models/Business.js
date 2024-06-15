const mongoose = require('mongoose');
const coupon = require('./coupon');
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
  name: { type: String, unique: true , required: true },
  category: { type: String, enum: ['restaurant', 'mall', 'shop'],required: true },
  location: { type: String, required: true },
  vendor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  img: {type : String , required: false } , 
  type: {type: String , required : true } ,
}, {
  timestamps: true
});

module.exports = mongoose.model('Business', BusinessSchema);