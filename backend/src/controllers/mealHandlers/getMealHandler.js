const Meal = require("../../models/Meal");
const mongoose = require("mongoose");

const getMealsByUserId = (req, res, next) => {
  const uid = req.params.uid;

  const o_id = new mongoose.Types.ObjectId(uid);

  Meal.find({ user_id: o_id }, (err, meals) => {
    if (err) {
      console.log("Error at finding meals ", err);
      return res.status(500).send("Error at retrieving meals");
    }

    return res.status(200).send(meals);
  });
};

const getAllMeals = (req, res, next) => {
  Meal.find({}, (err, meals) => {
    if (err) {
      console.log("Error at retrieving meals ", err);
      return res.status(500).send("Error at retrieving meals");
    }

    return res.status(200).send(meals);
  });
};

module.exports = { getAllMeals, getMealsByUserId };
