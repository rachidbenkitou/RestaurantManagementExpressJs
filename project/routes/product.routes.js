// product.routes.js

const { Router } = require("express");
const { findAllProducts, addNewProduct} = require("../controllers/product.controller");
const productRouter = Router();

productRouter.route("/").get(findAllProducts);
productRouter.route("/").post(addNewProduct);

module.exports = {
    productRouter: productRouter,
};
