"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrdersFromACustomTimestampController = exports.getAllOrdersFromAClientController = exports.getSingleOrderController = void 0;
const getOrderRepo_1 = require("../../repositories/Order/getOrderRepo");
const getSingleOrderController = async (req, res) => {
    const { id } = req.params;
    const getSingleOrder = await (0, getOrderRepo_1.getSingleOrderRepo)(id);
    res.status(200).send({
        getSingleOrder,
    });
};
exports.getSingleOrderController = getSingleOrderController;
const getAllOrdersFromAClientController = async (req, res) => {
    const { clientId } = req.query;
    const getAllOrdersFromAClient = await (0, getOrderRepo_1.getAllOrdersFromAClientRepo)(clientId);
    res.status(200).send({
        getAllOrdersFromAClient,
    });
};
exports.getAllOrdersFromAClientController = getAllOrdersFromAClientController;
const getAllOrdersFromACustomTimestampController = async (req, res) => {
    const { initialTime, finalTime } = req.query;
    const getAllOrdersFromACustomTimestamp = await (0, getOrderRepo_1.getAllOrdersFromACustomTimestampRepo)(initialTime, finalTime);
    res.status(200).send({
        getAllOrdersFromACustomTimestamp,
    });
};
exports.getAllOrdersFromACustomTimestampController = getAllOrdersFromACustomTimestampController;
