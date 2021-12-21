"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderController = void 0;
const productErrorHandler_1 = require("../../errors/productErrorHandler");
const createOrderRepo_1 = require("../../repositories/Order/createOrderRepo");
const createOrderController = async (req, res) => {
    const { clientId, product_list } = req.body;
    const checkProducts = await (0, productErrorHandler_1.checkIfNotAllProductsOnListExists)(product_list);
    if (checkProducts != null) {
        return res.status(400).send({
            error: `Unvalid product Id's: ${checkProducts}`
        });
    }
    ;
    try {
        const createOrder = await (0, createOrderRepo_1.createOrderRepo)(clientId, product_list);
        res.status(200).send({
            createOrder,
        });
    }
    catch (error) {
        res.status(error.statusCode || 500).send({
            error: error,
        });
    }
    ;
};
exports.createOrderController = createOrderController;
