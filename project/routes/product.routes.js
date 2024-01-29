// product.routes.js

const {Router} = require("express");
const {
    findAllProducts,
    addProductController,
    updateProductController,
    deleteProductByIdController, findProductByIdController
} = require("../controllers/product.controller");
const productRouter = Router();

productRouter.get("/", findAllProducts);
productRouter.get("/:id", findProductByIdController);
productRouter.post("/", addProductController);
productRouter.put("/:id", updateProductController);
productRouter.delete("/:id", deleteProductByIdController);
module.exports = {
    productRouter: productRouter,
};
