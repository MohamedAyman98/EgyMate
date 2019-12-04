const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const touristGuideSchema = new Schema({
  name: String,
  birthdate: Date,
  address: {
    country: String,
    state: String,
    city: String,
    street: String,
    locationURL: String
  },
  contactNumbers: [String],
  languages: [String],
  yearsOfExperience: Number
});

module.exports = Tourist = mongoose.model("TourGuide", tourGuideSchema);
