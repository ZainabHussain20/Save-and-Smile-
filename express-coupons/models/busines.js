const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businesSchema = new Schema({
  name: { type: String, unique: true , required: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  vendor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  img: {type : String , required: false } , 
  type: {type: String , required : true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Busines', businesSchema);