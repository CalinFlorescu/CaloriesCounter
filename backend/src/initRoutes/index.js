const createAdmin = require("../controllers/adminHandlers/createAdminHandler");
const UserHandlers = require("../controllers/userHandlers");
const UserAdminHandlers = require("../controllers/userAdminHandlers");
const MealHandlers = require("../controllers/mealHandlers");
const ProductHandlers = require("../controllers/productHandlers.js");

module.exports = (app) => {
  app.get("/", (req, res, next) => {
    res.send("All good");
  });

  // User API's
  app.post("/user", UserHandlers.createUser);
  app.get("/users", UserHandlers.getAllUsers);
  app.get("/user/:uid", UserHandlers.getUserById);
  app.delete("/users", UserHandlers.deleteUsers);
  app.delete("/user/:uid", UserHandlers.deleteUserById);
  app.put("/user/:uid", UserHandlers.updateUser);

  // User-Admin Api's
  app.post("/user-admin", UserAdminHandlers.createUserAdmin);
  app.get("/user-admins", UserAdminHandlers.getAllUserAdmins);
  app.get("/user-admin/:uid", UserAdminHandlers.getUserAdminById);
  app.delete("/user-admins", UserAdminHandlers.deleteUserAdmins);
  app.delete("/user-admin/:uid", UserAdminHandlers.deleteUserAdminById);
  app.put("/user-admin/:uid", UserAdminHandlers.updateUserAdmin);

  // Admin Api's
  app.post("/admin", createAdmin);

  // Meal Api's
  app.post("/meal", MealHandlers.createMeal);
  app.get("/meals", MealHandlers.getAllMeals);
  app.get("/meals/:uid", MealHandlers.getMealsByUserId);
  app.delete("/meal/:mid", MealHandlers.deleteMealById);
  app.delete("/meals", MealHandlers.deleteAllMeals);
  app.delete("/meals/:uid", MealHandlers.deleteMealsByUserId);
  app.put("/meal/:mid", MealHandlers.updateMealById);

  // Product Api's
  app.post("/product", ProductHandlers.createProduct);
  app.get("/products", ProductHandlers.getAllProducts);
  app.get("/products/:mid", ProductHandlers.getProductsByMealId);
  app.delete("/product/:pid", ProductHandlers.deleteProductById);
  app.delete("/products", ProductHandlers.deleteAllProducts);
  app.delete("/products/:mid", ProductHandlers.deleteProductsByMealId);
  app.put("/product/:pid", ProductHandlers.updateProduct);
};
