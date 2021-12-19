"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientRepo = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getClientRepo = async (id) => {
    const getClient = await prisma.client.findUnique({
        where: {
            id: id,
        },
    });
    return getClient;
};
exports.getClientRepo = getClientRepo;
