"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderController = void 0;
const updateOrderRepo_1 = require("../../repositories/Order/updateOrderRepo");
const updateOrderController = async (req, res) => {
    const { id } = req.params;
    const { clientId, product_list, status } = req.body;
    const updateOrder = await (0, updateOrderRepo_1.updateOrderRepo)(id, clientId, product_list, status);
    res.status(200).send({
        updateOrder,
    });
};
exports.updateOrderController = updateOrderController;
