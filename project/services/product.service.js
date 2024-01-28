const CustomError = require("../exceptions/customError");
const {
    addProductRepository,
    findProductsRepository,
    productExistsByNameRepository
} = require("../repositories/prodcut.repository");

const getAllProductsService = async () => {
    try {
        return await findProductsRepository();
    } catch (error) {
        throw new CustomError("Error while executing findProducts function", 500);
    }
};

const addProductService = async (newProduct) => {
        // Check if a product with the same name already exists
        const productExists = await productExistsByNameRepository(newProduct.name);

        if (productExists) {
            throw new CustomError("Product already exists", 400); // You can choose an appropriate status code
        }

        // If the product doesn't exist, proceed with creating a new one
        return addProductRepository(newProduct);

};


module.exports = {
    getAllProductsService,
    addProductService
};
