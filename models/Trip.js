const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Trip schema
const tripSchema = new Schema({
  city: {
    type: String
  },
  placestoVisit: {
    type: [{ type: Schema.Types.ObjectId, ref: "Place" }],
    required: true
  },
  tourguide: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  tourist: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  price: {
    type: Number
  }
});

module.exports = Trip = mongoose.model("Trip", tripSchema);
