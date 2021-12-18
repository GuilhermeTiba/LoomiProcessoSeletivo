"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserRepo = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = require("bcrypt");
const uuid_1 = require("uuid");
const prisma = new client_1.PrismaClient();
const createUserRepo = async (email, password) => {
    const uuid = (0, uuid_1.v4)();
    const salt = await (0, bcrypt_1.genSalt)();
    const hashedPassword = await (0, bcrypt_1.hash)(password, salt);
    const createUser = await prisma.user.create({
        data: {
            id: uuid,
            email: email,
            password: hashedPassword,
        },
    });
    return createUser;
};
exports.createUserRepo = createUserRepo;