"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClientController = void 0;
const updateClientRepo_1 = require("../../repositories/Client/updateClientRepo");
const updateClientController = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, address } = req.body;
    const updateClient = await (0, updateClientRepo_1.updateClientRepo)(id, name, email, phone, address);
    res.status(200).send({
        updateClient
    });
};
exports.updateClientController = updateClientController;
