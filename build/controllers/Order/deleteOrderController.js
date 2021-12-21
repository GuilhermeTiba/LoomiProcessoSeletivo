"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderController = void 0;
const deleteOrderRepo_1 = require("../../repositories/Order/deleteOrderRepo");
const deleteOrderController = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteOrder = await (0, deleteOrderRepo_1.deleteOrderRepo)(id);
        res.status(200).send({
            deleteOrder,
        });
    }
    catch (error) {
        res.status(error.statusCode || 500).send({
            error: error,
        });
    }
    ;
};
exports.deleteOrderController = deleteOrderController;
