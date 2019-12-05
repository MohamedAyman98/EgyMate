const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Trip schema
const tripSchema = new Schema({
  city: {
    type: String
  },
  placestoVisit: {
    type: [String],
    required: true
  },
  tourguide: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

module.exports = Trip = mongoose.model("Trip", tripSchema);
