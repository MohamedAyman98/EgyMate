const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TourGuideSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cityOfWork: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  hourlyRate: {
    type: Number,
    required: true
  }
});

module.exports = TourGuide = mongoose.model("tourGuide", TourGuideSchema);
