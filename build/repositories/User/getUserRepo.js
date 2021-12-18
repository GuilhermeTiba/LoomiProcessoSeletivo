"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersWithSameEmailProviderRepo = exports.getSingleUserRepo = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getSingleUserRepo = async (IdOrEmail) => {
    const getSingleUserById = await prisma.user.findUnique({
        where: {
            id: IdOrEmail,
        },
    });
    if (getSingleUserById) {
        return getSingleUserById;
    }
    ;
    const getSingleUserByEmail = await prisma.user.findUnique({
        where: {
            email: IdOrEmail,
        },
    });
    if (getSingleUserByEmail) {
        return getSingleUserByEmail;
    }
    else {
        return null;
    }
    ;
};
exports.getSingleUserRepo = getSingleUserRepo;
const getUsersWithSameEmailProviderRepo = async (emailProvider) => {
    const dotComEmailProvider = `${emailProvider}.com`;
    const usersWithSameEmailProvider = await prisma.user.findMany({
        where: {
            email: {
                endsWith: dotComEmailProvider,
            },
        },
    });
    if (usersWithSameEmailProvider.length > 0) {
        return usersWithSameEmailProvider;
    }
    else {
        return null;
    }
};
exports.getUsersWithSameEmailProviderRepo = getUsersWithSameEmailProviderRepo;
