const {addImageService, deleteImageService, findImagesByProductIdService} = require("../services/image.service");
const CustomError = require("../exceptions/customError");
const addImageController = async (req, res, next) => {
    try {
        const newImage = req.body;

        // Call the addImageService to add the image
        const addedImage = await addImageService(newImage);

        res.status(201).json(addedImage);
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

const deleteImageController = async (req, res, next) => {
    try {
        const imageId = parseInt(req.params.id); // Assuming the image ID is passed as a URL parameter

        // Call the deleteImageService to delete the image
        await deleteImageService(imageId);

        res.status(200).json({message: "Image deleted successfully"});
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

const findImagesByProductIdController = async (req, res, next) => {
    try {
        const productId = parseInt(req.params.productId); // Assuming the product ID is passed as a URL parameter

        // Call the findImagesByProductIdService to get the images
        const images = await findImagesByProductIdService(productId);

        res.status(200).json(images);
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

module.exports = {
    addImageController,
    deleteImageController,
    findImagesByProductIdController,
};
