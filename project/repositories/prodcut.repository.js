const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();
const findProductsRepository = async () => {
    return prisma.product.findMany({});
};

const addProductRepository = async (newProduct) => {
    return prisma.product.create({
        data: newProduct,
    });
};

const findProductByNameRepository = async (productName) => {
    return prisma.product.findFirst({
        where: {
            name: productName,
        },
    });
};

const productExistsByNameRepository = async (productName) => {
    const existingProduct = await findProductByNameRepository(productName);
    return !!existingProduct; // Returns true if the product with the given name exists, false otherwise
};

module.exports = {
    findProductsRepository,
    addProductRepository,
    findProductByNameRepository,
    productExistsByNameRepository
};
