const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ["Tourist", "TourGuide"]
  }
});

module.exports = User = mongoose.model("User", UserSchema);
