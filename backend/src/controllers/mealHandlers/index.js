const createMeal = require("./createMealHandler");
const updateMealById = require("./updateMealHandler");
const { getMealsByUserId, getAllMeals } = require("./getMealHandler");
const {
  deleteMealById,
  deleteAllMeals,
  deleteMealsByUserId,
} = require("./deleteMealHandler");

module.exports = {
  createMeal,
  getMealsByUserId,
  getAllMeals,
  updateMealById,
  deleteMealById,
  deleteAllMeals,
  deleteMealsByUserId,
};
