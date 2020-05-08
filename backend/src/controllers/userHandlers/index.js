const createUser = require("./createUserHandler");
const { deleteUserById, deleteUsers } = require("./deleteUserHandler");
const { getUserById, getAllUsers } = require("./getUserHandler");
const updateUser = require("./updateUserHandler");

module.exports = {
  createUser,
  deleteUserById,
  deleteUsers,
  getUserById,
  getAllUsers,
  updateUser,
};
