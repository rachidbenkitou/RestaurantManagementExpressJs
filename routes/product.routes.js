// product.routes.js

const { Router } = require("express");
const { findAllProducts } = require("../controllers/product.controller");
const productRouter = Router();

productRouter.route("/").get(findAllProducts);

module.exports = {
    productRouter: productRouter,
};
