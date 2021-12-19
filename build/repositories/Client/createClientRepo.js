"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientRepo = void 0;
const client_1 = require("@prisma/client");
const uuid_1 = require("uuid");
const prisma = new client_1.PrismaClient();
const createClientRepo = async (name, email, phone, address) => {
    const uuid = (0, uuid_1.v4)();
    const createClient = await prisma.client.create({
        data: {
            id: uuid,
            name,
            email,
            phone,
            address,
        },
    });
    return createClient;
};
exports.createClientRepo = createClientRepo;
