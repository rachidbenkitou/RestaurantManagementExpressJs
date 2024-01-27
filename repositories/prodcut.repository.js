const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();
const findProducts = async () => {
    const products = await prisma.product.findMany({});
    return products;
};

module.exports = {
    findProducts,
};
