const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  cart: [
    {
      name: {
        type: String,
        required: true
      },
      value: {
        type: Number,
        required: true
      },
      size: {
        type: String,
        required: true
      },
      amount: {
        type: Number,
        required: true
      }
    }
  ]
});

module.exports = Order = mongoose.model('order', orderSchema);