const {Router} = require("express");
const {findAllProducts} = require("../controllers/product.controller");
const userRouter = Router();


userRouter.route("/").get(findAllProducts);


module.exports = userRouter;
