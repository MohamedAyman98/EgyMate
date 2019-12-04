const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const touristSchema = new Schema({
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
  trips: [{ type: Schema.Types.ObjectId, ref: "Trip", required: true }]
});

module.exports = Tourist = mongoose.model("Tourist", touristSchema);
