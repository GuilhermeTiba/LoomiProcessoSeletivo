"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderController = void 0;
const productErrorHandler_1 = require("../../errors/productErrorHandler");
const updateOrderRepo_1 = require("../../repositories/Order/updateOrderRepo");
const updateOrderController = async (req, res) => {
    const { id } = req.params;
    const { clientId, product_list, status } = req.body;
    const checkProducts = await (0, productErrorHandler_1.checkIfNotAllProductsOnListExists)(product_list);
    if (checkProducts != null) {
        return res.status(400).send({
            error: `Unvalid product Id's: ${checkProducts}`
        });
    }
    ;
    try {
        const updateOrder = await (0, updateOrderRepo_1.updateOrderRepo)(id, clientId, product_list, status);
        res.status(200).send({
            updateOrder,
        });
    }
    catch (error) {
        res.status(error.statusCode || 500).send({
            error: error,
        });
    }
    ;
};
exports.updateOrderController = updateOrderController;
