const Meal = require("../../models/Meal");
const mongoose = require("mongoose");

module.exports = (req, res, next) => {
  const mid = req.params.mid;

  const o_id = new mongoose.Types.ObjectId(mid);

  Meal.findByIdAndUpdate(
    { _id: o_id },
    req.body,
    { new: true },
    (err, meal) => {
      if (err) {
        console.log("Error at updating meal ", err);
        return res.status(500).send("Error at updating meal");
      }

      return res.status(200).send(meal);
    }
  );
};
