"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientController = void 0;
const getClientRepo_1 = require("../../repositories/Client/getClientRepo");
const getClientController = async (req, res) => {
    const { id } = req.params;
    try {
        const getClient = await (0, getClientRepo_1.getClientRepo)(id);
        res.status(200).send({
            getClient,
        });
    }
    catch (error) {
        res.status(error.statusCode || 500).send({
            error: error,
        });
    }
    ;
};
exports.getClientController = getClientController;
