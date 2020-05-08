const User = require("../../models/User");
const mongoose = require("mongoose");

const deleteUserById = (req, res, next) => {
  const uid = req.params.uid;

  const o_id = new mongoose.Types.ObjectId(uid);

  User.deleteOne({ _id: o_id }, (err, result) => {
    if (err) {
      console.log("Error at deleting user ", err);
      return res.status(500).send("Error at deleting user");
    }
    console.log(result);

    return res.status(200).send(result);
  });
};

const deleteUsers = (req, res, next) => {
  User.deleteMany({}, (err, result) => {
    if (err) {
      console.log("Error at deleting user ", err);
      return res.status(500).send("Error at deleting users");
    }
    console.log(result);

    return res.status(200).send(result);
  });
};

module.exports = { deleteUserById, deleteUsers };
