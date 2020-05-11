const Product = require("../../models/Product");
const mongoose = require("mongoose");

const deleteProductById = (req, res, next) => {
  const pid = req.params.pid;

  const o_id = new mongoose.Types.ObjectId(pid);

  Product.deleteOne({ _id: o_id }, (err, result) => {
    if (err) {
      console.log("Error at deleting product ", err);
      return res.status(500).send("Error at deleting product");
    }

    return res.status(200).send(result);
  });
};

const deleteAllProducts = (req, res, next) => {
  Product.deleteMany({}, (err, result) => {
    if (err) {
      console.log("Error at deleting products ", err);
      return res.status(500).send("Error at deleting products");
    }

    return res.status(200).send(result);
  });
};

const deleteProductsByMealId = (req, res, next) => {
  const mid = req.params.mid;

  const o_id = new mongoose.Types.ObjectId(mid);

  Product.deleteMany({ meal_id: o_id }, (err, result) => {
    if (err) {
      console.log("Error at deleting meal products ", err);
      return res.status(500).send("Error at deleting meal products");
    }

    return res.status(200).send(result);
  });
};

module.exports = {
  deleteProductById,
  deleteAllProducts,
  deleteProductsByMealId,
};
