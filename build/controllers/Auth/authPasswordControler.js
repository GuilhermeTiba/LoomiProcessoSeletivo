"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authPasswordController = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = require("bcrypt");
const generateAccessToken_1 = require("../../configs/token/generateAccessToken");
const prisma = new client_1.PrismaClient();
const authPasswordController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const findUserPassword = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (await (0, bcrypt_1.compare)(password, findUserPassword.password)) {
            const accessToken = (0, generateAccessToken_1.generateAccessToken)({ email });
            res.status(200).send({
                accessToken,
            });
        }
        else {
            res.status(405).send({
                error: 'Not Allowed',
            });
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
exports.authPasswordController = authPasswordController;
