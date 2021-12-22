"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSameCharacteristicProductsRepo = exports.getAllProductsBetweenAValueRepo = exports.getSingleProductRepo = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getSingleProductRepo = async (id) => {
    const getSingleProduct = await prisma.product.findUnique({
        where: {
            id: id,
        },
    });
    return getSingleProduct;
};
exports.getSingleProductRepo = getSingleProductRepo;
const getAllProductsBetweenAValueRepo = async (lowValue = 0, highValue = 100000) => {
    const getProductsBetwenValues = await prisma.product.findMany({
        where: {
            price: {
                gte: lowValue,
                lte: highValue,
            },
        },
    });
    return getProductsBetwenValues;
};
exports.getAllProductsBetweenAValueRepo = getAllProductsBetweenAValueRepo;
const getSameCharacteristicProductsRepo = async (characteristic) => {
    const getSameCharacteristicProducts = await prisma.product.findMany({
        where: {
            characteristics: characteristic,
        },
    });
    return getSameCharacteristicProducts;
};
exports.getSameCharacteristicProductsRepo = getSameCharacteristicProductsRepo;
