const mongoose = require('mongoose');
const coupon = require('./coupon');

const BusinessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: { 
    type: String, 
    enum: ['restaurant', 'cinema', 'shop'],
    required: false },
  description: {
    type: String,
    required: false,
  },

  location: { 
    type: String, 
    required: false 
  },

    vendor: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: false 
    },

    img: {
      type : String , 
      required: false 
    } ,
    type: {type: String , 
      required : false 
    } ,
  approved: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true
});


module.exports = mongoose.model('Business', BusinessSchema);
