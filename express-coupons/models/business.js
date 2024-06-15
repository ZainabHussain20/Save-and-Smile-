const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Business', BusinessSchema);
