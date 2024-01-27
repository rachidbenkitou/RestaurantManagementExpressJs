const {getAllProducts} = require("../services/product.service");
const findAllProducts = async (req, res, next) => {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (err) {
        next(err);
    }
};

module.exports = {findAllProducts};
