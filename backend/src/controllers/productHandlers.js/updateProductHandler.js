const Product = require("../../models/Product");
const mongoose = require("mongoose");

module.exports = (req, res, next) => {
  const pid = req.params.pid;

  const o_id = new mongoose.Types.ObjectId(pid);

  Product.findByIdAndUpdate(
    { _id: o_id },
    req.body,
    { new: true },
    (err, product) => {
      if (err) {
        console.log("Error at updating product ", err);
        return res.status(500).send("Error at updating product");
      }

      return res.status(200).send(product);
    }
  );
};
