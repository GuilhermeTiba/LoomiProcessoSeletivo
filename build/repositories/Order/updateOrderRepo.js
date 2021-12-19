"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderRepo = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const updateOrderRepo = async (id, clientId, product_list, status) => {
    const updateOrder = await prisma.order.update({
        where: {
            id: id,
        },
        data: {
            clientId: clientId,
            product_list: product_list,
            status: status,
        },
    });
    return updateOrder;
};
exports.updateOrderRepo = updateOrderRepo;
