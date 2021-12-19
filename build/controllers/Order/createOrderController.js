"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderController = void 0;
const createOrderRepo_1 = require("../../repositories/Order/createOrderRepo");
const createOrderController = async (req, res) => {
    const { clientId, product_list } = req.body;
    const createOrder = await (0, createOrderRepo_1.createOrderRepo)(clientId, product_list);
    res.status(200).send({
        createOrder,
    });
};
exports.createOrderController = createOrderController;
