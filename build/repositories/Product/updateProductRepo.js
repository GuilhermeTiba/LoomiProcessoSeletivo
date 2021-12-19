"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductRepo = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const updateProductRepo = async (id, name, price, characteristics, image) => {
    const updateProduct = await prisma.product.update({
        where: {
            id: id,
        },
        data: {
            name: name,
            price: price,
            characteristics: characteristics,
            image: image,
        },
    });
    return updateProduct;
};
exports.updateProductRepo = updateProductRepo;
