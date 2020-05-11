const UserAdmin = require("../../models/UserAdmin");
const mongoose = require("mongoose");

const { encryptingPassword } = require("../../utils/securePassword");

module.exports = (req, res, next) => {
  const { password, email } = req.body;

  UserAdmin.findOne({ email }, (err, userAdmin) => {
    if (err) {
      console.log("Error at verifying email ", err);
      return res.status(500).send("Error at verifying email");
    }

    if (userAdmin) {
      return res.status(500).send("Email already in use!");
    } else {
      const { hashedPassword, salt } = encryptingPassword(password);

      const userAdmin = new UserAdmin({
        _id: new mongoose.Types.ObjectId(),
        password: hashedPassword,
        email,
      });

      userAdmin
        .save()
        .then((result) => {
          console.log(result);
          return res.status(200).send("User-Admin created.");
        })
        .catch((err) => {
          console.log("Error at creating user-admin - ", err);
          return res.status(500).send("Error at creating user-admin");
        });
    }
  });
};
