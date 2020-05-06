const createUser = require("../handlers/userHandlers/createUserHandler");
const {
  getAllUsers,
  getUserById,
} = require("../handlers/userHandlers/getUserHandler");
const {
  deleteUserById,
  deleteUsers,
} = require("../handlers/userHandlers/deleteUserHandler");
const updateUser = require("../handlers/userHandlers/updateUserHandler");

const createUserAdmin = require("../handlers/userAdminHandlers/createUserAdminHandler");
const {
  deleteUserAdminById,
  deleteUserAdmins,
} = require("../handlers/userAdminHandlers/deleteUserAdminHandler");
const {
  getAllUserAdmins,
  getUserAdminById,
} = require("../handlers/userAdminHandlers/getUserAdminHandler");
const updateUserAdmin = require("../handlers/userAdminHandlers/updateUserAdminHandler");

const createAdmin = require("../handlers/adminHandlers/createAdminHandler");

module.exports = (app) => {
  app.get("/", (req, res, next) => {
    res.send("All good");
  });

  // User API's
  app.post("/user", createUser);
  app.get("/users", getAllUsers);
  app.get("/user/:uid", getUserById);
  app.delete("/users", deleteUsers);
  app.delete("/user/:uid", deleteUserById);
  app.put("/user/:uid", updateUser);

  // User-Admin Api's
  app.post("/user-admin", createUserAdmin);
  app.get("/user-admins", getAllUserAdmins);
  app.get("/user-admin/:uid", getUserAdminById);
  app.delete("/user-admins", deleteUserAdmins);
  app.delete("/user-admin/:uid", deleteUserAdminById);
  app.put("/user-admin/:uid", updateUserAdmin);

  // Admin Api's
  app.post("/admin", createAdmin);
};
