"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductRepo = void 0;
const client_1 = require("@prisma/client");
const uuid_1 = require("uuid");
const prisma = new client_1.PrismaClient();
const createProductRepo = async (name, price, characteristics, image) => {
    const uuid = (0, uuid_1.v4)();
    const createProduct = await prisma.product.create({
        data: {
            id: uuid,
            name: name,
            price: price,
            characteristics: characteristics,
            image: image,
        },
    });
    return createProduct;
};
exports.createProductRepo = createProductRepo;
