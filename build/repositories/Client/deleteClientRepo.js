"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClientRepo = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const deleteClientRepo = async (id) => {
    const deleteClient = await prisma.client.delete({
        where: {
            id: id,
        },
    });
    return deleteClient;
};
exports.deleteClientRepo = deleteClientRepo;
