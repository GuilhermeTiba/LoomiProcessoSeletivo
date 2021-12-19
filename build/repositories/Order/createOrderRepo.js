"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderRepo = void 0;
const client_1 = require("@prisma/client");
const uuid_1 = require("uuid");
const prisma = new client_1.PrismaClient();
const createOrderRepo = async (clientId, product_list) => {
    const uuid = (0, uuid_1.v4)();
    const createOrder = await prisma.order.create({
        data: {
            id: uuid,
            clientId: clientId,
            product_list: product_list,
        },
    });
    return createOrder;
};
exports.createOrderRepo = createOrderRepo;
