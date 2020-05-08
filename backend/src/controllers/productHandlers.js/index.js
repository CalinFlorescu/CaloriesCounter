const createProduct = require("./createProductHandler");
const updateProduct = require("./updateProductHandler");
const { getAllProducts, getProductsByMealId } = require("./getProductHandler");
const {
  deleteProductById,
  deleteAllProducts,
  deleteProductsByMealId,
} = require("./deleteProductHandler");

module.exports = {
  createProduct,
  getAllProducts,
  getProductsByMealId,
  updateProduct,
  deleteProductById,
  deleteAllProducts,
  deleteProductsByMealId,
};
