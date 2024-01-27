const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function findProducts() {
    try {
        const products = await prisma.product.findMany();
        return products;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    findProducts,
};
