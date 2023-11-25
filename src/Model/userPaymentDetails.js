const { Schema, model } = require("mongoose");

const PaymentDetails = new Schema({
  participantName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  contestId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  creatorEmail: {
    type: String,
    required: true,
  },
  creatorEmail: {
    type: String,
    required: true,
  },
  registerTime: {
    type: Date,
    required: true,
  },

});

const Payment = model("Payment", PaymentDetails);
module.exports = Payment; // Payment is a collection name
