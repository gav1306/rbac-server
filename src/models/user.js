const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: [true, "Please provide a username"],
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    required: [true, "Please provide a password"],
  },
  active: {
    type: Boolean,
    default: true,
  },
  role: {
    type: mongoose.Types.ObjectId,
    ref: "Role",
    required: [true, "Please provide a role"],
  },
});
module.exports = mongoose.model("User", UserSchema);
