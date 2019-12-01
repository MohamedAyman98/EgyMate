const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TouristSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  }
});

module.exports = Tourist = mongoose.model("tourist", TouristSchema);
