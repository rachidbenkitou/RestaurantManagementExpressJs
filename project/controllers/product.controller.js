const {addProductService, getAllProductsService} = require("../services/product.service");
const findAllProducts = async (req, res, next) => {
    const products = await getAllProductsService();
    res.json(products);
};
const addNewProduct = async (req, res, next) => {
try{
    const newProduct = req.body; // Assuming the new product data is sent in the request body

    // Call the service function to add the new product
    const createdProduct = await addProductService(newProduct, next);

    res.status(201).json(createdProduct);
} catch (error){
    next(error)
}

};

module.exports = {findAllProducts, addNewProduct};
