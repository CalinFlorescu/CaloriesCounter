const User = require("../../models/users");
const mongoose = require("mongoose");

const getUserById = (req, res, next) => {
  const uid = req.params.uid;

  const o_id = new mongoose.Types.ObjectId(uid);

  User.findById(o_id, (err, user) => {
    if (err) {
      console.log("Error at finding user ", err);
      return res.status(500).send("Error at retrieving user");
    }

    return res.status(200).send(user);
  });
};

const getAllUsers = (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) {
      console.log("Error at retrieving users ", err);
      return res.status(500).send("Error at retrieving users");
    }

    return res.status(200).send(users);
  });
};

module.exports = { getAllUsers, getUserById };
