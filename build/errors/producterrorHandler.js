"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfNotAllProductsOnListExists = exports.checkIfQueryParamsAreNumbers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const checkIfQueryParamsAreNumbers = (lowValue = 0, highValue = 0) => {
    if (!isNaN(lowValue) && !isNaN(highValue)) {
        return false;
    }
    else {
        return true;
    }
};
exports.checkIfQueryParamsAreNumbers = checkIfQueryParamsAreNumbers;
const checkIfNotAllProductsOnListExists = async (product_list) => {
    const uncheckedProducts = [];
    for (let index = 0; index < product_list.length; index += 1) {
        const productId = product_list[index];
        const checkIfSingleProductExist = await checkIfSingleProductExistFunc(productId);
        if (checkIfSingleProductExist == null) {
            uncheckedProducts.push(productId);
        }
        ;
    }
    ;
    console.log(uncheckedProducts);
    if (uncheckedProducts.length == 0) {
        return null;
    }
    else {
        return uncheckedProducts;
    }
    ;
};
exports.checkIfNotAllProductsOnListExists = checkIfNotAllProductsOnListExists;
const checkIfSingleProductExistFunc = async (productId) => {
    const checkIfProductExist = await prisma.product.findUnique({
        where: {
            id: productId,
        },
    });
    return checkIfProductExist;
};
