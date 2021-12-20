"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfClientIdNotExists = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const checkIfClientIdNotExists = async (clientId) => {
    const checkIfClientIdExists = await prisma.client.findUnique({
        where: {
            id: clientId,
        },
    });
    if (checkIfClientIdExists) {
        return false;
    }
    else {
        return true;
    }
    ;
};
exports.checkIfClientIdNotExists = checkIfClientIdNotExists;
