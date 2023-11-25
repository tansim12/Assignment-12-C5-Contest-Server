const { Schema, model } = require("mongoose");

const PaymentDetails = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Payment = model("Payment", PaymentDetails);
module.exports = Payment;   // Payment is a collection name 
