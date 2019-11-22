const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TouristSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = Tourist = mongoose.model("tourist", TouristSchema);
