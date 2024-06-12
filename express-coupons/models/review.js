const mongoose = require('mongoose')

const schema = mongoose.Schema

const reviewSchema = new schema(
  {
    Comment: {
      type: String,
      required: true
    },
    rate: {
      type: Number,
      min: 1,
      max: 5,
      required: true
    },
    user: [{ type: schema.Types.ObjectId, ref: 'User', required: true }],
    coupon: [{ type: schema.Types.ObjectId, ref: 'Coupon', required: true }]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Review', reviewSchema)
