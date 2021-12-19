"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductRepo = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const deleteProductRepo = async (id) => {
    const deleteProduct = await prisma.product.delete({
        where: {
            id: id,
        },
    });
    return deleteProduct;
};
exports.deleteProductRepo = deleteProductRepo;
