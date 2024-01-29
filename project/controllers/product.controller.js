const {
    addProductService,
    getAllProductsService,
    updateProductService,
    deleteProductByIdService, findProductByIdService
} = require("../services/product.service");
const CustomError = require("../exceptions/customError");
const findAllProducts = async (req, res, next) => {
    try {
        const products = await getAllProductsService();
        res.status(200).json(products);
    } catch (error) {
        if (error instanceof CustomError) {
            // Handle custom errors
            res.status(error.statusCode).json({error: error.message});
        } else {
            // Handle other unexpected errors
            next(error);
        }
    }
};
const addProductController = async (req, res, next) => {
    try {
        const newProduct = req.body; // Assuming the new product data is sent in the request body

        // Call the service function to add the new product
        const createdProduct = await addProductService(newProduct, next);

        res.status(201).json(createdProduct);
    } catch (error) {
        if (error instanceof CustomError) {
            // Handle custom errors
            res.status(error.statusCode).json({error: error.message});
        } else {
            // Handle other unexpected errors
            next(error);
        }
    }

};
const updateProductController = async (req, res, next) => {
    try {
        const productId = parseInt(req.params.id); // Assuming the product ID is passed as a URL parameter
        const updatedProduct = req.body;

        // Call the updateProductService to update the product
        const updatedProductResult = await updateProductService(productId, updatedProduct);

        res.status(200).json(updatedProductResult);
    } catch (error) {
        if (error instanceof CustomError) {
            // Handle custom errors
            res.status(error.statusCode).json({error: error.message});
        } else {
            // Handle other unexpected errors
            next(error);
        }
    }

};
const deleteProductByIdController = async (req, res, next) => {
    try {
        const productId = parseInt(req.params.id); // Assuming the product ID is passed as a URL parameter

        // Call the deleteProductByIdService to delete the product
        await deleteProductByIdService(productId);

        res.json({message: "Product deleted successfully"});
    } catch (error) {
        if (error instanceof CustomError) {
            // Handle custom errors
            res.status(error.statusCode).json({error: error.message});
        } else {
            // Handle other unexpected errors
            next(error);
        }
    }
};

const findProductByIdController = async (req, res, next) => {
    try {
        const productId = parseInt(req.params.id); // Assuming the product ID is passed as a URL parameter

        // Call the findProductByIdService to get the product
        const product = await findProductByIdService(productId);

        res.status(200).json(product);
    } catch (error) {
        if (error instanceof CustomError) {
            // Handle custom errors
            res.status(error.statusCode).json({ error: error.message });
        } else {
            // Handle other unexpected errors
            next(error);
        }
    }
};

module.exports = {
    findAllProducts,
    addProductController,
    updateProductController,
    deleteProductByIdController,
    findProductByIdController
};
