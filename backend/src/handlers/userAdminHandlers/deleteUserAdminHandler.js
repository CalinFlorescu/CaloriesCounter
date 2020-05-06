const UserAdmin = require("../../models/userAdmins");
const mongoose = require("mongoose");

const deleteUserAdminById = (req, res, next) => {
  const uid = req.params.uid;

  const o_id = new mongoose.Types.ObjectId(uid);

  UserAdmin.deleteOne({ _id: o_id }, (err, result) => {
    if (err) {
      console.log("Error at deleting user ", err);
      return res.status(500).send("Error at deleting user");
    }
    console.log(result);

    return res.status(200).send(result);
  });
};

const deleteUserAdmins = (req, res, next) => {
  UserAdmin.deleteMany({}, (err, result) => {
    if (err) {
      console.log("Error at deleting user-admins ", err);
      return res.status(500).send("Error at deleting user-admins");
    }
    console.log(result);

    return res.status(200).send(result);
  });
};

module.exports = { deleteUserAdminById, deleteUserAdmins };
