const mongoose = require("mongoose");

const logoSchema = new mongoose.Schema(
  {
    img: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Logo", logoSchema);
