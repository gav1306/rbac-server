const mongoose = require("mongoose");
const PermissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a permission name"],
    trim: true,
  },
  type: {
    type: String,
    trim: true,
    enum: {
      values: ["view", "create", "edit", "delete"],
      message: "{VALUE} is not supported",
    },
  },
});
PermissionSchema.index({ type: 1, name: 1 }, { unique: true });
module.exports = mongoose.model("Permission", PermissionSchema);
