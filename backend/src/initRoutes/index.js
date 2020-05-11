const createAdmin = require("../controllers/adminHandlers/createAdminHandler");
const UserHandlers = require("../controllers/userHandlers");
const UserAdminHandlers = require("../controllers/userAdminHandlers");
const MealHandlers = require("../controllers/mealHandlers");
const ProductHandlers = require("../controllers/productHandlers.js");

const login = require("../controllers/LoginHandler");

module.exports = (app) => {
  app.get("/v1/api/", (req, res, next) => {
    res.send("All good");
  });

  // User API's
  app.post("/v1/api/user", UserHandlers.createUser);
  app.get("/v1/api/users", UserHandlers.getAllUsers);
  app.get("/v1/api/user/:uid", UserHandlers.getUserById);
  app.delete("/v1/api/users", UserHandlers.deleteUsers);
  app.delete("/v1/api/user/:uid", UserHandlers.deleteUserById);
  app.put("/v1/api/user/:uid", UserHandlers.updateUser);

  // User-Admin Api's
  app.post("/v1/api/user-admin", UserAdminHandlers.createUserAdmin);
  app.get("/v1/api/user-admins", UserAdminHandlers.getAllUserAdmins);
  app.get("/v1/api/user-admin/:uid", UserAdminHandlers.getUserAdminById);
  app.delete("/v1/api/user-admins", UserAdminHandlers.deleteUserAdmins);
  app.delete("/v1/api/user-admin/:uid", UserAdminHandlers.deleteUserAdminById);
  app.put("/v1/api/user-admin/:uid", UserAdminHandlers.updateUserAdmin);

  // Admin Api's
  app.post("/v1/api/admin", createAdmin);

  // Meal Api's
  app.post("/v1/api/meal", MealHandlers.createMeal);
  app.get("/v1/api/meals", MealHandlers.getAllMeals);
  app.get("/v1/api/meals/:uid", MealHandlers.getMealsByUserId);
  app.delete("/v1/api/meal/:mid", MealHandlers.deleteMealById);
  app.delete("/v1/api/meals", MealHandlers.deleteAllMeals);
  app.delete("/v1/api/meals/:uid", MealHandlers.deleteMealsByUserId);
  app.put("/v1/api/meal/:mid", MealHandlers.updateMealById);

  // Product Api's
  app.post("/v1/api/product", ProductHandlers.createProduct);
  app.get("/v1/api/products", ProductHandlers.getAllProducts);
  app.get("/v1/api/products/:mid", ProductHandlers.getProductsByMealId);
  app.delete("/v1/api/product/:pid", ProductHandlers.deleteProductById);
  app.delete("/v1/api/products", ProductHandlers.deleteAllProducts);
  app.delete("/v1/api/products/:mid", ProductHandlers.deleteProductsByMealId);
  app.put("/v1/api/product/:pid", ProductHandlers.updateProduct);

  // Login Api
  app.post("/v1/api/login", login);
};
