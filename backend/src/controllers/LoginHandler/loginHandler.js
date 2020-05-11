const Admin = require("../../models/Admin");
const User = require("../../models/User");
const UserAdmin = require("../../models/UserAdmin");

const { decryptingPassword } = require("../../utils/securePassword");
const { createToken } = require("../../utils/jwtLogic");

module.exports = (req, res, next) => {
  const { email, password: userPassword } = req.body;
  const { role } = req.headers;

  switch (role) {
    case "0": {
      Admin.find({ email }, (err, admin) => {
        if (err) {
          console.log("Error at finding admin email ", err);
          return res.status(500).send("Error at retrieving admin");
        }

        try {
          const { password, _id } = admin[0];

          const decryptedPassword = decryptingPassword(password);

          if (userPassword === decryptedPassword) {
            const token = createToken(_id, process.env.JWT_ADMIN_SECRET);

            return res.status(200).send({
              token: `Bearer ${token}`,
              userId: _id,
            });
          }

          return res.status(500).send("Error at login for admin");
        } catch (e) {
          console.log("Error at admin login ", e);
          return res.status(500).send("Error at login for admin");
        }
      });
      return;
    }
    case "1": {
      UserAdmin.find({ email }, (err, userAdmin) => {
        if (err) {
          console.log("Error at finding user-admin email ", err);
          return res.status(500).send("Error at retrieving user-admin");
        }

        try {
          const { password, _id } = userAdmin[0];

          const decryptedPassword = decryptingPassword(password);

          if (userPassword === decryptedPassword) {
            const token = createToken(_id, process.env.JWT_USERADMIN_SECRET);

            return res.status(200).send({
              token: `Bearer ${token}`,
              userId: _id,
            });
          }

          return res.status(500).send("Error at login for user-admin");
        } catch (e) {
          console.log("Error at user-admin login ", e);
          return res.status(500).send("Error at login for user-admin");
        }
      });
      return;
    }
    case "2": {
      User.find({ email }, (err, user) => {
        if (err) {
          console.log("Error at finding user email ", err);
          return res.status(500).send("Error at retrieving user");
        }

        try {
          const { password, _id } = user[0];

          const decryptedPassword = decryptingPassword(password);

          if (userPassword === decryptedPassword) {
            const token = createToken(_id, process.env.JWT_USER_SECRET);

            return res.status(200).send({
              token: `Bearer ${token}`,
              userId: _id,
            });
          }

          return res.status(500).send("Error at login for user");
        } catch (e) {
          console.log("Error at user login ", e);
          return res.status(500).send("Error at login for user");
        }
      });
      return;
    }
  }
};
