"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClientRepo = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const updateClientRepo = async (id, name, email, phone, address) => {
    const updateClient = await prisma.client.update({
        where: {
            id: id,
        },
        data: {
            name: name,
            email: email,
            phone: phone,
            address: address,
        },
    });
    return updateClient;
};
exports.updateClientRepo = updateClientRepo;
