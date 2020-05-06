const User = require("../../models/users");
const mongoose = require("mongoose");

module.exports = (req, res, next) => {
  const uid = req.params.uid;

  const o_id = new mongoose.Types.ObjectId(uid);

  User.findByIdAndUpdate(
    { _id: o_id },
    req.body,
    { new: true },
    (err, user) => {
      if (err) {
        console.log("Error at updating user ", err);
        return res.status(500).send("Error at updating user");
      }

      return res.status(200).send(user);
    }
  );
};
