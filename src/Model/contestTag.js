const { Schema, model } = require("mongoose");

const ContestTagSchema = new Schema({
  allContestTag: {
    type: [{
      type: String,
      required: true // Each element in the array is required
    }],
    required: true,
    validate: [arrayLimit, '{PATH} exceeds the limit of 10'] // Custom validation for array length, change limit as needed
  }
});

function arrayLimit(val) {
  return val.length <= 10; // Set the maximum length of the array
}

const ContestTag = model("ContestTag", ContestTagSchema);
module.exports = ContestTag; // ContestTag is the model name representing the "ContestTag" collection
