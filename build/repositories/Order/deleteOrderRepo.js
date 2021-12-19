"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderRepo = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const deleteOrderRepo = async (id) => {
    const deleteOrder = prisma.order.delete({
        where: {
            id: id,
        },
    });
    return deleteOrder;
};
exports.deleteOrderRepo = deleteOrderRepo;
