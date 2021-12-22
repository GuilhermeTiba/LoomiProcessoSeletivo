"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfUserIsVerified = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const checkIfUserIsVerified = async (req, res, next) => {
    const { email } = req.body;
    try {
        const findUser = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        if (findUser.verified) {
            res.status(200);
            return next();
        }
        else {
            res.status(405);
            return {
                error: 'Forbidden',
            };
        }
        ;
    }
    catch (error) {
        res.status(error.statusCode || 500).send({
            error: error,
        });
    }
    ;
};
exports.checkIfUserIsVerified = checkIfUserIsVerified;
