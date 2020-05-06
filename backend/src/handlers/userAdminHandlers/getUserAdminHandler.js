const UserAdmin = require("../../models/userAdmins");
const mongoose = require("mongoose");

const getUserAdminById = (req, res, next) => {
  const uid = req.params.uid;

  const o_id = new mongoose.Types.ObjectId(uid);

  UserAdmin.findById(o_id, (err, userAdmin) => {
    if (err) {
      console.log("Error at finding user-admin ", err);
      return res.status(500).send("Error at retrieving user-admin");
    }

    return res.status(200).send(userAdmin);
  });
};

const getAllUserAdmins = (req, res, next) => {
  UserAdmin.find({}, (err, userAdmins) => {
    if (err) {
      console.log("Error at retrieving user-admins ", err);
      return res.status(500).send("Error at retrieving user-admins");
    }

    return res.status(200).send(userAdmins);
  });
};

module.exports = { getAllUserAdmins, getUserAdminById };
