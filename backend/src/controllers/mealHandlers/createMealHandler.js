const Meal = require("../../models/Meal");
const mongoose = require("mongoose");

module.exports = (req, res, next) => {
  const { date, time, text, calories, user_id } = req.body;

  const o_id = new mongoose.Types.ObjectId(user_id);

  const meal = new Meal({
    _id: new mongoose.Types.ObjectId(),
    text,
    time,
    date,
    calories,
    user_id: o_id,
  });

  meal
    .save()
    .then((result) => {
      console.log(result);
      return res.status(200).send("Meal created.");
    })
    .catch((err) => {
      console.log("Error at creating meal - ", err);
      return res.status(500).send("Error at creating meal");
    });
};
