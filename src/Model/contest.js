const { Schema, model } = require("mongoose");

const ContestSchema = new Schema({
  contest_name: {
    type: String,
    required: true,
  },
  total_join: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  from: {
    type: String,
    required: true,
  },

  to: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },
  creatorInfo: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  winner: {
    email: String,
    image: String,
    name: String,
  },
  winner_status: {
    type: Boolean,
    required: true,
  },
});

const Contest = model("Contest", ContestSchema);
module.exports = Contest; // Contest is a collection name
