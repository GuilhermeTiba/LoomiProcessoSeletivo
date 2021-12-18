"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientController = void 0;
const createClientRepo_1 = require("../../repositories/Client/createClientRepo");
const createClientController = async (req, res) => {
    const { name, email, phone, address } = req.body;
    const createClient = await (0, createClientRepo_1.createClientRepo)(name, email, phone, address);
    res.status(200).send({
        createClient
    });
};
exports.createClientController = createClientController;
