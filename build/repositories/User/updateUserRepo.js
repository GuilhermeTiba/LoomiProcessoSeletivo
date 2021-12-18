"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserPasswordRepo = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = require("bcrypt");
const prisma = new client_1.PrismaClient();
const updateUserPasswordRepo = async (id, lastPassword, newPassword) => {
    if (await checkUserLastPassword(id, lastPassword)) {
        const salt = await (0, bcrypt_1.genSalt)();
        const hashedPassword = await (0, bcrypt_1.hash)(newPassword, salt);
        const updateUserPassword = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                password: hashedPassword,
            },
        });
        return updateUserPassword;
    }
    else {
        return null;
    }
};
exports.updateUserPasswordRepo = updateUserPasswordRepo;
const checkUserLastPassword = async (id, password) => {
    const userLastPassword = await prisma.user.findUnique({
        where: {
            id: id,
        },
    });
    return (0, bcrypt_1.compare)(password, userLastPassword.password);
};
