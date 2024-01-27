const CustomError = require("../exceptions/customError");
const {findProducts} = require("../repositories/prodcut.repository");

const getAllProducts = async () => {
    const products = await findProducts();
    if (!products.length) {
        throw new CustomError("No data found", 404);
    }
    return products;
};

module.exports = {getAllProducts};
