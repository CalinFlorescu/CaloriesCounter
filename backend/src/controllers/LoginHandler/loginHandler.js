const Admin = require("../../models/Admin");
const User = require("../../models/User");
const UserAdmin = require("../../models/UserAdmin");

const { decryptingPassword } = require("../../utils/securePassword");

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  const { role } = req.headers;

  console.log(role);

  switch (role) {
    case "0": {
      Admin.find({ email }, (err, admin) => {
        if (err) {
          console.log("Error at finding admin email ", err);
          return res.status(500).send("Error at retrieving admin");
        }

        try {
          const decryptedPassword = decryptingPassword(admin[0].password);

          if (password === decryptedPassword) {
            return res.status(200).send("Login ok");
          }

          return res.status(500).send("Error at login for admin");
        } catch (e) {
          console.log("Error at admin login ", e);
          return res.status(500).send("Error at login for admin");
        }
      });
    }
    case "1": {
      UserAdmin.find({ email }, (err, userAdmin) => {
        if (err) {
          console.log("Error at finding user-admin email ", err);
          return res.status(500).send("Error at retrieving user-admin");
        }

        try {
          const decryptedPassword = decryptingPassword(userAdmin[0].password);

          if (password === decryptedPassword) {
            return res.status(200).send("Login ok");
          }

          return res.status(500).send("Error at login for user-admin");
        } catch (e) {
          console.log("Error at user-admin login ", e);
          return res.status(500).send("Error at login for user-admin");
        }
      });
    }
    case "2": {
      User.find({ email }, (err, user) => {
        if (err) {
          console.log("Error at finding user email ", err);
          return res.status(500).send("Error at retrieving user");
        }

        try {
          const decryptedPassword = decryptingPassword(user[0].password);

          if (password === decryptedPassword) {
            return res.status(200).send("Login ok");
          }

          return res.status(500).send("Error at login for user");
        } catch (e) {
          console.log("Error at user login ", e);
          return res.status(500).send("Error at login for user");
        }
      });
    }
  }
};
