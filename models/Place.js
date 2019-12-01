const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Place schema
const placeSchema = new Schema(
  {
    name: String,
    address: {
      country: String,
      state: String,
      city: String,
      street: String,
      locationURL: String
    },
    description: String,
    averagePrice: Number,
    image: String,
    tags: [String]
  },
  {
    timestamps: true
  }
);

placeSchema.index({
  "$**": "text"
});

module.exports = Place = mongoose.model("Place", placeSchema);
