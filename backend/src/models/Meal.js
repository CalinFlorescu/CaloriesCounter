const mongoose = require("mongoose");

const mealSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user_id: mongoose.Schema.Types.ObjectId,
  calories: Number,
  text: String,
  time: String,
  date: Date,
});

module.exports = mongoose.model("Meal", mealSchema);
