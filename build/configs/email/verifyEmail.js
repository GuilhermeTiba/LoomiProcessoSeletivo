"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyEmail = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = require("bcrypt");
const prisma = new client_1.PrismaClient();
const verifyEmail = async (id, uniqueString) => {
    const findUser = await prisma.user.findUnique({
        where: {
            id: id,
        },
    });
    if (await (0, bcrypt_1.compare)(uniqueString, findUser.verificationCode)) {
        const userUpdateVerify = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                verified: true,
            },
        });
        return true;
    }
    else {
        return false;
    }
    ;
};
exports.verifyEmail = verifyEmail;
