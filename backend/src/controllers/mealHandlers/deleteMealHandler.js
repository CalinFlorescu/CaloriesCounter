const Meal = require("../../models/Meal");
const mongoose = require("mongoose");

const deleteMealById = (req, res, next) => {
  const mid = req.params.mid;

  const o_id = new mongoose.Types.ObjectId(mid);

  Meal.deleteOne({ _id: o_id }, (err, result) => {
    if (err) {
      console.log("Error at deleting meal ", err);
      return res.status(500).send("Error at deleting meal");
    }

    return res.status(200).send(result);
  });
};

const deleteAllMeals = (req, res, next) => {
  Meal.deleteMany({}, (err, result) => {
    if (err) {
      console.log("Error at deleting meal ", err);
      return res.status(500).send("Error at deleting meals");
    }

    return res.status(200).send(result);
  });
};

const deleteMealsByUserId = (req, res, next) => {
  const uid = req.params.uid;

  const o_id = new mongoose.Types.ObjectId(uid);

  Meal.deleteMany({ user_id: o_id }, (err, result) => {
    if (err) {
      console.log("Error at deleting user meals ", err);
      return res.status(500).send("Error at deleting user meals");
    }

    return res.status(200).send(result);
  });
};

module.exports = { deleteMealById, deleteAllMeals, deleteMealsByUserId };
