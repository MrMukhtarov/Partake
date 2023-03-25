const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema; 

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    subCategory: {
      type: [ObjectId],
      ref: "SubCategory",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
