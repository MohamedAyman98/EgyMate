const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tripSchema = require("./trip.model").schema;

//User schema
const userSchema = new Schema(
  {
    name: String,
    birthdate: Date,
    address: {
      country: String,
      state: String,
      city: String,
      street: String,
      locationURL: String
    },
    occupation: String,
    contactNumbers: [String],
    languages: [String],
    passportNumber: String,
    image: String
  },
  {
    discriminatorKey: "usertype",
    timestamps: true
  }
);

userSchema.index({
  "$**": "text"
});

//Tourguide schema
const tourguideSchema = new Schema({
  yearsOfExperience: Number,
});

tourguideSchema.index({
  "$**": "text"
});

tourguideSchema.virtual("offers", {
  ref: "Offer",
  localField: "_id",
  foreignField: "tourguide"
});

//Tourist schema

const touristSchema = new Schema({
  trips: [tripSchema]
});

touristSchema.index({
  "$**": "text"
});

const User = mongoose.model("User", userSchema);
const Tourguide = User.discriminator("Tourguide", tourguideSchema);
const Tourist = User.discriminator("Tourist", touristSchema);

module.exports = {
  Tourguide: Tourguide,
  Tourist: Tourist
};
