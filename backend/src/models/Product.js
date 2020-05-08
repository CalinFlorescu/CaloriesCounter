const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  calories: Number,
  meal_id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("Product", productSchema);
