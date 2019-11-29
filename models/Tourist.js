const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TouristSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Nationality: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  }
});

module.exports = Tourist = mongoose.model("tourist", TouristSchema);
