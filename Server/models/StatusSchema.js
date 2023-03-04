const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Status", statusSchema)