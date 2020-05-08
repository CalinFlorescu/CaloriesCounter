const Product = require("../../models/Product");
const mongoose = require("mongoose");

module.exports = (req, res, next) => {
  const { name, calories, meal_id } = req.body;

  const o_id = new mongoose.Types.ObjectId(meal_id);

  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name,
    calories,
    meal_id: o_id,
  });

  product
    .save()
    .then((result) => {
      console.log(result);
      return res.status(200).send("Product created.");
    })
    .catch((err) => {
      console.log("Error at creating product - ", err);
      return res.status(500).send("Error at creating product");
    });
};
