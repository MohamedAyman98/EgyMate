const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tourGuideSchema = new Schema({
  name: String,
  birthdate: Date,
  address: {
    country: String,
    city: String,
    street: String,
    locationURL: String
  },
  contactNumbers: [String],
  languages: [String],
  yearsOfExperience: Number
});

module.exports = TourGuide = mongoose.model("TourGuide", tourGuideSchema);
