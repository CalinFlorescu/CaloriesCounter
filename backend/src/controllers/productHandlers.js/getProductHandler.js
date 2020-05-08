const Product = require("../../models/Product");
const mongoose = require("mongoose");

const getProductsByMealId = (req, res, next) => {
  const mid = req.params.mid;

  const o_id = new mongoose.Types.ObjectId(mid);

  console.log(mid);

  Product.find({ meal_id: o_id }, (err, products) => {
    if (err) {
      console.log("Error at finding products ", err);
      return res.status(500).send("Error at retrieving products");
    }

    return res.status(200).send(products);
  });
};

const getAllProducts = (req, res, next) => {
  Product.find({}, (err, products) => {
    if (err) {
      console.log("Error at retrieving products ", err);
      return res.status(500).send("Error at retrieving products");
    }

    return res.status(200).send(products);
  });
};

module.exports = { getAllProducts, getProductsByMealId };
