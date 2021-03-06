"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClientController = void 0;
const deleteClientRepo_1 = require("../../repositories/Client/deleteClientRepo");
const deleteClientController = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteClient = await (0, deleteClientRepo_1.deleteClientRepo)(id);
        res.status(200).send({
            deleteClient,
        });
    }
    catch (error) {
        res.status(error.statusCode || 500).send({
            error: error,
        });
    }
    ;
};
exports.deleteClientController = deleteClientController;
