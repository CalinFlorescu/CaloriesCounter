const createUserAdmin = require("./createUserAdminHandler");
const {
  deleteUserAdminById,
  deleteUserAdmins,
} = require("./deleteUserAdminHandler");
const { getUserAdminById, getAllUserAdmins } = require("./getUserAdminHandler");
const updateUserAdmin = require("./updateUserAdminHandler");

module.exports = {
  createUserAdmin,
  deleteUserAdminById,
  deleteUserAdmins,
  getUserAdminById,
  getAllUserAdmins,
  updateUserAdmin,
};
