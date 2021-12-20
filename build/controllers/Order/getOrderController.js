"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrdersFromACustomTimestampController = exports.getAllOrdersFromAClientController = exports.getSingleOrderController = void 0;
const orderErrorHandler_1 = require("../../errors/orderErrorHandler");
const getOrderRepo_1 = require("../../repositories/Order/getOrderRepo");
const getSingleOrderController = async (req, res) => {
    const { id } = req.params;
    try {
        const getSingleOrder = await (0, getOrderRepo_1.getSingleOrderRepo)(id);
        res.status(200).send({
            getSingleOrder,
        });
    }
    catch (error) {
        res.status(error.statusCode || 500).send({
            error: error,
        });
    }
    ;
};
exports.getSingleOrderController = getSingleOrderController;
const getAllOrdersFromAClientController = async (req, res) => {
    const { clientId } = req.query;
    if (orderErrorHandler_1.checkIfClientIdNotExists) {
        return res.status(404).send({
            error: 'ClientId does not exist'
        });
    }
    try {
        const getAllOrdersFromAClient = await (0, getOrderRepo_1.getAllOrdersFromAClientRepo)(clientId);
        res.status(200).send({
            getAllOrdersFromAClient,
        });
    }
    catch (error) {
        res.status(error.statusCode || 500).send({
            error: error,
        });
    }
    ;
};
exports.getAllOrdersFromAClientController = getAllOrdersFromAClientController;
const getAllOrdersFromACustomTimestampController = async (req, res) => {
    const { initialTime, finalTime } = req.query;
    try {
        const getAllOrdersFromACustomTimestamp = await (0, getOrderRepo_1.getAllOrdersFromACustomTimestampRepo)(initialTime, finalTime);
        res.status(200).send({
            getAllOrdersFromACustomTimestamp,
        });
    }
    catch (error) {
        res.status(error.statusCode || 500).send({
            error: error,
        });
    }
    ;
};
exports.getAllOrdersFromACustomTimestampController = getAllOrdersFromACustomTimestampController;
