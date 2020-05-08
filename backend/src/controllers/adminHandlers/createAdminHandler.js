const Admin = require("../../models/Admin");
const mongoose = require("mongoose");

module.exports = (req, res, next) => {
  const { password, email } = req.body;

  Admin.findOne({ email }, (err, admin) => {
    if (err) {
      console.log("Error at verifying email ", err);
      return res.status(500).send("Error at verifying email");
    }

    if (admin) {
      return res.status(500).send("Email already in use!");
    } else {
      const newAdmin = new Admin({
        _id: new mongoose.Types.ObjectId(),
        password,
        email,
      });

      newAdmin
        .save()
        .then((result) => {
          console.log(result);
          return res.status(200).send("Admin created.");
        })
        .catch((err) => {
          console.log("Error at creating admin - ", err);
          return res.status(500).send("Error at creating admin");
        });
    }
  });
};
