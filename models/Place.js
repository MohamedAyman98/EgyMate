const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Place schema
const placeSchema = new Schema({
  name: {
    type: String
  },
  city: {
    type: String
  },
  locationURL: {
    type: String
  }
});

module.exports = Place = mongoose.model("Place", placeSchema);
