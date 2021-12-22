"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserRepo = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = require("bcrypt");
const uuid_1 = require("uuid");
const sendVerificationEmail_1 = require("../../configs/email/sendVerificationEmail");
const prisma = new client_1.PrismaClient();
const createUserRepo = async (email, password) => {
    const uuid = (0, uuid_1.v4)();
    const uniqueString = (0, uuid_1.v4)();
    const salt = await (0, bcrypt_1.genSalt)();
    const hashedVerificationCode = await (0, bcrypt_1.hash)(uniqueString, salt);
    const hashedPassword = await (0, bcrypt_1.hash)(password, salt);
    const createUser = await prisma.user.create({
        data: {
            id: uuid,
            email: email,
            password: hashedPassword,
            verified: false,
            verificationCode: hashedVerificationCode,
        },
    });
    (0, sendVerificationEmail_1.sendVerificationEmail)(uuid, email, uniqueString);
    return createUser;
};
exports.createUserRepo = createUserRepo;
