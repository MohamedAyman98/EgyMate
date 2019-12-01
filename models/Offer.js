const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const placeSchema = require("./Place").schema;

//offer schema
const offerSchema = new Schema(
  {
    places:[
      {
        place: placeSchema,
        from: Date,
        to: Date
      }
    ],
    price: Number,
    tourguide: { type: Schema.Types.ObjectId, ref: "Tourguide", required: true }
  },
  {
    timestamps: true
  }
);

offerSchema.index({
  "$**": "text"
});

module.exports = Offer = mongoose.model("Offer", offerSchema);
