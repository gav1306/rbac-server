const mongoose = require("mongoose");
const RoleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a role title"],
    trim: true,
    unique: true,
  },
  permissions: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Permission",
    },
  ],
});
module.exports = mongoose.model("Role", RoleSchema);
