"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
const createUserRepo_1 = require("../../repositories/User/createUserRepo");
const createUserController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const createUser = await (0, createUserRepo_1.createUserRepo)(email, password);
        res.status(200).send({
            createUser,
        });
    }
    catch (error) {
        res.status(error.statusCode || 500).send({
            error: error,
        });
    }
    ;
};
exports.createUserController = createUserController;
