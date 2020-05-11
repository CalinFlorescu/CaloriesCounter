const User = require("../../models/User");
const mongoose = require("mongoose");

const { encryptingPassword } = require("../../utils/securePassword");

module.exports = (req, res, next) => {
  const { name, password, email } = req.body;

  User.findOne({ email }, (err, myUser) => {
    if (err) {
      console.log("Error at verifying email ", err);
      return res.status(500).send("Error at verifying email");
    }

    if (myUser) {
      return res.status(500).send("Email already in use!");
    } else {
      const { hashedPassword, salt } = encryptingPassword(password);

      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name,
        password: hashedPassword,
        email,
      });

      user
        .save()
        .then((result) => {
          console.log(result);
          return res.status(200).send("User created.");
        })
        .catch((err) => {
          console.log("Error at creating user - ", err);
          return res.status(500).send("Error at creating user");
        });
    }
  });
};
