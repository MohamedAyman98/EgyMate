const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const offerSchema = require("./Offer").schema;
const placeSchema = require("./Place").schema;

//Trip schema
const tripSchema = new Schema(
  {
    country: String,
    states: [String],
    cities: [String],
    places: [placeSchema],
    statedStatesOnly: {
      type: Boolean,
      default: false
    },
    statedPlacesOnly: {
      type: Boolean,
      default: false
    },
    startDate: Date,
    endDate: Date,
    averagePrice: Number,
    image: String,
    tourist: { type: Schema.Types.ObjectId, ref: "Tourist", required: true },
    offers: [offerSchema],
    acceptedOffer: offerSchema
  },
  {
    timestamps: true
  }
);
tripSchema.index({
  "$**": "text"
});

module.exports = Trip = mongoose.model("Trip", tripSchema);
