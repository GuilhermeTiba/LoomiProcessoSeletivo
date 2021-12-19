"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrdersFromACustomTimestampRepo = exports.getAllOrdersFromAClientRepo = exports.getSingleOrderRepo = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getSingleOrderRepo = async (id) => {
    const getSingleOrder = await prisma.order.findUnique({
        where: {
            id: id,
        },
    });
    return getSingleOrder;
};
exports.getSingleOrderRepo = getSingleOrderRepo;
const getAllOrdersFromAClientRepo = async (clientId) => {
    const getAllOrdersFromAClient = await prisma.order.findMany({
        where: {
            clientId: clientId,
        },
    });
    return getAllOrdersFromAClient;
};
exports.getAllOrdersFromAClientRepo = getAllOrdersFromAClientRepo;
const getAllOrdersFromACustomTimestampRepo = async (initialTime, finalTime) => {
    const getAllOrdersFromACustomTimestamp = await prisma.order.findMany({
        where: {
            created_at: {
                gte: initialTime,
                lte: finalTime,
            },
        },
    });
    return getAllOrdersFromACustomTimestamp;
};
exports.getAllOrdersFromACustomTimestampRepo = getAllOrdersFromACustomTimestampRepo;
