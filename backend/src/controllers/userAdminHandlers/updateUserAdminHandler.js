const UserAdmin = require("../../models/UserAdmin");
const mongoose = require("mongoose");

module.exports = (req, res, next) => {
  const uid = req.params.uid;

  const o_id = new mongoose.Types.ObjectId(uid);

  console.log("I am here");

  UserAdmin.findByIdAndUpdate(
    { _id: o_id },
    req.body,
    { new: true },
    (err, userAdmin) => {
      if (err) {
        console.log("Error at updating user-admin ", err);
        return res.status(500).send("Error at updating user-admin");
      }

      return res.status(200).send(userAdmin);
    }
  );
};
