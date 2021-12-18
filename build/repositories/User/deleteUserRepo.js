"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserRepo = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const deleteUserRepo = async (id) => {
    const deleteUser = prisma.user.delete({
        where: {
            id: id
        }
    });
    return deleteUser;
};
exports.deleteUserRepo = deleteUserRepo;
