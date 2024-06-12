const mongoose = require('mongoose')

const schema = mongoose.Schema

const reviewSchema = new schema(
  {
    username: {
      type: String,
      required: true
    },
    userID: {
      type: String,
      required: true
    },
    Comment: {
      type: String,
      required: true
    },
    rate: {
      type: Number,
      min: 1,
      max: 5
    },
    username: [{ type: schema.Types.ObjectId, ref: 'User' }],
    userID: [{ type: schema.Types.ObjectId, ref: 'User' }]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Review', reviewSchema)
